if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,c,i)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const d={uri:location.origin+a.slice(1)};return Promise.all(c.map(a=>{switch(a){case"exports":return s;case"module":return d;default:return e(a)}})).then(e=>{const a=i(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-2b00c8b6"],(function(e){"use strict";e.setCacheNameDetails({prefix:"msx-pwa-cache"}),e.skipWaiting(),e.precacheAndRoute([{url:"/assets/css/0.styles.959d94f0.css",revision:"0548f5e94a6b12667d16b1c3c7909259"},{url:"/assets/css/10.styles.3c3a4fb0.css",revision:"5d6e0aa5fcc968315352da2732d0642a"},{url:"/assets/css/11.styles.260b4624.css",revision:"49aa999af539386cd4487343b83b412c"},{url:"/assets/css/2.styles.c4f49575.css",revision:"0f5b1e0ffabf328afb149e90020b882a"},{url:"/assets/css/3.styles.217c6cc6.css",revision:"aea7d6c734cc3c52a77cf38abbc7bc0a"},{url:"/assets/css/4.styles.35d2a724.css",revision:"6733e7947e45a15a2860455e885779ed"},{url:"/assets/css/5.styles.f17c94ed.css",revision:"81abeaa89d6b5048a06fc44d0a0399ce"},{url:"/assets/css/6.styles.2218d2fb.css",revision:"c15cfe5ff4e388af29261a3efd633110"},{url:"/assets/css/7.styles.24cb1078.css",revision:"ee0e326a16b3c47b8325cd99483b3b84"},{url:"/assets/css/8.styles.3e830425.css",revision:"941fbe4309cbdd83bff48bbb6b7f6811"},{url:"/assets/css/9.styles.3c3a4fb0.css",revision:"5d6e0aa5fcc968315352da2732d0642a"},{url:"/assets/css/styles.3be1140a.css",revision:"967cb785220d79f1b8edd8d7d7902d84"},{url:"/assets/js/app.eefcdcf2.js",revision:"171be97b4987c5a8baae08a294833dc9"},{url:"/assets/js/page--src--pages--404-vue.a2d58a70.js",revision:"0e7159062cfb352106cb1f8010a0d49a"},{url:"/assets/js/page--src--pages--about-vue.402f4317.js",revision:"8354f94317c465556283ddd4f1ec7859"},{url:"/assets/js/page--src--pages--archives-vue.e4ff03da.js",revision:"89d897d000d251847ba66c88032ed421"},{url:"/assets/js/page--src--pages--friends-vue.1defe4d5.js",revision:"5efc3eb768f9e3579352749314375a88"},{url:"/assets/js/page--src--pages--index-vue.3854aa09.js",revision:"aeb5adcbd5dcb91f7f4fc4566233b831"},{url:"/assets/js/page--src--pages--watch-vue.cf5c4a7e.js",revision:"7f105f863547f265feca68a40252391e"},{url:"/assets/js/page--src--templates--blog-post-vue.0b9fafba.js",revision:"1bf1e5cca32dc13741f28fe58f8a27be"},{url:"/assets/js/page--src--templates--category-vue.cd7f9d94.js",revision:"2b4174ed1b209079bd19e50f28be0649"},{url:"/assets/js/page--src--templates--tag-vue.66fb13c5.js",revision:"eecfcfff757e08a531e571eea9b81e20"},{url:"/assets/js/vendors~page--src--pages--about-vue~page--src--pages--watch-vue~page--src--templates--blog-post-vue.54fac1eb.js",revision:"33921177cd953105e4a01babe6054a93"},{url:"/assets/js/vendors~page--src--templates--blog-post-vue.2fb6ebc2.js",revision:"8ead0bc1d1585d9fb48d78ed3d4a35e6"},{url:"/assets/static/aria-rss-bangumi.27ec4cf.128ec450120ff0928e23c48d995c622c.png",revision:"b9cf1720e19e5342aa5d5596b1f7741b"},{url:"/assets/static/aria-rss-bangumi.3778461.128ec450120ff0928e23c48d995c622c.png",revision:"c664cd501b16fc534b543f525a8b0143"},{url:"/assets/static/aria-rss-bangumi.a209973.128ec450120ff0928e23c48d995c622c.png",revision:"c664cd501b16fc534b543f525a8b0143"},{url:"/assets/static/aria-rss-bangumi.a67b0b2.128ec450120ff0928e23c48d995c622c.png",revision:"b9cf1720e19e5342aa5d5596b1f7741b"},{url:"/assets/static/auto-checkin-covid19.27ec4cf.c87091a851f8ca767e5cbc6ea41ac4d9.png",revision:"47351c9f9f15d3cc0b05a058cb020767"},{url:"/assets/static/auto-checkin-covid19.3778461.c87091a851f8ca767e5cbc6ea41ac4d9.png",revision:"dbebbe061a44d1bbdf6339012509036c"},{url:"/assets/static/auto-checkin-covid19.a209973.c87091a851f8ca767e5cbc6ea41ac4d9.png",revision:"dbebbe061a44d1bbdf6339012509036c"},{url:"/assets/static/auto-checkin-covid19.a67b0b2.c87091a851f8ca767e5cbc6ea41ac4d9.png",revision:"47351c9f9f15d3cc0b05a058cb020767"},{url:"/assets/static/favicon.1539b60.bf61008f0ef71b874a75ec950abb49a1.png",revision:"76e5c2d431f67304724e297cf979da0a"},{url:"/assets/static/favicon.62d22cb.bf61008f0ef71b874a75ec950abb49a1.png",revision:"eb5a6d83284cd774aa8a0e30f45c82fe"},{url:"/assets/static/favicon.7b22250.bf61008f0ef71b874a75ec950abb49a1.png",revision:"f45c6b675dee2c9b34d8ee7d34eb8323"},{url:"/assets/static/favicon.ac8d93a.bf61008f0ef71b874a75ec950abb49a1.png",revision:"da5363345dcdbcf9406b562de6bf02e3"},{url:"/assets/static/favicon.b9532cc.bf61008f0ef71b874a75ec950abb49a1.png",revision:"334a8480426280f6975de1c825f77742"},{url:"/assets/static/favicon.ce0531f.bf61008f0ef71b874a75ec950abb49a1.png",revision:"aa5db901ad7bcd3d4b9a322992d6d14a"},{url:"/assets/static/favicon.dc0cdc5.bf61008f0ef71b874a75ec950abb49a1.png",revision:"279be98f4fc4a919a1902aff2dc34331"},{url:"/assets/static/favicon.e6b6009.bb50f1698dfbcf84ee87f384c80e7647.png",revision:"bd2ef6ef083507c03342e50694180140"},{url:"/assets/static/favicon.f22e9f3.bf61008f0ef71b874a75ec950abb49a1.png",revision:"7030533df6bc8fa1d3dc24bfce988e2a"},{url:"/assets/static/github-actions-checkin.27ec4cf.5d7dca422dbc10301e4b28618b71683f.png",revision:"0defd5d25fcc8e3a96b6bac0ca2c654f"},{url:"/assets/static/github-actions-checkin.3778461.5d7dca422dbc10301e4b28618b71683f.png",revision:"8bac66254047ac8e2c9da39e51ad2b5e"},{url:"/assets/static/github-actions-checkin.a209973.5d7dca422dbc10301e4b28618b71683f.png",revision:"8bac66254047ac8e2c9da39e51ad2b5e"},{url:"/assets/static/github-actions-checkin.a67b0b2.5d7dca422dbc10301e4b28618b71683f.png",revision:"0defd5d25fcc8e3a96b6bac0ca2c654f"},{url:"/assets/static/gridsome-artalk.27ec4cf.7111a5ea162c336715a3a8768910baf5.png",revision:"74149b980472aeec860c0e43547d9fbe"},{url:"/assets/static/gridsome-artalk.3778461.7111a5ea162c336715a3a8768910baf5.png",revision:"2e456bbf1ae720978bf0ca8b97b2ff4b"},{url:"/assets/static/gridsome-artalk.a209973.7111a5ea162c336715a3a8768910baf5.png",revision:"2e456bbf1ae720978bf0ca8b97b2ff4b"},{url:"/assets/static/gridsome-artalk.a67b0b2.7111a5ea162c336715a3a8768910baf5.png",revision:"74149b980472aeec860c0e43547d9fbe"},{url:"/assets/static/heu-autotask.82a2fbd.22a101484c9f4d4a1d03d2ac7783f0f0.png",revision:"571ce815c656d6e4227a90ba26bb2ba3"},{url:"/assets/static/heu-autotask.ae085b2.22a101484c9f4d4a1d03d2ac7783f0f0.png",revision:"e506cdf294661a797e5dc4fe596210f0"},{url:"/assets/static/heu-checkin1.82a2fbd.2e35e2c967dd8ae72bbd6d3ad3bee786.png",revision:"32957d9584ea096dd5e6ebb11b59d55d"},{url:"/assets/static/heu-checkin1.cbab2cf.2e35e2c967dd8ae72bbd6d3ad3bee786.png",revision:"6cce606e4182123ed3da2c7471eca41f"},{url:"/assets/static/heu-checkin1.eaff22a.2e35e2c967dd8ae72bbd6d3ad3bee786.png",revision:"2e35e2c967dd8ae72bbd6d3ad3bee786"},{url:"/assets/static/heu-checkin2.82a2fbd.a282637541e4f36d4a8e50f3a438dbec.png",revision:"a3b86c852d640badb07cf1580a54a7c0"},{url:"/assets/static/heu-checkin2.cbab2cf.a282637541e4f36d4a8e50f3a438dbec.png",revision:"acb1407dfc2bb5d3063c14d6fa2385ba"},{url:"/assets/static/heu-checkin2.eaff22a.a282637541e4f36d4a8e50f3a438dbec.png",revision:"a282637541e4f36d4a8e50f3a438dbec"},{url:"/assets/static/magisk-sumsung.27ec4cf.1f2c960663536221e315d7c047774c3f.png",revision:"9f854d5edd8445985f96b3c1af430ade"},{url:"/assets/static/magisk-sumsung.3778461.1f2c960663536221e315d7c047774c3f.png",revision:"93c5dc3f3e9d0c613207c8b52d9e623f"},{url:"/assets/static/magisk-sumsung.a209973.1f2c960663536221e315d7c047774c3f.png",revision:"93c5dc3f3e9d0c613207c8b52d9e623f"},{url:"/assets/static/magisk-sumsung.a67b0b2.1f2c960663536221e315d7c047774c3f.png",revision:"9f854d5edd8445985f96b3c1af430ade"},{url:"/assets/static/new-start.27ec4cf.52df37dc915451de3e056b5f7a1c980b.png",revision:"7197b4379ae81d61ff3f63dc7ce85af1"},{url:"/assets/static/new-start.3778461.52df37dc915451de3e056b5f7a1c980b.png",revision:"3d62cddca04072e155453fc60a5c2ebb"},{url:"/assets/static/new-start.a209973.52df37dc915451de3e056b5f7a1c980b.png",revision:"3d62cddca04072e155453fc60a5c2ebb"},{url:"/assets/static/new-start.a67b0b2.52df37dc915451de3e056b5f7a1c980b.png",revision:"7197b4379ae81d61ff3f63dc7ce85af1"},{url:"/assets/static/readme-update-posts.27ec4cf.f393ea57d8de7faf75fb828605c2dbee.png",revision:"e3b5734d520e757f080c661ac429221a"},{url:"/assets/static/readme-update-posts.3778461.f393ea57d8de7faf75fb828605c2dbee.png",revision:"6806cd96da506616ef9c365a66a4c02a"},{url:"/assets/static/readme-update-posts.a209973.f393ea57d8de7faf75fb828605c2dbee.png",revision:"6806cd96da506616ef9c365a66a4c02a"},{url:"/assets/static/readme-update-posts.a67b0b2.f393ea57d8de7faf75fb828605c2dbee.png",revision:"e3b5734d520e757f080c661ac429221a"},{url:"/index.html",revision:"23ca138aa82893538685d6689d6483f9"},{url:"/2/index.html",revision:"6d05cbb444ec1799797b15e63ad2fbec"},{url:"/404/index.html",revision:"948cfa140bea52452c517e3e6c006e73"},{url:"/about/index.html",revision:"978017e7645d0854702529cdfd534522"},{url:"/archives/index.html",revision:"228c217b11160095cf44c23ae25f995f"},{url:"/category/code/index.html",revision:"adb1096db47e44e52072c477a2e40222"},{url:"/category/life/index.html",revision:"2a5740be34362353b5fd50c3e43a957d"},{url:"/category/tech/index.html",revision:"15b4881a955ce15a576695f280274407"},{url:"/code/heu-auto-checkin-covid19/index.html",revision:"9695663da53bc18e3851b7349ded1381"},{url:"/code/update-your-posts-in-readme/index.html",revision:"ec08ab2c200723d1f44b1f30ed7b2420"},{url:"/code/use-self-hosted-comment-system-in-gridsome/index.html",revision:"ca503c76cc107688399e22914c9439ed"},{url:"/friends/index.html",revision:"4e5833295e7adec2df9be695ec5b6589"},{url:"/life/2018-annual-summary/index.html",revision:"6087b270748f03797e8bab8a00a40888"},{url:"/life/2019-annual-summary/index.html",revision:"130480c8bb997999b257109100603b18"},{url:"/life/2020-annual-summary/index.html",revision:"762640acc8cbb08caf7789c43a9032dc"},{url:"/life/daily-impermanence/index.html",revision:"44b76a8e01d9b1ca9e8259a7802318ef"},{url:"/life/heu-in-amazing-walls/index.html",revision:"2f0f3114c251e13176b0437251f6bad5"},{url:"/life/new-start-with-gridsome/index.html",revision:"e564f92270ae741da6b0455b4230472a"},{url:"/tag/2018/index.html",revision:"ad297380a87e28483643c3930b96ebbc"},{url:"/tag/2019/index.html",revision:"9d5dd014512a32ca7604378b0fb9abb5"},{url:"/tag/2020/index.html",revision:"7567f881fc22396c2972967d8f994760"},{url:"/tag/Android/index.html",revision:"21efd3d2ebdceda349dddd9f5b61c634"},{url:"/tag/Aria2/index.html",revision:"9c6ba10d60af43fc6bd0ce1c4fd6d2a7"},{url:"/tag/Artalk/index.html",revision:"eb350a5f524a8ca7c78ac279d25bb462"},{url:"/tag/COVID-19/index.html",revision:"b45298313dd8aeb3af11ef89ead2a431"},{url:"/tag/cron/index.html",revision:"42346748935831a82e2c6b127ecc2ed5"},{url:"/tag/FlexGet/index.html",revision:"236f037a6d5c507917133a22f879adae"},{url:"/tag/GitHub Actions/index.html",revision:"a750c2fe044cef887f3462492e4be707"},{url:"/tag/Gridsome/index.html",revision:"2a427dcdf727b8e555492e081812f6c2"},{url:"/tag/HEU/index.html",revision:"494105486c243780cbd4ac8e1bf039f7"},{url:"/tag/Magisk/index.html",revision:"b8d98fc3ce7c189204a8fcb60c33b803"},{url:"/tag/Markdown/index.html",revision:"a656a4c4db6ecf943bd8803a40c48b8f"},{url:"/tag/Python/index.html",revision:"f0702a5f6c9ffe401a6b1ebaea289923"},{url:"/tag/RSS/index.html",revision:"7dd842ede8580c6aeee2b8695edc42e6"},{url:"/tag/Sumsung/index.html",revision:"a71beac2c5acc048ec480c3ce4d775e1"},{url:"/tag/Vue.js/index.html",revision:"aebaa7583411ca6bdac55f9bd415fe80"},{url:"/tag/webdrivers/index.html",revision:"afe3f094b4a95104fb43223cb342855d"},{url:"/tag/年报/index.html",revision:"ac53caa686574600f83ab2b99f59b63f"},{url:"/tag/手帐/index.html",revision:"dede31fd127fe814c802d0ffa9fed568"},{url:"/tech/auto-download-bangumi-with-aria2-rss/index.html",revision:"8e854e1ac0d98ca6864e5c4ca08b9c3b"},{url:"/tech/flash-magisk-latest-4-sumsung-s10-5-g-exynos/index.html",revision:"bf83df324daf18c64c99bfe7d80aabfb"},{url:"/tech/modified-github-actions-4-heu-checkin/index.html",revision:"28e96f3aa12cb0b9c3082e0e8afc6b4e"},{url:"/watch/index.html",revision:"36e0ebbaa6c26230cf4825356a97ba24"}],{})}));
