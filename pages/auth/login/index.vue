<template lang="">
  <div class="nav__member">
    <button :class="{ active: isMember }" @click="navActive(true)">
      가입회원
      <div class="underline"></div>
    </button>
    <button :class="{ active: !isMember }" @click="navActive(false)">
      비회원 주문 조회
      <div class="underline"></div>
    </button>
  </div>
  <div class="login__form">
    <form class="member__wrap">
      <div class="member" v-if="isMember">
        <input type="text" placeholder="아이디" />
        <input type="password" autoComplete="off" placeholder="비밀번호" />
      </div>
      <div class="notMember" v-else>
        <label>주문자명</label><input type="text" /> <label>주문번호</label><input type="text" />
      </div>
    </form>
  </div>
</template>
<script lang="ts" setup>
  const isMember = ref<Boolean>(true);

  function navActive(isMemberStatus: boolean) {
    isMember.value = isMemberStatus;
  }
</script>
<style lang="scss">
  .nav__member {
    position: sticky;
    top: 50px;
    display: flex;
    margin: 0 auto;
    justify-content: center;
    min-width: 300px;
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
  .login__form {
    margin: 0 auto;
    min-width: 280px;
    width: 60%;
    div:nth-child(1),
    div:nth-child(2) {
      display: flex;
      flex-direction: column;
    }

    input {
      width: 100%;
      height: 48px;
      flex: 0 1 auto;
      box-sizing: border-box;
      margin-top: 8px;
      padding: 0 12px;
      border: 1px solid #e5e5e5;
      border-radius: 4px;
      background-color: #fff;
      font-size: 15px;
      color: #000;
      box-shadow: 0 0 0 30px #fff inset !important;
      transition: border 0.2s ease-in-out;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      outline: none;
    }
    input:focus {
      border: 1px solid #aaa;
    }
  }
</style>
