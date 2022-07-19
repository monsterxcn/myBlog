---
title: NoneBot2 插件编写尝试
date: 2021-08-22
published: true
slug: Experiences-4-Nonebot-2
cate: code
tags: ['机器人', 'NoneBot', 'Pillow', 'Playwright']
canonical_url: "https://blog.monsterx.cn/code/experiences-4-nonebot-2/"
description: "实在是受不了这种书看不进去无所事事的日子，于是给自己找了事情忙活。"
---

放假在家本来打算看看考研的书，结果硬是只看进去了一丁点皮毛。实在是受不了这种书看不进去无所事事的日子，于是给自己找了事情忙活。之前一直在用 [@Tsuk1ko/cq-picsearcher-bot](https://github.com/Tsuk1ko/cq-picsearcher-bot)，上半年尝试了解了一些 Telegram bot 的东西还顺手给 PagerMaid 修了一个简单的插件 Bug，最近放假发现了好多好玩的 QQ 机器人项目…… 这些让我想自己写个机器人玩，于是便有了下文。

## go-cqhttp 和 NoneBot

[@Mrs4s/go-cqhttp](https://github.com/Mrs4s/go-cqhttp) 是「使用 mirai 以及 MiraiGo 开发的 cqhttp golang 原生实现」，在酷 Q 倒下之后感觉撑起了 QQ 机器人的半边天，在很多项目中都能看见他。通过 go-cqhttp 的各种 API 接口，开发者能使用 Node.js Python Golang C 等各种编程语言处理机器人收到的信息（Event），做进一步响应。[@nonebot/nonebot2](https://github.com/nonebot/nonebot2) 便是一个能和 go-cqhttp 对接的「跨平台 Python 异步机器人框架」。

看了几遍《[概览 - NoneBot](https://v2.nonebot.dev/guide/)》后，我觉得 NoneBot 是一个很方便的平台，有自己的脚手架可以快速创建项目；它的商店里所有插件都可供学习，Python 实现的机器人也有很多源码可供参考，官方文档没看懂可以找些大佬写的例子看看；上半年有一小阵子折腾 Telegram bot 时看了一些 Python 的代码，了解了最基本的插件是如何工作的。这些经验让我决定了使用 nonebot2。

go-cqhttp 和 nonebot2 的安装和配置均可参考对应文档。最终 nonebot2 的项目文件夹可以通过 `nb create` 快速创建，nonebot2 通信协议 Adapter 选用官方维护的 `nonebot-adapter-cqhttp` 即可，使用 `nonebot_adapter_gocq` 可能会存在兼容性问题。go-cqhttp 的反向 WebSocket Universal 地址需要配置为 `http:///[HOST]:[PORT]/cqhttp/ws`，其中 `[HOST]:[PORT]` 和 nonebot2 `.env` 中的配置保持一致，我尝试填写别的地址时连接不上。先登陆一次 go-cqhttp 生成 data device.json 等文件夹和文件，启动机器人时先使用 `nb run` 或 `python3 bot.py` 启动 NoneBot，然后进入 go-cqhttp 文件夹下启动 go-cqhttp。在 NoneBot 输出中看到 `WebSocket Connection from CQHTTP Bot NNNNNNNNNN Accepted!` 就算成功！

## 虚拟环境 venv

初次尝试 NoneBot 后我发现通过 `pip` 安装插件的方式虽然方便，但是很容易出现依赖版本冲突，这时候虚拟环境就显得很重要。这也是我第一次尝试虚拟环境。NoneBot 推荐使用 Poetry，但我用了下不太习惯，尤其是最新版本的 `nb-cli` 创建的项目文件夹中 `pyproject.toml` 依赖却是低版本的。最终我还是选择了 `venv`。

```bash
# 安装 venv
python3 -m pip install venv
# 在 /path/to/thisvenv 文件夹下创建一个虚拟环境
python3 -m venv /path/to/thisvenv

# 进入 /path/to/myBots 文件夹并启用虚拟环境
cd /path/to/myBots
source /path/to/thisvenv
# 启用后命令行前会多出当前虚拟环境的名字
(thisvenv) user@host: myBots$

# 使用 pip 安装各种依赖
# pip install -i https://pypi.tuna.tsinghua.edu.cn/simple packagename
pip install nb-cli nonebot-adapter-cqhttp

nb create
cd abot
# ...
nb run

# 退出虚拟环境
deactivate
```

如果创建虚拟环境时使用 `python3` 那么在虚拟环境中 `python` 和 `pip` 也都指向最新版本。在整个项目完成后可以生成当前环境中各种依赖版本：

```bash
pip freeze > requirements.txt    # 备份当前的依赖版本

pip install -r requirements.txt  # 安装指定的依赖版本
```

## 第一个插件

根据《[创建插件 - NoneBot](https://v2.nonebot.dev/guide/creating-a-plugin.html)》的指导并参考众多 NoneBot 插件做法，插件目录一般为 `src/plugins`，在其中创建一个文件夹或单个文件都可以被 NoneBot 加载为插件。

我的第一个插件是用于获取 Epic Game Store 限时免费游戏的，因为某天打开群时看到有人说 [@DIYgod/RSSHub](https://github.com/DIYgod/RSSHub) 的 Epic [免费游戏](https://docs.rsshub.app/game.html#epic-games-store) 不能用了，我第一感觉就是他懒没有自己部署罢了…… 我自己去部署了一下果然还是好使的。看了看这个路由的 [源码](https://github.com/DIYgod/RSSHub/tree/master/lib/routes/epicgames)，感觉还挺好玩的。于是决定将他改成机器人插件。

这种插件的形式是检测到符合要求的命令之后，向某个网站 API 发起 HTTP 请求，根据返回的信息（一般是 JSON）处理之后返回给用户。机器人的大多数功能都可以通过这种形式写出来，因为网上各种可供调用的 API 实在是太多了，什么搜图、翻译、段子、涩图、天气、查快递都有（好像混入了奇怪的东西）。@DIYgod/RSSHub `/epicgames/freegames` 路由的实现方法特别之处是向 Epic 的 GraphQL 服务器发起 `query` 查询请求，我见得少觉得很新颖。

NoneBot 最大的特点就是「异步」，所以发起 HTTP 请求的方式不推荐用 `requests`，自带的 `httpx` 或者 `aiohttp` 都是很合适的异步网络请求工具，这里给出改写后的 `httpx` 实现。

```python
# async 定义一个异步函数，NoneBot 中插件的函数大都以此定义
async def get_Epicgame():
  # 发起请求的地址
  epic_url = "https://www.epicgames.com/store/backend/graphql-proxy"
  # HTTP 请求的 Headers
  headers = {
    "Referer": "https://www.epicgames.com/store/zh-CN/",
    "Content-Type": "application/json; charset=utf-8",
  }
  # 要发送的 JSON 数据包，query 部分不完整
  data = {
    "query": "query searchStoreQuery($allowCountries: String, ... ",
    "variables": {
      "allowCountries": "CN",
      "category": "freegames",
      "count": 1000,
      "country": "CN",
      "locale": "zh-CN",
      "sortBy": "effectiveDate",
      "sortDir": "asc",
      "withPrice": True,
      "withPromotions": True
    }
  }
  # 使用异步 API 创建 Client，HTTP Headers 可以在此传递
  async with AsyncClient(headers=headers) as client:
    try:
      # 通过 json=data 的方式传递上面定义的 JSON 数据，发起 POST 请求
      res = await client.post(epic_url, json=data, timeout=10.0)
      # res 为获取到的数据，通过 .json() 转为 JSON 数据
      resJson = res.json()
      # 简单的挑选响应结果中有用的部分
      games = resJson['data']['Catalog']['searchStore']['elements']
      return games
    except Exception as e:
      logger.error(str(e))
      return None
```

这样一个简单的能执行 HTTP 异步请求的函数就写好了，在调用异步函数的地方使用类似 `res = await asyncFunctionName()` 的语句。为了测试这一函数是否可用，我通常会将其单独拎出来，放在下面这样的文件中单独执行测试。

```python
import asyncio
import httpx

async def main():
  # ...
  async with httpx.AsyncClient() as client:
    response = await client.get('https://www.example.com/')
    # ...
    print(response)     # return 改为 print

asyncio.run(main())
```

像这种获取数据供插件使用的函数 NoneBot 推荐写在插件文件夹下 `data_source.py` 里。在其他需要的地方通过 `import` 导入。关于 `httpx` 的更多操作可以在《[QuickStart - HTTPX](https://www.python-httpx.org/quickstart/)》中查找，现学现卖完全够用。

回到此插件，获取到 HTTP 响应的数据之后还需要挑选其中有用的部分，我这里获取的 JSON 数据包含了拥有折扣的众多游戏信息，为了挑选出其中的限免游戏我写了另外一个函数 `get_Epicfree()` 放在 `data_source.py` 里。这里讲个插曲，写完获取数据的函数后我才发现 python 原来已经有写好的包可以直接用 [@SD4RK/epicstore_api](https://github.com/SD4RK/epicstore_api)，而且这个包里给出了更多 `query` 查询语句，免费游戏的例子他也写出来了。好家伙，处理 JSON 数据的逻辑我直接照搬，省下了大把功夫。

这样 `data_source.py` 的大部分功能就完成了，接下来新建 `__init__.py` 文件，这里将告诉机器人插件何时响应用户，如何响应用户。

```python
from nonebot import on_regex
from nonebot.typing import T_State
from nonebot.adapters.cqhttp import Bot, Event, Message

# 导入 .data_source 里需要用到的函数
from .data_source import get_Epicfree

# 注册了一个事件响应器 matcher，这里只要符合正则就响应
matcher = on_regex("((E|e)(P|p)(I|i)(C|c))?喜(加一|\+1)", priority=1)
# 事件响应器 matcher 的事件处理函数
@matcher.handle()
async def handle(bot: Bot, event: Event, state: T_State):
  # 异步调用 data_source 里的函数
  # 我的 get_Epicfree 里调用了发起 HTTP 请求的 get_Epicgame 并处理出最终的消息文本
  imfree = await get_Epicfree()
  # 有的时候需要使用 Message() 将对象转换为可用的消息对象
  msg = Message(imfree)
  # 事件响应器的 finish() 结束事件响应，此外还有 send() 等可用
  await matcher.finish(msg)
```

如此，一个最基本的插件就做好了。重新启动 NoneBot 后启用此插件。关于这个插件的所有代码均可在仓库 [@monsterxcn/nonebot_plugin_epicfree](https://github.com/monsterxcn/nonebot_plugin_epicfree) 查看。你也可以通过 `nb` 或 `pip` 安装 `nonebot_plugin_epicfree` 体验。

## Pillow 画图插件

很多时候咱有发图片的需求，比如「无内鬼，搞点…」什么的，其中图片除了像第一个插件一样通过请求 API 返回图片的 URL，有的时候可能还需要添加一些细节。比如 [@Xtao-Labs/PagerMaid_Plugins](https://github.com/Xtao-Labs/PagerMaid_Plugins) Telegram 人形自走机器人插件仓库中的吃 / 丢用户头像功能，需要获取用户的头像然后自行拼接到背景图片上；又比如我想做一个原神每日素材的功能，事先准备好了各种素材对应角色或武器的图片，希望机器人来处理拼接这些图片成为当日素材。

这里就以原神每日素材的功能需求为例，交代我的实现方法。@Xtao-Labs/PagerMaid_Plugins 中的功能可以作为进阶操作，我自己也照着原仓库代码改写出来了，但是代码理解的不够深，就不拿出来献丑了，说不定什么时候没人我就悄咪咪传到 Gist 存个档留念。

各种素材图片来源于 [今日素材表 - 可莉特调](https://genshin.pub/daily)，我通过 Chrome 开发者工具中 `Ctrl` `Shift` `P` 调用 `[Screenshot] Capture node screenshot` 手动获取，算是个笨办法了。将每种素材对应截取一张图片，3 个区域 18 种素材 18 张图片，分别命名成 `{区域名}.{星期数}.png` 的格式。我还另外截取了「今日素材可升天赋角色」「今日素材可突破武器」两张头图，命名为 `header.png`。

接下来编写 `getMaterial(type)` 函数用来获取包含了 `type` 对应头图和蒙德、璃月、稻妻三个区域 `type` 对应素材图片的 `Image` 类型列表，函数内调用 `datetime` 库获取当日星期数。`Image` 类型是 Python 绘图库 `Pillow` 内定义的，它包含了图片的色彩模式、像素大小等信息，使用 `image.open(filename)` 或者 `Image.new()` 均可得到一个 Image 类型的对象。

```python
async def getMaterial(type):
  day = datetime.today().weekday() + 1    # 星期一对应 1，星期日对应 7
  imgList = []                            # 存放 Image 类型数据的列表，默认为空
  filename = f'{type}.{day}.png'          # 供后续调用，是将要生成的图片名
  width, height = (0, 0)                  # 供后续调用，是将要生成的图片大小，默认为 0
  if day != 7:
    daily = day if day < 4 else day - 3   # 周四周五周六素材分别于周一周二周三相同
    countries = ["Mondstadt", "Liyue", "Inazuma"]
    # 通过 append() 将 Image.open() 获取的 Image 类型数据加入列表
    imgList.append(Image.open(resPath + f"{type}/header.png"))  # 头图
    for country in countries:
      # 遍历三个区域，取出所需 type 的素材分图
      image = resPath + f"{type}/{country}.{daily}.png"
      imgList.append(Image.open(image))
    # 遍历生成的 Image 类型数据列表，获取即将生成的图片总高度、总宽度
    for img in imgList:
      w, h = img.size
      height += h              # 高度累加，后续我将图片列表的 Image 从上到下拼接
      width = max(width, w)    # 宽度为最大的宽度，实际我的图片宽度都一样
  return imgList, width, height, filename
```

好，这个函数将返回包含待处理图片的 Image 类型列表、预计生成图片的宽度和高度、待生成的图片名。如果时间为周日则返回一个空的列表，后续可以判断列表是否为空决定最终返回的消息。因为周日所有素材均可获取。接下来编写画图的函数，这部分可能需要结合《[Pillow - Pliiow (PIL Fork) Documentation](https://pillow.readthedocs.io/en/stable/)》相关函数的说明理解。不过此例还算简单了，基本只用到了一个粘贴的函数 `Image.paste()`，如果要实现前面所说的吃头像功能还要到文档里学习更多。

```python
async def msgTranslate(imgList, totalWidth, totalHeight, saveAs):
  if imgList == []:
    return "哈！今天是周日，所有天赋秘境和武器秘境全部开放哦🥰"
  else:
    # 新建一个 Image 对象，颜色制式与 imgList[0] 一样，背景颜色为纯色 #F6F2EE
    result = Image.new(imgList[0].mode, (totalWidth, totalHeight), "#F6F2EE")
    drawFromHeight = 0        # 初始绘制时的动作点高度
    for img in imgList:
      w, h = img.size         # 获取当前图片的宽度、高度
      # 向 result 这个 Image 中粘贴 img，box 的参数是粘贴图片的左上角坐标
      result.paste(img, box=(round(totalWidth / 2 - w / 2), drawFromHeight))
      drawFromHeight += h     # 一张图片粘贴完后累加高度
    result.save(saveAs)       # 将 Image 对象 result 保存为文件 saveAs，注意要带上完整路径
    msg = f"[CQ:image,file=file://{saveAs}]"
    return msg
```

如此，图片就绘制好了，`result` 是一个 Image 类型数据，并不能直接通过 NoneBot 发送。使用 `result.save("/path/to/.png")` 可以将其生成为一张图片，这样使用 CQ 码 `[CQ:image,file=file:///path/to/.png]` 就可以发送出去了。

最后是事件响应器，我在 `__init__.py` 中使用了如下逻辑：

```python
materialMatch = on_command('今天打什么', priority=1)
@materialMatch.handle()
async def send_mt(bot: Bot, event: GroupMessageEvent, state: T_State):
  # 获取消息。比如发送了「今天打什么天赋」后 bot 会获取到 searchFor='天赋'
  searchFor = str(event.get_message())
  if searchFor == '天赋' or searchFor == '武器':
    type = 'talent' if searchFor == '天赋' else 'weapon'
    # 调用刚才编写的两个函数
    material = await getMaterial(type)
    msg = await msgTranslate(material[0], material[1], material[2], material[3])
    # 发送消息，也可以先将图片转为 Base64 编码再发送
    await materialMatch.finish(Message(msg))
  else:
    # 没有检测到要打什么
    await materialMatch.finish(Message("打什么？[CQ:face,id=32]"), at_sender=True)
```

当然以上这些只是大概讲了下我做这个功能的思路，还有一些细节可以优化优化，比如：这里只简单判断了星期数，没有判断时间是否过了凌晨 4 点；图像是每次使用时都重新生成，也没有做缓存。完整的代码我可能什么时候觉得整理得差不多了再放到 GitHub。

## HEU 定时打卡插件

写了两个插件之后我觉得自己还蛮厉害的，于是开始想办法将之前做的学校疫情打卡实现到机器人上。最近疫情有所反弹，学校又开始了返校前的打卡活动。另外大家都要注意防疫哦。

打卡的插件原本是需要自己获取 `formData` `boundFields` 等参数的，还要处理 HEU CAS 认证的相关 Cookies 等，如何使用 `httpx` 实现这些功能我还不太理解，于是妥协以模拟浏览器操作的方式实现。这里使用了 [@microsoft/playwright-python](https://github.com/microsoft/playwright-python)，它是个不错的自动化测试工具。通过 `pip` 安装好 `playwright` 后，还需要执行一次 `playwright install` 让 `playwright` 安装可用的浏览器组件及 `ffmpeg`。我本来以为国内服务器上安装 `chromium` 可能会卡住，不过实际用阿里云北京的服务器试了一下并没出现网络问题。

与前述步骤一样，最好的参考文档仍然是《[Getting Started - Playwright Python](https://playwright.dev/python/docs/intro)》。实现打卡部分的代码我已经放在了 Gist [@monsterxcn/nonebot_plugin_checkin.py](https://gist.github.com/monsterxcn/f0a7a083ee65d52b1400596ace43687b#file-nonebot_plugin_checkin-py-L53-L98) L53-98。感觉结合文档比较容易理解，看函数名也容易理解是什么作用，总之 Playwright 是很好上手的。

接下来是定时任务的实现，这需要安装 NoneBot APScheduler 定时任务插件 [@nonebot/plugin-apscheduler](https://github.com/nonebot/plugin-apscheduler)，参考仓库里的「使用方法」即可。在 `__init__.py` 中定义定时任务，比如实现定时打卡的功能可以这么写：

```python
scheduler = require("nonebot_plugin_apscheduler").scheduler
@scheduler.scheduled_job("cron", hour=6, minute=6, second=6)
async def auto_checkin():
  # 获取 bot 信息
  (bot,) = nonebot.get_bots().values()
  for customer in customers:
    # 拼接 CQ 码 at 某人
    msg = f"[CQ:at,qq={customer}] "
    try:
      # 传入了最后一个参数 mode=auto，打卡任务将不输出执行过程提示
      msg += await checkin(customers[str(customer)][0], customers[str(customer)][1], 'auto')
      await bot.send_group_msg(group_id=GROUPNUMBER, message=Message(msg))
    except Exception as e:
      logger.error(str(e))
      # 如果定时任务执行出错了将向管理员用户私信报错信息
      await bot.send_private_msg(user_id=ADMIN, message=f"{customer}(学号{customers[str(customer)][2]}) 今日打卡定时任务执行出错了！")
```

这里值得注意的是在定时任务事件处理函数中如何调用机器人主动发送消息，这种方法在其他场合应该也是通用的。首先通过 L5 获取 `bot` 对象，然后通过 `_ApiCall` 方式调用 go-cqhttp API，比如 L12 L16 分别调用了发送群消息、发送私聊消息的接口。

通过此插件主要学习了 Playwright Python 的使用和定时任务的添加。完整插件的代码可以通过前面的 Gist 链接查看。如果有时间我觉得还可以添加上 JSON 操作：将学号密码写入 JSON，执行时读入，判断不存在后令用户输入并写入 JSON。

## 连续对话的抽签插件

做原神每日素材插件的时候，我就想整一个像可莉特调那样的原神黄历、抽签功能。撸完了定时打卡的插件之后我又看了看 Playwright 文档，发现它不仅能用来模拟浏览器操作执行打卡，还带有 `screenshot()` 函数可以实现网页截图，`inner_text()` `inner_html()` 函数可以用来做爬虫。我一拍脑袋，想法有了：通过 Playwright 写一个爬虫爬取诸葛神算测字三百八十四爻（也就是可莉特调使用的运势签），再通过 `screenshot()` 截取指定选择器的网页截图（使用 Pillow 绘制的话感觉会很麻烦）。写这部分代码参考了群友的机器人 [@FYWinds/takker](https://github.com/FYWinds/takker) 和 Playwright 文档。

爬虫的编写不在此讲解，思路其实很简单，代码见 Gist [@monsterxcn/chims-crawler.py](https://gist.github.com/monsterxcn/47681a6db630887d69946cc7f0faa0e6)。爬到的三百八十四签我也都顺便放在了这个 Gist 里，可以直接拿来用。至于为什么不用网上大把的抽签接口，我是觉得既然决定要折腾，那不如就折腾到底。

Playwright 网页截图也很好实现，与上面插件类似，在打开网页后使用下面这样的语句即可：

```python
async with async_playwright() as p:
  browser = await p.chromium.launch()
  page = await browser.new_page()
  # 这里打开的本地 html 文件是接下来我要做的抽签模板文件
  await page.goto(f"file://{resPath}card/tmp.html")
  # 设置网页窗口大小
  await page.set_viewport_size({"width": 1920, "height": 1080})
  # 等待指定选择器加载
  chim = await page.query_selector(".container")
  assert chim is not None
  # 截图到路径 {resPath}card/ 文件夹下 tmp.png
  await chim.screenshot(path=f"{resPath}card/tmp.png")
```

那么如何实现抽签功能呢？我的思路是使用随机数 `random.randint(1, 384)` 生成签号，然后读取 JSON 文件取出对应签号的签的信息。接下来打开事先编写好的卡片 HTML 模板，使用 `replace("模板中的占位符", "签的信息")` 替换并保存一个临时文件。执行 Playwright 指定选择器的网页截图。

卡片 HTML 模板我已经放在了 [Gist](https://gist.github.com/monsterxcn/d933cafcdc6662c6bdcbd561fe921e8c)，样式参考可莉特调做了一些调整，字体使用原神游戏客户端的文件即可，路径如下：

```
Genshin Impact\Genshin Impact Game\YuanShen_Data\StreamingAssets\MiHoYoSDKRes\HttpServerResources\font
```

读取 `.json` 使用了自带的 `json` 库，我将卡片模板分别命名为抽签 `poem.html` 和解签 `intp.html`。生成图片时调用的是同一个函数，通过参数决定使用哪一个模板。由于无论是之前生成的随机数还是 json 文件中的签号均是阿拉伯数字，写入模板时，还需要一个将阿拉伯数字转换为中文繁体数字的函数，这个算是小细节。代码不难，我就不放在这里占用篇幅了。

这个插件最后一个点是如何连续对话：发送抽签命令后机器人发出了一张图片，接下来应该询问是否需要解签，根据用户回答决定整个流程是否结束。这里用到的是《[Nonebot.matcher 模块 - NoneBot](https://v2.nonebot.dev/2.0.0a7/api/matcher.html#classmethod-got-key-prompt-none-args-parser-none)》的 `got()` 函数，文档里介绍得不多，我学得也比较蒙，但是最后写出来还是能用的：

```python
# __init__.py

chimMatch = on_command('抽签', priority=1)
@chimMatch.handle()
async def chim(bot: Bot, event: GroupMessageEvent, state: T_State):
  try:
    # getChim 函数用来生成随机数并读取 JSON 输出签号、吉凶、签诗、解签
    # 将其赋值进 state[] 可以在下面 got() 中继续调用，chimNum 这些都是自己定义的
    state["chimNum"], state["chimLuck"], state["chimPoem"], state["chimIntp"] = await getChim()
    # genrChimImg 函数用来读取模板并替换占位符为签的内容，最后一个参数用来决定使用哪个 HTML 模板
    chimImg = await genrChimImg(state["chimNum"], state["chimLuck"], state["chimPoem"], "poem")
    await chimMatch.send(Message(chimImg), at_sender=True)
  except Exception as e:
    logger.error(str(e))
    await chimMatch.finish("抽签发生了错误🤕")

# got() 指示当 action 不存在时发送 prompt 消息并接收用户新的一条消息
@chimMatch.got('action', prompt='你需要解签吗？')
async def _(bot: Bot, event: GroupMessageEvent, state: T_State):
  if "不" in state['action']:
    # 用户说了包含「不」得句子就判定为不需要解签，结束流程
    await chimMatch.finish("好吧")
  else:
    try:
      # 从 state[] 读取签的信息，这样不用重新读 JSON，传入最后一个参数用来决定使用解签的 HTML 模板
      intpImg = await genrChimImg(state["chimNum"], state["chimLuck"], state["chimIntp"], "intp")
      await chimMatch.finish(Message(intpImg))
    except Exception as e:
      logger.error(str(e))
      # await chimMatch.finish("解签发生了错误🤕")
```

好啦，这个能连续对话、实现抽签解签功能的插件就做好了！主要学习了 NoneBot `matcher.got()` 和 Playwright `page.screenshot()`，前者让机器人能从后续对话中获取变量决定程序走向，后者能在 Pillow 绘图较复杂不易实现时提供替代方案。

-------

![NoneBot 插件效果](./images/post/nonebot-plugins.png)

本来以为这点经验写不了多少的，结果码点代码、加点注释就撑起了大半篇幅，希望读者有所收获！Python 新手难免出错，如果你发现了欢迎指正！( •̀ ω •́ )y