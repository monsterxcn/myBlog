---
title: 从零开始的追番生活
date: 2020-07-28
published: true
slug: Auto-Download-Bangumi-with-Aria2
cat: tech
tags: ['aria', 'flexget', 'RSS']
cover_image: "./images/aria-rss-bangumi.png"
canonical_url: false
description: "使用 Flexget 实现服务器 Aria2 RSS 订阅，自动下载番剧到 OneDrive，在本地通过 Windows OneDrive 文件夹同步实现追番“自动化”流程"
---

最近觉得为了偶尔看看电影动漫而续费腾讯视频会员太吃亏了，一个月四集的《斗罗大陆》水得不行啊喂！哔哩哔哩大会员也是如此，有的时候我在这头，想看的番剧在那头，每次都要科学上网才能解锁，属实费劲。

想了想自己闲置的服务器和最近开通的 Microsoft 365 E5 开发者订阅，我决定自己动手，部署一套更省钱的追番流程。最初是这样一套笨笨的追番流程：「bangumi.moe 等种子站找资源 -> 服务器 Aria2 下载 -> Rclone + Aria2 联动将内容转移到云盘 -> 云盘网页下载」。但是这样一来科学上网工具的流量开销比较大，而且也完全称不上自动。后来我发现 Windows 系统打开 OneDrive 文件夹同步就可以免去手动登录网页下载，于是我从之前的 Google Drive 迁移到 OneDrive，这样一来流程的后两步就合并了。如何让前两步合并呢?一番搜索之后我找到了 Flexget 这个 Python 编写的工具，众多插件使得 Flexget 在 RSS 订阅下载上大放异彩。本文便记录这一部署过程。

## Rclone

