<template>
  <div>
    <h1 class="not-found-title text-center space-bottom">404</h1>
    <div class="not-found-container">
      <p class="description">
        🍌 Oh, no, not here.
        <g-link to="/">Take me back home. ↩</g-link>
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.not-found-container {
  text-align: center;
  max-width: var(--content-width);
  margin: 200px auto;
  .description {
    opacity: 0.8;
  }
}
</style>
