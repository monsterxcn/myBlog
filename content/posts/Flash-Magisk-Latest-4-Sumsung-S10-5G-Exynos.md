---
title: 猎户座 S10 5G 更新 Android 11 / Magisk / LSPosed 记录
date: 2021-02-03
published: true
slug: Flash-Magisk-Latest-4-Sumsung-S10-5G-Exynos
cate: tech
tags: ['Sumsung', 'Android', 'Magisk']
cover_image: "./images/magisk-sumsung.png"
ogimage: 'https://blog.monsterx.cn/OG/magisk-sumsung.png'
canonical_url: "https://blog.monsterx.cn/tech/flash-magisk-latest-4-sumsung-s10-5g-exynos/"
description: "LSP 就该用 LSPosed！在韩版 Galaxy S10 5G 上使用修补 AP 镜像的方式安装 Magisk 最新版，顺便升级 Android 11 / OneUI 3.0 尝尝鲜。"
---

最近 [@ElderDrivers/EdXposed](https://github.com/ElderDrivers/EdXposed) 的新分支 [@LSPosed/LSPosed](https://github.com/LSPosed/LSPosed) 进入大众视野，听说修复了 EdXposed 随机重启的 Bug。不知道手头的 Sumsung S10 5G (Exynos 9820) 莫名其妙重启是不是相关问题，咱得先试试 LSPosed 才知道。为了在不支持直接升级 Magisk 的《[AuroraROM Sumsung S10E/S10/S10+/5G G97XX-9820 - V17.0 Android-Q-TJA](http://aurorarom.cn/archives/450.html)》上使用 LSPosed，我需要自行集齐 Magisk v21+、Riru v23+。于是折腾了一下三星的刷机，本文介绍自用三星 S10 5G 的 Android 11 升级、Magisk in Recovery 安装、LSPosed 使用等。

Android 11 的升级十分简单，刷最新的官方固件就成了。LSPosed 的安装只要解决了 Magisk 最新版本的需求也是小菜一碟。AuroraROM 不能直接在 Magisk Manager 中升级 Magisk，否则会无法开机，这一项只好自行解决。

Magisk 作者 [@topjohnwu](https://github.com/topjohnwu) 撰写了完整的安装指南在 [这里](https://topjohnwu.github.io/Magisk/install.html)，包含了三星机型和华为机型的说明。以此文为主要参考资料进行尝试（我顺便翻译了一份简体中文的版本放在 [Magisk Install zh_CN - @monsterxcn/myBlog Wiki](https://github.com/monsterxcn/myBlog/wiki/Magisk-Install-zh_CN)。还有一篇 XDA 论坛的参考文章是用来解决 Bootloader 解锁后开机警告信息的，《[\[BOOT\] Remove Boot Warning - All Exynos Devices - After Root - Tutorial - 14th December 2020 - XDA Developers Forums](https://forum.xda-developers.com/t/boot-remove-boot-warning-all-exynos-devices-after-root-tutorial-14th-december-2020.4202627/)》。

> YOU are choosing to make these modifications, and if you point the finger at me for messing up your device, I will laugh at you.

## 准备

**重要的资料务必先备份**，如联系人、短信、相片、下载等。

我手上这台机器是韩版使用猎户座 Exynos 9820 的 Sumsung Galaxy S10 5G，正在使用的 ROM 是 AuroraROM Sumsung G97XX-9820 v17.0，进入 Download 模式后部分输出如下：

```
PRODUCT NAME: SM-G977N
CURRENT BINARY: Custom(0x30e)
KG STATE: Checking
FRP LOCK: OFF
OEM LOCK: OFF(U)
Secure Download: Enabled
CARRIER_ID: KTC
WARRANTY VOID: 1 (0x0400)
RP SWREV: B:4 K:4 S:4
```

> 如果你之前曾刷过 AuroraROM 等定制 ROM，那么一般来说 Bootloader OEM 已处于解锁状态。存在刷入官方固件后锁定状态改变的情况，具体要如何确检查锁定状态，可以将手机关机按住「下载模式组合键」连接电脑进入 Download 模式查看。

请留意设备的各项锁定状态，不过刷回官方固件的话应该都没什么问题。接下来准备此次刷机需要的软件和固件：

 - [Android USB Driver for Windows - Sumsung Developers](https://developer.samsung.com/mobile/android-usb-driver.html)，不要连接手机提前安装三星驱动
 - [Android Debug Bridge](https://developer.android.com/studio/command-line/adb)，参照《[Using ADB and fastboot - Lineage Wiki](https://wiki.lineageos.org/adb_fastboot_guide.html#installing-adb-and-fastboot)》提前安装
 - [Frija](https://forum.xda-developers.com/t/tool-frija-samsung-firmware-downloader-checker.3910594/)，查找并下载官方最新固件包
 - [Sumsung Odin](https://odindownload.com/Samsung-Odin/)，三星专用刷机软件
 - [Magisk Manager APK](https://github.com/topjohnwu/Magisk/releases)（Magisk Manager 与 Magisk 一同发布），修补镜像以安装 Magisk in Recovery
 - [@mcmilk/7-Zip-zstd](https://github.com/mcmilk/7-Zip-zstd)，解压 BL 固件以移除 Bootloader 解锁警告

## 刷入官方固件

在三星设备上安装 Magisk 需要首先 **删除所有启动镜像修改**（boot image mods），由于 AuroraROM 已经预置 Root，所以需要用原厂镜像重新刷机。

这里用 Frija 查找并下载固件。使用 Frija 前需要安装 [Microsoft Visual C++ 2008 Redistributable Package (x86)](https://www.microsoft.com/zh-CN/download/details.aspx?id=29) 和 [Microsoft Visual C++ 2010 Redistributable Package (x86)](https://www.microsoft.com/zh-CN/download/details.aspx?id=5555)。如果下载时卡在「Checking CRC32」可以尝试在 Settings 中关闭 CRC Check，下载完毕后另寻方式校验文件。

```
Model: SM-G977N    CSC: KTC    Method: Auto
Version: G977NKSU4EUA4/G977NOKR4EUA4/G977NKOU4EUA4
Size: 5194 MB
OS: R(Android 11)
Filename: SM-G977N_4_20210120142634_acqegd7bb2_fac.zip.enc4
```

> 如果 Frija 实在无法使用，可以尝试 [@nlscc/samloader](https://github.com/nlscc/samloader)。网站 [SamMobile](https://www.sammobile.com/samsung/galaxy-s10-5g/firmware/#SM-G977N) 和 [SamFw](https://samfw.com/firmware/SM-G977N) 也提供三星固件查找下载服务。

上方用 Frija 查找到的固件 `G977NKSU4EUA4` 为 Android 11 版本，是目前此系列机型的第一个 Android 11 版本推送，暂无国行 ROM 支持；Android 10 的最新固件型号应该为 `G977NKSU4DTJ8`。下面就用 Android 11 的第一份固件尝鲜。

将压缩包解压后得到 `AP` `BL` `CP` `CSC` `HOME_CSC` `USERDATA` 文件。`USERDATA` 不会用到。

将手机关机，按住 `Bixby`+`音量减` 插入数据线将手机连接至电脑，直至手机屏幕亮起松开按键，按一下音量加进入 Download 模式。

打开 Odin 软件，此时应该看到界面中提示「Added!」。接下来点击「AP」「BL」「CP」「CSC」依次选中对应的 `AP` `BL` `CP` `CSC` 文件。保证数据线连接可靠，点击「Start」开始刷入官方固件。

> 如果点击 `AP` 包返回 Odin 后卡住，稍微多等一会就好了，这个包比较大。

![Odin 刷入官方固件](https://rmt.dogedoge.com/fetch/tingle/storage/odin_fac.png?w=985&fmt=webp)

接下来手机会重新启动。由于之前刷 AuroraROM 时已经解锁了 Bootloader，此时开机会弹出警告信息，略过即可，我们后面来干掉它。按 `音量减` `音量加` 键上下移动，依次选择「wipe data/factory reset」和「wipe cache partition」，最后「reboot system now」进入官方固件的系统。

## 官方固件激活设置

紧接着上一步，在几分钟的等待之后进入了系统激活界面。这次激活的设置 **不会影响后续使用**，因为待会刷入 Magisk in Recovery 时所有设置都会被抹除。

从激活至进入系统设置启用开发者选项过程中如果始终未连接到网络，接下来你可能无法看见 OEM 解锁选项。可以在 **无网络激活进入系统后** 连接 WiFi，等待一会再进入开发者选项。OEM 解锁状态为 **打开且灰色不可更改** 时为正常状态，如果为可更改状态，那么可能需要另寻资料解锁 KG 锁（就是将系统时间调前 N 天解锁的那个玩意）。

在设置中启用开发者选项时可以顺手打开开发者选项中的 **USB 调试**，方便后续使用 ADB。

> 我自己使用的方法是在激活时将手机 SIM 卡拔出，连接到笔记本正在使用的同一无线网络，设置 WiFi 使用笔记本上的代理。因为一旦联网，激活时需要连接谷歌和三星服务器验证一些信息。
> 
> 1. 我的笔记本连接到了一个 `TP-LINK_233` 的 WiFi，且本地使用 Clash 在 `7890` 端口全局代理。
> 2. 在 Clash 中打开「Allow LAN」选项，将鼠标放在该选项上可以看见「192.168.0.xxx  LAN」的字样
> 3. 在手机上同样连接 `TP-LINK_233` 的 WiFi，并在「高级设置 - 代理服务器」中填入代理主机名 `192.168.0.xxx` 和代理服务器端口 `7890`。

## 安装 Magaisk in Recovery

将手机连接至电脑，使用 ADB 将预先下载好的 Magisk Manager APK 文件和刚才刷入的官方固件 `AP` 包传输至手机。注意在手机弹出页面中进行 USB 调试授权。

```powershell
PS D:\Tools\platform-tools-r30.0.5> .\adb --version
Version 30.0.5-6877874
PS D:\Tools\platform-tools-r30.0.5> .\adb devices
* daemon not running; starting now at tcp:5037
* daemon started successfully
R3CM50460DD     unauthorized
PS D:\Tools\platform-tools-r30.0.5> .\adb devices
List of devices attached
R3CM50460DD     device

PS D:\Tools\platform-tools-r30.0.5> .\adb push D:\SumsungFirmwarePath\AP_G977NKSU4EUA4_xxxxxxxxxx.tar.md5 /sdcard/Download/
D:\SumsungFirmwarePath\AP_G977NKSU4EUA4_xxxxxxxxxx.tar.md5: 1 file pushed, 0 skipped. 35.3 MB/s (4825702590 bytes in 130.538s)
```

在手机上安装 Magisk Manager，进入应用查看手机信息：

![Magisk Manager 检查手机信息](https://rmt.dogedoge.com/fetch/tingle/storage/magisk-manager.jpg?w=600&fmt=webp)

我正在用的这台三星启动镜像不包含 ramdisk，「SAR」状态为是，所以只能用 Magisk in Recovery 的方式刷入 Magisk。

接下来要手动修补镜像，点击「Magisk」卡片上的「安装」，确保「安装到 Recovery」被勾选，点击下一步「选择并修补一个文件」，选中刚才复制的官方固件 AP 包，等待 Magisk Manager 完成修补。修补后的文件在 `/Download` 文件夹下，将其用 ADB 推送至电脑。

```powershell
PS D:\Tools\platform-tools-r30.0.5> .\adb pull /sdcard/Download/magisk_patched_xxxxx.tar D:\SumsungFirmwarePath\
# [ 71%] /sdcard/Download/magisk_patched_xxxxx.tar
/sdcard/Download/magisk_patched_xxxxx.tar: 1 file pulled, 0 skipped. 43.3 MB/s (4891154944 bytes in 107.623s)
```

将手机关机再次进入 Download 模式，可以看到刷完官方固件后输出发生了一点变化：

```
PRODUCT NAME: SM-G977N
CURRENT BINARY: Sumsung Official   # Custom(0x30e)
KG STATE: Checking
FRP LOCK: OFF
OEM LOCK: OFF(U)
Secure Download: Enabled
CARRIER_ID: KTC
WARRANTY VOID: 1 (0x0400)
RP SWREV: B:4 K:4 S:4
```

打开 Odin 软件，将修补后的 `magisk_patched_xxxxx.tar` 文件作为 `AP` 包与官方固件中的另外 `BL` `CP` `CSC` 三个文件一同再次刷入。注意此处需要在 Odin「Options」中将「Auto Reboot」关闭。

Odin 显示状态为绿色 PASS 后即可关闭 Odin 软件、将手机与电脑断开。

## 进入 Magisk in Recovery

> **下面的操作请多查看几篇文章再操作**。我反复尝试了很多次，但 Magisk Manager 都无法检测到 Magisk 环境，刷入了几个型号的固件也都无法解决。这应该是个极易出现的问题，不必着急，继续操作。

紧接着上一步，我们将刷入修补 `AP` 完毕的手机断开连接，此时手机仍停留在 Download 模式。接下来应该需要一些连贯的操作以进入 Magisk in Recovery。第一步是长按 `电源`+`音量减` 大于 7 秒退出 Download 模式。接下来错误的下一步就可能导致各种问题。

一般来说，这一步应该是长按「恢复模式组合键」（对于 S10 5G 就是 `电源`+`Bixby`+`音量加`）至屏幕闪烁时立即松开所有按键。

如果时机不当或其他原因可能导致 **手机陷入启动循环**，这时要解救手机的方法应该是：在手机黑屏时按住「恢复模式组合键」，屏幕亮起后立即松开 `电源`+`Bixby` 只保留 `音量加`，直至进入真实的 Recovery 模式，然后擦除数据进行一次出厂重置。按下 `电源` 键确认出厂重置后如果没有其它动作，手机可能会再次陷入无限重启，所以理论上应该是需要在确认操作后立即按住「恢复模式组合键」，屏幕再次亮起时松开所有按键。

另一个最常见的问题就是进入系统后检测不到 Magisk（我认为此时 Magisk 应该已经成功安装，只是进入了无 Magisk 的系统）。原因应该就在于进入系统的操作失误。今天花了一整天不断地刷机、修补、重刷、激活，都没有搞明白自己到底是哪里的问题。晚上吃完饭我又尝试了几个小时，在一次重启尝试无果之后，我在 Windows ADB 上连接着 **无 Magisk 的系统** 调试，键入 `.\adb reboot recovery` 试图进入 Recovery 恢复出厂设置，接着手机重启像往常一样显示了 Bootloader 解锁的警告，然后 ~~我按下了电源键确认，~~ 等待了一会，手机成功进入了 Magisk in Recovery。在 Magisk Manager 中我终于看到了「当前 21.4(21400)」的字样。心情平复之后我将手机关机，按照官方说明按下「恢复模式组合键」，手机震动屏幕亮起时松开，手机也能正常进入 Magisk in Recovery。

最终我多次尝试发现：

 - 只要打开 USB 调试，在 Windows 命令行中键入 `.\adb reboot recovery` 并回车，等待手机开机即可，过程中不需要按下任何组合键。
 - 如果没有笔记本可用，也可以先将手机关机，然后按下「恢复模式组合键」，在手机震动屏幕亮起时松开所有按键，等待手机开机即可。

![成功进入 Magisk in Recovery](https://rmt.dogedoge.com/fetch/tingle/storage/Screenshot_20210202-213410.jpg?w=600&fmt=webp)

## 移除 Bootloader 解锁警告

根据本文开头给出的 XDA 论坛 @Dante63 帖子，所有猎户座设备均可移除修改后 Bootloader 解锁的警告信息，方法为修改固件 `BL` 包中的图片再打包重新刷入。

1. 安装 7-Zip Zstandard Edition
2. 在刷机时固件解压后的 `BL` 包上右键使用 7-Zip ZS 打开压缩包
3. 解压其中的 `up_param.bin.lz4`
4. 在解压出来的 `up_param.bin.lz4` 包上右键使用 7-Zip ZS 打开压缩包
5. 解压其中的 `up_param.bin`

接下来只需要用到这个压缩包中包中包 `up_param.bin`：

1. 使用 7-Zip ZS 打开压缩包 `up_param.bin`
2. 修改其中的 `logo.jpg` `booting_warning.jpg`：
   - 将 `booting_warning.jpg` 修改为全黑
   - 显示原有 Logo：将 `logo.jpg` 重命名为 `svb_orange.jpg`
   - 展示自定义 Logo：修改 `logo.jpg` 为自定义 Logo 但不要调整大小和维度，复制一份名为 `svb_orange.jpg`
3. 将修改后的图片拖进原 `up_param.bin` 文件保存修改
4. 右键更新后的 `up_param.bin` 文件使用 7-Zip ZS 添加到压缩包，注意修改压缩格式为 `tar`

打开 Odin，将修改后的 `up_param.bin` tar 压缩包作为 `BL` 包 **单独刷入**。


<details><summary>懒人必备</summary><br />


我懒得修改，从旧的极光 ROM 包里找到了大佬修改好的 `up_param.bin` 文件，把它拖出来再单独压缩成 tar 包即可：

![AuroraROM 中已经修改好的文件](https://rmt.dogedoge.com/fetch/tingle/storage/lazyme.png?w=985&fmt=webp)


</details><br />


这里我刷完自动重启后也成功进入 Magisk in Recovery，如果你不幸进入了没有 Magisk 的系统，可以参考上一章节重新进入。

## 完工

在 Magisk Manager 中搜索「Riru」和「Riru - LSPosed」安装，再到 [@LSPosed/LSPosed](https://github.com/LSPosed/LSPosed) 仓库的 [Releases](https://github.com/LSPosed/LSPosed/releases) 中下载 LSPosed Manager 安装。

如果需要重启，直接在 Magisk Manager 中模块安装完成后点击重启按钮，貌似也可以不用任何组合键直接重新进入 Magisk in Recovery。如果失败了的话同样参考上上个章节重新进入，问题不大。

折腾完这些，手头的三星终于可以吃上 LSPosed 了，顺带还享受起了 Android 11 和 OneUI 3.0。官方固件自带谷歌全家桶，略显臃肿。

![Magisk Manager & LSPosed Manager](https://rmt.dogedoge.com/fetch/tingle/storage/magisk-riru-lsposed.png?w=1280&fmt=webp)

![软件信息 & 主屏幕 & 一加天气组件](https://rmt.dogedoge.com/fetch/tingle/storage/mobile-desktop.png?w=1280&fmt=webp)

目前还没看到手上这个机型的国行 Android 11 ROM，所以暂时就继续用官方的了，这是一些我在用的感觉还蛮舒服的解决方案：

 - 三星支付因为 Magisk 修改无法使用
   
   三星支付，用处不大，直接卸载（逃

 - 国内软件的指纹支付不可用
   
   在 Magisk Manager 中安装 Jason Eric 的「Riru - 指纹支付」系列插件

 - 自带的天气组件定位不到我所在的村子位置
   
   在 Magisk Manager 中安装 MarcAnt01 的「Oxy-ify」，将一加的天气组件安装上去

 - 听腻了三星铃声想换一个
   
   「Oxy-ify」可以顺带安装一加的铃声。Magisk Manager 中还有其他系统如 MIUI 的音效包

> 我还蛮喜欢一加 OnePlus tune 的调调的，嘿嘿🤣

如果你对本文后续三星设备上安装 Magisk in Recovery 的步骤有任何建议欢迎留言，我只是将自己的操作记录了下来，仅供参考，未必适用于其他三星设备！