Rclone 用于网盘挂载，从 [官方](https://rclone.org/downloads/) 下载安装，按照命令行提示输入后得到配置文件 rclone.conf（后续使用），路径一般为 `~/.config/rclone/rclone.conf` 。

注意使用自己的 Secret ID & Key，据说能极大的提高文件传输速率。公用的 API 想想就知道肯定比不过自建。参考文档 [GoogleDrive: Making your own client_id](https://rclone.org/drive/#making-your-own-client-id) 和 [OneDrive: Getting your own Client ID and Key](https://rclone.org/onedrive/#getting-your-own-client-id-and-key) 创建即可。

Rclone 挂载 OneDrive 时需要在运行图形界面的系统上完成。Linux 服务器由于一般不带图形界面，所以需要配合本地机器：在 Windows 中下载 Rclone 相应版本文件，Power Shell 进入解压后的文件夹中键入下面命令后复制 `Paste the following into your remote machine --->` 和 `<---End paste` 之间的 `SECRET_TOKEN` 到远程服务器命令行中。

```shell
.\rclone authorize "onedrive" "Client_ID" "Client_secret"
```

OneDrive 更详细挂载过程可参考文章《[Rclone 进阶使用教程 - 自建私有 API 挂载 OneDrive - P3TERX](https://p3terx.com/archives/rclone-connect-onedrive-with-selfbuilt-api.html)》。**后面均使用 OneDrive 部署**

## Aria2

Aria2 是一个强大的下载工具，这里使用 Docker 部署 Aria2 后端服务和 AriaNG 前端页面。参考文章《[Aria2 Pro - 更好用的 Aria2 Docker 容器镜像 - P3TERX](https://p3terx.com/archives/docker-aria2-pro.html)》。

```bash
# 建立 Docker 映射文件夹
mkdir /data /data/ariapro /data/ariapro/config /data/ariapro/downloads

# 复制 Rclone 配置文件
cp ~/.config/rclone/rclone.conf /data/ariapro/config/rclone.conf

# 部署 p3terx/aria2-pro 镜像
# 修改 <TOKEN> 为自定字符串
# 若支持 IPv6 则开启 IPV6_MODE=enable 否则需要关闭
docker run -d \
  --name ariapro \
  --restart unless-stopped \
  --log-opt max-size=1m \
  --network host \
  -e PUID=$UID \
  -e PGID=$GID \
  -e RPC_SECRET=<TOKEN> \
  -e RPC_PORT=6800 \
  -e LISTEN_PORT=6888 \
  -e IPV6_MODE=enable \
  -e SPECIAL_MODE=rclone \
  -v /data/ariapro/config:/config \
  -v /data/ariapro/downloads:/downloads \
  p3terx/aria2-pro

# 部署 p3terx/ariang 镜像
docker run -d \
  --name ariang \
  --restart unless-stopped \
  --log-opt max-size=1m \
  -p 6880:6880 \
  p3terx/ariang

# 配置 rclone 自动上传
# 根据实际修改网盘名称 drive-name 和网盘路径 drive-dir
nano /data/ariapro/config/script.conf
# 修改下载完成后执行的命令 on-download-complete 为 /root/.aria2c/upload.sh
nano /data/ariapro/config/aria2.conf

# 重启 Aria2 容器
docker restart ariapro
```

## Nginx

由于使用 IP 登录不太方便，所以继续部署 Nginx 服务反向代理 RPC 端口、绑定自己的域名。简便起见，直接使用 Ubuntu 仓库中的 nginx 包。如果服务器中已安装 Nginx，则直接新建配置文件。

```bash
apt install -y nginx
```

安装好后 Nginx 配置文件位于 `/etc/nginx`，于 `/etc/nginx/conf.d` 文件夹下新建 `.conf` 文件。


<details><summary><s>Nginx 配置文件</s></summary><br />


```conf
server {
  listen [::]:80;                       # 若支持 IPv6 则启用
  listen 80;
  listen [::]:443 ssl http2;            # 若支持 IPv6 则启用
  listen 443 ssl http2;
  ssl_certificate /path/to/.crt;        # .crt 证书文件路径
  ssl_certificate_key /path/to/.key;    # .key 证书文件路径
  ssl_protocols TLSv1 TLSv1.1 TLSv1.2 TLSv1.3;
  ssl_ciphers TLS13-AES-256-GCM-SHA384:TLS13-CHACHA20-POLY1305-SHA256:TLS13-AES-128-GCM-SHA256:TLS13-AES-128-CCM-8-SHA256:TLS13-AES-128-CCM-SHA256:EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5;
  ssl_prefer_server_ciphers on;
  ssl_session_timeout 10m;
  ssl_session_cache builtin:1000 shared:SSL:10m;
  ssl_buffer_size 1400;
  add_header Strict-Transport-Security max-age=15768000;
  server_name www.example.com;          # 域名
  access_log off;
  if ($ssl_protocol = "") { return 301 https://$host$request_uri; }
  
  location / {
    proxy_redirect off;
    proxy_pass http://localhost:6880;     # 修改为 ariang 端口
    proxy_set_header  Host                $http_host;
    proxy_set_header  X-Real-IP           $remote_addr;
    proxy_set_header  X-Forwarded-Ssl     on;
    proxy_set_header  X-Forwarded-For     $proxy_add_x_forwarded_for;
    proxy_set_header  X-Forwarded-Proto   $scheme;
    proxy_set_header  X-Frame-Options     SAMEORIGIN;
    client_max_body_size        100m;
    client_body_buffer_size     128k;
    proxy_buffer_size           4k;
    proxy_buffers               4 32k;
    proxy_busy_buffers_size     64k;
    proxy_temp_file_write_size  64k;
  }
  location ^~ /jsonrpc {
    proxy_http_version 1.1;
    add_header Front-End-Https on;
    proxy_set_header Connection "";
    proxy_set_header Host $http_host;
    proxy_set_header X-NginX-Proxy true;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    # 修改为 p3terx/aria2-pro 容器 RPC_PORT
    proxy_pass http://localhost:6800/jsonrpc;
    proxy_pass_header X-Transmission-Session-Id;
  }
  # 多个 aria2 后端示例
  # location ^~ /googlejsonrpc {                # 修改
  #   proxy_http_version 1.1;
  #   add_header Front-End-Https on;
  #   proxy_set_header Connection "";
  #   proxy_set_header Host $http_host;
  #   proxy_set_header X-NginX-Proxy true;
  #   proxy_set_header X-Real-IP $remote_addr;
  #   proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  #   proxy_pass http://localhost:6802/jsonrpc; # 修改
  #   proxy_pass_header X-Transmission-Session-Id;
  # }
}
```


</details><br />


修改上方例子中的域名、端口即可。多个 Aria2 RPC 端口时可以参考注释掉的部分。最后重启 Nginx。

```bash
service nginx restart
# nginx -s reload
```

## RSS

部署 flexget 之前当然是先找支持 RSS 订阅的站点！目前我个人觉得萌番组的体验还不错！[萌番组官网](https://bangumi.moe) / [萌番组 Lite 版官网](https://bangumi.moe/lite) / [萌番组 Material Design 版](https://bgm.ptr.moe)。点击搜索图标添加 Tags 搜索后 RSS 图标链接地址即为可用订阅地址，切换标题搜索同理。

比如 添加标签 `Lilith-Raws` `租借女友` `1080p` 和 搜索标题 “Lilith 賢者時間 1080p” 分别可以得到这两种 RSS 订阅地址：

```
https://bangumi.moe/rss/tags/5d8b3245306f1a0007bd7aca+548ee2ce4ab7379536f56358+5efffb4f3d656e43622cacc9
https://bangumi.moe/rss/search/Lilith%20%E8%B3%A2%E8%80%85%E6%99%82%E9%96%93%201080p
```

除了 bangumi.moe 之外还有很多平台，部分资源相同，罗列一些包括但不限于二次元的资源站：

 - BT RSS 订阅
   + [動漫花園資源網](https://share.dmhy.org) 动漫、日剧、游戏、特摄等
   + [ACG.RIP](https://acg.rip) 动画、日剧、综艺、音乐等
   + [旋风动漫分享站](https://bt.xfsub.org) 漫画！
   + [Nyaa](https://nyaa.si) 侧重于东亚（中日韩）多媒体资源，被日本政府确定为主要的数字盗版网站
   + [YIFY](https://yts.mx) 以 BitTorrent 分发大量免费下载的电影而闻名，国内很多电影资源源头
   + [EZTV](https://eztv.io) 国外电视节目等，“TV Torrents Online Series Download”
   + [The Pirate Bay 10](https://thepiratebay10.org/) 据称是“the galaxy's most resilient BitTorrent site”
   + [MAG 磁力站](http://f.cili001.com/home.html) 侧重影视剧集，可以搜人人影视专用链接
 - 字幕
   + [VCB-S 分享论坛](https://bbs.vcb-s.com/forum-37-1.html) ACG 字幕分享
   + [SubHD.tv](https://subhd.tv/) 资源+字幕站，找字幕体验非常好
   + [字幕天堂](http://www.zmtiantang.cc)
 - 漫画
   + [Animex 动漫社](http://www.animetox.com) 最近找进击的巨人漫画发现的
   + [Māngabz](http://mangabz.com) 在线漫画阅读
   + [动漫之家](https://www.dmzj.com)
   + [木马漫画](https://www.omyschool.com)

## Flexget

以上部分搭建了基础的下载环境，接下来利用 Flexget 实现 aria2 的 RSS 订阅下载。

> FlexGet is a multipurpose automation tool for all of your media <br />
> Support for torrents, nzbs, podcasts, comics, TV, movies, RSS, HTML, CSV, and more. <br />
> [Official website](https://flexget.com/)

由于是 Python 编写，需要先安装 python3 pip3 包。

```bash
apt install python3 python3-pip
pip3 install --upgrade pip setuptools
pip3 install flexget
```

安装完成后新建 Flexget 配置文件夹并编写 Flexget 配置文件。

```bash
mkdir -p ~/.config/flexget
nano ~/.config/flexget/config.yml
```


<details><summary><s>Flexget 配置文件</s></summary><br />


```yaml
schedules:
  - tasks: "*"
    schedule:
      hour: "*/2"

tasks:
  KanojoOkarishimasu:
    rss: https://bangumi.moe/rss/tags/5d8b3245306f1a0007bd7aca+548ee2ce4ab7379536f56358+5efffb4f3d656e43622cacc9
    accept_all: yes
    aria2:
      server: localhost
      port: 6800
      secret: <TOKEN>
      path: /租借女友/
  YahariOrenoSeishunLovecomewaMachigatteIruKan:
    rss: https://bangumi.moe/rss/tags/5d8b3245306f1a0007bd7aca+548ee2ce4ab7379536f56358+5e822875657e22f4195cc78c
    accept_all: yes
    aria2:
      server: localhost
      port: 6800
      secret: <TOKEN>
      path: /我的青春恋爱物语果然有问题.完/
  DouLuoDaLu:
    rss: https://bangumi.moe/rss/search/GM-Team%20%E6%96%97%E7%BD%97%E5%A4%A7%E9%99%86%201080p
    accept_all: yes
    aria2:
      server: localhost
      port: 6800
      secret: <TOKEN>
      path: /斗罗大陆/
  Japan4KAnimeYTSMX:
    rss: https://yts.mx/rss/0/2160p/animation/0/ja
    accept_all: yes
    aria2:
      server: localhost
      port: 6800
      secret: <TOKEN>
      path: /YTS.MX.Japan4KAnime/
```


</details><br />


注意修改 Aria2 后端端口和 Secret。保存后手动运行测试一次，选一种模式设置定时任务，查看状态。

```bash
flexget --test execute

flexget status

# Daemon 模式定时任务
#  -d                     后台运行
#  --autoreload-config    执行前重新载入配置文件
@reboot /usr/local/bin/flexget daemon start -d --autoreload-config

# Crontab 模式定时任务
# 删掉前面配置文件中的 scheduler 块配置
# 使用偏好的编辑器进入，添加一行
crontab -e
*/30 * * * * /usr/local/bin/flexget --cron execute
```

关于定时任务，上方示例中开头 L1-4 的配置使用了 scheduler 插件，只有在 Daemon 模式下才可用。使用 crontab 定时任务不需要该配置。

## Local

最后一步，在本地登录 OneDrive 账号设置同步文件夹。右键将本地文件夹标记为“始终在此设备上保留”即可，当云端存入新的文件时本地就会自动下载同步。删除本地文件夹时，默认会将 OneDrive 云端文件一同删除，只删除本地需要右键选择“释放空间”。

白嫖的开发者订阅 OneDrive 服务器位于境外，从服务器 Rclone 上传文件速度很好，但是有人说本地下载速度太慢，这无法避免。如果使用世纪互联版 OneDrive 本地下载速度肯定会好很多，但服务器上传想必会慢些，自行权衡吧。我使用几周以来尚且满意，睡一觉起来想要看的东西就会自己出现在那里，宅の生活质量提升了，人也变得精神了呢！

## End

关于部署上面流程的服务器强烈推荐使用国外的，国内的服务器网络带宽、Docker 部署、BT 下载环境一言难尽。我用的是 Digital Ocean 新加坡服务器，体验良好。如果就看看新番、一集一集下硬盘需求不是很高，20-40GB 应该就可以了，要拿来正儿八经下东西硬盘还得越大越好的，这几天下的紫罗兰 4K 版全集就有 43GB 了。本想着部署“省钱”的追番流程，结果下载服务器一个月就花了几十刀，害，钱还是得花！

另外安利一个微软收购的文件转移工具：[Mover](https://mover.io/) 安全、强大、快速的文件转移工具，Microsoft 365 用户福音，可以实现 Box，Dropbox，Google，Amazon，Office 365（原 Microsoft 365） 向 Microsoft 365 转移文件，并且支持定时任务！

 - 现成的 OneDrive 文件：[Anime](https://monstx-my.sharepoint.com/:f:/g/personal/storage_tingle_dev/EkM5OfD1nrZBr_214_JmLtgBNz05mQMNqIEFsZOb9FIMBg?e=EM2tX5) / [Movies](https://monstx-my.sharepoint.com/:f:/g/personal/storage_tingle_dev/EozDcDrM7edEpnZmeL1dDQABZg0xhZNUvnj7IvBlHKM6YA?e=M944ih) / [Series](https://monstx-my.sharepoint.com/:f:/g/personal/storage_tingle_dev/ErcXo0q92thGqrbkpzurmI8BOXwGMJgP0AiwB5lZa_cvuw?e=SM2cWU)
 - 部分境外服务器可能禁止 BT 服务，选购前请仔细阅读用户条例
 - 有条件的话下载完毕后请做种一段时间

&nbsp;

<center><span style="font-size:30px">微软赛高！</span></center>