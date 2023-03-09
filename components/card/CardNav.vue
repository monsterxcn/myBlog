<script setup lang="ts">
const { surround } = useContent();
</script>

<template>
  <nav
    id="post-nav"
    class="my-5 mx-auto flex w-[calc(100%-40px)] flex-row font-bold text-slate-900 [text-shadow:_0_4px_8px_var(--tw-ring-color)] dark:text-slate-50 sm:w-3/4 lg:w-[calc(61.8%-80px)]"
  >
    <div class="flex shrink grow basis-1/2 justify-start text-left">
      <NuxtLink
        class="flex flex-row items-center gap-2 py-0 px-2 no-underline outline-none"
        :to="surround[0]?._path || ''"
      >
        <Icon name="prev-icon" class="min-h-[1.25rem] min-w-[1.25rem]"></Icon>
        <span>{{ surround[0]?.title || "没有上一篇了" }}</span>
      </NuxtLink>
    </div>
    <div class="flex shrink grow basis-1/2 justify-end text-right">
      <NuxtLink
        class="flex flex-row items-center gap-2 py-0 px-2 no-underline outline-none"
        :to="surround[1]?._path || ''"
      >
        <span>{{ surround[1]?.title || "没有下一篇了" }}</span>
        <Icon name="next-icon" class="min-h-[1.25rem] min-w-[1.25rem]"></Icon>
      </NuxtLink>
    </div>
  </nav>
</template>
