<template>
  <section
    id="content-error"
    class="grid min-h-[calc(100vh-128px-70px)] place-content-center transition-[background-color] duration-1000"
  >
    <div class="text-center">
      <h1
        class="!mb-5 !text-9xl font-black text-gray-200 transition-[color] duration-1000 dark:text-gray-700"
      >
        204
      </h1>
      <p
        class="!mb-0 text-2xl font-bold tracking-tight text-gray-900 transition-[color] duration-1000 dark:text-white sm:text-4xl"
      >
        No Content
      </p>
      <p
        class="!mt-2 text-gray-500 transition-[color] duration-1000 dark:text-gray-400"
      >
        请求的页面没有任何内容
      </p>
      <NuxtLink
        to="/"
        class="mt-6 inline-block rounded bg-blue-500 px-5 py-3 text-sm font-medium text-white no-underline hover:bg-blue-700 focus:outline-none focus:ring"
      >
        带我回家
      </NuxtLink>
    </div>
  </section>
</template>
