// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const marked = require('marked')
// const yaml = require('js-yaml')

module.exports = {
  siteUrl: 'https://blog.monsterx.cn',
  siteName: "Monstx's Blog",
  siteDescription: '学生 / 前端 / 电气',

  templates: {
    Post: '/:cate/:slug',
    Tag: '/tag/:id',
    Category: '/category/:id',
  },

  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          // Creates GraphQL collection from symbols in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true,
          },
          cate: {
            typeName: 'Category',
            create: true,
          },
        },
      },
    },
    {
      use: '@microflash/gridsome-plugin-feed',
      options: {
        contentTypes: ['Post'],
        feedOptions: {
          title: "Monstx's Blog",
          description: 'Monsterx CN - 学生 / 前端 / 电气',
        },
        rss: {
          enabled: true,
          output: '/feed.xml',
        },
        atom: {
          enabled: true,
          output: '/feed.atom',
        },
        htmlFields: ['description', 'content'],
        enforceTrailingSlashes: false,
        filterNodes: (node) => node.published,
        nodeToFeedItem: (node) => ({
          title: node.title,
          date: node.date,
          content: marked(node.content),
        }),
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
    },
    {
      use: '@allanchain/gridsome-plugin-pwa',
      options: {
        manifestPath: 'manifest.json',
        name: "Monstx's Blog",
        themeColor: '#dee1e6',
        scope: '.',
        icon: {
          androidChrome: {
            src: './src/favicon.png',
            name: 'android-chrome',
            sizes: [512, 384, 192, 144, 96, 72, 48],
            maskable: true,
            urls: null,
          },
          msTileImage: {
            src: './src/favicon.png',
            name: 'msapplication-icon',
            size: 144,
            url: null,
          },
          appleMaskIcon: {
            url: './src/favicon.svg',
          },
        },
        maskableIcon: true,
        msTileColor: '#fafafa',
        appleMaskIconColor: '#fafafa',
        appleMobileWebAppCapable: 'yes',
        appleMobileWebAppStatusBarStyle: 'default',
        manifestOptions: {
          short_name: 'MonstxBlog',
          description: 'Monsterx CN - 学生 / 前端 / 电气',
          start_url: 'https://blog.monsterx.cn/',
          display: 'minimal-ui',
          // orientation: 'landscape',
          background_color: '#fafafa',
          lang: 'zh-Hans',
          dir: 'ltr',
        },
        workboxOptions: {
          cacheId: 'msx-pwa-cache',
          skipWaiting: true,
          globPatterns: [
            'assets/@(js|css|static)/*',
            'index.html',
            '**/index.html',
          ],
        },
        // workboxPluginMode: 'injectManifest',
        // workboxOptions: {
        //   swSrc: './src/service-worker.js',
        //   globPatterns: [
        //     '**/index.html',
        //     'assets/@(js|css|static)/*',
        //     'assets/data/**/index.json',
        //   ],
        // },
      },
    },
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      useBuiltIns: true,
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      slug: true,
      autolinkHeadings: true,
      autolinkClassName: 'icon icon-link',
      plugins: [
        ['@gridsome/remark-prismjs', { showLineNumbers: true }],
        'gridsome-plugin-remark-container',
        'gridsome-remark-katex',
        'gridsome-remark-figure-caption',
      ],
      config: {
        footnotes: true,
      },
    },
  },

  css: {
    split: true,
  },
}
