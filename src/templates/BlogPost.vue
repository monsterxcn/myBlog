<template>
  <div>
    <div class="post-title">
      <h1 class="post-title__text">
        {{ $page.post.title }}
        <span class="post-title__publish-icon" v-if="!$page.post.published"
          >DRAFT</span
        >
      </h1>

      <PostMeta :post="$page.post" />
    </div>

    <div class="post content-box">
      <div class="post__header">
        <g-image
          alt="Cover image"
          v-if="$page.post.cover_image"
          :src="$page.post.cover_image"
        />
      </div>

      <div class="admonition admonition-warning" v-if="publishedDays >= 180">
        <p style="margin-bottom: 0;">
          🌶 <strong>注意：</strong> 本文最后修改于
          {{ publishedDays }}
          天前，其中某些信息可能已经过时，还请仔细甄别！
        </p>
      </div>

      <div class="post__content" v-html="$page.post.content" />

      <div class="post__footer">
        <PostTags :post="$page.post" />
      </div>

      <div class="post__navigation">
        <a
          class="navlink"
          v-if="$page.previous"
          :href="$page.previous.path"
          style="float: left;"
          >&#9664; {{ $page.previous.title }}</a
        >
        <a
          class="navlink"
          v-if="$page.next"
          :href="$page.next.path"
          style="float: right;"
          >{{ $page.next.title }} &#9654;</a
        >
      </div>
    </div>

    <div class="artalk-cards">
      <details class="admonition admonition-warning">
        <summary>
          <div class="admonition-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="16"
              viewBox="0 0 12 16"
            >
              <path
                fill-rule="evenodd"
                d="M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"
              ></path>
            </svg>
          </div>
          Comment on Monstx's Blog<!-- 评论区施工中... -->
        </summary>
        <p>
          评论发表后 UA 信息、IP
          地址会被记录，分别用于评论区展示和垃圾评论拦截。<br />
          无特殊原因评论不会被删除，你应该懂得如何发表适当的言论并对其负责。
        </p>
      </details>
      <div id="LetsArtalk"></div>
    </div>

    <transition name="fade">
      <div
        id="back-to-top"
        v-scroll-to="{ el: '#app' }"
        v-if="scrolledDist > 800"
      >
        <font-awesome id="back-to-top-icon" :icon="['fas', 'arrow-up']" />
      </div>
    </transition>

    <Author class="post-author" />
  </div>
</template>

<script>
import 'artalk/dist/Artalk.css'
import 'katex/dist/katex.min.css'
import PostMeta from '~/components/PostMeta'
import PostTags from '~/components/PostTags'
import Author from '~/components/Author'
export default {
  components: {
    Author,
    PostMeta,
    PostTags,
  },
  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description,
        },
      ],
    }
  },
  data() {
    return {
      scrolledDist: 0,
      publishedDays: 0,
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
    // Add post outdated notification banner
    const today = new Date()
    const publishTime = new Date(this.$page.post.date)
    const publishedDays = Math.ceil(
      (today - publishTime) / (1000 * 60 * 60 * 24)
    )
    this.publishedDays = publishedDays
    // Initialize post comment by Artalk
    if (process.env.NODE_ENV === 'production') {
      let Artalk = require('artalk')
      var artalk = new Artalk({
        el: '#LetsArtalk',
        placeholder: '说点什么 (づ￣ 3￣)づ',
        defaultAvatar: 'mp',
        maxNest: 2,
        pageKey: 'https://blog.monsterx.cn' + this.$page.post.path,
        serverUrl: 'https://lab.monsterx.cn/ArtalkServer',
        readMore: {
          pageSize: 10,
          autoLoad: true,
        },
      })
    }
  },
}
</script>

<page-query>
query Post ($id: ID!, $previousElement: ID!, $nextElement: ID!) {
  post: post (id: $id) {
    title
    path
    date (format: "MMMM D, YYYY")
    timeToRead
    cjkWordCount
    cjkReadTime
    tags {
      id
      title
      path
    }
    cate {
      id
      title
      path
    }
    description
    published
    content
    cover_image (width: 1280, blur: 10)
  }

  previous: post (id: $previousElement) {
    title
    path
  }

  next: post(id: $nextElement) {
    title
    path
  }
}
</page-query>

<style lang="scss">
.artalk-cards {
  background: var(--at-bg-main);
  border-radius: var(--radius);
  max-width: var(--content-width);
  margin: 20px auto 100px;
  box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.02),
    1px 1px 15px 0 rgba(0, 0, 0, 0.03);
  details {
    margin: 0 auto;
    text-align: center;
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    font-weight: 600;
    outline: none;
    summary {
      list-style: none;
      margin: 4px auto !important;
      color: var(--cb-admonition-icon-color) !important;
      margin: 2.75rem 0 1rem;
      font-family: var(--title-font-family);
      line-height: 1.5;
      outline: none;
    }
    summary::-webkit-details-marker {
      display: none;
    }
    p {
      color: var(--at-font-color);
      margin-bottom: 0;
    }
  }
  #LetsArtalk {
    padding: 20px;
  }
  @media screen and (max-width: 767.5px) {
    details > p {
      text-align: left;
    }
    #LetsArtalk {
      padding: 20px 0 0 0;
    }
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
  &__navigation {
    border-top: 1px solid var(--border-color);
    margin-top: calc(var(--space) / 2);
    padding: calc(var(--space) / 2) 0 0 0;
    overflow: auto;
    .navlink {
      border: none;
      text-decoration: none;
      &:first-of-type {
        margin-bottom: calc(var(--space) / 4);
      }
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
.post__navigation__ {
  font-family: 'Roboto Slab', -apple-system, BlinkMacSystemFont, Segoe UI,
    Helvetica, Arial, pingfang sc, source han sans sc, noto sans cjk sc,
    sarasa gothic sc, microsoft yahei, sans-serif, Apple Color Emoji,
    Segoe UI Emoji;
}
</style>
