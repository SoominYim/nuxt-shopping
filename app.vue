<template>
  <v-app>
    <NuxtLayout>
      <div class="main">
        <NuxtPage />
      </div>
    </NuxtLayout>
  </v-app>
</template>

<style>
  @import url("@/assets/style/reset.scss");
  #__nuxt {
    border-left: 1px solid rgba(138, 138, 138, 0.3);
    border-right: 1px solid rgba(138, 138, 138, 0.3);
    max-width: 600px;

    height: auto;
    margin: 0 auto;
  }
  .main {
    min-height: 900px;
  }
</style>
