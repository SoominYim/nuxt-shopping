<script lang="ts" setup>
  import $footerText from "~/data/footerText";
  import { useRoute } from "vue-router";

  const route = useRoute();
  const activeIndex: any = ref(null);

  const footerText = ref($footerText);

  function footerActive(index: number) {
    activeIndex.value = activeIndex.value === index ? null : index;
  }
  const goTop = () => {
    window.scrollTo(0, 0);
  };
</script>

<template>
  <div class="footer__layout">
    <footer id="main__footer" v-if="route.path !== '/auth/login' && route.path !== '/auth/login/'">
      <ul>
        <li v-for="(v, i) in footerText">
          <button @click="footerActive(i)">
            {{ v.title }}
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              :style="{
                transform: activeIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
              }"
            >
              <path d="M2.66669 5.86667L8.00002 11.2L13.3334 5.86667" stroke="#919191"></path>
            </svg>
          </button>
          <ul
            :style="{
              height: activeIndex === i ? v.height + 'px' : 0,
              opacity: activeIndex === i ? 1 : 0,
            }"
          >
            <li>
              {{ v.text01 }}
            </li>
          </ul>
        </li>
      </ul>

      <div class="sub__footer">
        <div>© 2024 회사명 ALL RIGHTS RESERVED</div>
        <div><a href="#" target="_blank">개인정보처리방침</a>·<a href="#" target="_blank">이용약관</a></div>
        <div>
          일부 상품의 경우 주식회사 회사명은 통신판매의 당사자가 아닌 통신판매중개자로서 상품, 상품정보, 거래에 대한
          책임이 제한될 수 있으므로, 각 상품 페이지에서 구체적인 내용을 확인하시기 바랍니다.
        </div>
      </div>
    </footer>
    <nav id="nav__footer">
      <NuxtLink to="/category">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
          <path
            d="M19.9329 15.6002L24.2663 20.8002M2.59961 11.7002H6.49961M2.59961 16.4668H8.23294M2.59961 21.2335H16.4663M22.0996 10.6168C22.0996 14.087 19.2865 16.9002 15.8163 16.9002C12.3461 16.9002 9.53294 14.087 9.53294 10.6168C9.53294 7.14664 12.3461 4.3335 15.8163 4.3335C19.2865 4.3335 22.0996 7.14664 22.0996 10.6168Z"
            stroke="white"
            stroke-miterlimit="10"
            stroke-linejoin="round"
          ></path>
        </svg>
        카테고리
      </NuxtLink>
      <NuxtLink to="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 30 30" fill="none">
          <path d="M15 16V26M15 4.5L5 12.0698V26H25V12.314L15 4.5Z" stroke="white"></path>
        </svg>
        홈
      </NuxtLink>
      <NuxtLink to="/mypage">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 30 30" fill="none">
          <path
            d="M15 11.9999C17.2091 11.9999 19 10.2091 19 7.99996C19 5.79084 17.2091 4 15 4C12.7909 4 11 5.79084 11 7.99996C11 10.2091 12.7909 11.9999 15 11.9999Z"
            stroke="white"
          ></path>
          <path d="M21 16H9C6.79086 16 5 17.7909 5 20V26H25V20C25 17.7909 23.2091 16 21 16Z" stroke="white"></path>
        </svg>
        마이
      </NuxtLink>

      <div class="sub__btnWrap">
        <button class="go_to_top" @click="goTop">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 30 30" fill="none">
            <path d="M5 19L15 9L25 19" stroke="white" stroke-miterlimit="10"></path>
          </svg>
        </button>
      </div>
    </nav>
  </div>
</template>

<style lang="scss">
  .footer__layout {
    #main__footer {
      padding: 26px 16px 120px;
      background-color: rgb(249, 249, 249);
      li {
        button {
          display: flex;
          -webkit-box-align: center;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 42px;
          font-size: 14px;
          color: rgb(51, 51, 51);
          font-weight: 700;
          svg {
            transition: transform 0.4s ease 0s;
          }
        }
        ul {
          height: 0;
          display: flex;
          flex-direction: column;
          gap: 4px;
          font-size: 12px;
          line-height: 18px;
          color: rgb(0, 0, 0);
          overflow: hidden;
          margin: 0;
          padding: 0;
          transition: height 0.4s ease 0s, opacity 0.4s ease 0s;
        }
      }
      .sub__footer {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 38px 0px 20px;
        font-size: 12px;
        line-height: 18px;

        div:nth-child(1) {
          color: rgb(51, 51, 51);
        }
        div:nth-child(2) {
          display: flex;
          gap: 4px;
          a {
            color: rgb(51, 51, 51);
            text-decoration: underline;
            font-weight: 600;
          }
        }
        div:nth-child(3) {
          color: rgb(145, 145, 145);
          font-size: 11px;
          line-height: 18px;
        }
      }
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
        justify-content: space-between;
        width: 33.3%;
        height: 60px;
        gap: 5px;
      }
      .sub__btnWrap {
        position: absolute;
        right: 2%;
        top: -50px;
        .go_to_top {
          display: block;
          width: 40px;
          height: 40px;
          overflow: hidden;
          position: relative;
          padding: 5px;
          box-sizing: border-box;
          border-radius: 100%;
          background-color: rgba(0, 0, 0, 0.4);
        }
      }
    }
  }
</style>
