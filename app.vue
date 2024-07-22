<script lang="ts" setup>
  onMounted(() => {
    document.documentElement.addEventListener(
      "touchstart",
      function (event) {
        if (event.touches.length > 1) {
          event.preventDefault();
        }
      },
      false
    );

    var lastTouchEnd = 0;

    document.documentElement.addEventListener(
      "touchend",
      function (event) {
        var now = new Date().getTime();
        if (now - lastTouchEnd <= 300) {
          event.preventDefault();
        }
        lastTouchEnd = now;
      },
      false
    );
  });
</script>

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
