<template>
  <div :show-logo="false">
    <!-- Author intro -->
    <Author :show-title="true" />

    <!-- List posts -->
    <div class="posts">
      <PostCard
        v-for="edge in $page.posts.edges"
        :key="edge.node.id"
        :post="edge.node"
      />
    </div>

    <!-- Pagination -->
    <Pager :info="$page.posts.pageInfo" />

    <transition name="fade">
      <div
        id="back-to-top"
        v-scroll-to="{ el: '#app' }"
        v-if="scrolledDist > 400"
      >
        <font-awesome id="back-to-top-icon" :icon="['fas', 'arrow-up']" />
      </div>
    </transition>
  </div>
</template>

<page-query>
query ($page: Int) {
  posts: allPost(filter: { published: { eq: true }}, perPage: 7, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date (format: "MMMM D. YYYY")
        timeToRead
        cjkWordCount
        cjkReadTime
        description
        cover_image (width: 1280, height: 400, blur: 10)
        path
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
      }
    }
  }

  metadata {
    siteName
    siteUrl
    siteDescription
  }
}
</page-query>

<script>
import Author from '~/components/Author'
import PostCard from '~/components/PostCard'
export default {
  components: {
    Author,
    PostCard,
  },
  metaInfo() {
    return {
      title: 'Home',
      meta: [
        { key: 'og:type', property: 'og:type', content: 'website' },
        {
          key: 'og:title',
          property: 'og:title',
          content: this.$page.metadata.siteName,
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: this.$page.metadata.siteDescription,
        },
        {
          key: 'og:url',
          property: 'og:url',
          content: this.$page.metadata.siteUrl,
        },
        {
          key: 'og:image',
          property: 'og:image',
          content: 'https://blog.monsterx.cn/screen.png',
        },
        { key: 'twitter:card', name: 'twitter:card', content: 'summary' },
        { key: 'twitter:site', name: 'twitter:site', content: '@monsterxcn' },
        {
          key: 'twitter:creator',
          name: 'twitter:creator',
          content: '@monsterxcn',
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: this.$page.metadata.siteName,
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: this.$page.metadata.siteDescription,
        },
        {
          key: 'twitter:image',
          name: 'twitter:image',
          content: 'https://blog.monsterx.cn/screen.png',
        },
        {
          key: 'description',
          name: 'description',
          itemprop: 'description',
          content: this.$page.metadata.siteDescription,
        },
        {
          key: 'name',
          itemprop: 'name',
          content: this.$page.metadata.siteName,
        },
        {
          key: 'image',
          itemprop: 'image',
          content: 'https://blog.monsterx.cn/screen.png',
        },
      ],
      script: [
        {
          type: 'application/ld+json',
          json: {
            '@context': 'http://schema.org',
            '@type': 'Blog',
            description: this.$page.metadata.siteDescription,
            datePublished: '2020-08-15',
            author: { name: 'monsterxcn' },
            headline: this.$page.metadata.siteName,
            image: 'https://blog.monsterx.cn/screen.png',
          },
        },
      ],
    }
  },
  data() {
    return {
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
nav {
  max-width: var(--content-width);
  margin: 0 auto;
  text-align: center;
  a {
    margin: 0 10px;
    padding: 3px 10px;
    border: 1.5px var(--link-color);
    border-style: dashed;
    text-decoration: none;
  }
}
#back-to-top {
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 100;
  cursor: pointer;
}
#back-to-top-icon {
  font-size: 1.1em;
}
</style>
