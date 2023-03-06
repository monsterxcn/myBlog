<script setup lang="ts">
const { msx } = useAppConfig();
const { page } = useContent();
const pageTitle = page.value?.title || (page.value?._empty ? 204 : 404);
useHead({
  title: `${pageTitle} - ${msx.title}`,
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
