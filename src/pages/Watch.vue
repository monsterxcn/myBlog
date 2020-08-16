<template>
  <div>
    <div class="post-title">
      <h1 class="post-title__text">
        剧
      </h1>
      <!-- <PostMeta :post="$page.post" /> -->
    </div>

    <div class="post content-box">
      <div class="post__content">
        <div class="md-content">
          <h3 style="margin-top: 0" id="最近在看">
            <a href="#最近在看"></a>最近在看
          </h3>
          <div class="watch-collection">
            <a
              class="watch-item"
              v-for="witem in wow"
              :href="witem.url"
              target="_blank"
            >
              <div class="watch-item-thumb" :style="witem.style"></div>
              <div class="watch-item-info">
                <span class="watch-item-title forei">{{ witem.name }}</span>
                <span class="watch-item-title">{{ witem.namecn }}</span>
              </div>
            </a>
          </div>

          <h3 style="margin-top: 0" id="有趣的二次元">
            <a href="#有趣的二次元"></a>有趣的二次元
          </h3>
          <blockquote>
            <p>还不知道该如何排版。。。</p>
          </blockquote>

          <h3 id="有趣的三次元"><a href="#有趣的三次元"></a>有趣的三次元</h3>
          <blockquote>
            <p>还不知道该如何排版。。。</p>
          </blockquote>

          <p></p>
        </div>
      </div>
    </div>

    <div class="post-comments">
      <div id="disqus_thread" />
    </div>

    <transition name="fade">
      <div
        id="back-to-top"
        v-scroll-to="{ el: '#app' }"
        v-if="scrolledDist > 400"
      >
        <font-awesome id="back-to-top-icon" :icon="['fas', 'arrow-up']" />
      </div>
    </transition>

    <Author class="post-author" />
  </div>
</template>

