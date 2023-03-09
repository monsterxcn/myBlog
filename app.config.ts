export default defineAppConfig({
  msx: {
    /** 站点标题 */
    title: "Monstx's Blog",
    /** 站点描述 */
    description: '',
    /** 站点 Logo */
    logo: '/avatar.png',
    /** 站点 ICP 备案号 */
    icp: '皖 ICP 备 18021272 号 - 1',
    /** 站点建立年份 */
    year: '',
    /** 站点导航配置 */
    pages: {
      '源': '/',
      '册': '/archives',
      '娱': '/play',
      '友': '/friends',
      '吾': '/about',
    },
    /** 社交链接配置 */
    socials: {
      github: 'monsterxcn',
      twitter: 'monsterxcn',
      telegram: 'monsterxcn'
    }
  },
  artalkConf: {
    // el & pageKey 自动生成
    placeholder: " 说点什么 (づ￣ 3￣) づ",
    gravatar: {
      mirror: "https://cravatar.cn/avatar/",
      default: "mp",
    },
    nestMax: 2,
    pageKey: "https://blog.monsterx.cn",
    server: "https://monsterx.cn/ArtalkServer",
    pagination: {
      pageSize: 10,
      readMore: true,
      autoLoad: false,
    },
    useBackendConf: false,
  },
  nuxtIcon: {
    class: 'icon',
    aliases: {
      'logo-svg': 'twemoji:zany-face',
      'index-page': 'ph:house-bold',
      'archives-page': 'ph:book-bold',
      'play-page': 'ph:game-controller-bold',
      'friends-page': 'ph:users-bold',
      'about-page': 'ph:info-bold',
      'prev-icon': 'ph:caret-left-bold',
      'next-icon': 'ph:caret-right-bold',
      'totop-btn': 'ph:arrow-line-up-bold',
      'toc-btn': 'ph:list-bold',
      'comment-btn': 'ph:fire-bold',
      'system-mode': 'ph:desktop-bold',
      'light-mode': 'ph:sun-bold',
      'dark-mode': 'ph:moon-bold',
      'sepia-mode': 'ph:coffee-bold',
      'copyright': 'ph:copyright-bold',
      'heart': 'ph:heart-straight-fill',
      'nuxt': 'logos:nuxt-icon',
      'tailwind': 'logos:tailwindcss-icon',
      'unocss': 'logos:unocss',
    }
  }
})
