if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,c,d)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const i={uri:location.origin+a.slice(1)};return Promise.all(c.map(a=>{switch(a){case"exports":return s;case"module":return i;default:return e(a)}})).then(e=>{const a=d(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-2b00c8b6"],(function(e){"use strict";e.setCacheNameDetails({prefix:"msx-pwa-cache"}),e.skipWaiting(),e.precacheAndRoute([{url:"/assets/css/0.styles.959d94f0.css",revision:"0548f5e94a6b12667d16b1c3c7909259"},{url:"/assets/css/10.styles.c4971a30.css",revision:"f48bba1a364c9e9b3b3e8af615092b4d"},{url:"/assets/css/11.styles.260b4624.css",revision:"49aa999af539386cd4487343b83b412c"},{url:"/assets/css/2.styles.2931a0ed.css",revision:"bad57334dabfd2775263372adfcc5b63"},{url:"/assets/css/3.styles.6d9a5f3b.css",revision:"54d1a16a1e629e0a8d88c660602298dd"},{url:"/assets/css/4.styles.6c65bb1e.css",revision:"7a7a77e622d5dcd0ebc6500c95710cc4"},{url:"/assets/css/5.styles.aa09ecc1.css",revision:"51b69d1a0f72c24fea849b5d31633dd2"},{url:"/assets/css/6.styles.e7f158b2.css",revision:"785cf9f0931b1592d3fb243b2c9415c3"},{url:"/assets/css/7.styles.1b94ba99.css",revision:"f70ed053abb0d49f63db702816eb675e"},{url:"/assets/css/8.styles.ce2e9b32.css",revision:"b8efdca87a1b05ea59e9d5da8fdc05a4"},{url:"/assets/css/9.styles.c4971a30.css",revision:"f48bba1a364c9e9b3b3e8af615092b4d"},{url:"/assets/css/styles.1aac6262.css",revision:"89a1925be03981fdbb2e91bbff668a57"},{url:"/assets/js/app.f9e1dba1.js",revision:"985ef7497e66cbe246add7b43066c379"},{url:"/assets/js/page--src--pages--404-vue.bbfc967c.js",revision:"404e982ee62bc4c7c1e5b174e5582abf"},{url:"/assets/js/page--src--pages--about-vue.5a16f01a.js",revision:"8354f94317c465556283ddd4f1ec7859"},{url:"/assets/js/page--src--pages--archives-vue.d7a52293.js",revision:"89d897d000d251847ba66c88032ed421"},{url:"/assets/js/page--src--pages--friends-vue.f302077a.js",revision:"5efc3eb768f9e3579352749314375a88"},{url:"/assets/js/page--src--pages--index-vue.85ed487e.js",revision:"aeb5adcbd5dcb91f7f4fc4566233b831"},{url:"/assets/js/page--src--pages--watch-vue.68ab53fd.js",revision:"7f105f863547f265feca68a40252391e"},{url:"/assets/js/page--src--templates--blog-post-vue.3da558d0.js",revision:"1bf1e5cca32dc13741f28fe58f8a27be"},{url:"/assets/js/page--src--templates--category-vue.21bea524.js",revision:"2b4174ed1b209079bd19e50f28be0649"},{url:"/assets/js/page--src--templates--tag-vue.ca084490.js",revision:"eecfcfff757e08a531e571eea9b81e20"},{url:"/assets/js/vendors~page--src--pages--about-vue~page--src--pages--watch-vue~page--src--templates--blog-post-vue.54fac1eb.js",revision:"33921177cd953105e4a01babe6054a93"},{url:"/assets/js/vendors~page--src--templates--blog-post-vue.2fb6ebc2.js",revision:"8ead0bc1d1585d9fb48d78ed3d4a35e6"},{url:"/assets/static/aria-rss-bangumi.27ec4cf.128ec450120ff0928e23c48d995c622c.png",revision:"b9cf1720e19e5342aa5d5596b1f7741b"},{url:"/assets/static/aria-rss-bangumi.3778461.128ec450120ff0928e23c48d995c622c.png",revision:"c664cd501b16fc534b543f525a8b0143"},{url:"/assets/static/aria-rss-bangumi.a209973.128ec450120ff0928e23c48d995c622c.png",revision:"c664cd501b16fc534b543f525a8b0143"},{url:"/assets/static/aria-rss-bangumi.a67b0b2.128ec450120ff0928e23c48d995c622c.png",revision:"b9cf1720e19e5342aa5d5596b1f7741b"},{url:"/assets/static/auto-checkin-covid19.27ec4cf.c87091a851f8ca767e5cbc6ea41ac4d9.png",revision:"47351c9f9f15d3cc0b05a058cb020767"},{url:"/assets/static/auto-checkin-covid19.3778461.c87091a851f8ca767e5cbc6ea41ac4d9.png",revision:"dbebbe061a44d1bbdf6339012509036c"},{url:"/assets/static/auto-checkin-covid19.a209973.c87091a851f8ca767e5cbc6ea41ac4d9.png",revision:"dbebbe061a44d1bbdf6339012509036c"},{url:"/assets/static/auto-checkin-covid19.a67b0b2.c87091a851f8ca767e5cbc6ea41ac4d9.png",revision:"47351c9f9f15d3cc0b05a058cb020767"},{url:"/assets/static/favicon.1539b60.bf61008f0ef71b874a75ec950abb49a1.png",revision:"76e5c2d431f67304724e297cf979da0a"},{url:"/assets/static/favicon.62d22cb.bf61008f0ef71b874a75ec950abb49a1.png",revision:"eb5a6d83284cd774aa8a0e30f45c82fe"},{url:"/assets/static/favicon.7b22250.bf61008f0ef71b874a75ec950abb49a1.png",revision:"f45c6b675dee2c9b34d8ee7d34eb8323"},{url:"/assets/static/favicon.ac8d93a.bf61008f0ef71b874a75ec950abb49a1.png",revision:"da5363345dcdbcf9406b562de6bf02e3"},{url:"/assets/static/favicon.b9532cc.bf61008f0ef71b874a75ec950abb49a1.png",revision:"334a8480426280f6975de1c825f77742"},{url:"/assets/static/favicon.ce0531f.bf61008f0ef71b874a75ec950abb49a1.png",revision:"aa5db901ad7bcd3d4b9a322992d6d14a"},{url:"/assets/static/favicon.dc0cdc5.bf61008f0ef71b874a75ec950abb49a1.png",revision:"279be98f4fc4a919a1902aff2dc34331"},{url:"/assets/static/favicon.e6b6009.bb50f1698dfbcf84ee87f384c80e7647.png",revision:"bd2ef6ef083507c03342e50694180140"},{url:"/assets/static/favicon.f22e9f3.bf61008f0ef71b874a75ec950abb49a1.png",revision:"7030533df6bc8fa1d3dc24bfce988e2a"},{url:"/assets/static/github-actions-checkin.27ec4cf.5d7dca422dbc10301e4b28618b71683f.png",revision:"0defd5d25fcc8e3a96b6bac0ca2c654f"},{url:"/assets/static/github-actions-checkin.3778461.5d7dca422dbc10301e4b28618b71683f.png",revision:"8bac66254047ac8e2c9da39e51ad2b5e"},{url:"/assets/static/github-actions-checkin.a209973.5d7dca422dbc10301e4b28618b71683f.png",revision:"8bac66254047ac8e2c9da39e51ad2b5e"},{url:"/assets/static/github-actions-checkin.a67b0b2.5d7dca422dbc10301e4b28618b71683f.png",revision:"0defd5d25fcc8e3a96b6bac0ca2c654f"},{url:"/assets/static/gridsome-artalk.27ec4cf.7111a5ea162c336715a3a8768910baf5.png",revision:"74149b980472aeec860c0e43547d9fbe"},{url:"/assets/static/gridsome-artalk.3778461.7111a5ea162c336715a3a8768910baf5.png",revision:"2e456bbf1ae720978bf0ca8b97b2ff4b"},{url:"/assets/static/gridsome-artalk.a209973.7111a5ea162c336715a3a8768910baf5.png",revision:"2e456bbf1ae720978bf0ca8b97b2ff4b"},{url:"/assets/static/gridsome-artalk.a67b0b2.7111a5ea162c336715a3a8768910baf5.png",revision:"74149b980472aeec860c0e43547d9fbe"},{url:"/assets/static/heu-autotask.82a2fbd.22a101484c9f4d4a1d03d2ac7783f0f0.png",revision:"571ce815c656d6e4227a90ba26bb2ba3"},{url:"/assets/static/heu-autotask.ae085b2.22a101484c9f4d4a1d03d2ac7783f0f0.png",revision:"e506cdf294661a797e5dc4fe596210f0"},{url:"/assets/static/heu-checkin1.82a2fbd.2e35e2c967dd8ae72bbd6d3ad3bee786.png",revision:"32957d9584ea096dd5e6ebb11b59d55d"},{url:"/assets/static/heu-checkin1.cbab2cf.2e35e2c967dd8ae72bbd6d3ad3bee786.png",revision:"6cce606e4182123ed3da2c7471eca41f"},{url:"/assets/static/heu-checkin1.eaff22a.2e35e2c967dd8ae72bbd6d3ad3bee786.png",revision:"2e35e2c967dd8ae72bbd6d3ad3bee786"},{url:"/assets/static/heu-checkin2.82a2fbd.a282637541e4f36d4a8e50f3a438dbec.png",revision:"a3b86c852d640badb07cf1580a54a7c0"},{url:"/assets/static/heu-checkin2.cbab2cf.a282637541e4f36d4a8e50f3a438dbec.png",revision:"acb1407dfc2bb5d3063c14d6fa2385ba"},{url:"/assets/static/heu-checkin2.eaff22a.a282637541e4f36d4a8e50f3a438dbec.png",revision:"a282637541e4f36d4a8e50f3a438dbec"},{url:"/assets/static/magisk-sumsung.27ec4cf.1f2c960663536221e315d7c047774c3f.png",revision:"9f854d5edd8445985f96b3c1af430ade"},{url:"/assets/static/magisk-sumsung.3778461.1f2c960663536221e315d7c047774c3f.png",revision:"93c5dc3f3e9d0c613207c8b52d9e623f"},{url:"/assets/static/magisk-sumsung.a209973.1f2c960663536221e315d7c047774c3f.png",revision:"93c5dc3f3e9d0c613207c8b52d9e623f"},{url:"/assets/static/magisk-sumsung.a67b0b2.1f2c960663536221e315d7c047774c3f.png",revision:"9f854d5edd8445985f96b3c1af430ade"},{url:"/assets/static/new-start.27ec4cf.52df37dc915451de3e056b5f7a1c980b.png",revision:"7197b4379ae81d61ff3f63dc7ce85af1"},{url:"/assets/static/new-start.3778461.52df37dc915451de3e056b5f7a1c980b.png",revision:"3d62cddca04072e155453fc60a5c2ebb"},{url:"/assets/static/new-start.a209973.52df37dc915451de3e056b5f7a1c980b.png",revision:"3d62cddca04072e155453fc60a5c2ebb"},{url:"/assets/static/new-start.a67b0b2.52df37dc915451de3e056b5f7a1c980b.png",revision:"7197b4379ae81d61ff3f63dc7ce85af1"},{url:"/assets/static/readme-update-posts.27ec4cf.f393ea57d8de7faf75fb828605c2dbee.png",revision:"e3b5734d520e757f080c661ac429221a"},{url:"/assets/static/readme-update-posts.3778461.f393ea57d8de7faf75fb828605c2dbee.png",revision:"6806cd96da506616ef9c365a66a4c02a"},{url:"/assets/static/readme-update-posts.a209973.f393ea57d8de7faf75fb828605c2dbee.png",revision:"6806cd96da506616ef9c365a66a4c02a"},{url:"/assets/static/readme-update-posts.a67b0b2.f393ea57d8de7faf75fb828605c2dbee.png",revision:"e3b5734d520e757f080c661ac429221a"},{url:"/index.html",revision:"18e0cddd6b33f347b5ac0bc688cc0bc5"},{url:"/2/index.html",revision:"65570f670fcd007b83370d7b920a8a7b"},{url:"/404/index.html",revision:"392431cafe5a069508e21d5823d1f104"},{url:"/about/index.html",revision:"7ed1004697b1f20210ae67b10bf81ce5"},{url:"/archives/index.html",revision:"1e34969f4acb9e3d2a4bccc0c147842e"},{url:"/category/code/index.html",revision:"c607c7b32a0d78ecb7ae6ddc4d23b742"},{url:"/category/life/index.html",revision:"d56baab4a0a82dec264d1347795a490a"},{url:"/category/tech/index.html",revision:"c7b0d4970e96550abd38d18bcf35fbe5"},{url:"/code/heu-auto-checkin-covid19/index.html",revision:"426316772a124203fc9f04f2585a44ae"},{url:"/code/update-your-posts-in-readme/index.html",revision:"5d4a6d25ef1eff15fcb03d8f535fc309"},{url:"/code/use-self-hosted-comment-system-in-gridsome/index.html",revision:"d1961b93266885af8964488e93040b01"},{url:"/friends/index.html",revision:"5251f7ea3e0c4ce5d81d0ba9fd3b33dc"},{url:"/life/2018-annual-summary/index.html",revision:"02137e18ff5e07eaa7481c5d4afd55fc"},{url:"/life/2019-annual-summary/index.html",revision:"b2bdb111181fd6b2172009da6ea09f50"},{url:"/life/2020-annual-summary/index.html",revision:"7ec28ebf2587bb7b93344ec7eee02c1d"},{url:"/life/daily-impermanence/index.html",revision:"1c0be547296a4cabfd81d72df5071a15"},{url:"/life/heu-in-amazing-walls/index.html",revision:"a18ea80d443cd9f3756d5fed698fd46d"},{url:"/life/new-start-with-gridsome/index.html",revision:"e86a1ec04a8885fbc0cb00dfe9b62a09"},{url:"/tag/2018/index.html",revision:"0b6c600f5b3f8827228e1c0eaaeba345"},{url:"/tag/2019/index.html",revision:"b4aa70c7ea3968eba44d350d64620e0c"},{url:"/tag/2020/index.html",revision:"56b73c934bcd0354ec617cd96311406e"},{url:"/tag/Android/index.html",revision:"505a1a69211a59d578bda00c543b94b2"},{url:"/tag/Aria2/index.html",revision:"69bd2f7f69cf4fde93b9951819095789"},{url:"/tag/Artalk/index.html",revision:"d3c937cb4877b12ba4ec64cf7bdc1c8e"},{url:"/tag/COVID-19/index.html",revision:"c01f0767efd4b0f6fdb299bf12a708ed"},{url:"/tag/cron/index.html",revision:"ae81808d7543416089b9d9cd0fba22a7"},{url:"/tag/FlexGet/index.html",revision:"85e34fe1370adb7246534c1e848d63c3"},{url:"/tag/GitHub Actions/index.html",revision:"8e7471fb978b6f57f4cd9c450c149b2d"},{url:"/tag/Gridsome/index.html",revision:"adbf1d7e25988e57667a2702ab951e4f"},{url:"/tag/HEU/index.html",revision:"e30b608e4ebb42f80078ef8de5d0f607"},{url:"/tag/Magisk/index.html",revision:"f4830d68c52d653d7423a9e1eea2bb8a"},{url:"/tag/Markdown/index.html",revision:"416e9ceb0f7c50d5d3f8bd4f79cf7539"},{url:"/tag/Python/index.html",revision:"e2a97d7b07fe58efca1584d3d24e4767"},{url:"/tag/RSS/index.html",revision:"447c65ec26c6da35082761c3454608aa"},{url:"/tag/Sumsung/index.html",revision:"750f4edd0607915836ff7eb1c9d9bbe9"},{url:"/tag/Vue.js/index.html",revision:"d8f17b548aca4dc084ce5d0609aa3412"},{url:"/tag/webdrivers/index.html",revision:"6b59324bed2caeadd3c885866627167f"},{url:"/tag/年报/index.html",revision:"fdc1cf1beca1fccfce9c5f7200b66691"},{url:"/tag/手帐/index.html",revision:"6ca8befa4b7b1919f8740d40777ffb1a"},{url:"/tech/auto-download-bangumi-with-aria2-rss/index.html",revision:"e7ae6cea84ec2cb14f77034431d55f7f"},{url:"/tech/flash-magisk-latest-4-sumsung-s10-5-g-exynos/index.html",revision:"7eb9bfd2bbced0ec02a05057030393ee"},{url:"/tech/modified-github-actions-4-heu-checkin/index.html",revision:"fb25214a776e12a340db94d32c0e4531"},{url:"/watch/index.html",revision:"1f07d7f463cbf18dafc9e5f7b75875f5"}],{})}));
