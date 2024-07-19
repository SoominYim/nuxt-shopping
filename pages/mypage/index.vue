<template lang="">
  <div class="auth__wrap">
    <div class="auth__login">
      <NuxtLink to="/auth/login">로그인/회원가입하기</NuxtLink>
    </div>
    <div class="auth__sub">
      <NuxtLink to="/auth/login">
        <span>적립금</span>
        <span>0원</span>
      </NuxtLink>
      <NuxtLink to="/auth/login">
        <span>쿠폰</span>
        <span>0장</span>
      </NuxtLink>
      <NuxtLink to="/auth/login">
        <span>후기 작성</span>
        <span>0건</span>
      </NuxtLink>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss">
  .auth__wrap {
    background-color: rgb(245, 245, 245);
    padding: 16px;

    .auth__login {
      text-decoration: underline;
      padding: 20px 0;
    }
    .auth__sub {
      width: 100%;
      display: flex;
      gap: 4px;
      a {
        width: 100%;
        background-color: #fff;
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        border-radius: 5px;
        span:first-child {
          font-size: 13px;
        }
        span:last-child {
          padding-left: 1px;
          font-family: "PrB";
          font-weight: bold;
          font-size: 12px;
        }
      }
    }
  }
</style>
