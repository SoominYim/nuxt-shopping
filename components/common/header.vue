<template>
  <div class="header__layout">
    <header id="main__header">
      <div class="notice__wrap">
        <button class="main__notice">
          <span>알림</span
          ><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path
              d="M9.96706 18.2001V19.9334C9.96706 21.6087 11.3251 22.9668 13.0004 22.9668C14.6757 22.9668 16.0337 21.6087 16.0337 19.9334V18.2001M6.69736 8.90313C6.69736 5.42206 9.51932 2.6001 13.0004 2.6001C16.4815 2.6001 19.3034 5.42206 19.3034 8.90313V13.0001L22.1004 15.6001V18.6334H3.90039V15.6001L6.69736 13.0001V8.90313Z"
              stroke="black"
            ></path>
          </svg>
        </button>
      </div>
      <div class="logo__wrap">
        <span class="main__logo">로고</span>
      </div>
      <div class="sub__wrap">
        <button class="main__search">
          <span>검색</span
          ><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path
              d="M15.5999 15.5999L22.5332 22.5332M17.7665 10.3999C17.7665 14.4684 14.4684 17.7665 10.3999 17.7665C6.33137 17.7665 3.0332 14.4684 3.0332 10.3999C3.0332 6.33137 6.33137 3.0332 10.3999 3.0332C14.4684 3.0332 17.7665 6.33137 17.7665 10.3999Z"
              stroke="black"
              stroke-linejoin="round"
            ></path>
          </svg>
        </button>
        <button class="main__cart">
          <span>장바구니</span
          ><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path
              d="M9.53327 8.2334V5.20006C9.53327 3.28548 11.0853 1.7334 12.9999 1.7334C14.9145 1.7334 16.4666 3.28548 16.4666 5.20006V8.2334M4.7666 8.2334H21.2333V22.9667H4.7666V8.2334Z"
              stroke="black"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss">
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
        span {
          display: none;
        }
      }
      span {
        text-align: center;
        width: 100px;
      }
    }
  }
</style>
