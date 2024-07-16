<template>
  <div class="layout">
    <Header />
    <slot />
    <Footer />
  </div>
</template>
<script lang="ts" setup>
  import Header from "~/components/common/header.vue";
  import Footer from "~/components/common/footer.vue";
</script>
<style lang="scss">
  .layout {
    max-width: 600px;
    margin: 0 auto;
    border-left: 1px solid rgba(138, 138, 138, 0.3);
    border-right: 1px solid rgba(138, 138, 138, 0.3);
  }
  .header__layout {
    #main__header {
      width: 100%;
      height: 50px;
      padding: 0 10px;
      display: flex;
      justify-content: space-between;
    }
    #main__header > div {
      width: auto;
      height: auto;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      flex-basis: 80px;
      flex-shrink: 0;
      button {
        width: 40px;
      }
      span {
        text-align: center;
        width: 100px;
      }
    }
  }
  .footer__layout {
    #main__footer {
      padding: 26px 16px 120px;
      background-color: rgb(249, 249, 249);
    }

    #nav__footer {
      display: flex;
      justify-content: space-around;
      position: fixed;
      left: 0px;
      right: 0px;
      bottom: 0px;
      max-width: 600px;
      background-color: rgb(0, 0, 0);
      box-sizing: border-box;
      z-index: 550;
      max-width: 600px;
      margin: 0px auto;

      a {
        display: flex;
        flex-direction: column;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        color: rgb(255, 255, 255);
        width: 33.3%;
        height: 60px;
        position: relative;
      }
    }
  }
</style>
