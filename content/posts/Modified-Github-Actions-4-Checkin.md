---
title: 照葫芦画瓢 · 编写 Actions 打卡工作流
date: 2020-06-30
published: true
slug: Modified-Github-Actions-4-HEU-Checkin
cat: tech
tags: ['GitHub Actions', '定时任务', 'webdrivers']
cover_image: "./images/github-actions-checkin.png"
canonical_url: "https://blog.monsterx.cn/tech/modified-github-actions-4-heu-checkin/"
description: "赶在上半年的最后半小时发布了 6 月唯一一篇更新：利用 GitHub Actions 定时执行 Python / Ruby 打卡代码。"
---

昨天逛博客看到了使用 GitHub Actions 定时调用 Microsoft 365 E5 API 以帮助续订的文章，我转念一想这是不是也可以用来跑定时任务打卡呢？说干就干我开了一个小的坑：用 GitHub Actions 跑之前写的 Python 打卡脚本。无意薅羊毛，只是希望通过一点学习将自己的想法实现。

## 照葫芦环节

参考项目 [@wangziyingwen/AutoApiSecret](https://github.com/wangziyingwen/AutoApiSecret) 的 [autoapi.yml](https://github.com/wangziyingwen/AutoApiSecret/blob/master/.github/workflows/autoapi.yml)，搞懂了这一流程：

1. 将私密信息存于仓库 Secrets，以 `name=value` 的赋值语句格式定义
2. 将 Secrets 内容写入脚本复制来的临时文件
3. 执行填入了 Serects 的临时文件
4. 删除所有临时文件并提交历史记录

「定时」这一特性是 GitHub Actions 提供的，在触发条件中定义 `on.schedule.cron` 即可！呐噜吼多！将 Secrets 写入文件是通过 Linux 命令 `sed` 实现的，比如使用 `sed -i '10 r tmp.txt' tmp.py` 可以将 `tmp.txt` 的内容写入了 `tmp.py` 的指定行 `10` 的下一行。对 Linux 命令的认知水平停留在 `rm -rf` 的我大吃一惊，呀，又学到了新知识！

## 画瓢环节

此刻，白嫖是第一生产力。了解了这样的流程部署自己的自动打卡（让 GitHub 定时执行 `python checkin.py`）就不是什么难事了。


<details><summary><strong>照葫芦画瓢 python.yml 第一版</strong></summary><br />


```yaml
name: Auto Checkin

on: 
  release:
    types: [published]
  # Coordinated Universal Time (UTC)
  schedule:
    - cron: '0 0 * * *'           # 定时任务实现方式
  watch:
    types: [started]

jobs:
  build:
    runs-on: ubuntu-latest
    if: github.event.repository.owner.id == github.event.sender.id  # 仅自己点的 star 触发
    steps:
      - name: Checkout
        uses: actions/checkout@master

      - name: Python Setup
        uses: actions/setup-python@v1
        with:
          python-version: 3.8

      - name: Pip Cache             # 按照官方仓库 @actions/cache 添加
        uses: actions/cache@v2
        with:
          path: ~/.cache/pip        # Ubuntu 的缓存位置，不同系统不同位置需要修改
          key: ${{ runner.os }}-pip-${{ hashFiles('**/requirements.txt') }}
          restore-keys: ${{ runner.os }}-pip-
      
      - name: Addons Install        # 安装脚本必须组件 lxml requests
        run: pip install lxml requests
      
      - name: Secrets Get           # 获取 Secrets
        env: 
          SECRET_ID: ${{ secrets.SECRET_ID }}
          SECRET_PASS: ${{ secrets.SECRET_PASS }}
          SECRET_BOUND: ${{ secrets.SECRET_BOUND }}
          SECRET_DATA: ${{ secrets.SECRET_DATA }}
        # 先复制一个临时文件，然后写入 Secrets 到文本，再将其写入临时脚本文件指定行
        run: | 
          cp checkin.py action.py
          echo $SECRET_ID > action-id.txt
          echo $SECRET_PASS > action-pass.txt
          echo $SECRET_BOUND > action-bound.txt
          echo $SECRET_DATA > action-data.txt
          sed -i '19 r action-id.txt' action.py
          sed -i '20 r action-pass.txt' action.py
          sed -i '21 r action-bound.txt' action.py
          sed -i '22 r action-data.txt' action.py
      
      - name: Checkin Action
        env:
          TZ: Asia/Shanghai         # 设定时区为北京时间
        # 工作流过程中新建 log 文件夹存放待会发布到另外一个分支的内容
        run: | 
          mkdir log
          echo `date +"%Y-%m-%d %H:%M:%S %A"` >> log/time.log
          python action.py >> log/time.log
      
      - name: Secrets Delete        # 删除临时文件
        run: rm -f action*
      
      - name: Deploy Log            # 发布 log 文件夹下的记录文件到 log 分支
        uses: docker://peaceiris/gh-pages:v2
        env:
          TZ: Asia/Shanghai
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          PUBLISH_BRANCH: log
          PUBLISH_DIR: ./log
        with:
          emptyCommits: false
```


</details><br />


第一版的工作流程看起来有点臃肿，不过管他呢，能用。

## 润色

写完第一份工作流文件之后，我开心地将文件提交到了 GitHub 仓库，又煞有介事地写了份文档。但是坐下来反复看自己的代码之后，我越发觉得这过于粗糙。在博客的文章收到了大佬的指导，于是我有了新的思路并开始不断地给自己的代码「润色」。

### Round 1

简单地实现定时任务似乎并不值得记录，于是我顺便给这个工作流引入了 pip 模块缓存、发布日志文件到分支这两个小功能，算是补上了之前折腾工作流学到的。

 - **pip 模块缓存**

   这是从苏卡大大《[将 Hexo 部署到 Cloudflare Workers Site 上的趟坑记录 - Sukka's Blog](https://blog.skk.moe/post/deploy-blog-to-cf-workers-site)》中学到的。Node.js 项目构建时需要的依赖挺多，没有缓存的话每次 GitHub Action 得跑很长分钟，于是他给出了缓存 node_modules 的办法： `uses: actions/cache@v2` ，通过检查缓存特征 Key 是否存在，比如 Node.js 就检测是否存在 `package-lock.json` 文件，进而处理缓存。

   GitHub Actions 使用这一特性其实很简单，只要按照 [@actions/cache](https://github.com/actions/cache) 中需要缓存的类型确定好监测的特定路径和文件，编写类似上方 L26-31 的步骤在安装依赖前即可。之前尝试是能将用于构建并发布站点的 2 mins 工作流优化到 1 min 多，提升还是蛮大的。

   在这个项目中缓存 pip 模块需要做的就是照葫芦画瓢检查 `~/.cache/pip` 目录下 `requirements.txt` 文件。

 - **发布 log 记录文件到分支**

   这是从 Typecho-Theme-VOID 二次开发过程中学到的。它的 Actions 将编译好的文件存放在 build 文件夹然后发布到 nightly 分支。仅需在 workflows 中给 `uses: docker://peaceiris/gh-pages:v2` 添加两个环境变量 `PUBLISH_BRANCH` 和 `PUBLISH_DIR` 即可，v3 版本这一配置从 `env` 改为了 `with` 字段，具体可以看 [@peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)。

 - **邮件**

   启用 GitHub Actions 后我将 Python 中的 SMTP 配置删除了，这原本是用来在服务器部署时完成任务后发送提醒的。我想只要开启 GitHub 工作流的运行提醒就好啦，后来意识到虽然 GitHub Actions 自身有邮件提醒，但它提醒的是工作流执行状况，并不能等价于打卡脚本的执行状态。这一点还有待优化。毕竟配置起来如果像上面一样一条一条添加 Secrets 的话就太繁琐了。

### Round 2

也许看官早就想说了：为什么引用 Secrets 而已，又是设置环境变量、又是将环境变量 `echo` 到 `.txt` 文件、又是将 `.txt` `sed` 写入 `.py` 的，不能简单点吗？确实，在朋友 [@XYenon](https://xyenon.bid) 的指导下我得知 Python 可以通过 `os.environ` 读取环境变量，所以简单的办法来了，将 Python 脚本中原来的赋值改写成下面的格式直接读环境变量

```python
import os

myid = os.environ ['SECRET_ID']
```

直接读入环境变量 `SECRET_ID` 的值并赋给 `myid` 。如此一来，上面 Secrets Get、Checkin Action、Secrets Delete 三步合并为一步：

```yaml
- name: Action Execute
  env:
    TZ: Asia/Shanghai
    SECRET_ID: ${{ secrets.SECRET_ID }}
    SECRET_PASS: ${{ secrets.SECRET_PASS }}
    SECRET_BOUND: ${{ secrets.SECRET_BOUND }}
    SECRET_DATA: ${{ secrets.SECRET_DATA }}
  run: python checkin.py | tee -a checkin-python.log
```

心情顿时舒畅了不少！

### Round 3

上次那篇关于调试 Python 打卡的《[Mark 并调试 HEU 自动打卡代码](https://blog.monsterx.cn/code/heu-auto-checkin-covid19/)》下 [@XYenon](https://xyenon.bid) 给出了仅需用户名和密码的 Ruby 版本 [@XYenon/checkin.rb](https://gist.github.com/XYenon/79317d63e7f769e5bdff5b595d709b65)。

代码仅 60 行，第一次看完我觉得很赞，看起来只要脚本代替人执行「确认信息 -> 提交表单」两步就完事了。现有的 Python 打卡每次都将事先定义的表单数据提交一遍，不考虑打卡系统中表单在服务器的缓存。如果表单数据在服务器上一直都有缓存，那部署这个 Ruby 版本我觉得似乎会更好，毕竟仓库里可以少写两个 Secrets。

> 与 Python 类似，Ruby 也可以在代码中使用 `ENV['SECRET_ID']` 这样的语句直接获取环境变量。

实际调试的时候，我发现这看起来简单的代码部署起来也不容易…… Ruby 使用 webdrivers 库来在终端驱动一个 headless Chrome 浏览器，然后执行动作。抛开因为不熟悉 Ruby + webdrivers 这套环境使我在 GitHub Actions 工作流写法上花的时间，这个脚本跑起来效率也比较低，Python 直白地提交表单整个工作流程需要 30 秒左右，而 Ruby 模拟 Chrome 操作花了三分钟多。是为了更快的 workflow 选择 Python 打卡呢？还是为了更快的部署选择 Ruby 打卡呢？

经过多方搜索我使用了这样的 GitHub Actions 环境跑 Ruby + Watir + webdrivers 代码，不知道有没有更好的方式，贴在这里供大家参考：

```yaml
jobs:
  build:
    runs-on: ubuntu-latest
    # 运行 headless chrome 的服务
    services:
      hub:
        image: selenium/hub:3.141.59-gold
        env:
          SELENIUM_HUB_HOST: localhost
      chrome:
        image: selenium/node-chrome:3.141.59-gold
        env:
          HUB_HOST: localhost
          HUB_PORT: 9515
    
    if: github.event.repository.owner.id == github.event.sender.id
    steps:
      - name: Checkout
        uses: actions/checkout@master
      
      - name: Ruby Setup
        uses: actions/setup-ruby@v1
        with:
          ruby-version: 2.5.x
      
      - name: Addons Install
        run: gem install watir webdrivers
      
      - name: Action Execute
        env:
          TZ: Asia/Shanghai
          LANG: zh_CN.UTF-8
          SECRET_ID: ${{ secrets.SECRET_ID }}
          SECRET_PASS: ${{ secrets.SECRET_PASS }}
        run: ruby checkin.rb | tee -a checkin-ruby.log
```

> 也许 Ruby 版本的打卡程序更适合写成 JavaScript 用户脚本交给浏览器插件执行。

## 结语

GitHub 仓库地址 [@monsterxcn/HEU-Checkin-COVID-19](https://github.com/monsterxcn/HEU-Checkin-COVID-19)。

我原以为在 GitHub Actions 中实现定时任务要很复杂的配置，毕竟每次工作流都是相当于在一个全新的服务器上执行。现在发现原来定时任务只需要在工作流的触发事件中写入 `schedule` 即可。在查找文档时我发现这点在官方文档中有详细说明，害，都是不会看文档惹的祸。

榆木脑袋的我在看到别人的代码之前总是从没想过可以这样实现。比如：将私密信息以赋值语句形式写入仓库设置，执行 GitHub Actions 时将赋值语句插进文件头部继续执行。甚是高明（虽然到后面我发现这也挺笨的）。剖析了我的不足之处，浅层来看最重要的两点估计就是：

 - 我对仓库 Secrets 设置的认识是死板的，我一直将其当作 GitHub Actions 执行时传递普通变量值的纽带，仅此而已
 - 不熟悉 Linux命令，虽然日常 Copy 到命令行的 Linux 命令中也有用到过 `sed`，但我并没有积极的学习

深层次的原因嘛，大概是怠惰吧！

GitHub Actions 妙用多多，之前关注过一个博客 [@P3TERX ZONE](https://p3terx.com/) 里写了挺多关于 GitHub Actions 的文章，有时间的话要去学习学习！