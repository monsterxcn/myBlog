if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,c,i)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const d={uri:location.origin+a.slice(1)};return Promise.all(c.map(a=>{switch(a){case"exports":return s;case"module":return d;default:return e(a)}})).then(e=>{const a=i(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-2b00c8b6"],(function(e){"use strict";e.setCacheNameDetails({prefix:"msx-pwa-cache"}),e.skipWaiting(),e.precacheAndRoute([{url:"/assets/css/0.styles.959d94f0.css",revision:"0548f5e94a6b12667d16b1c3c7909259"},{url:"/assets/css/10.styles.c4971a30.css",revision:"f48bba1a364c9e9b3b3e8af615092b4d"},{url:"/assets/css/11.styles.260b4624.css",revision:"49aa999af539386cd4487343b83b412c"},{url:"/assets/css/2.styles.2931a0ed.css",revision:"bad57334dabfd2775263372adfcc5b63"},{url:"/assets/css/3.styles.41d1c847.css",revision:"3f2f5fb17dc2e6c0e380bf645161c8a9"},{url:"/assets/css/4.styles.6c65bb1e.css",revision:"7a7a77e622d5dcd0ebc6500c95710cc4"},{url:"/assets/css/5.styles.aa09ecc1.css",revision:"51b69d1a0f72c24fea849b5d31633dd2"},{url:"/assets/css/6.styles.e7f158b2.css",revision:"785cf9f0931b1592d3fb243b2c9415c3"},{url:"/assets/css/7.styles.bd4fcc6c.css",revision:"50e9a5f8ad7e1bc3b6a7ff10e7796fc8"},{url:"/assets/css/8.styles.ade877ec.css",revision:"b28f1444339aae2a2c094845bf92233a"},{url:"/assets/css/9.styles.c4971a30.css",revision:"f48bba1a364c9e9b3b3e8af615092b4d"},{url:"/assets/css/styles.df111b13.css",revision:"f178a1f98ca1a9072fddcf57a2249dff"},{url:"/assets/js/app.e49841b7.js",revision:"d58584460e70e58125b6bf9430f44e6b"},{url:"/assets/js/page--src--pages--404-vue.476855e8.js",revision:"404e982ee62bc4c7c1e5b174e5582abf"},{url:"/assets/js/page--src--pages--about-vue.635720c0.js",revision:"c5f52c4dda6bd23cc3f1b3f7b7f9ae75"},{url:"/assets/js/page--src--pages--archives-vue.2decd82b.js",revision:"6c6bebbc07c61f710fcb7d7d5a4363c2"},{url:"/assets/js/page--src--pages--friends-vue.bd410804.js",revision:"5efc3eb768f9e3579352749314375a88"},{url:"/assets/js/page--src--pages--index-vue.62b309b8.js",revision:"aeb5adcbd5dcb91f7f4fc4566233b831"},{url:"/assets/js/page--src--pages--watch-vue.31295ee6.js",revision:"cbe9b6cecf9a0d2d1621b0a8cfab67b3"},{url:"/assets/js/page--src--templates--blog-post-vue.59722749.js",revision:"83ef7adc392d8ae65c82f911b4638974"},{url:"/assets/js/page--src--templates--category-vue.d28f8bf4.js",revision:"2b4174ed1b209079bd19e50f28be0649"},{url:"/assets/js/page--src--templates--tag-vue.8fa7bdde.js",revision:"eecfcfff757e08a531e571eea9b81e20"},{url:"/assets/js/vendors~page--src--pages--about-vue~page--src--pages--watch-vue~page--src--templates--blog-post-vue.54fac1eb.js",revision:"33921177cd953105e4a01babe6054a93"},{url:"/assets/js/vendors~page--src--templates--blog-post-vue.4c1d82c4.js",revision:"8ead0bc1d1585d9fb48d78ed3d4a35e6"},{url:"/assets/static/aria-rss-bangumi.27ec4cf.128ec450120ff0928e23c48d995c622c.png",revision:"b9cf1720e19e5342aa5d5596b1f7741b"},{url:"/assets/static/aria-rss-bangumi.3778461.128ec450120ff0928e23c48d995c622c.png",revision:"c664cd501b16fc534b543f525a8b0143"},{url:"/assets/static/aria-rss-bangumi.a209973.128ec450120ff0928e23c48d995c622c.png",revision:"c664cd501b16fc534b543f525a8b0143"},{url:"/assets/static/aria-rss-bangumi.a67b0b2.128ec450120ff0928e23c48d995c622c.png",revision:"b9cf1720e19e5342aa5d5596b1f7741b"},{url:"/assets/static/auto-checkin-covid19.27ec4cf.c87091a851f8ca767e5cbc6ea41ac4d9.png",revision:"47351c9f9f15d3cc0b05a058cb020767"},{url:"/assets/static/auto-checkin-covid19.3778461.c87091a851f8ca767e5cbc6ea41ac4d9.png",revision:"dbebbe061a44d1bbdf6339012509036c"},{url:"/assets/static/auto-checkin-covid19.a209973.c87091a851f8ca767e5cbc6ea41ac4d9.png",revision:"dbebbe061a44d1bbdf6339012509036c"},{url:"/assets/static/auto-checkin-covid19.a67b0b2.c87091a851f8ca767e5cbc6ea41ac4d9.png",revision:"47351c9f9f15d3cc0b05a058cb020767"},{url:"/assets/static/favicon.1539b60.bf61008f0ef71b874a75ec950abb49a1.png",revision:"76e5c2d431f67304724e297cf979da0a"},{url:"/assets/static/favicon.62d22cb.bf61008f0ef71b874a75ec950abb49a1.png",revision:"eb5a6d83284cd774aa8a0e30f45c82fe"},{url:"/assets/static/favicon.7b22250.bf61008f0ef71b874a75ec950abb49a1.png",revision:"f45c6b675dee2c9b34d8ee7d34eb8323"},{url:"/assets/static/favicon.ac8d93a.bf61008f0ef71b874a75ec950abb49a1.png",revision:"da5363345dcdbcf9406b562de6bf02e3"},{url:"/assets/static/favicon.b9532cc.bf61008f0ef71b874a75ec950abb49a1.png",revision:"334a8480426280f6975de1c825f77742"},{url:"/assets/static/favicon.ce0531f.bf61008f0ef71b874a75ec950abb49a1.png",revision:"aa5db901ad7bcd3d4b9a322992d6d14a"},{url:"/assets/static/favicon.dc0cdc5.bf61008f0ef71b874a75ec950abb49a1.png",revision:"279be98f4fc4a919a1902aff2dc34331"},{url:"/assets/static/favicon.e6b6009.bb50f1698dfbcf84ee87f384c80e7647.png",revision:"bd2ef6ef083507c03342e50694180140"},{url:"/assets/static/favicon.f22e9f3.bf61008f0ef71b874a75ec950abb49a1.png",revision:"7030533df6bc8fa1d3dc24bfce988e2a"},{url:"/assets/static/github-actions-checkin.27ec4cf.5d7dca422dbc10301e4b28618b71683f.png",revision:"0defd5d25fcc8e3a96b6bac0ca2c654f"},{url:"/assets/static/github-actions-checkin.3778461.5d7dca422dbc10301e4b28618b71683f.png",revision:"8bac66254047ac8e2c9da39e51ad2b5e"},{url:"/assets/static/github-actions-checkin.a209973.5d7dca422dbc10301e4b28618b71683f.png",revision:"8bac66254047ac8e2c9da39e51ad2b5e"},{url:"/assets/static/github-actions-checkin.a67b0b2.5d7dca422dbc10301e4b28618b71683f.png",revision:"0defd5d25fcc8e3a96b6bac0ca2c654f"},{url:"/assets/static/gridsome-artalk.27ec4cf.7111a5ea162c336715a3a8768910baf5.png",revision:"74149b980472aeec860c0e43547d9fbe"},{url:"/assets/static/gridsome-artalk.3778461.7111a5ea162c336715a3a8768910baf5.png",revision:"2e456bbf1ae720978bf0ca8b97b2ff4b"},{url:"/assets/static/gridsome-artalk.a209973.7111a5ea162c336715a3a8768910baf5.png",revision:"2e456bbf1ae720978bf0ca8b97b2ff4b"},{url:"/assets/static/gridsome-artalk.a67b0b2.7111a5ea162c336715a3a8768910baf5.png",revision:"74149b980472aeec860c0e43547d9fbe"},{url:"/assets/static/heu-autotask.82a2fbd.22a101484c9f4d4a1d03d2ac7783f0f0.png",revision:"571ce815c656d6e4227a90ba26bb2ba3"},{url:"/assets/static/heu-autotask.ae085b2.22a101484c9f4d4a1d03d2ac7783f0f0.png",revision:"e506cdf294661a797e5dc4fe596210f0"},{url:"/assets/static/heu-checkin1.82a2fbd.2e35e2c967dd8ae72bbd6d3ad3bee786.png",revision:"32957d9584ea096dd5e6ebb11b59d55d"},{url:"/assets/static/heu-checkin1.cbab2cf.2e35e2c967dd8ae72bbd6d3ad3bee786.png",revision:"6cce606e4182123ed3da2c7471eca41f"},{url:"/assets/static/heu-checkin1.eaff22a.2e35e2c967dd8ae72bbd6d3ad3bee786.png",revision:"2e35e2c967dd8ae72bbd6d3ad3bee786"},{url:"/assets/static/heu-checkin2.82a2fbd.a282637541e4f36d4a8e50f3a438dbec.png",revision:"a3b86c852d640badb07cf1580a54a7c0"},{url:"/assets/static/heu-checkin2.cbab2cf.a282637541e4f36d4a8e50f3a438dbec.png",revision:"acb1407dfc2bb5d3063c14d6fa2385ba"},{url:"/assets/static/heu-checkin2.eaff22a.a282637541e4f36d4a8e50f3a438dbec.png",revision:"a282637541e4f36d4a8e50f3a438dbec"},{url:"/assets/static/magisk-sumsung.27ec4cf.1f2c960663536221e315d7c047774c3f.png",revision:"9f854d5edd8445985f96b3c1af430ade"},{url:"/assets/static/magisk-sumsung.3778461.1f2c960663536221e315d7c047774c3f.png",revision:"93c5dc3f3e9d0c613207c8b52d9e623f"},{url:"/assets/static/magisk-sumsung.a209973.1f2c960663536221e315d7c047774c3f.png",revision:"93c5dc3f3e9d0c613207c8b52d9e623f"},{url:"/assets/static/magisk-sumsung.a67b0b2.1f2c960663536221e315d7c047774c3f.png",revision:"9f854d5edd8445985f96b3c1af430ade"},{url:"/assets/static/new-start.27ec4cf.52df37dc915451de3e056b5f7a1c980b.png",revision:"7197b4379ae81d61ff3f63dc7ce85af1"},{url:"/assets/static/new-start.3778461.52df37dc915451de3e056b5f7a1c980b.png",revision:"3d62cddca04072e155453fc60a5c2ebb"},{url:"/assets/static/new-start.a209973.52df37dc915451de3e056b5f7a1c980b.png",revision:"3d62cddca04072e155453fc60a5c2ebb"},{url:"/assets/static/new-start.a67b0b2.52df37dc915451de3e056b5f7a1c980b.png",revision:"7197b4379ae81d61ff3f63dc7ce85af1"},{url:"/assets/static/readme-update-posts.27ec4cf.f393ea57d8de7faf75fb828605c2dbee.png",revision:"e3b5734d520e757f080c661ac429221a"},{url:"/assets/static/readme-update-posts.3778461.f393ea57d8de7faf75fb828605c2dbee.png",revision:"6806cd96da506616ef9c365a66a4c02a"},{url:"/assets/static/readme-update-posts.a209973.f393ea57d8de7faf75fb828605c2dbee.png",revision:"6806cd96da506616ef9c365a66a4c02a"},{url:"/assets/static/readme-update-posts.a67b0b2.f393ea57d8de7faf75fb828605c2dbee.png",revision:"e3b5734d520e757f080c661ac429221a"},{url:"/index.html",revision:"16f8819ce19b7a43bea358002049a11d"},{url:"/2/index.html",revision:"4186ea2c33fa02b08b12893613a31644"},{url:"/404/index.html",revision:"5c9519ebbeb796413ffba2919b6ac80d"},{url:"/about/index.html",revision:"84d6465563052b0b22da7833f656b72a"},{url:"/archives/index.html",revision:"2cda758686bb3175b0afd2a73fa35155"},{url:"/category/code/index.html",revision:"3154359d67b971b6959ab066fe4bc847"},{url:"/category/life/index.html",revision:"c50b474cc4415f054055bb8e8f71f861"},{url:"/category/tech/index.html",revision:"a29b66a4058a45ff4caff922d1e22365"},{url:"/code/heu-auto-checkin-covid19/index.html",revision:"4c210da0f0465fd228a8aac0d4b0a532"},{url:"/code/update-your-posts-in-readme/index.html",revision:"df60501b66323e6bee54dda610d1c9ae"},{url:"/code/use-self-hosted-comment-system-in-gridsome/index.html",revision:"657a3b4771f86764e0cd658b348b6610"},{url:"/friends/index.html",revision:"fbd131b62d8a9eb8e42c4f27da33de38"},{url:"/life/2018-annual-summary/index.html",revision:"0365f3a31eb2a5cf0b3686f1841f8f51"},{url:"/life/2019-annual-summary/index.html",revision:"44c6dec36e591725796c131ab215e6ab"},{url:"/life/2020-annual-summary/index.html",revision:"2a3dba1ba87e1fb03a6c12044ac11ec8"},{url:"/life/daily-death/index.html",revision:"a1ddf896fe1d3886a178033ceafe754f"},{url:"/life/daily-impermanence/index.html",revision:"066f1b39d8b345b63198ff30da41a75e"},{url:"/life/heu-in-amazing-walls/index.html",revision:"89d539b31fbe967b405b438b33a20305"},{url:"/life/new-start-with-gridsome/index.html",revision:"c891e0ae8e2e2b1ecc75d4a1b099e7b5"},{url:"/tag/2018/index.html",revision:"9a53e034684b4010886015bef2baff57"},{url:"/tag/2019/index.html",revision:"93eb2ae351848de5046eabe237928980"},{url:"/tag/2020/index.html",revision:"917ffc0c76def3365aa54c397496cf3e"},{url:"/tag/Android/index.html",revision:"89a9afeab41a6e61fe333af3e14f73c1"},{url:"/tag/Aria2/index.html",revision:"4c47175ed279512e70ed6bdc2f3731fe"},{url:"/tag/Artalk/index.html",revision:"191d86f5c1c53653b82bd1190ca6eff4"},{url:"/tag/COVID-19/index.html",revision:"5d9f11235d1073a84e9940d5ad1aa9c0"},{url:"/tag/cron/index.html",revision:"1e05850b3dce0f8567965f0f7fb364ad"},{url:"/tag/FlexGet/index.html",revision:"a3c5955da74f5602b1b07b290a12f0e1"},{url:"/tag/GitHub Actions/index.html",revision:"101d12d11af9b45f482e7f789193583e"},{url:"/tag/Gridsome/index.html",revision:"ee0158dcd24a6a0785e81dcf5a7de26f"},{url:"/tag/HEU/index.html",revision:"8d9464cc45c57ecd9a09b87133a7595d"},{url:"/tag/Magisk/index.html",revision:"a0d8409b9dd2697872f0977f7c0509bf"},{url:"/tag/Markdown/index.html",revision:"624d69335cc4c862f86a1caee33bcfa9"},{url:"/tag/Python/index.html",revision:"481f02f9f8342d60111f4f0f10439e25"},{url:"/tag/RSS/index.html",revision:"2147fc52b71b0d522b290f48ee851c21"},{url:"/tag/Sumsung/index.html",revision:"a20f41c3784bfaa9a49ff3e1c41d9e51"},{url:"/tag/Vue.js/index.html",revision:"e62049199b6867ff5775fe7823609e88"},{url:"/tag/webdrivers/index.html",revision:"67d9fb31333ee090714a9a36017d5132"},{url:"/tag/回忆/index.html",revision:"35cac983edea0dc8ef8997680521f638"},{url:"/tag/年报/index.html",revision:"6d4fc5fafe375057b39ea5a9d92deca0"},{url:"/tag/手帐/index.html",revision:"033b8f169a7fae930f7391ce942dee06"},{url:"/tag/梦境/index.html",revision:"9624b6170485373f0f0369d84756d188"},{url:"/tech/auto-download-bangumi-with-aria2-rss/index.html",revision:"34817d168ac4cdac6178f7d00d67388e"},{url:"/tech/flash-magisk-latest-4-sumsung-s10-5-g-exynos/index.html",revision:"61b824baaf93a9f8cd81cbec61227417"},{url:"/tech/modified-github-actions-4-heu-checkin/index.html",revision:"1f13c02b71d9d4dcc9396f29838bb195"},{url:"/watch/index.html",revision:"e38cc85fbcc9bc35ed72e590620eae3b"}],{})}));
