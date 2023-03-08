<script setup lang="ts">
const { msx } = useAppConfig();
const yearNow = new Date().getFullYear();
const colorMode = useColorMode();
const toggleTheme = () => {
  const values = ["system", "light", "dark"]; // "sepia"
  const index = values.indexOf(colorMode.preference);
  const next = (index + 1) % values.length;
  colorMode.preference = values[next];
};
</script>

<script lang="ts">
const navBar = "header#site-nav";
const shadowClass = "scroll-shadow";
const commentBody = "section#site-comments";
const commentBtn = 'div#site-btns button[aria-label="To Comment"]';

export default {
  methods: {
    handleScroll() {
      this.scrolledY = window.scrollY;

      if (this.scrolledY > 20) {
        document.querySelector(navBar)?.classList.add(shadowClass);
      } else {
        document.querySelector(navBar)?.classList.remove(shadowClass);
      }

      let comments = document.querySelector(commentBody);
      if (comments) {
        // const scrollTop =
        //   window.pageYOffset ||
        //   document.documentElement.scrollTop ||
        //   document.body.scrollTop;
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        const rect = comments.getBoundingClientRect();
        if (rect.top <= windowHeight && rect.top + rect.height >= 0) {
          document.querySelector(commentBtn)?.classList.add("!hidden");
        } else {
          document.querySelector(commentBtn)?.classList.remove("!hidden");
        }
      }
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    scrollToComment() {
      document
        .querySelector(commentBody)
        ?.scrollIntoView({ behavior: "smooth" });
    },
  },
  data() {
    return {
      scrolledY: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<template>
  <div
    id="site-btns"
    class="fixed bottom-5 right-5 z-50 flex flex-col items-end justify-end sm:bottom-[30px] lg:right-[calc(19.1%-44px)]"
  >
    <ClientOnly>
      <button aria-label="To Top" @click="scrollToTop" v-if="scrolledY > 400">
        <Icon name="totop-btn" />
      </button>
    </ClientOnly>
    <button aria-label="To Content" class="!hidden">
      <Icon name="toc-btn" />
    </button>
    <button aria-label="To Comment" @click="scrollToComment" class="!hidden">
      <Icon name="comment-btn" />
    </button>
    <button aria-label="Color Mode" @click="toggleTheme">
      <ColorScheme placeholder="...">
        <Icon name="system-mode" v-if="colorMode.preference === 'system'" />
        <Icon name="light-mode" v-else-if="colorMode.preference === 'light'" />
        <Icon name="dark-mode" v-else-if="colorMode.preference === 'dark'" />
        <Icon name="sepia-mode" v-else-if="colorMode.preference === 'sepia'" />
      </ColorScheme>
    </button>
  </div>
  <footer
    id="site-foot"
    class="mx-0 mt-[30px] mb-5 flex min-h-[64px] w-full select-none flex-col justify-end text-center text-sm leading-3 text-slate-500"
  >
    <p class="m-0 mb-3 flex items-center justify-center gap-1">
      <!-- • -->
      <NuxtLink to="http://www.beian.miit.gov.cn/" noPrefetch v-if="msx.icp">{{
        msx.icp
      }}</NuxtLink>
      <NuxtLink to="/" v-else>{{ msx.title }}</NuxtLink>
      <Icon name="copyright" />
      {{ msx.year ? `${msx.year}-` : "" }}{{ yearNow }}
    </p>
    <p class="m-0 mb-3 flex items-center justify-center gap-1">
      Powered by
      <a href="https://nuxt.com/" class="flex items-center"
        ><Icon name="nuxt" class="mr-1 opacity-60" />Nuxt</a
      >,
      <a href="https://tailwindcss.com/" class="flex items-center"
        ><Icon name="tailwind" class="mr-1 opacity-60" />Tailwind CSS</a
      >
      and <Icon name="heart" />
    </p>
  </footer>
</template>

<style>
div#site-btns button {
  @apply z-50 mt-3 flex h-12 w-12 cursor-pointer items-center justify-center rounded-2xl border border-dashed border-slate-900 bg-white text-slate-900 opacity-70 shadow-xl hover:shadow-md dark:border-white dark:bg-slate-800 dark:text-white sm:mt-5 sm:h-16 sm:w-16 sm:border-0 sm:border-hidden sm:opacity-100;
}
div#site-btns svg {
  @apply h-6 w-6 fill-gray-800 sm:h-8 sm:w-8;
}
footer#site-foot a {
  @apply text-inherit no-underline hover:text-slate-800 dark:hover:text-slate-200 [&:hover>svg]:opacity-100;
}
</style>
