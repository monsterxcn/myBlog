<template>
  <div class="post-meta">
    {{ post.date }} ·
    <template v-if="post.cjkWordCount">
      {{ post.cjkWordCount }} words ·
      <strong> {{ post.cjkReadTime }} min read</strong>
    </template>
  </div>
</template>

<script>
export default {
  props: ['post'],
}
</script>

<style lang="scss">
.post-meta {
  font-size: 0.9em;
  opacity: 0.9;
}
</style>
