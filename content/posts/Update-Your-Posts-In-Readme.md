---
title: GitHub README.md 显示博文并自动更新
date: 2020-08-18
published: true
slug: Update-Your-Posts-In-Readme
cat: code
tags: ['GitHub Actions', 'README', 'RSS']
cover_image: "./images/readme-update-posts.png"
canonical_url: false
description: "看见别人的 GitHub 主页都换上了 README，我就也安排上了。顺便网上冲浪现学 Python 做了个通过 RSS 获取最近博文并自动更新到 README 的小玩意。"
---

今年 GitHub 推出了 profile-level README 的新特性，只要新建与用户名同名仓库并创建 `README.md` 就可以在 GitHub 个人主页上看到其内容。比起单纯的固定仓库或 Gist 在个人主页，我觉得这会让 GitHub 主页变得更多姿多彩，戳官方 [文档](https://docs.github.com/en/github/setting-up-and-managing-your-github-profile/managing-your-profile-readme) 了解更多。然而，像我这种菜鸟想了很久都没有想清楚在个人主页上到底写点什么，拿得出手的项目是不存在的，刷 commit 也只是满足下自己的虚荣心而已，能力提升微乎其微。

这段时间看了很多个人介绍仓库之后，发现我想多了：GitHub 是什么？~~全球最大的同性交友网站啊！~~ 又不是世纪佳缘，写得漂亮能找着对象吗？开心就好，介绍下自己，放张关于自己仓库的小卡片，留点 E-mail Twitter 之外更丰富的社交链接，这个 `README.md` 就达标辣！（靠 GitHub 找工作的话那当我没说。

单单写 READMD 没什么好记录的，本文就记录一下自己为了让 README 稍稍有点逼格，制作「从 RSS 获取最近更新并以 Markdown 格式写入 README」功能的经过吧。毕竟对于萌新我来说，做出点有意思的东西是很有成就感的。

> 写着写着就变成了幼儿读物的感觉，请不要笑话我了，毕竟我是个萌新，阿巴阿巴 🤪

## 从文章中学习

一切是从这里开始的：《[Building a self-updating profile README for GitHub - Simon Willison’s Weblog](https://simonwillison.net/2020/Jul/10/self-updating-profile-readme/)》，这位作者的仓库 [@simonw/simonw](https://github.com/simonw/simonw) 显示了三栏自动更新的内容，包括 GitHub 上的打包发布、博客文章和另外一个站点 T(hings) I L(earned) 的条目。这三栏分别使用了三种途径获取最新内容的，均由 Python 实现：

 - 「GitHub GraphQL API -> python_graphql_client -> Latest Release」
 - 「RSS Atom feed -> feedparser -> Latest posts」
 - 「Datasette API -> SQL query -> Latest entries」

第一个和第三个我都不了解，只有 RSS 的格式稍微懂一点，巧的是这正好能用来获取博客最新的文章。动手开始！

## 面向谷歌编程

查看仓库现成的 `build_readme.py` 文件，一眼扫下来有 218 行，有点晕。一遍看下来 GitHub GraphQL API 和 Datasette API 相关的占了较大篇幅，这说明通过 RSS 获取博客内容的代码较少。这时候我选择找到第一个版本的文件，我觉得最初的版本大概率应该是最简陋的，能让我最快的搞清楚代码的大体结构。第一个版本的 [build_readme.py](https://github.com/simonw/simonw/commit/d2b5e8ba30b0d2b1a867e0bfafa1215a2b5ef287#diff-b8502c56279bd4ac52ccb69f70e81a13) L139，就从这里开始吧。


<details><summary><strong>从零开始学 Copy</strong></summary><br />


从 L107 `if __name__ == "__main__"` 处开始读，截取在下面 L1。这句相当于 C 语言的 `int main()`（尝试白嫖腾讯云无服务器环境的时候从环境设置里学到的。

```python
if __name__ == "__main__":
    readme = root / "README.md"
    releases = fetch_releases(TOKEN)
    releases.sort(key=lambda r: r["published_at"], reverse=True)
    md = "\n".join(
        [
            "* [{repo} {release}]({url}) - {published_at}".format(**release)
            for release in releases[:10]
        ]
    )
    readme_contents = readme.open().read()
    rewritten = replace_chunk(readme_contents, "recent_releases", md)

    tils = fetch_tils()
    tils_md = "\n".join(
        [
            "* [{title}]({url}) - {created_at}".format(
                title=til["title"],
                url=til["url"],
                created_at=til["created_utc"].split("T")[0],
            )
            for til in tils
        ]
    )
    rewritten = replace_chunk(rewritten, "tils", tils_md)

    entries = fetch_blog_entries()[:10]
    entries_md = "\n".join(
        ["* [{title}]({url}) - {published}".format(**entry) for entry in entries]
    )
    rewritten = replace_chunk(rewritten, "blog", entries_md)

    readme.open("w").write(rewritten)
```

`release` `til` 命名的很显然是获取 GitHub 和 TIL 最新内容相关，于是获取博客更新的主要代码就筛选出来了：L1-2 L27-33。L2 用到的变量 `root` 并没有出现定义，接下来找他的定义和用到的函数 `fetch_blog_entries()` `replace_chunk()`。

```python
root = pathlib.Path(__file__).parent.resolve()    # 库 pathlib

## ...

def replace_chunk(content, marker, chunk):
    r = re.compile(                               # 库 re
        r"<!\-\- {} starts \-\->.*<!\-\- {} ends \-\->".format(marker, marker),
        re.DOTALL,
    )
    chunk = "<!-- {} starts -->\n{}\n<!-- {} ends -->".format(marker, chunk, marker)
    return r.sub(chunk, content)

## ...

def fetch_blog_entries():
    # 库 feedparser
    entries = feedparser.parse("https://simonwillison.net/atom/entries/")["entries"]
    return [
        {
            "title": entry["title"],
            "url": entry["link"].split("#")[0],
            "published": entry["published"].split("T")[0],
        }
        for entry in entries
    ]
```

看起来有些许复杂，此时应该提取出用到的 Python 库，实际调试的时候只要尝试单独运行这些代码块会得到未定义之类的错误，然后就能定位到缺失的库。在 Python 文件开头使用 `import` 导入。


</details><br />


下面是正式的面向谷歌编程，也就是学习用轮子（作者用到的那些库 pathlib、re、feedparser）：pathlib 库看起来没有需要谷歌的，一个能获取文件路径的库。re 库用到了正则表达式，结合作者在仓库第一版 `README.md` 中写的 `<!-- blog starts -->` `<!-- blog ends -->` 这样的标记，不难理解是将结果通过正则匹配找到位置，然后进行替换。feedparser 库从一个 Atom 链接获取了包含文章信息的数组，是为「源头」。

### feedparser 解析 RSS

《[在 Python 中使用 Feedparser 解析 RSS - 纯净天空](https://vimsky.com/article/4399.html)》一篇足矣，或者看英文版《[Using Feedparser in Python - PythonForBeginners](https://www.pythonforbeginners.com/feedparser/using-feedparser-in-python)》。当然，RSS 文件也要有一丢丢了解。XML 格式由 HTML 触类旁通不难理解，可以试着戳 [这里](https://blog.monsterx.cn/feed.xml) 看看本站的 RSS 源格式。在每个 `<item>` 中包含了 `<title>` `<link>` `<pubDate>`，用来输出到 `README.md` 够了。

参考链接文章用的是 `dic['feed']` 这种格式，用起来和 `dic.feed` 是一样的，就用后面这种短一点的写个示例。

```python
import feedparser

# 解析本站的 RSS 源
dic = feedparser.parse('https://blog.monsterx.cn/feed.xml')
channel = dic.feed                 # 获取 <channel> 数据
items = dic.entries                # 获取 <item> 数据
item = items[0]                    # 获取第一个 <item> 数据
sitetitle = channel.title          # 获取 <channel><title> 数据
sitelink = channel.link            # 获取 <channel><link> 数据
posttitle = items[0].title         # 获取 <item><title> 数据
postlink = items[0].link           # 获取 <item><link> 数据
postdate = items[0].published      # 获取 <item><pubDate> 数据

print(sitetitle)
```

RSS 数据较多时 `print(dic)` 可能让人头皮发麻，自行体会吧。下面给出更直观的对比：

```html
<rss xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" version="2.0">
    <channel>
        <title>Monstx's Blog</title>
        <link>https://blog.monsterx.cn/</link>
        <description>Monsterx CN - 学生 / 前端 / 电气</description>
        <lastBuildDate>Tue, 18 Aug 2020 04:11:01 GMT</lastBuildDate>
        <docs>https://validator.w3.org/feed/docs/rss2.html</docs>
        <generator>Gridsome Feed Plugin</generator>
        <atom:link href="https://blog.monsterx.cn/feed.xml" rel="self" type="application/rss+xml"/>
        <item>
            <title>
                <![CDATA[ New Start ]]>
            </title>
            <link>https://blog.monsterx.cn/life/new-start-with-gridsome/</link>
            <guid>https://blog.monsterx.cn/life/new-start-with-gridsome/</guid>
            <pubDate>Sat, 15 Aug 2020 00:00:00 GMT</pubDate>
            <content:encoded>
                <![CDATA[ <p>在这普通的一天，我穿着普通的鞋...</p> ]]>
            </content:encoded>
        </item>
        <item>
            <!-- 另外一篇文章 -->
        </item>
        <item>
            <!-- 另外一篇文章 -->
        </item>
    </channel>
</rss>
```

解析后：


<details><summary><strong>Freeparser 解析结构</strong></summary><br />


```json
{
  'feed': {
    'title': "Monstx's Blog", 
    'title_detail': {
      'type': 'text/plain', 
      'language': None, 
      'base': 'https://blog.monsterx.cn/feed.xml', 
      'value': "Monstx's Blog"
    }, 
    'links': [
      {
        'rel': 'alternate', 
        'type': 'text/html', 
        'href': 'https://blog.monsterx.cn/'
      }, {
        'href': 'https://blog.monsterx.cn/feed.xml', 
        'rel': 'self', 
        'type': 'application/rss+xml'
      }
    ], 
    'link': 'https://blog.monsterx.cn/', 
    'subtitle': 'Monsterx CN - 学生 / 前端 / 电气', 
    'subtitle_detail': {
      'type': 'text/html', 
      'language': None, 
      'base': 'https://blog.monsterx.cn/feed.xml', 
      'value': 'Monsterx CN - 学生 / 前端 / 电气'
    }, 
    'updated': 'Tue, 18 Aug 2020 04:11:01 GMT', 
    'updated_parsed': time.struct_time(tm_year=2020, tm_mon=8, tm_mday=18, tm_hour=4, tm_min=11, tm_sec=1, tm_wday=1, tm_yday=231, tm_isdst=0), 
    'docs': 'https://validator.w3.org/feed/docs/rss2.html', 
    'generator_detail': {'name': 'Gridsome Feed Plugin'}, 
    'generator': 'Gridsome Feed Plugin'
  }, 
  'entries': [
    {
      'title': 'New Start', 
      'title_detail': {
        'type': 'text/plain', 
        'language': None, 
        'base': 'https://blog.monsterx.cn/feed.xml', 
        'value': 'New Start'
      }, 
      'links': [
        {
          'rel': 'alternate', 
          'type': 'text/html', 
          'href': 'https://blog.monsterx.cn/life/new-start-with-gridsome/'
        }
      ], 
      'link': 'https://blog.monsterx.cn/life/new-start-with-gridsome/', 
      'id': 'https://blog.monsterx.cn/life/new-start-with-gridsome/', 
      'guidislink': False, 
      'published': 'Sat, 15 Aug 2020 00:00:00 GMT', 
      'published_parsed': time.struct_time(tm_year=2020, tm_mon=8, tm_mday=15, tm_hour=0, tm_min=0, tm_sec=0, tm_wday=5, tm_yday=228, tm_isdst=0), 
      'content': [
        {
          'type': 'text/html', 
          'language': None, 
          'base': 'https://blog.monsterx.cn/feed.xml', 
          'value': '<p>在这普通的一天，我穿着普通的鞋...</p>'
        }
      ], 
      'summary': '<p>在这普通的一天，我穿着普通的鞋...</p>'
    }, {
      // 另外一篇文章
    }
  ], 
  'bozo': 0, 
  'headers': {
    'Server': 'Tengine', 
    'Content-Type': 'application/xml', 
    'Transfer-Encoding': 'chunked', 
    'Connection': 'close', 
    'Vary': 'Accept-Encoding', 
    'Strict-Transport-Security': 'max-age=31536000', 
    'Date': 'Tue, 18 Aug 2020 13:37:32 GMT', 
    'x-oss-request-id': '5F3BD99C7DD3BB333136465D', 
    'x-oss-cdn-auth': 'success', 
    'ETag': 'W/"7885150FF626A52F9C8E511300EDC191"', 
    'Last-Modified': 'Tue, 18 Aug 2020 04:11:35 GMT', 
    'x-oss-object-type': 'Normal', 
    'x-oss-hash-crc64ecma': '904326687370716414', 
    'x-oss-storage-class': 'Standard', 
    'x-oss-server-side-encryption': 'AES256', 
    'Content-MD5': 'eIUVD/YmpS+cjlETAO3BkQ==', 
    'x-oss-server-time': '40', 
    'Via': 'cache36.l2cm9-5[104,0], kunlun8.cn2479[127,0]', 
    'Timing-Allow-Origin': '*', 
    'EagleId': '249c511c15977578523801838e', 
    'Content-Encoding': 'gzip'
  }, 
  'etag': 'W/"7885150FF626A52F9C8E511300EDC191"', 
  'updated': 'Tue, 18 Aug 2020 04:11:35 GMT', 
  'updated_parsed': time.struct_time(tm_year=2020, tm_mon=8, tm_mday=18, tm_hour=4, tm_min=11, tm_sec=35, tm_wday=1, tm_yday=231, tm_isdst=0), 
  'href': 'https://blog.monsterx.cn/feed.xml', 
  'status': 200, 
  'encoding': 'utf-8', 
  'version': 'rss20', 
  'namespaces': {
    'dc': 'http://purl.org/dc/elements/1.1/', 
    'content': 'http://purl.org/rss/1.0/modules/content/', 
    '': 'http://www.w3.org/2005/Atom'
  }
}
```


</details><br />


可以看到解析出来像是 JSON 格式，而且不仅仅包含 XML 文件可见内容，HTTP Header 信息也在其中。值得注意的地方： `<item><pubDate>` 并不是通过形如 `items[0].pubDate` 获取，而是 `items[0].published` 。根据这个结构更加灵活的运用 feedparser 吧！实现 README 自动更新最近博文并不需要这些，我给的示例足够用了。

### re 正则表达式替换

学 re 库从 Python 官方文档开始：《[re --- 正则表达式操作 - Python 3 中文文档](https://docs.python.org/zh-cn/3/library/re.html)》。不过最重要的还是学会写正则表达式，多写一些多搜一搜，时间久了自然就会了，我是这么想的。这里给出用于匹配 **指定字符串之间所有内容且不包含指定字符串** 的正则表达式。

 - `(?<=MARK)` 指定以 `MARK` 开头，遇到 `MARK` 后开始匹配
 - `(?=MARK)` 指定 `MARK` 结尾，遇到 `MARK` 前停止匹配
 - `.` 在默认模式匹配除了换行的任意字符。re 库中如果指定了标签 `DOTALL` 则匹配包括换行符的任意字符
 - `*` 对它前面的正则式匹配 0 到任意次重复，尽可能多地匹配

```python
# 拼接正则表达式并指定标签 DOTALL
# (?<=(STARTMARK)).*(?=(ENDMARK))

start = "<!-- posts start -->"
end = "<!-- posts end -->"
pattern = re.compile(
    r"(?<=(" + start + r")).*(?=(" + end + r"))",
    re.DOTALL,
)
```

`re.compile()` 将正则表达式的样式编译为一个正则表达式对象（正则对象），如果需要多次使用一个正则表达式的话，使用 `re.compile()` 保存这个正则对象以便复用，可以让程序更加高效。参数：`re.compile(pattern, flags=0)`，参考官方文档给出介绍如下：

> **re.sub(pattern, repl, string, count=0, flags=0)** [^1] <br />
> 返回通过使用 `repl` 替换在 `string` 最左边非重叠出现的 `pattern` 匹配的字符串。

 - `pattern` 可以是字符串或对象，在无匹配到时原样返回 `string`
 - `repl` 可以是字符串或函数。`pattern` 为字符串时 `repl` 中任何反斜杠转义序列都会被处理，如 `\n` 会被转换为换行符、`\r` 会被转换为回车符。ASCII 字符的未知转义符会被保留供将来使用并被视为错误。其他未知转义符例如 `\&` 会保持原样。反向引用（Backreferences）例如 `\6` 将被替换为 `pattern` 所匹配到的第 6 组的子字符串
 - `repl` 是字符串时，对所述的转义符和反向引用（Backreferences）中有几处特殊需要说明
   + 形如 `\g<name>` 用作 `(?P<name>…)` 语法定义的 `name` 组的匹配到的子字符串
   + 形如 `\g<number>` 用作对应数字的组，例如 `\g<2>` 就是 `\2`，但它避免了同 `\g<2>0` 的歧义
   + 形如 `\20` 会被解释为组 `20`，而不是组 `2` 后面跟随一个字符 `0`
   + 反向引用（Backreferences）例如 `\g<0>` 等同于由 `pattern` 匹配的整个子字符串
 - `repl` 是函数时，在每次非重叠出现 `pattern` 时都会被调用。这个函数只能有一个 *匹配对象* 参数，并返回替换后的字符串
 - 可选参数 `count` 是要替换的最大次数，必须为非负整数。如果忽略这个参数或设置为 0，所有的匹配都会被替换
 - 空匹配（Empty matches）仅在不与先前的空匹配相邻时，才被替换。所以 `sub('x*', '-', 'abxd')` 将返回 `-a-b--d-`

文档太专业了，总之 `re.sub(pattern, repl, string)` 可以用 `repl` 替换掉 `string` 内所有与 `pattern` 匹配的内容，这便是最基础的用法了。使用编译后的样式 `pattern.sub(repl, string)` 效果一样。

写个示例：

```python
import re

start = "STARTMARK"
end = "ENDMARK"
repl = "text used to replace"
contents = """text wait STARTMARK ing for being ENDMARK replaced"""

pattern = re.compile(
  r"(?<=(" + start + r")).*(?=(" + end + r"))",
  re.DOTALL,
)
pattern.sub(repl, contents)

print(contents)
```

最终输出 `contents` 为 `text wait STARTMARKtext used to replaceENDMARK replaced`。

### Python 文件读写

懒得深究了，因为从之前作者的代码里找到了关于读写的:

```python
# 当前文件的文件夹路径
thisdir = pathlib.Path(__file__).parent.resolve()
# .py 与 README.md 同级时获取 README 完整路径
thisfile = thisdir / "README.md"
# 取得 README 内容
contents = thisfile.open().read()
# 结合之前的 re 库示例实现替换
readme.open("w").write(pattern.sub(repl, contents))
```

C 语言文件读写 `fopen()` 后还有 `fclose()` 的，作者的代码里没有找到 close 之类的。应该是程序结束默认关闭了吧，急于实现功能，此处没有留意。

## 整理整套代码

以上所有学习途径自以为都交代清楚了，最后整合时用了 `for` 循环和数组的 `[start:end:step]` 分割（像数学上的区间表示法）来获取最近的固定篇数，完整实现这个「从 RSS 获取最近更新并以 Markdown 格式写入 README」的功能需要的代码篇幅很短，Python 真有趣！

```python
import feedparser
import pathlib
import re

rssUrl = "https://blog.monsterx.cn/feed.xml"
startMark = r"<!-- posts start -->"
endMark = r"<!-- posts end -->"
NUM = 5

def update_readme(start, end, repl):
    # Splicing complete regular expressions
    pattern = re.compile(
        r"(?<=(" + start + r")).*(?=(" + end + r"))",
        re.DOTALL,
    )
    # Get contents and rewrite README.md
    readme = pathlib.Path(__file__).parent.resolve() / "README.md"
    readme_contents = readme.open().read()
    readme.open("w").write(pattern.sub('\n' + repl + '\n', readme_contents))

def fetch_posts(url):
    blog = feedparser.parse(url)
    posts = blog['entries']
    markdown = "\n"
    # Fetch only 5 latest posts' info
    # My post.published return "Tue, 30 Jun 2020 00:00:00 GMT"
    # So I just intercept the middle part of the character
    for post in posts[:NUM]:
        # markdown += " ※ 《[" + post.title + "](" + post.link + ")》" + post.published + "<br />\n"
        markdown += " ※ 《[" + post.title + "](" + post.link + ")》" + post.published[5:16] + "<br />\n"
    markdown += "\n\n [Read more..](" + blog['feed']['link'] + ")\n"
    return markdown

if __name__ == "__main__":
    postsNew = fetch_posts(rssUrl)
    update_readme(startMark, endMark, postsNew)
```

按需小小修改一下，执行 `python this.py` 即可替换指定字符串之间内容为最新的博客文章。「自动」的事情依旧交给 GitHub Actions，设置自己点 Star 触发和定时执行即可。给出我的工作流配置 [new.yml](https://github.com/monsterxcn/monsterxcn/blob/master/.github/workflows/new.yml)，和之前打卡项目相同的原理。看到这里的你也许有兴趣读读我之前编写这种定时工作流的文章 🤣

另外我的 README 使用了 [@anuraghazra/github-readme-stats](https://github.com/anuraghazra/github-readme-stats) 展示 GitHub 账号的统计信息，使用了 [Shields.io](https://shields.io) 和 [Simple Icons](https://simpleicons.org) 生成精致的图标。快来给自己也安排一个吧！

GitHub 仓库地址 [@monsterxcn/monsterxcn](https://github.com/monsterxcn/monsterxcn)。

[^1]: 《[re --- 正则表达式操作 --- re.sub - Python 3 中文文档](https://docs.python.org/zh-cn/3/library/re.html#re.sub)》