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
    Post: '/:cat/:slug.html',
    Tag: '/tag/:id',
  },

  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
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
          output: '/feed.xml'
        },
        atom: {
          enabled: true,
          output: '/feed.atom'
        },
        htmlFields: ['description', 'content'],
        enforceTrailingSlashes: false,
        filterNodes: node => node.published,
        nodeToFeedItem: node => ({
          title: node.title,
          date: node.date,
          content: marked(node.content),
        }),
      },
    },
    {
      use: '@gridsome/plugin-sitemap',
      // options: {
      //   exclude: ['/exclude-me'],
      //   config: {
      //     '/articles/*': {
      //       changefreq: 'weekly',
      //       priority: 0.5,
      //       lastmod: '2020-02-19',
      //     },
      //     '/about': {
      //       changefreq: 'monthly',
      //       priority: 0.7,
      //       lastmod: '2020-05-12',
      //     }
      //   }
      // }
    },
    {
      use: "gridsome-plugin-service-worker",
      options: {
        networkFirst: {
          cacheName: "sw-nf",
          routes: ["/", /\.(js|css|png|jpg|webp)/],
        },
        // precachedRoutes: ["/"],
        // cacheOnly: {
        //   cacheName: "sw-co",
        //   routes: ["/"],
        // },
      },
    },
    {
      use: "gridsome-plugin-manifest",
      options: {
        background_color: "#fafafa",
        icon_path: "./src/assets/images/favicon.png",
        name: "Monstx's Blog",
        short_name: "monstxBlog",
        theme_color: "#fafafa",
        lang: "en",
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
        '@gridsome/remark-prismjs',
        'gridsome-plugin-remark-container',
        'gridsome-remark-katex',
        'gridsome-remark-figure-caption',
      ],
      config: {
        footnotes: true,
      },
      // grayMatter: {
      //   engines: {
      //     yaml: s => yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA }),
      //   },
      // },
    },
  },
}