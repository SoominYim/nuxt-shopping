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
    <form class="member__wrap" v-if="isMember">
      <div class="member__input">
        <input type="text" placeholder="아이디" />
        <input type="password" autoComplete="off" placeholder="비밀번호" />
      </div>
      <button class="btn__login">로그인</button>

      <div class="member__util">
        <div class="autoLogin__wrap">
          <label @click="isAutoActive" :class="{ active: isAutoLogin }">자동로그인</label>
        </div>
        <div class="findLogin__wrap">
          <NuxtLink to="/"> 아이디 찾기</NuxtLink>
          &nbsp;|&nbsp;
          <NuxtLink to="/"> 비밀번호 찾기</NuxtLink>
        </div>
      </div>
    </form>
    <NuxtLink class="login__kakao" v-if="isMember" to="/auth/login/kakao/callback">
      <svg
        class="login-button__item__logo"
        fill="none"
        height="30"
        viewBox="0 0 30 30"
        width="30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>kakao 로고</title>
        <path
          clip-rule="evenodd"
          d="M15 7C10.029 7 6 10.129 6 13.989C6 16.389 7.559 18.505 9.932 19.764L8.933 23.431C8.845 23.754 9.213 24.013 9.497 23.826L13.874 20.921C14.243 20.958 14.618 20.978 15 20.978C19.971 20.978 24 17.849 24 13.989C24 10.129 19.971 7 15 7Z"
          fill="black"
          fill-rule="evenodd"
        ></path>
      </svg>
      카카오 로그인
    </NuxtLink>
    <form class="notMember__wrap" v-if="!isMember">
      <div class="notMember">
        <label>주문자명</label><input type="text" /> <label>주문번호</label><input type="text" />
      </div>
    </form>
  </div>
</template>
<script lang="ts" setup>
  import { useAuth } from "~/store/useAuth";
  const isMember = ref<Boolean>(true);

  const { isAutoLogin } = storeToRefs(useAuth());

  let isAutoActive;

  if (process.client) {
    isAutoActive = function () {
      if (localStorage.getItem("autoLogin") !== "true") {
        localStorage.setItem("autoLogin", "true");
        isAutoLogin.value = true;
      } else {
        localStorage.setItem("autoLogin", "false");
        isAutoLogin.value = false;
      }
    };
  }

  // const kakaoLogin = () => {
  //   let restApiKey = "ee308faac3d51a8a0596d8ff752bc628";
  //   let redirectUrl = "http://localhost:4000/";
  //   const url = new URL(
  //     "https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=" +
  //       restApiKey +
  //       "&redirect_uri=" +
  //       redirectUrl
  //   );

  //   window.location = url;
  // };

  // onMounted(() => {
  //   localStorage.getItem("autoLogin") !== "true" ? (isAutoLogin.value = false) : (isAutoLogin.value = true);
  // });

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
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 280px;
    gap: 20px;
    .member__wrap,
    .notMember__wrap {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      gap: 20px;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 25px;
    }

    .member__wrap {
      button {
        background: #000;
        color: #fff;
        display: block;
        box-sizing: border-box;
        width: 100%;
        height: 50px;
        padding: 14px 16px 15px;
        border: 1px solid #000;
        border-radius: 4px;
        font-weight: 700;
        font-size: 14px;
      }
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
    .member__util {
      display: flex;
      justify-content: space-between;
      .autoLogin__wrap {
        label {
          display: inline-flex;
          position: relative;
          width: auto;
          min-height: 20px;
          padding: 0 0 0 26px;
          font-size: 14px;
          color: inherit;
          text-align: left;
          white-space: normal;
          cursor: pointer;
          &::before {
            position: absolute;
            top: -3px;
            bottom: 0;
            left: 0;
            width: 20px;
            height: 20px;
            border: 1px solid #ccc;
            border-radius: 100%;
            background-color: #f1f1f1;
            content: "";
          }
          &.active::after {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 3px;
            width: 16px;
            height: 16px;
            border-radius: 100%;
            border-color: #0078ff;
            background-color: #0078ff;
            content: "";
          }
        }
      }

      .findLogin__wrap {
        display: flex;
        flex-direction: row;
        color: #aaa;
        * {
          display: inline-block;
          position: relative;
          font-size: 14px;
          line-height: 16px;
          color: #aaaaaa;
        }
      }
    }
    .login__kakao {
      display: block;
      box-sizing: border-box;
      width: 100%;
      padding: 14px 16px 15px;
      border: 1px solid #fee500;
      border-radius: 4px;
      font-weight: 700;
      color: #000;
      height: 45px;
      padding-top: 11px;
      padding-bottom: 10px;
      background-color: #fee500;
      font-size: 15px;
      line-height: 22px;
      text-align: center;
      .login-button__item__logo {
        display: inline-block;
        margin-top: -4px;
        margin-right: -4px;
        vertical-align: top;
      }
    }
  }
</style>
