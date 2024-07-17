<template>
  <div class="footer__layout">
    <footer id="main__footer">
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
      <NuxtLink to="/">
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
      <NuxtLink to="/">
        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 30 30" fill="none">
          <path
            d="M15 11.9999C17.2091 11.9999 19 10.2091 19 7.99996C19 5.79084 17.2091 4 15 4C12.7909 4 11 5.79084 11 7.99996C11 10.2091 12.7909 11.9999 15 11.9999Z"
            stroke="white"
          ></path>
          <path d="M21 16H9C6.79086 16 5 17.7909 5 20V26H25V20C25 17.7909 23.2091 16 21 16Z" stroke="white"></path>
        </svg>
        마이
      </NuxtLink>
    </nav>
  </div>
</template>

<script lang="ts" setup>
  const activeIndex: any = ref(null);

  const footerText = ref([
    {
      title: `사업자 정보`,
      text01: `혼인과 가족생활은 개인의 존엄과 양성의 평등을 기초로 성립되고 유지되어야 하며, 국가는 이를 보장한다. 모든
            국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다. 선거운동은 각급
            선거관리위원회의 관리하에 법률이 정하는 범위안에서 하되, 균등한 기회가 보장되어야 한다. 국회가 재적의원
            과반수의 찬성으로 계엄의 해제를 요구한 때에는 대통령은 이를 해제하여야 한다.`,
      height: 72,
    },
    {
      title: `법적 고지사항`,
      text01: `대통령은 제3항과 제4항의 사유를 지체없이 공포하여야 한다. 국회는 국무총리 또는 국무위원의 해임을 대통령에게
            건의할 수 있다. 헌법개정은 국회재적의원 과반수 또는 대통령의 발의로 제안된다. 국회는 국가의 예산안을
            심의·확정한다. 근로조건의 기준은 인간의 존엄성을 보장하도록 법률로 정한다. 대한민국의 국민이 되는 요건은
            법률로 정한다.`,
      height: 72,
    },
    {
      title: `파트너 지원`,
      text01: `국가는 농·어민과 중소기업의 자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다.
            국가유공자·상이군경 및 전몰군경의 유가족은 법률이 정하는 바에 의하여 우선적으로 근로의 기회를 부여받는다.
            국회의원은 국회에서 직무상 행한 발언과 표결에 관하여 국회외에서 책임을 지지 아니한다. 대통령은 국가의 안위에
            관계되는 중대한 교전상태에 있어서 국가를 보위하기 위하여 긴급한 조치가 필요하고 국회의 집회가 불가능한 때에
            한하여 법률의 효력을 가지는 명령을 발할 수 있다.`,
      height: 90,
    },
    {
      title: `고객 지원`,
      text01: `국방상 또는 국민경제상 긴절한 필요로 인하여 법률이 정하는 경우를 제외하고는, 사영기업을 국유 또는 공유로
            이전하거나 그 경영을 통제 또는 관리할 수 없다. 국가는 청원에 대하여 심사할 의무를 진다. 행정각부의 장은
            국무위원 중에서 국무총리의 제청으로 대통령이 임명한다. 훈장등의 영전은 이를 받은 자에게만 효력이 있고,
            어떠한 특권도 이에 따르지 아니한다.`,
      height: 90,
    },
  ]);

  function footerActive(index: number) {
    activeIndex.value = activeIndex.value === index ? null : index;
  }
</script>
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
    }
  }
</style>
