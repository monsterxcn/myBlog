<template>
  <div class="author">
    <g-link class="logo" to="/"
      ><g-image
        alt="Author image"
        class="author__image"
        src="../assets/images/favicon.png"
        width="180"
        height="180"
        blur="5"
    /></g-link>

    <h1 v-if="showTitle" class="author__site-title">
      {{ $static.metadata.siteName }}
    </h1>

    <p class="author__intro">一只怠惰的臭弟弟 つ﹏⊂</p>

    <p class="author__links">
      <g-link to="/feed.xml" target="_blank" style="color: #f5a623"
        ><font-awesome :icon="['fas', 'rss']" /></g-link
      ><g-link to="/archives" style="color: var(--title-color)"
        ><font-awesome :icon="['fas', 'archive']" /></g-link
      ><g-link to="/watch" style="color: #06a878"
        ><font-awesome :icon="['fas', 'dragon']" /></g-link
      ><g-link to="/friends" style="color: #ff0000"
        ><font-awesome :icon="['fas', 'heart']" /></g-link
      ><g-link to="/about"><font-awesome :icon="['fas', 'id-badge']" /></g-link>
    </p>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  props: ['showTitle'],
}
</script>

<style lang="scss">
.author {
  margin: 0 auto;
  max-width: 500px;
  text-align: center;
  padding: calc(var(--space) / 2) 0;
  &__image {
    border-radius: 100%;
    width: 90px;
    height: 90px;
    margin-bottom: 1em;
  }
  &__intro {
    opacity: 0.8;
  }
  &__site-title {
    font-size: 1.5em;
  }
  &__links {
    margin-top: -0.5em;
    font-size: 1em;
    a {
      color: var(--link-color);
      margin: 0 0.5em;
    }
  }
}
</style>
