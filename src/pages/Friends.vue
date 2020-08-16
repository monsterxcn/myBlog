<template>
  <div>
    <h1 class="friends-title text-center space-bottom">友</h1>

    <div class="friends-container text-center space-bottom">
      <div class="friends-content">
        <a
          class="friends-card btn"
          v-for="friend in friends"
          :key="friend.id"
          :href="friend.link"
          target="_blank"
          :style="friend.style"
          ><div class="friends-left">
            <img class="avatar" :src="friend.avatar" />
          </div>
          <div class="friends-right">
            <p class="friends-name">{{ friend.id }}</p>
          </div></a
        >
      </div>
      <p class="note">
        友链排序无关紧要，请不要在意 o((>ω< ))o <br />
        如需申请链接，请多来逛逛，熟悉之后我会主动向你申请
      </p>
    </div>
    
    <Author class="post-author" />
  </div>
</template>

<script>
import Author from '~/components/Author.vue'
export default {
  components: {
    Author,
  },
  metaInfo() {
    return {
      title: '友',
      meta: [
        {
          name: '青青子衿，悠悠我心',
        },
      ],
    }
  },
  data() {
    return {
      friends: [
        {
          id: '友人 C',
          link: 'https://www.ihewro.com',
          avatar: 'https://cdn.monsterx.cn/logo.ihewro.jpg.webp',
          style: 'color: #FFF; background-color: #000000',
        },
        {
          id: 'QWQAQ',
          link: 'https://qwqaq.com',
          avatar: 'https://cdn.monsterx.cn/logo.qwqcode.jpg.webp',
          style: 'color: #FFF; background-color: #4285f4',
        },
        {
          id: 'ZigZagK',
          link: 'https://zigzagk.top',
          avatar: 'https://cdn.monsterx.cn/logo.zig.jpg.webp',
          style: 'color: #FFF; background-color: #5d9aff',
        },
        {
          id: 'TonyHe',
          link: 'https://www.ouorz.com',
          avatar: 'https://cdn.monsterx.cn/logo.tonyhe.jpg.webp',
          style: 'color: #FFF; background-color: #e2e6ea',
        },
        {
          id: 'LOGI',
          link: 'https://logi.im',
          avatar: 'https://cdn.monsterx.cn/logo.logi.jpg.webp',
          style: 'color: #FFF; background-color: #fe6c6c',
        },
        {
          id: 'Ojhdt',
          link: 'https://blog.ojhdt.com',
          avatar: 'https://cdn.monsterx.cn/logo.ojhjt.jpg.webp',
          style: 'color: #FFF; background-color: #3273dc',
        },
        {
          id: '探索子',
          link: 'https://beyondstars.xyz',
          avatar: 'https://cdn.monsterx.cn/logo.tsz.jpg.webp',
          style: 'color: #FFF; background-color: #eb7350',
        },
        {
          id: 'XYenon',
          link: 'https://blog.xyenon.bid',
          avatar: 'https://cdn.monsterx.cn/logo.xyen.jpg.webp',
          style: 'color: #FFF; background-color: #9f563a',
        },
        {
          id: 'Pluveto',
          link: 'https://www.pluvet.com',
          avatar: 'https://cdn.monsterx.cn/logo.ipluvet.jpg.webp',
          style: 'color: #FFF; background-color: #654990',
        },
        {
          id: 'Aiokr',
          link: 'http://itypen.app',
          avatar: 'https://cdn.monsterx.cn/logo.aiokr.jpg.webp',
          style: 'color: #FFF; background-color: #333333',
        },
        {
          id: 'OldUrchin',
          link: 'https://blog.csdn.net/qq_44605933',
          avatar: 'https://cdn.monsterx.cn/logo.qy.jpg.webp',
          style: 'color: #FFF; background-color: #e33e33',
        },
        {
          id: '三十三言',
          link: 'https://o0o0o0.cn',
          avatar: 'https://cdn.monsterx.cn/logo.33y.jpg.webp',
          style: 'color: #FFF; background-color: #ea9595',
        },
        {
          id: '致远博客',
          link: 'https://blog.uniartisan.com',
          avatar: 'https://cdn.monsterx.cn/logo.zy.jpg.webp',
          style: 'color: #FFF; background-color: #111111',
        },
        {
          id: 'Steins;Lab',
          link: 'https://steinslab.io',
          avatar: 'https://cdn.monsterx.cn/logo.stein.png.webp',
          style: 'color: #FFF; background-color: #51aded',
        },
        {
          id: 'Helo',
          link: 'https://www.ishelo.com',
          avatar: 'https://cdn.monsterx.cn/logo.helo.jpg.webp',
          style: 'color: #FFF; background-color: #1196c4',
        },
        {
          id: 'EYHN',
          link: 'https://eyhn.in',
          avatar: 'https://cdn.monsterx.cn/logo.huaji8.jpg.webp',
          style: 'color: #FFF; background-color: #6cc8da',
        },
        {
          id: 'LiarOnce',
          link: 'https://www.liaronce.com',
          avatar: 'https://cdn.monsterx.cn/logo.liar.jpg.webp',
          style: 'color: #FFF; background-color: #65c186',
        },
        {
          id: 'Zero',
          link: 'https://mikuac.com',
          avatar: 'https://cdn.monsterx.cn/logo.zero.jpg.webp',
          style: 'color: #FFF; background-color: #bd6363',
        },
        {
          id: '哔哩哔哩',
          link: 'https://blog.csdn.net/qq_43690756',
          avatar: 'https://cdn.monsterx.cn/logo.lhw.jpg.webp',
          style: 'color: #FFF; background-color: #e33e33',
        },
        {
          id: 'Acetyl',
          link: 'https://blog.acetyl.me',
          avatar: 'https://cdn.monsterx.cn/logo.ylwsqq.jpg.webp',
          style: 'color: #FFF; background-color: #3f51b5',
        },
        {
          id: '九猫',
          link: 'https://hydrcat.github.io',
          avatar: 'https://cdn.monsterx.cn/logo.mh.png.webp',
          style: 'color: #FFF; background-color: #1e87f0',
        },
        {
          id: '独清独醒',
          link: 'https://www.foreverlong.cn',
          avatar: 'https://cdn.monsterx.cn/logo.dqfavicon.ico.webp',
          style: 'color: #FFF; background-color: #00a2ff',
        },
        {
          id: 'Ste.Sun',
          link: 'https://stevesun.cn',
          avatar: 'https://cdn.monsterx.cn/logo.sunq.jpg.webp',
          style: 'color: #FFF; background-color: #d274cd',
        },
      ],
      scrolledDist: 0,
    }
  },
  methods: {
    handleScroll() {
      if (process.isClient) {
        this.scrolledDist = window.scrollY
      }
    },
  },
  created() {
    if (process.isClient) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed() {
    if (process.isClient) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
}
</script>

<style lang="scss">
.friends-container {
  margin: 0 auto;
  max-width: 1080px;
  .friends-content {
    display: flex;
    flex-wrap: wrap;
    margin: -8px;
    align-items: flex-start;
    line-height: 1.3;
    a {
      border-radius: 10px;
    }
    .friends-card {
      display: flex;
      padding: 8px;
      margin: 0 auto;
      margin-top: calc(2.25 * 16px + 32px);
      color: #444;
      background: #fff;
      justify-content: flex-start;
      align-content: flex-start;
      flex-direction: column;
      max-width: 16rem;
      width: calc(100% / 4 - 16px);
      text-decoration: none;
    }
    .friends-left {
      display: flex;
      align-self: center;
      .avatar {
        width: 64px;
        height: 64px;
        margin: 10px;
        // margin: 16px 8px 4px 8px;
        // margin-top: calc(-1.25 * 16px - 32px);
        border-radius: 100%;
        border: 2px solid #fff;
        background: #fff;
      }
    }
    .friends-right {
      margin: 4px 8px;
      display: flex;
      flex-direction: column;
      text-align: center;
      p {
        text-align: center;
        margin: 0;
        &.friends-name {
          padding-top: 6px;
          padding-bottom: 4px;
          font-weight: bold;
        }
        &.tags {
          display: inline;
          background: none;
          word-wrap: break-word;
          padding-right: 4px;
        }
      }
      .friends-tags-wrapper {
        margin-left: -2px;
        word-break: break-all;
      }
    }
  }
}
@media screen and (max-width: 1280px) {
  .friends-container .friends-content .friends-card {
    width: calc(100% / 3 - 16px);
    margin-top: 16px;
  }
}
@media screen and (max-width: 1080px) {
  .friends-container .friends-content .friends-card {
    width: calc(100% / 2 - 16px);
  }
}
@media screen and (max-width: 768px) {
  .friends-container .friends-content .friends-card {
    width: calc(100% / 1 - 16px);
  }
}
.note {
  margin: calc(var(--space) / 2) 0;
  margin-top: 5em;
  font-size: 0.9em;
  opacity: 0.9;
}
</style>
