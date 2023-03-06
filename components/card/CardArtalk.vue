<script setup lang="ts">
const { msx, artalkConf } = useAppConfig();
const { page } = useContent();
const colorMode = useColorMode();
const artalkId = "Artalk";
const commentBody = "section#site-comments";
const commentBtn = 'div#site-btns button[aria-label="To Comment"]';
const domDelay = 800;
const props = defineProps({
  pageKey: {
    type: String,
    default: "",
  },
  show: {
    type: Boolean,
    default: true,
  },
});
const artalkStatus = computed(() => {
  if ((!props.show) || (!page.value?.comment)) return "当前页面评论已关闭";
  if (!artalkConf.server) return "Artalk 服务端未配置";
  return "ok";
});
const initArtalk = async (): Promise<void> => {
  if (artalkStatus.value === "ok") {
    await Promise.all([
      import("artalk"),
      import("artalk/dist/Artalk.css"),
      import("~/assets/css/artalk.css"),
      new Promise<void>((resolve) => {
        setTimeout(() => {
          void nextTick().then(resolve);
        }, domDelay);
      }),
    ]).then(([{ default: _Artalk }]) => {
      const initConf = {
        site: msx.title,
        pageTitle: page.value.title,
        ...artalkConf,
        el: `#${artalkId}`,
        pageKey: page.value._path,
      };
      // console.info(initConf);

      const artalk = new _Artalk(initConf);
      artalk.setDarkMode(colorMode.value === "dark");

      let comments = document.querySelector(commentBody);
      if (comments) {
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        const rect = comments.getBoundingClientRect();
        if (rect.top > windowHeight || rect.top + rect.height < 0) {
          document.querySelector(commentBtn)?.classList.remove("!hidden");
        }
      }

      watch(colorMode, (v) => {
        artalk.setDarkMode(v.value === "dark");
      });
    });
  }
};
onMounted(() => {
  watch(
    () => [artalkStatus.value, page.value._path],
    () => initArtalk(),
    { immediate: true }
  );
});
onUnmounted(() => {
  document.querySelector("div.atk-layer-wrap")?.remove();
  document.querySelector(commentBtn)?.classList.add("!hidden");
});
</script>

<template>
  <section
    id="site-comments"
    class="mx-auto my-5 min-h-[calc(56px+68px)] w-[calc(100%-40px)] rounded-2xl bg-white shadow-xl dark:bg-slate-800 sm:w-3/4 lg:w-[calc(61.8%-80px)]"
  >
    <details
      class="mx-0 my-auto select-none rounded-t-2xl bg-blue-50 px-12 py-4 text-center font-semibold text-blue-400 outline-none dark:bg-blue-900 dark:text-blue-300"
    >
      <summary class="mx-auto my-1 list-none leading-normal">
        <Icon name="comment-btn" class="h-7 w-7 pr-2" />
        <span>Comment on Monstx's Blog</span>
      </summary>
      <p class="font-normal">
        评论发表后 UA 信息、IP
        地址会被记录，分别用于评论区展示和垃圾评论拦截。<br />
        无特殊原因评论不会被删除，你应该懂得如何发表适当的言论并对其负责。
      </p>
    </details>
    <LazyClientOnly>
      <div :id="artalkId" v-if="artalkStatus === 'ok'"></div>
      <div
        class="prose mx-0 my-auto max-w-none select-none rounded-b-2xl px-12 py-4 text-center dark:prose-invert lg:prose-lg"
        v-else
      >
        {{ artalkStatus }}
      </div>
    </LazyClientOnly>
  </section>
</template>
