<template>
  <div id="app">
    <div id="nprogress-container">
      <header class="header">
        <div class="header__left">
          <Logo v-if="showLogo" />
        </div>

        <div class="header__right">
          <ToggleTheme />
        </div>
      </header>
    </div>

    <main class="main">
      <!-- <slot /> -->
      <!-- Re-render components on each route to force route path change.
           See: https://github.com/gridsome/gridsome/issues/835 -->
      <router-view :key="$route.path" />
    </main>

    <footer class="footer">
      <div class="footer__copyright">
        <a
          href="http://www.beian.miit.gov.cn/"
          target="_blank"
          rel="nofollow noopener noreferrer"
          style="text-decoration: none; cursor: default"
          >皖 ICP 备 18021272 号 - 1</a
        >
        © 2014 - {{ new Date().getFullYear() }}
      </div>
      <div class="footer__links">
        <a
          href="https://gridsome.org"
          target="_blank"
          rel="nofollow noopener noreferrer"
          >Gridsome</a
        >
        ×
        <a
          href="https://github.com/spencerwooo"
          target="_blank"
          rel="nofollow noopener noreferrer"
          >SpencerWoo</a
        >
        ×
        <a
          href="https://promotion.aliyun.com/ntms/act/ambassador/sharetouser.html?userCode=ztik1iwq&utm_source=ztik1iwq"
          target="_blank"
          rel="nofollow noopener noreferrer"
          >Aliyun</a
        >
        ×
        <a
          href="https://www.dogedoge.com"
          target="_blank"
          rel="nofollow noopener noreferrer"
          >DogeDoge</a
        >
        <!-- ×
        <a href="https://github.com/JalenChuh" target="_blank"  rel="nofollow noopener noreferrer">Jalen</a>-->
      </div>
    </footer>
  </div>
</template>

<script>
import Logo from '~/components/Logo'
import ToggleTheme from '~/components/ToggleTheme'
export default {
  metaInfo: {
    script: [
      {
        async: true,
        defer: true,
        'data-website-id': '65fec8e8-f05c-48ee-8d37-9177594c4282',
        src: 'https://analytics.monsterx.cn/umami.js',
      },
    ],
  },
  props: {
    showLogo: { default: true },
  },
  components: {
    Logo,
    ToggleTheme,
  },
}
</script>

<style lang="scss">
#app {
  scroll-behavior: smooth;
}
#nprogress-container {
  display: flex;
  align-items: center;
  min-height: var(--header-height);
  padding: 0 calc(var(--space) / 2);
  top: 0;
  background-color: rgba(255, 255, 255, 0.6);
  background-color: rgba($color: var(--bg-color-rgb), $alpha: 0.6);
  backdrop-filter: blur(32px);
  z-index: 10;

  @media screen and (min-width: 1300px) {
    // Make header sticky for large screens
    position: sticky;
    width: 100%;
  }
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  &__left,
  &__right {
    display: flex;
    align-items: center;
    font-family: var(--base-font-family);
  }
}
.main {
  margin: 0 auto;
  padding: 1.5vw 15px 0;
}
.footer {
  // max-width: var(--content-width);
  // margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space) 15px var(--space);
  text-align: center;
  line-height: 1.8;
  font-size: 0.9em;
  font-family: var(--base-font-family);
  > span {
    margin: 0 0.35em;
  }
  a {
    color: currentColor;
  }
  svg {
    margin-right: 0.2rem;
  }
}
</style>
