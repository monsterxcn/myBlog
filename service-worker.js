if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,c,i)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const d={uri:location.origin+a.slice(1)};return Promise.all(c.map(a=>{switch(a){case"exports":return s;case"module":return d;default:return e(a)}})).then(e=>{const a=i(...e);return s.default||(s.default=a),s})}))}}define("./service-worker.js",["./workbox-2b00c8b6"],(function(e){"use strict";e.setCacheNameDetails({prefix:"msx-pwa-cache"}),e.skipWaiting(),e.precacheAndRoute([{url:"/assets/css/0.styles.959d94f0.css",revision:"0548f5e94a6b12667d16b1c3c7909259"},{url:"/assets/css/10.styles.3c3a4fb0.css",revision:"5d6e0aa5fcc968315352da2732d0642a"},{url:"/assets/css/11.styles.260b4624.css",revision:"49aa999af539386cd4487343b83b412c"},{url:"/assets/css/2.styles.c4f49575.css",revision:"0f5b1e0ffabf328afb149e90020b882a"},{url:"/assets/css/3.styles.217c6cc6.css",revision:"aea7d6c734cc3c52a77cf38abbc7bc0a"},{url:"/assets/css/4.styles.35d2a724.css",revision:"6733e7947e45a15a2860455e885779ed"},{url:"/assets/css/5.styles.f17c94ed.css",revision:"81abeaa89d6b5048a06fc44d0a0399ce"},{url:"/assets/css/6.styles.2218d2fb.css",revision:"c15cfe5ff4e388af29261a3efd633110"},{url:"/assets/css/7.styles.24cb1078.css",revision:"ee0e326a16b3c47b8325cd99483b3b84"},{url:"/assets/css/8.styles.3e830425.css",revision:"941fbe4309cbdd83bff48bbb6b7f6811"},{url:"/assets/css/9.styles.3c3a4fb0.css",revision:"5d6e0aa5fcc968315352da2732d0642a"},{url:"/assets/css/styles.8f06eff9.css",revision:"0f14cd057dbe9b03bd313ac1bca41ec6"},{url:"/assets/js/app.d8957cbd.js",revision:"9090332f87bbfb0d3134c00dc9a307a9"},{url:"/assets/js/page--src--pages--404-vue.a2d58a70.js",revision:"0e7159062cfb352106cb1f8010a0d49a"},{url:"/assets/js/page--src--pages--about-vue.85cd79d1.js",revision:"4bb2563a595cf36ab12a3fcd1058c3f7"},{url:"/assets/js/page--src--pages--archives-vue.e7b7795e.js",revision:"23a20ecee280991704d7bffa5261839b"},{url:"/assets/js/page--src--pages--friends-vue.4200a26b.js",revision:"78a4c96ccaf5091a625ac65177eb54b7"},{url:"/assets/js/page--src--pages--index-vue.4341f283.js",revision:"c75b2de6f384a12c15d23ce7db05bbc9"},{url:"/assets/js/page--src--pages--watch-vue.e4722795.js",revision:"599c6db4224c29832215e6bfe210c17b"},{url:"/assets/js/page--src--templates--blog-post-vue.3c564c91.js",revision:"bd04d495d253896a930561e503df1966"},{url:"/assets/js/page--src--templates--category-vue.16befedc.js",revision:"56288bdd2299c6732beef973a70c30ff"},{url:"/assets/js/page--src--templates--tag-vue.128546da.js",revision:"bdfe903e10f3de2c18aa78529c785e44"},{url:"/assets/js/vendors~page--src--pages--about-vue~page--src--pages--watch-vue~page--src--templates--blog-post-vue.54fac1eb.js",revision:"33921177cd953105e4a01babe6054a93"},{url:"/assets/js/vendors~page--src--templates--blog-post-vue.2fb6ebc2.js",revision:"8ead0bc1d1585d9fb48d78ed3d4a35e6"},{url:"/assets/static/aria-rss-bangumi.27ec4cf.128ec450120ff0928e23c48d995c622c.png",revision:"b9cf1720e19e5342aa5d5596b1f7741b"},{url:"/assets/static/aria-rss-bangumi.3778461.128ec450120ff0928e23c48d995c622c.png",revision:"c664cd501b16fc534b543f525a8b0143"},{url:"/assets/static/aria-rss-bangumi.a209973.128ec450120ff0928e23c48d995c622c.png",revision:"c664cd501b16fc534b543f525a8b0143"},{url:"/assets/static/aria-rss-bangumi.a67b0b2.128ec450120ff0928e23c48d995c622c.png",revision:"b9cf1720e19e5342aa5d5596b1f7741b"},{url:"/assets/static/auto-checkin-covid19.27ec4cf.c87091a851f8ca767e5cbc6ea41ac4d9.png",revision:"47351c9f9f15d3cc0b05a058cb020767"},{url:"/assets/static/auto-checkin-covid19.3778461.c87091a851f8ca767e5cbc6ea41ac4d9.png",revision:"dbebbe061a44d1bbdf6339012509036c"},{url:"/assets/static/auto-checkin-covid19.a209973.c87091a851f8ca767e5cbc6ea41ac4d9.png",revision:"dbebbe061a44d1bbdf6339012509036c"},{url:"/assets/static/auto-checkin-covid19.a67b0b2.c87091a851f8ca767e5cbc6ea41ac4d9.png",revision:"47351c9f9f15d3cc0b05a058cb020767"},{url:"/assets/static/favicon.1539b60.bf61008f0ef71b874a75ec950abb49a1.png",revision:"76e5c2d431f67304724e297cf979da0a"},{url:"/assets/static/favicon.62d22cb.bf61008f0ef71b874a75ec950abb49a1.png",revision:"eb5a6d83284cd774aa8a0e30f45c82fe"},{url:"/assets/static/favicon.7b22250.bf61008f0ef71b874a75ec950abb49a1.png",revision:"f45c6b675dee2c9b34d8ee7d34eb8323"},{url:"/assets/static/favicon.ac8d93a.bf61008f0ef71b874a75ec950abb49a1.png",revision:"da5363345dcdbcf9406b562de6bf02e3"},{url:"/assets/static/favicon.b9532cc.bf61008f0ef71b874a75ec950abb49a1.png",revision:"334a8480426280f6975de1c825f77742"},{url:"/assets/static/favicon.ce0531f.bf61008f0ef71b874a75ec950abb49a1.png",revision:"aa5db901ad7bcd3d4b9a322992d6d14a"},{url:"/assets/static/favicon.dc0cdc5.bf61008f0ef71b874a75ec950abb49a1.png",revision:"279be98f4fc4a919a1902aff2dc34331"},{url:"/assets/static/favicon.e6b6009.bb50f1698dfbcf84ee87f384c80e7647.png",revision:"bd2ef6ef083507c03342e50694180140"},{url:"/assets/static/favicon.f22e9f3.bf61008f0ef71b874a75ec950abb49a1.png",revision:"7030533df6bc8fa1d3dc24bfce988e2a"},{url:"/assets/static/github-actions-checkin.27ec4cf.5d7dca422dbc10301e4b28618b71683f.png",revision:"0defd5d25fcc8e3a96b6bac0ca2c654f"},{url:"/assets/static/github-actions-checkin.3778461.5d7dca422dbc10301e4b28618b71683f.png",revision:"8bac66254047ac8e2c9da39e51ad2b5e"},{url:"/assets/static/github-actions-checkin.a209973.5d7dca422dbc10301e4b28618b71683f.png",revision:"8bac66254047ac8e2c9da39e51ad2b5e"},{url:"/assets/static/github-actions-checkin.a67b0b2.5d7dca422dbc10301e4b28618b71683f.png",revision:"0defd5d25fcc8e3a96b6bac0ca2c654f"},{url:"/assets/static/gridsome-artalk.27ec4cf.7111a5ea162c336715a3a8768910baf5.png",revision:"74149b980472aeec860c0e43547d9fbe"},{url:"/assets/static/gridsome-artalk.3778461.7111a5ea162c336715a3a8768910baf5.png",revision:"2e456bbf1ae720978bf0ca8b97b2ff4b"},{url:"/assets/static/gridsome-artalk.a209973.7111a5ea162c336715a3a8768910baf5.png",revision:"2e456bbf1ae720978bf0ca8b97b2ff4b"},{url:"/assets/static/gridsome-artalk.a67b0b2.7111a5ea162c336715a3a8768910baf5.png",revision:"74149b980472aeec860c0e43547d9fbe"},{url:"/assets/static/heu-autotask.82a2fbd.22a101484c9f4d4a1d03d2ac7783f0f0.png",revision:"571ce815c656d6e4227a90ba26bb2ba3"},{url:"/assets/static/heu-autotask.ae085b2.22a101484c9f4d4a1d03d2ac7783f0f0.png",revision:"e506cdf294661a797e5dc4fe596210f0"},{url:"/assets/static/heu-checkin1.82a2fbd.2e35e2c967dd8ae72bbd6d3ad3bee786.png",revision:"32957d9584ea096dd5e6ebb11b59d55d"},{url:"/assets/static/heu-checkin1.cbab2cf.2e35e2c967dd8ae72bbd6d3ad3bee786.png",revision:"6cce606e4182123ed3da2c7471eca41f"},{url:"/assets/static/heu-checkin1.eaff22a.2e35e2c967dd8ae72bbd6d3ad3bee786.png",revision:"2e35e2c967dd8ae72bbd6d3ad3bee786"},{url:"/assets/static/heu-checkin2.82a2fbd.a282637541e4f36d4a8e50f3a438dbec.png",revision:"a3b86c852d640badb07cf1580a54a7c0"},{url:"/assets/static/heu-checkin2.cbab2cf.a282637541e4f36d4a8e50f3a438dbec.png",revision:"acb1407dfc2bb5d3063c14d6fa2385ba"},{url:"/assets/static/heu-checkin2.eaff22a.a282637541e4f36d4a8e50f3a438dbec.png",revision:"a282637541e4f36d4a8e50f3a438dbec"},{url:"/assets/static/new-start.27ec4cf.52df37dc915451de3e056b5f7a1c980b.png",revision:"7197b4379ae81d61ff3f63dc7ce85af1"},{url:"/assets/static/new-start.3778461.52df37dc915451de3e056b5f7a1c980b.png",revision:"3d62cddca04072e155453fc60a5c2ebb"},{url:"/assets/static/new-start.a209973.52df37dc915451de3e056b5f7a1c980b.png",revision:"3d62cddca04072e155453fc60a5c2ebb"},{url:"/assets/static/new-start.a67b0b2.52df37dc915451de3e056b5f7a1c980b.png",revision:"7197b4379ae81d61ff3f63dc7ce85af1"},{url:"/assets/static/readme-update-posts.27ec4cf.f393ea57d8de7faf75fb828605c2dbee.png",revision:"e3b5734d520e757f080c661ac429221a"},{url:"/assets/static/readme-update-posts.3778461.f393ea57d8de7faf75fb828605c2dbee.png",revision:"6806cd96da506616ef9c365a66a4c02a"},{url:"/assets/static/readme-update-posts.a209973.f393ea57d8de7faf75fb828605c2dbee.png",revision:"6806cd96da506616ef9c365a66a4c02a"},{url:"/assets/static/readme-update-posts.a67b0b2.f393ea57d8de7faf75fb828605c2dbee.png",revision:"e3b5734d520e757f080c661ac429221a"},{url:"/index.html",revision:"e04be604a4a96fd15357d7c03fb90159"},{url:"/2/index.html",revision:"61a7e38800197b0669c9431ecda3e180"},{url:"/404/index.html",revision:"0705378fb4813f3b04d238247624d924"},{url:"/about/index.html",revision:"54bed35ae7e4640afb8e8aa028e41fe2"},{url:"/archives/index.html",revision:"427741c40c2e5a33f988282f9c9de3dd"},{url:"/category/code/index.html",revision:"2c11c20c6a2244814fd29ab3e87881ee"},{url:"/category/life/index.html",revision:"533114e76bc30622114de09d89dd7f91"},{url:"/category/tech/index.html",revision:"f2a6fdbdb05162c6b1368b450d518f4e"},{url:"/code/heu-auto-checkin-covid19/index.html",revision:"cf6012b8dcebcc712a43fa0d549f6209"},{url:"/code/update-your-posts-in-readme/index.html",revision:"2ae8ff32d0c80114c83b730bb7b6b481"},{url:"/code/use-self-hosted-comment-system-in-gridsome/index.html",revision:"f48c760aac96c076c9812ef69c7aac06"},{url:"/friends/index.html",revision:"8dc2ea00d57faf5a61ec092355c1dae3"},{url:"/life/2018-annual-summary/index.html",revision:"127a5e4f6020bee9fad4076b5707e3ab"},{url:"/life/2019-annual-summary/index.html",revision:"469a7386851aadc54d20cca62f96e877"},{url:"/life/2020-annual-summary/index.html",revision:"15bc39cfdaa4279d593b10c50eaa27fb"},{url:"/life/daily-impermanence/index.html",revision:"05c13849510bebded21d60cbda7d253b"},{url:"/life/heu-in-amazing-walls/index.html",revision:"bbd2630bed98a6e417c9c60ec5e91063"},{url:"/life/new-start-with-gridsome/index.html",revision:"05a0c85c40fa56a093ecaaf7d8f5d4c9"},{url:"/tag/2018/index.html",revision:"102072f3e7f65dc2528753b3ab6580f8"},{url:"/tag/2019/index.html",revision:"d89f326f69245c5c7ffccfc5450544f5"},{url:"/tag/2020/index.html",revision:"9bf184de709eefdf00e703d5253d97e2"},{url:"/tag/Aria2/index.html",revision:"cbe83f1f75cd09cb5d08f6efde5fc4e5"},{url:"/tag/Artalk/index.html",revision:"c6986f7abc2d97ecd28800fc5717d256"},{url:"/tag/COVID-19/index.html",revision:"4732954f30219b97e2a110fc35d2a972"},{url:"/tag/cron/index.html",revision:"88ab2db399f5d730116de5ef75e796c8"},{url:"/tag/FlexGet/index.html",revision:"1dc84ed3adb2ff51b22f3260ed52c883"},{url:"/tag/GitHub Actions/index.html",revision:"8c4426eea57136c7564788d01e7653c8"},{url:"/tag/Gridsome/index.html",revision:"ae8b2b2a28b90eafc20abdc0fe60413d"},{url:"/tag/HEU/index.html",revision:"3da70b8b05469a87f9c88121cc045be9"},{url:"/tag/Markdown/index.html",revision:"4a243af8dc122ba865e01da7f1001f10"},{url:"/tag/Python/index.html",revision:"dbd8f97a2c58f0397fdd41db81c86c7e"},{url:"/tag/RSS/index.html",revision:"1effb484d6063931a8d80564f1575912"},{url:"/tag/Vue.js/index.html",revision:"03a8d73363ce9ab7f9bfa6b85985f0c3"},{url:"/tag/webdrivers/index.html",revision:"e9731b4b0be7b5f48b11d7b8f127bc27"},{url:"/tag/年报/index.html",revision:"624ac39587eb0a6a4578e9d89e878862"},{url:"/tag/手帐/index.html",revision:"dcd20f30e53a4fb9bc74c21de963ae6c"},{url:"/tech/auto-download-bangumi-with-aria2-rss/index.html",revision:"c7c610afee912025693be6192bf4fa75"},{url:"/tech/modified-github-actions-4-heu-checkin/index.html",revision:"e2cedde1a0e1e3d868980e03f99bec1e"},{url:"/watch/index.html",revision:"068dc5a715a93390f9c8d43e73769b87"}],{})}));
