if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,c,i)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const d={uri:location.origin+a.slice(1)};return Promise.all(c.map(a=>{switch(a){case"exports":return s;case"module":return d;default:return e(a)}})).then(e=>{const a=i(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-2b00c8b6"],(function(e){"use strict";e.setCacheNameDetails({prefix:"msx-pwa-cache"}),e.skipWaiting(),e.precacheAndRoute([{url:"/assets/css/0.styles.959d94f0.css",revision:"0548f5e94a6b12667d16b1c3c7909259"},{url:"/assets/css/10.styles.c4971a30.css",revision:"f48bba1a364c9e9b3b3e8af615092b4d"},{url:"/assets/css/11.styles.260b4624.css",revision:"49aa999af539386cd4487343b83b412c"},{url:"/assets/css/2.styles.2931a0ed.css",revision:"bad57334dabfd2775263372adfcc5b63"},{url:"/assets/css/3.styles.41d1c847.css",revision:"3f2f5fb17dc2e6c0e380bf645161c8a9"},{url:"/assets/css/4.styles.6c65bb1e.css",revision:"7a7a77e622d5dcd0ebc6500c95710cc4"},{url:"/assets/css/5.styles.aa09ecc1.css",revision:"51b69d1a0f72c24fea849b5d31633dd2"},{url:"/assets/css/6.styles.e7f158b2.css",revision:"785cf9f0931b1592d3fb243b2c9415c3"},{url:"/assets/css/7.styles.bd4fcc6c.css",revision:"50e9a5f8ad7e1bc3b6a7ff10e7796fc8"},{url:"/assets/css/8.styles.ade877ec.css",revision:"b28f1444339aae2a2c094845bf92233a"},{url:"/assets/css/9.styles.c4971a30.css",revision:"f48bba1a364c9e9b3b3e8af615092b4d"},{url:"/assets/css/styles.df111b13.css",revision:"f178a1f98ca1a9072fddcf57a2249dff"},{url:"/assets/js/app.d2bf8785.js",revision:"dd103bd09e0403456b9b82cf38b2d455"},{url:"/assets/js/page--src--pages--404-vue.476855e8.js",revision:"404e982ee62bc4c7c1e5b174e5582abf"},{url:"/assets/js/page--src--pages--about-vue.96c827a0.js",revision:"d147f5ccdfe94bdf35f92d320bacdc0f"},{url:"/assets/js/page--src--pages--archives-vue.66030062.js",revision:"23de579bc121c21dd305d2847e06dfb6"},{url:"/assets/js/page--src--pages--friends-vue.bd410804.js",revision:"5efc3eb768f9e3579352749314375a88"},{url:"/assets/js/page--src--pages--index-vue.62b309b8.js",revision:"aeb5adcbd5dcb91f7f4fc4566233b831"},{url:"/assets/js/page--src--pages--watch-vue.76e8fcb5.js",revision:"3fe1e97b2e790de2dfebbe847bba2daa"},{url:"/assets/js/page--src--templates--blog-post-vue.59722749.js",revision:"83ef7adc392d8ae65c82f911b4638974"},{url:"/assets/js/page--src--templates--category-vue.d28f8bf4.js",revision:"2b4174ed1b209079bd19e50f28be0649"},{url:"/assets/js/page--src--templates--tag-vue.8fa7bdde.js",revision:"eecfcfff757e08a531e571eea9b81e20"},{url:"/assets/js/vendors~page--src--pages--about-vue~page--src--pages--watch-vue~page--src--templates--blog-post-vue.54fac1eb.js",revision:"33921177cd953105e4a01babe6054a93"},{url:"/assets/js/vendors~page--src--templates--blog-post-vue.4c1d82c4.js",revision:"8ead0bc1d1585d9fb48d78ed3d4a35e6"},{url:"/assets/static/aria-rss-bangumi.27ec4cf.128ec450120ff0928e23c48d995c622c.png",revision:"b9cf1720e19e5342aa5d5596b1f7741b"},{url:"/assets/static/aria-rss-bangumi.3778461.128ec450120ff0928e23c48d995c622c.png",revision:"c664cd501b16fc534b543f525a8b0143"},{url:"/assets/static/aria-rss-bangumi.a209973.128ec450120ff0928e23c48d995c622c.png",revision:"c664cd501b16fc534b543f525a8b0143"},{url:"/assets/static/aria-rss-bangumi.a67b0b2.128ec450120ff0928e23c48d995c622c.png",revision:"b9cf1720e19e5342aa5d5596b1f7741b"},{url:"/assets/static/auto-checkin-covid19.27ec4cf.c87091a851f8ca767e5cbc6ea41ac4d9.png",revision:"47351c9f9f15d3cc0b05a058cb020767"},{url:"/assets/static/auto-checkin-covid19.3778461.c87091a851f8ca767e5cbc6ea41ac4d9.png",revision:"dbebbe061a44d1bbdf6339012509036c"},{url:"/assets/static/auto-checkin-covid19.a209973.c87091a851f8ca767e5cbc6ea41ac4d9.png",revision:"dbebbe061a44d1bbdf6339012509036c"},{url:"/assets/static/auto-checkin-covid19.a67b0b2.c87091a851f8ca767e5cbc6ea41ac4d9.png",revision:"47351c9f9f15d3cc0b05a058cb020767"},{url:"/assets/static/favicon.1539b60.bf61008f0ef71b874a75ec950abb49a1.png",revision:"76e5c2d431f67304724e297cf979da0a"},{url:"/assets/static/favicon.62d22cb.bf61008f0ef71b874a75ec950abb49a1.png",revision:"eb5a6d83284cd774aa8a0e30f45c82fe"},{url:"/assets/static/favicon.7b22250.bf61008f0ef71b874a75ec950abb49a1.png",revision:"f45c6b675dee2c9b34d8ee7d34eb8323"},{url:"/assets/static/favicon.ac8d93a.bf61008f0ef71b874a75ec950abb49a1.png",revision:"da5363345dcdbcf9406b562de6bf02e3"},{url:"/assets/static/favicon.b9532cc.bf61008f0ef71b874a75ec950abb49a1.png",revision:"334a8480426280f6975de1c825f77742"},{url:"/assets/static/favicon.ce0531f.bf61008f0ef71b874a75ec950abb49a1.png",revision:"aa5db901ad7bcd3d4b9a322992d6d14a"},{url:"/assets/static/favicon.dc0cdc5.bf61008f0ef71b874a75ec950abb49a1.png",revision:"279be98f4fc4a919a1902aff2dc34331"},{url:"/assets/static/favicon.e6b6009.bb50f1698dfbcf84ee87f384c80e7647.png",revision:"bd2ef6ef083507c03342e50694180140"},{url:"/assets/static/favicon.f22e9f3.bf61008f0ef71b874a75ec950abb49a1.png",revision:"7030533df6bc8fa1d3dc24bfce988e2a"},{url:"/assets/static/github-actions-checkin.27ec4cf.5d7dca422dbc10301e4b28618b71683f.png",revision:"0defd5d25fcc8e3a96b6bac0ca2c654f"},{url:"/assets/static/github-actions-checkin.3778461.5d7dca422dbc10301e4b28618b71683f.png",revision:"8bac66254047ac8e2c9da39e51ad2b5e"},{url:"/assets/static/github-actions-checkin.a209973.5d7dca422dbc10301e4b28618b71683f.png",revision:"8bac66254047ac8e2c9da39e51ad2b5e"},{url:"/assets/static/github-actions-checkin.a67b0b2.5d7dca422dbc10301e4b28618b71683f.png",revision:"0defd5d25fcc8e3a96b6bac0ca2c654f"},{url:"/assets/static/gridsome-artalk.27ec4cf.7111a5ea162c336715a3a8768910baf5.png",revision:"74149b980472aeec860c0e43547d9fbe"},{url:"/assets/static/gridsome-artalk.3778461.7111a5ea162c336715a3a8768910baf5.png",revision:"2e456bbf1ae720978bf0ca8b97b2ff4b"},{url:"/assets/static/gridsome-artalk.a209973.7111a5ea162c336715a3a8768910baf5.png",revision:"2e456bbf1ae720978bf0ca8b97b2ff4b"},{url:"/assets/static/gridsome-artalk.a67b0b2.7111a5ea162c336715a3a8768910baf5.png",revision:"74149b980472aeec860c0e43547d9fbe"},{url:"/assets/static/heu-autotask.82a2fbd.22a101484c9f4d4a1d03d2ac7783f0f0.png",revision:"571ce815c656d6e4227a90ba26bb2ba3"},{url:"/assets/static/heu-autotask.ae085b2.22a101484c9f4d4a1d03d2ac7783f0f0.png",revision:"e506cdf294661a797e5dc4fe596210f0"},{url:"/assets/static/heu-checkin1.82a2fbd.2e35e2c967dd8ae72bbd6d3ad3bee786.png",revision:"32957d9584ea096dd5e6ebb11b59d55d"},{url:"/assets/static/heu-checkin1.cbab2cf.2e35e2c967dd8ae72bbd6d3ad3bee786.png",revision:"6cce606e4182123ed3da2c7471eca41f"},{url:"/assets/static/heu-checkin1.eaff22a.2e35e2c967dd8ae72bbd6d3ad3bee786.png",revision:"2e35e2c967dd8ae72bbd6d3ad3bee786"},{url:"/assets/static/heu-checkin2.82a2fbd.a282637541e4f36d4a8e50f3a438dbec.png",revision:"a3b86c852d640badb07cf1580a54a7c0"},{url:"/assets/static/heu-checkin2.cbab2cf.a282637541e4f36d4a8e50f3a438dbec.png",revision:"acb1407dfc2bb5d3063c14d6fa2385ba"},{url:"/assets/static/heu-checkin2.eaff22a.a282637541e4f36d4a8e50f3a438dbec.png",revision:"a282637541e4f36d4a8e50f3a438dbec"},{url:"/assets/static/magisk-sumsung.27ec4cf.1f2c960663536221e315d7c047774c3f.png",revision:"9f854d5edd8445985f96b3c1af430ade"},{url:"/assets/static/magisk-sumsung.3778461.1f2c960663536221e315d7c047774c3f.png",revision:"93c5dc3f3e9d0c613207c8b52d9e623f"},{url:"/assets/static/magisk-sumsung.a209973.1f2c960663536221e315d7c047774c3f.png",revision:"93c5dc3f3e9d0c613207c8b52d9e623f"},{url:"/assets/static/magisk-sumsung.a67b0b2.1f2c960663536221e315d7c047774c3f.png",revision:"9f854d5edd8445985f96b3c1af430ade"},{url:"/assets/static/new-start.27ec4cf.52df37dc915451de3e056b5f7a1c980b.png",revision:"7197b4379ae81d61ff3f63dc7ce85af1"},{url:"/assets/static/new-start.3778461.52df37dc915451de3e056b5f7a1c980b.png",revision:"3d62cddca04072e155453fc60a5c2ebb"},{url:"/assets/static/new-start.a209973.52df37dc915451de3e056b5f7a1c980b.png",revision:"3d62cddca04072e155453fc60a5c2ebb"},{url:"/assets/static/new-start.a67b0b2.52df37dc915451de3e056b5f7a1c980b.png",revision:"7197b4379ae81d61ff3f63dc7ce85af1"},{url:"/assets/static/readme-update-posts.27ec4cf.f393ea57d8de7faf75fb828605c2dbee.png",revision:"e3b5734d520e757f080c661ac429221a"},{url:"/assets/static/readme-update-posts.3778461.f393ea57d8de7faf75fb828605c2dbee.png",revision:"6806cd96da506616ef9c365a66a4c02a"},{url:"/assets/static/readme-update-posts.a209973.f393ea57d8de7faf75fb828605c2dbee.png",revision:"6806cd96da506616ef9c365a66a4c02a"},{url:"/assets/static/readme-update-posts.a67b0b2.f393ea57d8de7faf75fb828605c2dbee.png",revision:"e3b5734d520e757f080c661ac429221a"},{url:"/index.html",revision:"5bcfa4507cbc79f6d5c71afb4c27692d"},{url:"/2/index.html",revision:"bb89cf81e6da6095da8010dbb2097490"},{url:"/404/index.html",revision:"ac2ee7c4e3b8623b07f0d211f0f73377"},{url:"/about/index.html",revision:"371bd37635b176cd666c2c1b784bf83e"},{url:"/archives/index.html",revision:"ec32984c6663929e9486c79add89bcc2"},{url:"/category/code/index.html",revision:"7ea4732a69ce1bc8806478af96095106"},{url:"/category/life/index.html",revision:"3022f2ce01431cfffe9ad599b47679cc"},{url:"/category/tech/index.html",revision:"a1c64540a973e054a3fbb67c7e231535"},{url:"/code/heu-auto-checkin-covid19/index.html",revision:"41b80e6e479c2b12f607da28d70f8096"},{url:"/code/update-your-posts-in-readme/index.html",revision:"fd5c9a81ad3d909fb883d79f04c7aea1"},{url:"/code/use-self-hosted-comment-system-in-gridsome/index.html",revision:"0e714cc59032afc1794f46ecf608bf71"},{url:"/friends/index.html",revision:"50b3263ba96ed400e1d1062253bea6ea"},{url:"/life/2018-annual-summary/index.html",revision:"f0af893022c8540722465047551b10a0"},{url:"/life/2019-annual-summary/index.html",revision:"75d47495ca0a0a2f8e5b41509f739a47"},{url:"/life/2020-annual-summary/index.html",revision:"549ae737f90ee413f8282e96568ab60a"},{url:"/life/daily-death/index.html",revision:"bae3cfda91b245749fb68e2285a98bc9"},{url:"/life/daily-impermanence/index.html",revision:"b53cad8e9cebcfb83e2a36e1f6a90ad2"},{url:"/life/heu-in-amazing-walls/index.html",revision:"75bffca6a7bf44b8a8d20baaa3cbb260"},{url:"/life/new-start-with-gridsome/index.html",revision:"7cdceb590d6b64ec95c2223f55178e8c"},{url:"/tag/2018/index.html",revision:"a05af2a7aef4304bb62a72dbea232a0c"},{url:"/tag/2019/index.html",revision:"6221415ebc96542b5a37f1b4036844ef"},{url:"/tag/2020/index.html",revision:"a8cee1891371c8c2d8585d7768a30616"},{url:"/tag/Android/index.html",revision:"18f593cc64175cbb3f46d5e7c7a8f819"},{url:"/tag/Aria2/index.html",revision:"5f61dc0358a5d35cea3294a3a541ef27"},{url:"/tag/Artalk/index.html",revision:"1c060bf02d1aa883d4559b53948a7d27"},{url:"/tag/COVID-19/index.html",revision:"decec470c9608bee3e28d8c92a972f2d"},{url:"/tag/cron/index.html",revision:"5dfc3ccc9541880037b1f2242b7df4a6"},{url:"/tag/FlexGet/index.html",revision:"9b4beb1b3dace90e3c4dfb870df04dc0"},{url:"/tag/GitHub Actions/index.html",revision:"153c4cb73117903e9d50089e224dec54"},{url:"/tag/Gridsome/index.html",revision:"91daf9a6662d4d0c42e793f07daf7fd1"},{url:"/tag/HEU/index.html",revision:"d654f3c1505c424962a0d5fbe81915e7"},{url:"/tag/Magisk/index.html",revision:"734793c4ba46ba353eaebb95efc0b7f6"},{url:"/tag/Markdown/index.html",revision:"54d695aa715c1cec26d0506b369336c0"},{url:"/tag/Python/index.html",revision:"320017c1cf6119dbd14865e463e563e1"},{url:"/tag/RSS/index.html",revision:"e4b899a3319d984db8c9c1b8464225cc"},{url:"/tag/Sumsung/index.html",revision:"46c3a2e200077be7a6e6b02598903b19"},{url:"/tag/Vue.js/index.html",revision:"a91837e9f11217ce217224e4b62f263a"},{url:"/tag/webdrivers/index.html",revision:"d03074b4d5b92e70c44bb60242e9e423"},{url:"/tag/回忆/index.html",revision:"8cb534c7c36cb3a2e17b6f582c3403e2"},{url:"/tag/年报/index.html",revision:"26b236c57333195b1eca3f5b87d82e06"},{url:"/tag/手帐/index.html",revision:"ddccb2dee96cc3a453d39fab967dbb6f"},{url:"/tag/梦境/index.html",revision:"cf65d4b89a5fb20eba6c502bf628f543"},{url:"/tech/auto-download-bangumi-with-aria2-rss/index.html",revision:"e69bb4d1778732acb2c72f67cb575274"},{url:"/tech/flash-magisk-latest-4-sumsung-s10-5-g-exynos/index.html",revision:"ba7bc947299bacf771add7306c212075"},{url:"/tech/modified-github-actions-4-heu-checkin/index.html",revision:"e24373a206690e4dba943982c194c44f"},{url:"/watch/index.html",revision:"3cc39c8bd8d5dc69641d8e9f33159df9"}],{})}));
