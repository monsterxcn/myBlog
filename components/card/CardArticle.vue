<template>
  <article
    class="prose mx-auto w-[calc(100%-40px)] max-w-none rounded-2xl bg-white p-2.5 shadow-xl transition-colors duration-1000 dark:prose-invert lg:prose-lg dark:bg-slate-800 sm:w-3/4 md:p-5 lg:w-[calc(61.8%-80px)] [&:has(section#content-error)]:!p-0"
  >
    <slot />
  </article>
</template>
