<script setup lang="ts">
const { page } = useContent();
const toc = page.value?.body.toc.links || [];
const tocBtn = 'div#site-btns button[aria-label="To Content"]';
const tocBody = "div#post-toc";
const tocMaskId = "post-nav-mask";
const activeTocId: Ref<string | null> = ref(null);
const postContent = ref(null);
const observer: Ref<IntersectionObserver | null | undefined> = ref(null);
const observerOptions = reactive({
  root: postContent.value,
  threshold: 0.9,
});
const closeToc = async (): Promise<void> => {
  document.querySelector(tocBody)?.classList.remove("!block");
  document.getElementById(tocMaskId)?.classList.remove("!block");
};
const setActiveTitle = async (id: string) => {
  activeTocId.value = id;
};
const observeTitles = async (): Promise<void> => {
  observer.value = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      if (entry.isIntersecting) {
        console.log(id);
        activeTocId.value = id;
      }
    });
  }, observerOptions);
  document
    .querySelectorAll("article.prose h2[id], article.prose h3[id]")
    .forEach((section) => {
      observer.value?.observe(section);
    });
};
onMounted(() => {
  nextTick(() => {
    document.querySelector(tocBtn)?.classList.remove("!hidden");
    observeTitles();
  });
});
onUnmounted(() => {
  observer.value?.disconnect();
  document.querySelector(tocBtn)?.classList.add("!hidden");
});
</script>

<template>
  <aside class="block min-w-0">
    <div
      :id="tocMaskId"
      @click="closeToc"
      class="fixed top-0 bottom-0 right-0 left-0 z-50 hidden bg-[rgb(0_0_0/.6)]"
    ></div>
    <div
      id="post-toc"
      class="no-scrollbar fixed left-0 right-0 bottom-0 z-50 m-5 hidden max-h-[50vh] min-h-[40px] select-none overflow-auto rounded-2xl bg-white p-5 text-slate-900 shadow-xl dark:bg-slate-800 dark:text-white sm:left-[calc(12.5%-20px)] sm:right-[calc(12.5%-20px)] sm:mb-[30px] sm:max-h-[316px] lg:left-[calc(19.1%+20px)] lg:right-[calc(19.1%+20px)] xl:left-[calc(80.9%-60px)] xl:right-0 xl:top-[64px] xl:mb-5 xl:block xl:max-h-[calc(100vh-316px-30px)] xl:!bg-transparent xl:shadow-none"
    >
      <div class="mb-5 font-bold xl:-mt-5">文章目录</div>
      <ul class="list-none">
        <template v-for="item in toc">
          <li
            class="m-0"
            @click="setActiveTitle(item.id)"
            :class="{
              'font-bold':
                item.id === activeTocId ||
                item.children?.some((sub) => sub.id === activeTocId),
            }"
          >
            <NuxtLink
              class="flex cursor-pointer justify-between overflow-hidden text-ellipsis whitespace-nowrap px-3 py-2 text-sm leading-tight no-underline"
              :to="`#${item.id}`"
              >{{ item.text }}</NuxtLink
            >
          </li>
          <ul
            class="mx-5 mb-3 list-none border-l-2 border-solid pl-1"
            v-if="item.children"
          >
            <li
              class="m-0"
              @click="setActiveTitle(subItem.id)"
              v-for="subItem in item.children"
            >
              <NuxtLink
                class="flex cursor-pointer justify-between px-3 py-1 text-sm leading-tight no-underline"
                :to="`#${subItem.id}`"
                :class="{ 'font-bold': subItem.id === activeTocId }"
                >{{ subItem.text }}</NuxtLink
              >
            </li>
          </ul>
        </template>
      </ul>
    </div>
  </aside>
</template>
