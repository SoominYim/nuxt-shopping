<template>
  <NuxtLayout>
    <div class="main">
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>

<style>
  @import url("@/assets/style/reset.scss");
  body {
    overflow-y: scroll;
  }
  #__nuxt {
    max-width: 600px;

    height: auto;
    margin: 0 auto;
  }
  .main {
    min-height: 90vh;
  }
</style>