<script>
import Author from '~/components/Author.vue'
import DisqusJS from 'disqusjs'
export default {
  components: {
    Author,
  },
  metaInfo() {
    return {
      title: '剧',
      meta: [
        {
          name: '异次元什么的实在令人无法自拔',
        },
      ],
    }
  },
  data() {
    return {
      wow: [
        {
          name: '彼女、お借りします',
          namecn: '租借女友',
          url: 'http://bgm.tv/subject/296076',
          style:
            'background-image:url(https://lain.bgm.tv/pic/cover/l/7a/37/296076_Saapf.jpg)',
        },
        {
          name: 'やはり俺の青春ラブコメはまちがっている。完',
          namecn: '我的青春恋爱物语果然有问题 完',
          url: 'http://bgm.tv/subject/277954',
          style:
            'background-image:url(https://lain.bgm.tv/pic/cover/l/ba/69/277954_s8qHA.jpg)',
        },
        {
          name: '魔王学院の不適合者',
          namecn: '魔王学院的不适任者',
          url: 'http://bgm.tv/subject/292222',
          style:
            'background-image:url(https://lain.bgm.tv/pic/cover/l/3b/ad/292222_Seh7t.jpg)',
        },
        {
          name: 'モンスター娘のお医者さん',
          namecn: '魔物娘的医生',
          url: 'http://bgm.tv/subject/294654',
          style:
            'background-image:url(https://lain.bgm.tv/pic/cover/l/dd/0d/294654_ca6tM.jpg)',
        },
        {
          name: 'ド級編隊エグゼロス',
          namecn: '弩级战队HXEROS',
          url: 'http://bgm.tv/subject/293648',
          style:
            'background-image:url(https://lain.bgm.tv/pic/cover/l/be/48/293648_CMRc5.jpg)',
        },
        {
          name: 'ピーター・グリルと賢者の時間',
          namecn: '彼得·格里尔的贤者时间',
          url: 'http://bgm.tv/subject/291195',
          style:
            'background-image:url(https://lain.bgm.tv/pic/cover/l/87/f4/291195_7t8QW.jpg)',
        },
        {
          name: '中二病でも恋がしたい！戀',
          namecn: '中二病也要谈恋爱！恋',
          url: 'http://bgm.tv/subject/72942',
          style:
            'background-image:url(https://lain.bgm.tv/pic/cover/l/c8/e4/72942_VniXv.jpg)',
        },
        {
          name: '斉木楠雄のΨ難 第2期',
          namecn: '齐木楠雄的灾难 第二季',
          url: 'http://bgm.tv/subject/204027',
          style:
            'background-image:url(https://lain.bgm.tv/pic/cover/l/37/08/204027_irnYl.jpg)',
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
  mounted() {
    // Initialize post comment by DisqusJS
    if (process.env.NODE_ENV === 'production') {
      const disqusjs = new DisqusJS({
        shortname: 'msxblog',
        siteName: "Monstx's Blog",
        identifier: 'monstx-blog-watch',
        apikey:
          'nnWvERGRgCp61HgRxkILYfkUAaWnPDcuqfmoE4ZVJt9C8Tys4abmOcLRdOzEFLti',
        admin: 'monstx',
        adminLabel: '萌新',
      })
    }
  },
}
</script>

<style lang="scss">
.watch-collection {
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  margin-left: -20px;
  width: calc(100% + 20px);
}
.watch-item {
  display: block;
  margin-left: 20px;
  margin-bottom: 20px;
  position: relative;
  border-radius: 10px;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.2);
  transition: 0.3s ease box-shadow;
  border: none !important;
  text-decoration: none !important;
  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    border: none !important;
    text-decoration: none !important;
  }
  @media screen and (max-width: 767.5px) {
    & {
      width: calc(33.33333333333% - 20px);
    }
  }
  @media screen and (max-width: 450px) {
    & {
      width: calc(50% - 20px);
    }
  }
  @media screen and (min-width: 767.5px) {
    & {
      width: calc(25% - 20px);
    }
  }
}
.watch-item-thumb {
  width: 100%;
  padding-top: 120%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.watch-item-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  overflow: hidden;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  > * {
    display: block;
    text-align: center;
    margin: 0 auto;
    max-width: 100%;
  }
}
.watch-item-title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.9rem;
  color: #333;
  &:not(.forei) {
    color: #5e5b5c;
  }
  &.forei {
    font-size: 1.2rem;
    padding-top: 0;
  }
}

body[data-theme='dark'] {
  .watch-item-title.forei {
    color: #5e5b5c;
  }
  .watch-item-title:not(.forei) {
    color: #bbb;
  }
  .watch-item-info {
    color: #b0b0b0;
    background: #222;
  }
}

.post-title {
  padding: var(--space) 0 var(--space);
  text-align: center;
  &__publish-icon {
    vertical-align: top;
    background-color: #f7b955;
    display: inline-block;
    font-size: 14px;
    height: 18px;
    line-height: 18px;
    border-radius: 3px;
    padding: 0 6px;
    color: #fff;
  }
}
.post-meta {
  font-family: var(--base-font-family);
}
.post {
  p span {
    font-size: 0.85rem;
    font-family: var(--monospace-font-family);
    &::after {
      content: ' ';
    }
  }
  &__header {
    width: calc(100% + var(--space) * 2);
    margin-left: calc(var(--space) * -1);
    margin-top: calc(var(--space) * -1);
    margin-bottom: calc(var(--space) / 2);
    overflow: hidden;
    border-radius: var(--radius) var(--radius) 0 0;
    img {
      width: 100%;
    }
    &:empty {
      display: none;
    }
  }
  &__content {
    h2:first-child {
      margin-top: 0;
    }
    // p:first-of-type {
    //   // font-size: 1.2em;
    //   color: var(--title-color);
    // }
    p {
      line-height: 1.8;
    }
    img {
      // width: calc(100% + var(--space) * 2);
      // margin-left: calc(var(--space) * -1);
      display: block;
      max-width: 100%;
      margin: 0 auto;
    }
  }
}
.footnotes {
  p {
    display: inline;
  }
  hr {
    padding: calc(var(--space) / 2) 0 0 0;
    border: none;
    border-top: 1px solid var(--border-color);
    margin: 0 0;
  }
  .footnote-backref {
    display: inline;
  }
}
.post-comments {
  font-family: var(--base-font-family);
  padding: calc(var(--space) / 2);
  max-width: var(--content-width);
  margin: 0 auto;
}
.post-author {
  margin-top: calc(var(--space) / 2);
}
#back-to-top {
  position: fixed;
  bottom: 40px;
  right: 30px;
  z-index: 100;
  cursor: pointer;
}
#back-to-top-icon {
  font-size: 1.1em;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
