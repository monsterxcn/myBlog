if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,d,i)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(d.map(s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}})).then(e=>{const s=i(...e);return a.default||(a.default=s),a})}))}}define("./service-worker.js",["./workbox-1bbb3e0e"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"/assets/css/0.styles.990d3f84.css",revision:"95ec07ed6c991c437745aa3c94f9cee6"},{url:"/assets/data/404/index.json",revision:"f458727f8d193b74371eb647cec8d82e"},{url:"/assets/data/about/index.json",revision:"bedf1ac505dab72bbc54905b69e75a5c"},{url:"/assets/data/archives/index.json",revision:"0efdf6309f5e5275b9dcd594af774b84"},{url:"/assets/data/code/heu-auto-checkin-covid19/index.json",revision:"239dc2b5a81e5302b9f009438a91d841"},{url:"/assets/data/code/update-your-posts-in-readme/index.json",revision:"4344fd0c73bce2199c9e30ed22712970"},{url:"/assets/data/friends/index.json",revision:"bedf1ac505dab72bbc54905b69e75a5c"},{url:"/assets/data/index.json",revision:"3abf3492e96dbf372361203ff85dfa3e"},{url:"/assets/data/life/daily-impermanence/index.json",revision:"f56b41518478f817cc70024bc5ed7183"},{url:"/assets/data/life/new-start-with-gridsome/index.json",revision:"205ddb123263d4917b35a053498d5cce"},{url:"/assets/data/tag/Aria2/index.json",revision:"f2e910d645b7c4375ecff97a5171662a"},{url:"/assets/data/tag/Blog/index.json",revision:"c1368d4cd43a6b1ab8d3e36c5b4811e4"},{url:"/assets/data/tag/COVID-19/index.json",revision:"ee705bf5372e22f084220979a9646e63"},{url:"/assets/data/tag/FlexGet/index.json",revision:"1751eda89cabf922e64cd0203d7c55c5"},{url:"/assets/data/tag/GitHub Actions/index.json",revision:"7dd8b1d88b2542ce970e69bd3cd6224f"},{url:"/assets/data/tag/Gridsome/index.json",revision:"26835eb94644b28f9f6c468c9ea07463"},{url:"/assets/data/tag/Markdown/index.json",revision:"da02f1d2bd696ebbe39c579238e504bf"},{url:"/assets/data/tag/Python/index.json",revision:"02301f9a1c3fd73e83e3bf0f0e6c04cc"},{url:"/assets/data/tag/README/index.json",revision:"f933ab65b389b9b93f880d6875a227e5"},{url:"/assets/data/tag/RSS/index.json",revision:"fca9198aa984fdab8dee211c034f5909"},{url:"/assets/data/tag/webdrivers/index.json",revision:"3159c2335a15f243323f1be7fe5d50b5"},{url:"/assets/data/tag/定时任务/index.json",revision:"e2e6a096f97d1ff7ffee702de1c88712"},{url:"/assets/data/tag/思考/index.json",revision:"445e346387b1c9e05c6a237664f65a26"},{url:"/assets/data/tag/手帐/index.json",revision:"b478eb368d1dd5d3df9d9d4233558a51"},{url:"/assets/data/tag/调试/index.json",revision:"f3f07691d536a9e6d7ab5a17cf39ec08"},{url:"/assets/data/tech/auto-download-bangumi-with-aria2-rss/index.json",revision:"eb4c4a253ee727746ee338ed3a849c66"},{url:"/assets/data/tech/modified-github-actions-4-heu-checkin/index.json",revision:"c2d29c64226fa48cc632d9b97ab32c34"},{url:"/assets/data/watch/index.json",revision:"bedf1ac505dab72bbc54905b69e75a5c"},{url:"/assets/js/app.728e000a.js",revision:"b166bcf0ce3b6336d428b0166a0c8e1f"},{url:"/assets/js/page--src--pages--404-vue.23c0810b.js",revision:"7698e0e62d968687ddbc0f229af9b158"},{url:"/assets/js/page--src--pages--about-vue.91d6d11e.js",revision:"0959d929639b880134f58e8ae9ba4aa7"},{url:"/assets/js/page--src--pages--archives-vue.6d9114e4.js",revision:"2d3c3e5278ac508454b363e0d42456c7"},{url:"/assets/js/page--src--pages--friends-vue.d0c98f8f.js",revision:"6bf9566d3e2d7faec56c0928a25b087e"},{url:"/assets/js/page--src--pages--index-vue.74e81b9d.js",revision:"6e0bab6ec386e84325b2117f5dd83a91"},{url:"/assets/js/page--src--pages--watch-vue.01d00674.js",revision:"2f3c6707c0fc176050544fc2a72a19a5"},{url:"/assets/js/page--src--templates--blog-post-vue.2419679b.js",revision:"b1ffcf645f790663639a4cd0f73df5aa"},{url:"/assets/js/page--src--templates--tag-vue.017e1434.js",revision:"ea6c04615afc9a1a29b7bdb3e28890d5"},{url:"/assets/js/vendors~page--src--pages--about-vue~page--src--pages--watch-vue~page--src--templates--blog-post-vue.a2a2aa55.js",revision:"cec47699c000321ac8eb9ec25615f7f6"},{url:"/manifest.json",revision:"5816292059769ae61717d6ff8fdfa23e"},{url:"/404",revision:"28f25f53f5ce5d7c39f9df9ad1964986"},{url:"/tech/modified-github-actions-4-heu-checkin",revision:"aa27d2c88c09a380d7a1c47e08620b16"},{url:"/life/new-start-with-gridsome",revision:"69c357196a0946e4b739f203565b332e"},{url:"/code/update-your-posts-in-readme",revision:"2667e771d879156455616dcb9f160e22"},{url:"/tech/auto-download-bangumi-with-aria2-rss",revision:"91eb9e51d2e646da1436df33b5246be3"},{url:"/life/daily-impermanence",revision:"721fa46006355d2ec8370a431302d119"},{url:"/code/heu-auto-checkin-covid19",revision:"747ec4ff16c78f691172af0f4cbcf35f"},{url:"/tag/Aria2",revision:"2039d5c9da00ef35e377d7ff0c82996a"},{url:"/tag/FlexGet",revision:"1cdfd4b44efeef407a6c8c0186829bae"},{url:"/tag/RSS",revision:"7d98a501e54534d7059705af21d2e4cc"},{url:"/tag/%E6%89%8B%E5%B8%90",revision:"3899084d82128c017d1f3f6c60e96c5d"},{url:"/tag/%E6%80%9D%E8%80%83",revision:"e6e1722187ffa03db6f98d72fa75580a"},{url:"/tag/COVID-19",revision:"2069cf6659c4b95b1be1033eb14ed705"},{url:"/tag/%E8%B0%83%E8%AF%95",revision:"a42e9ee533a7cef610249f8030c14b1c"},{url:"/tag/Python",revision:"ea7933fda08676e942fff6cbc374adda"},{url:"/tag/GitHub%20Actions",revision:"164e70d955941f5796e92ac0208452dc"},{url:"/tag/%E5%AE%9A%E6%97%B6%E4%BB%BB%E5%8A%A1",revision:"d44387f2d2cbc2b7931a7e16838d49a1"},{url:"/tag/webdrivers",revision:"3ae43b72173d80167c850e2879157177"},{url:"/tag/Gridsome",revision:"d25e61e1eedc2e237b8037fc6f135b6d"},{url:"/tag/Blog",revision:"df92b41d4142e571cdf53b6659d2f47d"},{url:"/tag/Markdown",revision:"60307797bf2abbd6f9c1bfecb1268dca"},{url:"/tag/README",revision:"783703763924fc501c80ec335fd98807"},{url:"/watch",revision:"0a261f48ba3244e5d37dda83888ed553"},{url:"/friends",revision:"4f4f566c0d74393e1158a8f8d6e37c10"},{url:"/about",revision:"a7224db13f3a49096aa27c1876d1a947"},{url:"/archives",revision:"6dc779670bc86b280adac33a13404034"}],{})}));
//# sourceMappingURL=service-worker.js.map

addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'SKIP_WAITING') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
