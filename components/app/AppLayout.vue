<script setup lang="ts">
const { msx } = useAppConfig();
const { page } = useContent();
const getPageTitle = () => {
  if (page.value?._empty) return `204 - ${msx.title}`;
  if (page.value?._path === "/") return msx.title;
  if (page.value?.title) return `${page.value.title} - ${msx.title}`;
  return `404 - ${msx.title}`;
};
useHead({
  title: getPageTitle(),
  titleTemplate: () => getPageTitle(),
});
</script>

<template>
  <div id="msx-app">
    <!-- <NuxtLoadingIndicator /> -->
    <AppLoadingBar />
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>
