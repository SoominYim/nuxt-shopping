<template lang="">
  <div class="nav__member">
    <button :class="{ active: activeIndex === 0 }" @click="navActive(0)">
      가입회원
      <div class="underline"></div>
    </button>
    <button :class="{ active: activeIndex === 1 }" @click="navActive(1)">
      비회원 주문 조회
      <div class="underline"></div>
    </button>
  </div>
  <div class="login__layout"></div>
</template>
<script lang="ts" setup>
  const activeIndex = ref<number | null>(0);

  function navActive(index: number) {
    activeIndex.value = activeIndex.value === index ? null : index;
  }
</script>
<style lang="scss">
  .nav__member {
    position: sticky;
    top: 50px;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    width: 70%;
    button {
      width: 50%;
      font-weight: 500;
      font-size: 16px;
      color: #b3b3b3;
      padding: 20px 0 0 0;
      .underline {
        position: relative;
        height: 2px;
        margin-top: 15px;
        background: #b3b3b3;
        left: 0;
        bottom: 0;
      }

      &.active {
        color: #000;
        .underline {
          background: #000;
        }
      }
    }
  }
  .login__layout {
    display: flex;
    justify-content: center;
  }
</style>
