---
title: 为 Gridsome 添加 Artalk 自托管评论系统
date: 2020-08-21
published: true
slug: Use-Self-hosted-Comment-System-In-Gridsome
cat: code
tags: ['Gridsome', 'Vue.js', 'Artalk', 'Blog']
cover_image: "./images/gridsome-artalk.png"
canonical_url: 'https://blog.monsterx.cn/code/use-self-hosted-comment-system-in-gridsome/'
description: "考虑到小站的访客还不是人均科学上网的水平，我折腾了一天从 Disqus 换到了友链写的自托管评论系统 Artalk，数据迁移啥就以后再说吧，咕咕咕.."
---

本文介绍在 Gridsome 博客中启用 Artalk 自托管评论系统的方法。欢迎尝试这款小众的、漂亮的评论系统！

刚开这个小站时打算一劳永逸吃上 Disqus 这块香饽饽，结果没两天我的宝贝室友就跟我说：你站怎么没法评论啊？我深思熟虑之后决定还是不用 Disqus 了。换 Gitalk？不行不行，Gitalk 虽好但是每一个新站点都需要 GitHub 账号授权一次，而且国内访问也体验不佳。Valine 之流我不太喜欢，其他的评论系统我都不甚了解。那该何去何从呢？

## 选择 Artalk 的理由

