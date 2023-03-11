<script setup lang="ts">
const { msx } = useAppConfig();
</script>

<template>
  <header
    id="site-nav"
    class="sticky top-0 z-50 mx-auto mt-0 mb-5 flex h-16 w-full select-none items-center justify-between px-4 py-0 text-slate-900 backdrop-blur-2xl dark:text-white sm:px-16 lg:px-[19.1%] [&.scroll-shadow]:shadow-md"
  >
    <NuxtLink
      to="/"
      class="inline-flex h-10 w-10 items-center justify-center lg:w-fit"
    >
      <Icon name="logo-svg" class="!z-0 h-full w-full lg:w-fit lg:pr-4" />
      <span class="hidden text-lg font-black lg:inline-flex">{{
        msx.title
      }}</span>
    </NuxtLink>
    <ul
      class="m-0 flex list-none items-center justify-center gap-5 p-0 text-sm font-medium"
    >
      <li
        v-for="(pageUrl, pageName) in msx.pages"
        class="flex h-10 w-10 flex-row rounded-full p-2 sm:h-full sm:w-full sm:bg-inherit sm:p-0"
      >
        <NuxtLink
          :to="pageUrl"
          :alt="pageName"
          class="flex items-center gap-2 text-xl text-inherit no-underline hover:text-blue-500 [&.router-link-active.router-link-exact-active]:text-blue-500"
        >
          <Icon
            :name="`${pageUrl.slice(1) ? pageUrl.slice(1) : 'index'}-page`"
            class="h-full w-full"
          />
          <span class="hidden sm:inline-flex">{{ pageName }}</span>
        </NuxtLink>
      </li>
    </ul>
  </header>
</template>

<style>
header#site-nav.scroll-shadow li {
  @apply border border-dashed border-slate-900 bg-slate-50 dark:border-white dark:bg-slate-900 sm:border-0 sm:border-hidden sm:bg-inherit dark:sm:bg-inherit;
}
</style>
