if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,c,i)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const d={uri:location.origin+a.slice(1)};return Promise.all(c.map(a=>{switch(a){case"exports":return s;case"module":return d;default:return e(a)}})).then(e=>{const a=i(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-2b00c8b6"],(function(e){"use strict";e.setCacheNameDetails({prefix:"msx-pwa-cache"}),e.skipWaiting(),e.precacheAndRoute([{url:"/assets/css/0.styles.959d94f0.css",revision:"0548f5e94a6b12667d16b1c3c7909259"},{url:"/assets/css/10.styles.c4971a30.css",revision:"f48bba1a364c9e9b3b3e8af615092b4d"},{url:"/assets/css/11.styles.260b4624.css",revision:"49aa999af539386cd4487343b83b412c"},{url:"/assets/css/2.styles.2931a0ed.css",revision:"bad57334dabfd2775263372adfcc5b63"},{url:"/assets/css/3.styles.41d1c847.css",revision:"3f2f5fb17dc2e6c0e380bf645161c8a9"},{url:"/assets/css/4.styles.6c65bb1e.css",revision:"7a7a77e622d5dcd0ebc6500c95710cc4"},{url:"/assets/css/5.styles.aa09ecc1.css",revision:"51b69d1a0f72c24fea849b5d31633dd2"},{url:"/assets/css/6.styles.e7f158b2.css",revision:"785cf9f0931b1592d3fb243b2c9415c3"},{url:"/assets/css/7.styles.bd4fcc6c.css",revision:"50e9a5f8ad7e1bc3b6a7ff10e7796fc8"},{url:"/assets/css/8.styles.ade877ec.css",revision:"b28f1444339aae2a2c094845bf92233a"},{url:"/assets/css/9.styles.c4971a30.css",revision:"f48bba1a364c9e9b3b3e8af615092b4d"},{url:"/assets/css/styles.2b24e88b.css",revision:"f16fd7744d31257ade27e84761dc36ad"},{url:"/assets/js/app.8464003a.js",revision:"843a967b833cf827154d358091e268bd"},{url:"/assets/js/page--src--pages--404-vue.bbfc967c.js",revision:"404e982ee62bc4c7c1e5b174e5582abf"},{url:"/assets/js/page--src--pages--about-vue.daf06098.js",revision:"b8276320b48d1278fb511ce413dbff0a"},{url:"/assets/js/page--src--pages--archives-vue.5ceb78a2.js",revision:"c0f8d229b9c8306c4d7304dd70ef5727"},{url:"/assets/js/page--src--pages--friends-vue.f302077a.js",revision:"5efc3eb768f9e3579352749314375a88"},{url:"/assets/js/page--src--pages--index-vue.85ed487e.js",revision:"aeb5adcbd5dcb91f7f4fc4566233b831"},{url:"/assets/js/page--src--pages--watch-vue.663e744b.js",revision:"3278a6d0828b07e050d858a07d377f0b"},{url:"/assets/js/page--src--templates--blog-post-vue.40b86fb1.js",revision:"83ef7adc392d8ae65c82f911b4638974"},{url:"/assets/js/page--src--templates--category-vue.21bea524.js",revision:"2b4174ed1b209079bd19e50f28be0649"},{url:"/assets/js/page--src--templates--tag-vue.ca084490.js",revision:"eecfcfff757e08a531e571eea9b81e20"},{url:"/assets/js/vendors~page--src--pages--about-vue~page--src--pages--watch-vue~page--src--templates--blog-post-vue.54fac1eb.js",revision:"33921177cd953105e4a01babe6054a93"},{url:"/assets/js/vendors~page--src--templates--blog-post-vue.286a5ae8.js",revision:"8ead0bc1d1585d9fb48d78ed3d4a35e6"},{url:"/assets/static/aria-rss-bangumi.27ec4cf.128ec450120ff0928e23c48d995c622c.png",revision:"b9cf1720e19e5342aa5d5596b1f7741b"},{url:"/assets/static/aria-rss-bangumi.3778461.128ec450120ff0928e23c48d995c622c.png",revision:"c664cd501b16fc534b543f525a8b0143"},{url:"/assets/static/aria-rss-bangumi.a209973.128ec450120ff0928e23c48d995c622c.png",revision:"c664cd501b16fc534b543f525a8b0143"},{url:"/assets/static/aria-rss-bangumi.a67b0b2.128ec450120ff0928e23c48d995c622c.png",revision:"b9cf1720e19e5342aa5d5596b1f7741b"},{url:"/assets/static/auto-checkin-covid19.27ec4cf.c87091a851f8ca767e5cbc6ea41ac4d9.png",revision:"47351c9f9f15d3cc0b05a058cb020767"},{url:"/assets/static/auto-checkin-covid19.3778461.c87091a851f8ca767e5cbc6ea41ac4d9.png",revision:"dbebbe061a44d1bbdf6339012509036c"},{url:"/assets/static/auto-checkin-covid19.a209973.c87091a851f8ca767e5cbc6ea41ac4d9.png",revision:"dbebbe061a44d1bbdf6339012509036c"},{url:"/assets/static/auto-checkin-covid19.a67b0b2.c87091a851f8ca767e5cbc6ea41ac4d9.png",revision:"47351c9f9f15d3cc0b05a058cb020767"},{url:"/assets/static/favicon.1539b60.bf61008f0ef71b874a75ec950abb49a1.png",revision:"76e5c2d431f67304724e297cf979da0a"},{url:"/assets/static/favicon.62d22cb.bf61008f0ef71b874a75ec950abb49a1.png",revision:"eb5a6d83284cd774aa8a0e30f45c82fe"},{url:"/assets/static/favicon.7b22250.bf61008f0ef71b874a75ec950abb49a1.png",revision:"f45c6b675dee2c9b34d8ee7d34eb8323"},{url:"/assets/static/favicon.ac8d93a.bf61008f0ef71b874a75ec950abb49a1.png",revision:"da5363345dcdbcf9406b562de6bf02e3"},{url:"/assets/static/favicon.b9532cc.bf61008f0ef71b874a75ec950abb49a1.png",revision:"334a8480426280f6975de1c825f77742"},{url:"/assets/static/favicon.ce0531f.bf61008f0ef71b874a75ec950abb49a1.png",revision:"aa5db901ad7bcd3d4b9a322992d6d14a"},{url:"/assets/static/favicon.dc0cdc5.bf61008f0ef71b874a75ec950abb49a1.png",revision:"279be98f4fc4a919a1902aff2dc34331"},{url:"/assets/static/favicon.e6b6009.bb50f1698dfbcf84ee87f384c80e7647.png",revision:"bd2ef6ef083507c03342e50694180140"},{url:"/assets/static/favicon.f22e9f3.bf61008f0ef71b874a75ec950abb49a1.png",revision:"7030533df6bc8fa1d3dc24bfce988e2a"},{url:"/assets/static/github-actions-checkin.27ec4cf.5d7dca422dbc10301e4b28618b71683f.png",revision:"0defd5d25fcc8e3a96b6bac0ca2c654f"},{url:"/assets/static/github-actions-checkin.3778461.5d7dca422dbc10301e4b28618b71683f.png",revision:"8bac66254047ac8e2c9da39e51ad2b5e"},{url:"/assets/static/github-actions-checkin.a209973.5d7dca422dbc10301e4b28618b71683f.png",revision:"8bac66254047ac8e2c9da39e51ad2b5e"},{url:"/assets/static/github-actions-checkin.a67b0b2.5d7dca422dbc10301e4b28618b71683f.png",revision:"0defd5d25fcc8e3a96b6bac0ca2c654f"},{url:"/assets/static/gridsome-artalk.27ec4cf.7111a5ea162c336715a3a8768910baf5.png",revision:"74149b980472aeec860c0e43547d9fbe"},{url:"/assets/static/gridsome-artalk.3778461.7111a5ea162c336715a3a8768910baf5.png",revision:"2e456bbf1ae720978bf0ca8b97b2ff4b"},{url:"/assets/static/gridsome-artalk.a209973.7111a5ea162c336715a3a8768910baf5.png",revision:"2e456bbf1ae720978bf0ca8b97b2ff4b"},{url:"/assets/static/gridsome-artalk.a67b0b2.7111a5ea162c336715a3a8768910baf5.png",revision:"74149b980472aeec860c0e43547d9fbe"},{url:"/assets/static/heu-autotask.82a2fbd.22a101484c9f4d4a1d03d2ac7783f0f0.png",revision:"571ce815c656d6e4227a90ba26bb2ba3"},{url:"/assets/static/heu-autotask.ae085b2.22a101484c9f4d4a1d03d2ac7783f0f0.png",revision:"e506cdf294661a797e5dc4fe596210f0"},{url:"/assets/static/heu-checkin1.82a2fbd.2e35e2c967dd8ae72bbd6d3ad3bee786.png",revision:"32957d9584ea096dd5e6ebb11b59d55d"},{url:"/assets/static/heu-checkin1.cbab2cf.2e35e2c967dd8ae72bbd6d3ad3bee786.png",revision:"6cce606e4182123ed3da2c7471eca41f"},{url:"/assets/static/heu-checkin1.eaff22a.2e35e2c967dd8ae72bbd6d3ad3bee786.png",revision:"2e35e2c967dd8ae72bbd6d3ad3bee786"},{url:"/assets/static/heu-checkin2.82a2fbd.a282637541e4f36d4a8e50f3a438dbec.png",revision:"a3b86c852d640badb07cf1580a54a7c0"},{url:"/assets/static/heu-checkin2.cbab2cf.a282637541e4f36d4a8e50f3a438dbec.png",revision:"acb1407dfc2bb5d3063c14d6fa2385ba"},{url:"/assets/static/heu-checkin2.eaff22a.a282637541e4f36d4a8e50f3a438dbec.png",revision:"a282637541e4f36d4a8e50f3a438dbec"},{url:"/assets/static/magisk-sumsung.27ec4cf.1f2c960663536221e315d7c047774c3f.png",revision:"9f854d5edd8445985f96b3c1af430ade"},{url:"/assets/static/magisk-sumsung.3778461.1f2c960663536221e315d7c047774c3f.png",revision:"93c5dc3f3e9d0c613207c8b52d9e623f"},{url:"/assets/static/magisk-sumsung.a209973.1f2c960663536221e315d7c047774c3f.png",revision:"93c5dc3f3e9d0c613207c8b52d9e623f"},{url:"/assets/static/magisk-sumsung.a67b0b2.1f2c960663536221e315d7c047774c3f.png",revision:"9f854d5edd8445985f96b3c1af430ade"},{url:"/assets/static/new-start.27ec4cf.52df37dc915451de3e056b5f7a1c980b.png",revision:"7197b4379ae81d61ff3f63dc7ce85af1"},{url:"/assets/static/new-start.3778461.52df37dc915451de3e056b5f7a1c980b.png",revision:"3d62cddca04072e155453fc60a5c2ebb"},{url:"/assets/static/new-start.a209973.52df37dc915451de3e056b5f7a1c980b.png",revision:"3d62cddca04072e155453fc60a5c2ebb"},{url:"/assets/static/new-start.a67b0b2.52df37dc915451de3e056b5f7a1c980b.png",revision:"7197b4379ae81d61ff3f63dc7ce85af1"},{url:"/assets/static/readme-update-posts.27ec4cf.f393ea57d8de7faf75fb828605c2dbee.png",revision:"e3b5734d520e757f080c661ac429221a"},{url:"/assets/static/readme-update-posts.3778461.f393ea57d8de7faf75fb828605c2dbee.png",revision:"6806cd96da506616ef9c365a66a4c02a"},{url:"/assets/static/readme-update-posts.a209973.f393ea57d8de7faf75fb828605c2dbee.png",revision:"6806cd96da506616ef9c365a66a4c02a"},{url:"/assets/static/readme-update-posts.a67b0b2.f393ea57d8de7faf75fb828605c2dbee.png",revision:"e3b5734d520e757f080c661ac429221a"},{url:"/index.html",revision:"c7c6b30dc4381fc54e23d13e216d7605"},{url:"/2/index.html",revision:"269616a219ac6b66883ab839cfff0e12"},{url:"/404/index.html",revision:"57fff670174951ff01b87f9213227108"},{url:"/about/index.html",revision:"b74b4e883c324c5830cde8cccd2e4788"},{url:"/archives/index.html",revision:"957902592c724b13dfcc787ec1d8dff2"},{url:"/category/code/index.html",revision:"8c59e3c0a8663ee595230e7128e8b71f"},{url:"/category/life/index.html",revision:"4722506f34a802d95fd59886fa80f42b"},{url:"/category/tech/index.html",revision:"e51f04ac7c22df0f465bdd5547c74677"},{url:"/code/heu-auto-checkin-covid19/index.html",revision:"d68a84b602747e95b9bb4be3af4d8f9e"},{url:"/code/update-your-posts-in-readme/index.html",revision:"5143bd78cf8a77ce6cb29783bb5a6227"},{url:"/code/use-self-hosted-comment-system-in-gridsome/index.html",revision:"f003b7331392b60282c955bc7d1f244a"},{url:"/friends/index.html",revision:"66c5b6164c522918f07567d1c29f022b"},{url:"/life/2018-annual-summary/index.html",revision:"3852dadf6ee6c50d32db9acea2a383ad"},{url:"/life/2019-annual-summary/index.html",revision:"ce66401c0015f9f1d688404f68b19153"},{url:"/life/2020-annual-summary/index.html",revision:"38fb571edbc666ecbec0942d27fc1f9b"},{url:"/life/daily-impermanence/index.html",revision:"bbf486c472a8782e9273de0d39136c07"},{url:"/life/heu-in-amazing-walls/index.html",revision:"42c75fb14c7813fe20dcca777cbdef84"},{url:"/life/new-start-with-gridsome/index.html",revision:"dd9cd7bb190322c0f53b6f923e5c549c"},{url:"/tag/2018/index.html",revision:"2a555521cb0771f5859f5356392bdf9e"},{url:"/tag/2019/index.html",revision:"09028a3c3b912c3f05f9a08bef463255"},{url:"/tag/2020/index.html",revision:"d93427344975642e64cd121fbfa8e8f1"},{url:"/tag/Android/index.html",revision:"acbdf7eb7dfec343a8ef7dd0b0e8909b"},{url:"/tag/Aria2/index.html",revision:"d2ba95c7f688bf247f78e539a954b9e2"},{url:"/tag/Artalk/index.html",revision:"5b89f365da6212f3a509e79f32e879a9"},{url:"/tag/COVID-19/index.html",revision:"cdda7234a52e50438a87df88e32dd42c"},{url:"/tag/cron/index.html",revision:"262a8e985037c306673880c452276fff"},{url:"/tag/FlexGet/index.html",revision:"849f61785b5614241caec64cd4ff7d12"},{url:"/tag/GitHub Actions/index.html",revision:"ab55fdd57b87098ac74b293bc6683402"},{url:"/tag/Gridsome/index.html",revision:"ae5afc7cdd5d035004a92b688585b7f5"},{url:"/tag/HEU/index.html",revision:"21692f5928d88f35ece0d2c8f22526ab"},{url:"/tag/Magisk/index.html",revision:"c97c7923844e792dee6cbe24438f33c2"},{url:"/tag/Markdown/index.html",revision:"71fff78190440002c1027e1d3f4def3a"},{url:"/tag/Python/index.html",revision:"959ed713f758fbe571434c4eee097913"},{url:"/tag/RSS/index.html",revision:"933b47c87dd4f59f702d6e20e3678e70"},{url:"/tag/Sumsung/index.html",revision:"41d3974514e0cd3c2f02f2f1795ef539"},{url:"/tag/Vue.js/index.html",revision:"7da76a2f353e2f401a73e22f29f39bb2"},{url:"/tag/webdrivers/index.html",revision:"bd58e5822a1a2e32465c5fa6ff2df4e8"},{url:"/tag/年报/index.html",revision:"9eb0c3043dd3f75f65207c08db69078d"},{url:"/tag/手帐/index.html",revision:"48e4d9b9ae7204025ecdbd3af7403fc1"},{url:"/tech/auto-download-bangumi-with-aria2-rss/index.html",revision:"e57abf2589a5bee51c5e21ad6790627b"},{url:"/tech/flash-magisk-latest-4-sumsung-s10-5-g-exynos/index.html",revision:"5f0c691ab4e1374b2f05bd5a5744988b"},{url:"/tech/modified-github-actions-4-heu-checkin/index.html",revision:"816c956966b46b700daa32a7e4a889b9"},{url:"/watch/index.html",revision:"fd8df8e2f9e03fcaf5685966520874cc"}],{})}));