由于水平不足，我是没法自己写一个评论系统的，于是我决定在友链 [@QWQAQ](https://qwqaq.com/) 和 [@TonyHe](https://www.ouorz.com/) 两位大佬的两个评论系统里选一个，要知道缝合代码、借用轮子这种事我最擅长了。那么是用 [@qwqcode/Artalk](https://github.com/qwqcode/Artalk) 还是 [@HelipengTony/nexment](https://github.com/HelipengTony/nexment) 呢？

外行人看热闹，我以一个前端菜鸟的水平不足以在架构上对两个评论系统做出优劣比较，所以以下只是我个人选择的理由。

Nexment 是 ~~React.js 编写~~ 「计划全平台、全框架适配」的基于 LeanCloud 实现 Serverless 的评论系统，官方提供了 React.js 和 Vue.js 示例，有自己的文档（虽然 Tony 好像还没有写详细，但至少有一个站点在那）。官方示例站点 [Nextment for React Demo](https://nexment-demo.ouorz.com/) / [Nextment for Vue Demo](https://nexment-vue-demo.ouorz.com/)，我觉得新颖的点在弹窗显示多级评论上，在我逛的博客圈子里比较少见。部署的话需要提前配置 LeanCloud 的数据库，这让我停止了思考（我的数据库放在别人那里想想就不靠谱啊喂）。Nexment 诞生于最近一月，截至本文发布前最后一次提交在三天前，作者 TonyHe 感觉是个努力 Coding 的巨佬，毕竟即将出国留学了。

Artalk 是 TypeScript 编写的需要自行部署后端的「一款简洁有趣的自托管评论系统」，数据存放在 JSON 文件中，后续听说也计划增加 MySQL 的支持（我：那样听起来就不太简洁了呢）。需要自行搭建后端估计劝退了很多人，而且目前只支持 PHP 后端，README 里写的 Go、Node.js、Python 后端均迟迟未上线。官方给的示例只有几个 HTML，相当的「简洁」，基本都是在 HTML 引入 `Artalk.css` `Artalk.js` 后一些简单的配置。官方示例站点 [Artalk DEMO](https://artalk.js.org/)，听说在这里可以观察到开发者立 Flag 现场。Artalk 诞生于 2018 年 10 月，截至本文发布前最后一次提交在今年 5 月，考虑到作者 QWQAQ 的学业繁忙，摸鱼也是可以理解的。

简单了解两个评论系统之后，再看自身的 Gridsome 平台，基于 Vue.js。怎么看我都应该选择 Nexment，但是我却选择了 Artalk。原因嘛，自然是图个简单。Artalk 之前就搭建了自己的后端使用过一段时间，官方搭配的滑稽表情包在别的评论系统一众阿鲁表情包、贴吧表情包中独树一帜。更重要的是 Artalk 的代码我能看懂一些，进行自定义修改很方便。Nexment 虽好，但是外观相比 Artalk 我还是更喜欢后者，弹窗多级评论显示对我来说也需求不高，要我看 React.js 项目代码更是劝退。

## 对 Artalk 的修改

Artalk 目前还没有支持夜间模式，原本的样式和本站也不太搭。于是我 Fork 了一份代码针对这两个问题进行修改。

夜间模式主要按照当前主题的配色和 Disqus 样式进行调整。其实之前也尝试配过一个夜间模式，用在自己修改后的 [@monsterxcn/Typecho-Theme-VOID](https://github.com/monsterxcn/Typecho-Theme-VOID) 上，但是代码过于粗糙。我调整颜色的方法甚至是直接将原版压缩后的 `.css` 打开后按 `Ctrl` `F2` 全部替换！剩下的样式代码压缩后即使找工具美化也看的我云里雾里。这次直接克隆仓库安装依赖从源头编译，方便那不是一星半点！

到目前为止，我共进行了 10 次提交，主要对以下这些地方进行了修改：

 - 夜间模式
 - 小屏幕样式部分适配
 - 控制台版权去除
 - 「Power By Artalk」 调整
 - 侧边栏通知中心细节调整

夜间模式的配色均在 [_variables.less](https://github.com/monsterxcn/Artalk/blob/master/src/css/_variables.less) 中定义，以 `--at-` 为前缀。GitHub 仓库地址 [@monsterxcn/Artalk](https://github.com/monsterxcn/Artalk)，搭了个示例站点 [Artalk ♂](https://artalk.vercel.app)。

## 在 Gridsome 上调试

刚使用 Gridsome 大约一周，对它的了解很少，Vue.js 水平连门都入不了。但是这样的我还是花了几个小时将 Artalk 成功适配到了博客。中间踩了几个坑在这里提一下解决方法。

### 安装 Artalk

Artalk 提供了 npm 包，所以可以直接在命令行安装

```bash
npm install artalk --save
```

如果需要安装我修改之后的版本则需要在 `package.json` 中手动写入仓库地址：

```diff
{
  "name": "gridsome-starter-blog",
  "private": true,
  "scripts": {
    "build": "gridsome build",
    "develop": "gridsome develop",
    "explore": "gridsome explore"
  },
  "dependencies": {
    "@gridsome/plugin-google-analytics": "^0.1.0",
    "@gridsome/remark-prismjs": "^0.2.0",
    "@gridsome/source-filesystem": "^0.6.0",
    "@gridsome/transformer-remark": "^0.3.0",
-   "gridsome": "^0.7.0"
+   "gridsome": "^0.7.0",
+   "artalk": "https://github.com/monsterxcn/Artalk.git",
  },
  "devDependencies": {
    "node-sass": "^4.12.0",
    "sass-loader": "^8.0.0"
  }
}
```

### 引入 `Artalk.css`

接下来引用 `Artalk.css` 和 `Artalk.js`，建议单独新建 `ArtalkCards.vue` 文件存放 Artalk 评论组件的代码，只在该模板中引入 `Artalk.css` 即可。

```javascript
import 'artalk/dist/Artalk.css'
```

> 话说主题在 `main.js` 就引入了 `disqusjs.scss` `katex.css` 我觉得也不理智，于是将它们统统改到了文章页的模板中，效果应该不错。 

### 引入 `Artalk.js`

最初引入 `Artalk.js` 时，我参考主题使用 DisqusJS 的方法在 `.vue` 模板文件的 `<script>` 标签中这样写：

```javascript
import 'artalk/dist/Artalk.css'
import Artalk from 'artalk'

export default {

  // ...

  mounted() {
    // Initialize post comment by Artalk
    if (process.env.NODE_ENV === 'production') {
      var artalk = new Artalk({
        el: '#artalkcomments',
        placeholder: '说点什么 (づ￣ 3￣)づ',
        defaultAvatar: 'mp',
        pageKey: 'https://blog.monsterx.cn/some-page/',
        serverUrl: 'https://lab.mocurio.com/artalk/',
        readMore: {
          pageSize: 15,
          autoLoad: true,
        },
      })
    }
  },
}
```

`gridsome develop` 预览正常，但是发布时遇到「ReferenceError: window is not defined」，提示的报错信息都来自 `node_modules/artalk/dist/Artalk.js`，我以为是自己修改 Artalk 出的问题，于是又回去修改 Artalk 代码，将网上用来解决这个问题的几个方法都试了一遍依旧报错。正当我迷惑时，突然想到了 Gridsome 的源头 Vue.js 本身，于是我一拍脑袋在搜索时加了关键词 `gridsome`，这才发现原来和「Client API」有关。

几个参考链接《[javascript - 'window' is not defined in Vue.js 2 - Stack Overflow](https://stackoverflow.com/questions/40707481/window-is-not-defined-in-vue-js-2)》《[Failed to render / ReferenceError: window is not defined (vue2-leaflet) - issue #646 - GitHub @gridsome/gridsome](https://github.com/gridsome/gridsome/issues/646)》《[Client API - Gridsome](https://gridsome.org/docs/client-api/#isclient)》

虽然不知道这是个什么东西，但是大概说的是有些代码只能在客户端跑，服务端无法 ~~执行~~「渲染」，比如 `window` 的操作。要说专业点，应该是关乎 S(erver) S(ide) R(ender)「服务器端渲染」的机制。根据上面第二个链接中 [IHIutch 的回答](https://github.com/gridsome/gridsome/issues/646#issuecomment-578367659)，成功找到了解决方案：

```diff
import 'artalk/dist/Artalk.css'
-import Artalk from 'artalk'
+let Artalk = {}

export default {

  // ...

  mounted() {
    // Initialize post comment by Artalk
    if (process.env.NODE_ENV === 'production') {
+     Artalk = require('artalk')
      var artalk = new Artalk({
        el: '#artalkcomments',
        placeholder: '说点什么 (づ￣ 3￣)づ',
        defaultAvatar: 'mp',
        pageKey: 'https://blog.monsterx.cn/some-page/',
        serverUrl: 'https://lab.mocurio.com/artalk/',
        readMore: {
          pageSize: 15,
          autoLoad: true,
        },
      })
    }
  },
}
```

L11 `process.env.NODE_ENV === 'production'` 和 `process.isClient` 实际效果应该都差不多。

## 最终模板

在 `/src/components` 新建 `ArtalkCards.vue` 作为 Artalk 评论区模板

```html
<template>
  <div class="artalk-cards">
    <details class="admonition admonition-warning">
      <summary>
        Comment on this blog
      </summary>
      <p>
        评论如无特殊原因均不会被删除，提交前请三思。<br />
        你应该懂得如何发表适当的观点，请对自己的言论负责。
      </p>
    </details>
    <div id="LetsArtalk"></div>
  </div>
</template>

<script>
import 'artalk/dist/Artalk.css'
let Artalk = {}
export default {
  mounted() {
    // Initialize post comment by Artalk
    if (process.env.NODE_ENV === 'production') {
      Artalk = require('artalk')
      var artalk = new Artalk({
        el: '#LetsArtalk',
        placeholder: '说点什么 (づ￣ 3￣)づ',
        defaultAvatar: 'mp',
        pageKey: this.$page.post.path,
        serverUrl: 'https://lab.mocurio.com/artalk/',
        readMore: {
          pageSize: 15,
          autoLoad: true,
        },
      })
    }
  },
}
</script>

<page-query>
query Post ($id: ID!) {
  post: post (id: $id) {
    path
  }
}
</page-query>

<style lang="scss">
.artalk-cards {
  background: var(--at-bg-main);
  border-radius: var(--radius);
  max-width: var(--content-width);
  margin: 20px auto 100px;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.02),
    1px 1px 15px 0 rgba(0, 0, 0, 0.03);
  details {
    margin: 0 auto;
    text-align: center;
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    outline: none;
    summary {
      list-style: none;
      margin: 4px auto !important;
      color: var(--cb-admonition-icon-color) !important;
      margin: 2.75rem 0 1rem;
      font-family: var(--title-font-family);
      font-weight: 600;
      line-height: 1.5;
      outline: none;
    }
    summary::-webkit-details-marker {
      display: none;
    }
    p {
      color: var(--at-font-color);
      font-weight: 500;
      margin-bottom: 0;
    }
  }
  #LetsArtalk {
    padding: 20px;
  }
  @media screen and (max-width: 767.5px) {
    details > p {
      text-align: left;
    }
    #LetsArtalk {
      padding: 20px 0 0 0;
      &.artalk > .artalk-editor {
        border-radius: 0;
        margin-bottom: 20px;
      }
      &.artalk
        > .artalk-list
        > .artalk-list-header
        > .artalk-right-action
        > span.artalk-on {
        max-width: 50px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
```

根据需要自己修改下 `<template>` 的内容，注意保证只存在一个「主标签」，比如我的是 `<div class="artalk-cards">`。修改 L29-37 为自己的 Artalk 参数，设置参考 [artalk-config.d.ts](https://github.com/monsterxcn/Artalk/blob/master/types/artalk-config.d.ts)。`<style>` 是我针对当前主题做的一点适配。

在需要开放评论区的地方这样引用：

```html
</template>
  < >
    <ArtalkCards />
  </>
</template>

<script>
import ArtalkCards from '~/components/ArtalkCards'
export default {
  components: {
    ArtalkCards,
  },
}
</script>
```

考虑到能看到这里并且有意愿尝试 Artalk 的人应该极少，我悄悄说一句不介意大家使用我搭的 Artalk PHP 后端，它运行在阿里云学生机，并发访问除了我自己的站点应该就没了，而我自己的站点访问也很少，所以服务器压力不大。将 Artalk 配置中的 `serverUrl` 字段填写为 `https://lab.mocurio.com/artalk/` 来使用本站后端，跨域访问目前是允许的，不必向我申请。

> 其实通过 phpcomposer 安装搭建 Artalk PHP 后端也十分简单，担心引用本站后端存在数据安全问题或其他问题可以尝试自行搭建。如果有问题欢迎留言。