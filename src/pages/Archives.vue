<template>
  <div :show-logo="false">
    <h1 class="text-center space-bottom">册</h1>

    <div class="posts content-box">
      <div class="admonition admonition-important">
        <div class="admonition-heading">
          <h5>
            <div class="admonition-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="16"
                viewBox="0 0 14 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
                ></path>
              </svg>
            </div>
            统计
          </h5>
        </div>
        <div class="admonition-content">
          自 2018 年起，我在这里总计写作 {{ totalPosts }} 篇，共
          {{ totalWords }} 字 <br />
          加油 ( •̀ ω •́ )✧)
        </div>
      </div>

      <div v-for="year in backwardsTimeKey" :key="year">
        <h5>{{ year }}</h5>
        <p v-for="p in timeline[year]" :key="p.id">
          <span>{{
            new Date(p.date)
              .toLocaleString('en-US', {
                month: 'short',
                day: '2-digit',
              })
              .replace(' ', '.')
          }}</span
          ><g-link :to="p.path">{{ p.title }}</g-link>
        </p>
      </div>
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

<page-query>
query {
  posts: allPost(filter: { published: { eq: true }}) {
    edges {
      node {
        id
        title
        date
        cjkWordCount
        path
      }
    }
  }
}
</page-query>

<script>
import Author from '~/components/Author.vue'
export default {
  components: {
    Author,
  },
  metaInfo() {
    return {
      title: '册',
      meta: [
        {
          name: '笔耕不辍，钟情翰墨',
        },
      ],
    }
  },
  data() {
    return {
      timeline: {},
      backwardsTimeKey: [],
      totalPosts: 0,
      totalWords: 0,
      scrolledDist: 0,
    }
  },
  methods: {
    // Covert actual number to `xx.x k` expression, see: https://url.cn/JobLixKT
    kFormatter: num => {
      return Math.abs(num) > 999
        ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
        : Math.sign(num) * Math.abs(num)
    },
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
    this.totalPosts = this.$page.posts.edges.length
    const timeline = {}
    this.$page.posts.edges.forEach(post => {
      this.totalWords += post.node.cjkWordCount
      // Render timeline views
      const postYear = new Date(post.node.date).getFullYear()
      if (!(postYear in timeline)) {
        timeline[postYear] = []
      }
      timeline[postYear].push(post.node)
    })
    this.timeline = timeline
    this.backwardsTimeKey = Object.keys(timeline)
      .sort()
      .reverse()
    this.totalWords = this.kFormatter(this.totalWords)
  },
}
</script>

<style lang="scss">
.posts {
  p span {
    font-size: 0.85rem;
    font-family: var(--monospace-font-family);
    &::after {
      content: ' ';
    }
  }
}
</style>
