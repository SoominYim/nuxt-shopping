<template>
  <header id="main__header">
    <div class="header__layout">
      <div class="notice__wrap">
        <button class="main__notice">알림</button>
      </div>
      <div class="logo__wrap">
        <span class="main__logo">로고</span>
      </div>
      <div class="sub__wrap">
        <button class="main__search">검색</button>
        <button class="main__cart">장바구니</button>
      </div>
    </div>
  </header>
</template>
<script lang="ts" setup></script>
<style lang="scss">
  #main__header {
    .header__layout {
      width: 100%;
      height: 50px;
      padding: 0 10px;
      display: flex;
      justify-content: space-between;
    }
    .header__layout > div {
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
</style>
