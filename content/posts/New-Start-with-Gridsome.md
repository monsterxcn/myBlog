---
title: 新起点 × 博客中文排版
date: 2020-08-15
published: true
slug: New-Start-with-Gridsome
cat: life
tags: ['Gridsome', 'Blog', 'Markdown']
cover_image: "./images/new-start.png"
canonical_url: "https://blog.monsterx.cn/life/new-start-with-gridsome/"
description: "在这普通的一天，这个普通的博客诞生 / 重生了。本文简单介绍下目前的情况、新的中文格式排版和 Markdown 规则以及从旧的 Typecho 手动迁移时一些琐碎的记录。"
---

在这普通的一天，我穿着普通的鞋，很普通地呆在这普通的家，掏出普通的耳机，找点普通的感觉，来一首我最爱的普通音乐，踩着普通的鼓点，世界随着我旋转，这让我普通地单曲循环，跟着普通的节奏，手腕普通地抖动，这普通的一切，都变得不同……

## 新的平台

博客稳定两周年之际，我正式从动态博客迁移至静态博客，如你所见这个博客正由 [Gridsome](https://gridsome.org) 驱动着。「Gridsome 是一个免费、开源、基于 Vue.js 构建的框架，用 Gridsome 创建的网站和应用程序具有天然的速度优势」，身边用 [Hexo](https://hexo.io) 的人似乎太多了，喜欢尝试小众作品的我选择了 Gridsome。除此之外，似乎是从给旧站点加了 Statusbot [状态监控](https://status.monsterx.cn) 开始站内垃圾评论数量陡增，一直在用 Typecho 原生评论的我实在顶不住，评论拦截插件虽然也有，但都不太能满足我的需求，索性换个评论系统加入大家都说好的 Disqus 大家族了。

使用 Disqus 的痛处其一是评论数据同步，手动导入了两篇文章的数据之后发现评论区头像都无法显示，网上的解决方案似乎得购买 Disqus 商业套餐。其二是国内用户上网环境不佳便无法评论，向来冷清的本站雪上加霜，以后可能会考虑在国内服务器上继续部署 [Artalk](https://lab.mocurio.com/artalk.html) 评论系统以供 ~~小部分人的需求~~ 自娱自乐。

本站的主题参考 [@Spencer's Blog](https://blog.spencerwoo.com) 和 [@Jalen's Blog](https://blog.jalenchuh.cn) 的仓库修改，基于 [@gridsome/gridsome-starter-blog](https://github.com/gridsome/gridsome-starter-blog)。静态博客可以自由部署在很多地方，目前这个博客通过 GitHub Actions 自动构建静态文件发布到私有仓库的分支和阿里云 OSS，配合阿里云全站加速供中国境内访问，同时部署到 Cloudflare Workers Sites 供境外访问。以前将域名的境内境外解析拆分，是考虑国外可能会有人访问，现在想明白了，这其实是为了国内日常科学上网的同志们。就算是「人在纽约」访问本站应该也能获取稍快的体验。

## 文章排版

格式工整的文章让人阅读的欲望更强烈。参照众多中文博客排版、GitHub 热门项目文档排版、GitHub 仓库 [@sparanoid/chinese-copywriting-guidelines](https://github.com/sparanoid/chinese-copywriting-guidelines) 以及我的个人偏好，将本博客的 Markdown 文件书写规则做一点说明，有冲突时优先考虑下文的规则。

 - 标点符号
   + 中文内容不掺杂半角标点符号，英文内容不掺杂全角标点符号
   + 中文内容使用全角直角引号代替全角双引号
   + 数字内容使用半角字符
   + 不使用重复的标点符号，「...」除外
   + 内容必须以标点符号结尾，表格、列表、代码除外
 - 空格
   + 中英文之间留空格，（按照官方格式书写）
   + 中文与数字、数字与单位（「°」「℃」「%」除外）之间留空格
   + 全角标点符号前后不留空格
   + 省略号「……」后留一个空格
 - 名词
   + 「豆瓣FM」等同时包含中英文的产品名词按照官方格式书写
   + 专有名词使用官方格式的大小写和缩写
 - Markdown
   + Markdown 语法优先于 HTML 标签
   + Markdown 标题从 `##` 开始，按内容相关度分段
   + Markdown 语法与前后正文内容之间留一个空格，全角标点符号除外
 - 其他
   + 指示流程的内容按「Step A -> Step B -> Step C」格式书写
   + 指示代码行号的内容按「LNUM \[-ENDNUM\]」格式书写
   + 引用拥有个人主页、博客或 GitHub 账号的人员名称按「@NICKNAME」格式书写
   + 引用 GitHub 的仓库名称按「@USER/REPO」格式书写
   + 引用文献的名称按「原标题 - 来源」格式书写并将链接包含在全角书名号之内
   + 段落中阐述代码用到的「变量名称」「函数名称」等按行内代码块格式书写
   + 段落中非阐述代码用到的且需要强调的内容使用直角引号包围
   + 段落中文件名、文件路径、文件名后缀等内容按行内代码块格式书写
   + 文章正文内各级标题要意义明确、格式一致、保持简洁，不多于两层标题嵌套
   + 文章中表示个人想法、从别处摘抄的内容按照引用格式书写
   + 文章直接引用到正文的内容不符合本站规则的地方需要进行适当调整
   + 文章中引用的、可能存在争议的内容在脚注中进行说明

除去这些规定，在文章的分类和标签上我也相较原来的 Typecho 博客做了些精简。分类目前想法是只保留 [life](https://blog.monsterx.cn/Category/life) [code](https://blog.monsterx.cn/Category/code) [tech](https://blog.monsterx.cn/Category/tech) 三类，分别用来保留筛选后关于「记录生活的手帐、站点杂务」「写代码的探索和思考」「学习某些技术、使用轮子的日志」的内容。每篇文章的标签保持精简，写完整篇文章后提取两到三个关键词作为标签。

做完这些剩下的就是提升自身水平了……

## Keep moving...