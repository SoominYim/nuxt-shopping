<template>
  <div class="footer__layout">
    <footer id="main__footer">
      <ul>
        <li>
          <button>사업자정보</button>
          <div>
            혼인과 가족생활은 개인의 존엄과 양성의 평등을 기초로 성립되고 유지되어야 하며, 국가는 이를 보장한다. 모든
            국민은 헌법과 법률이 정한 법관에 의하여 법률에 의한 재판을 받을 권리를 가진다. 선거운동은 각급
            선거관리위원회의 관리하에 법률이 정하는 범위안에서 하되, 균등한 기회가 보장되어야 한다. 국회가 재적의원
            과반수의 찬성으로 계엄의 해제를 요구한 때에는 대통령은 이를 해제하여야 한다.
          </div>
        </li>
        <li>
          <button>법적 고지사항</button>
          <div>
            대통령은 제3항과 제4항의 사유를 지체없이 공포하여야 한다. 국회는 국무총리 또는 국무위원의 해임을 대통령에게
            건의할 수 있다. 헌법개정은 국회재적의원 과반수 또는 대통령의 발의로 제안된다. 국회는 국가의 예산안을
            심의·확정한다. 근로조건의 기준은 인간의 존엄성을 보장하도록 법률로 정한다. 대한민국의 국민이 되는 요건은
            법률로 정한다.
          </div>
        </li>
        <li>
          <button>파트너 지원</button>
          <div>
            국가는 농·어민과 중소기업의 자조조직을 육성하여야 하며, 그 자율적 활동과 발전을 보장한다.
            국가유공자·상이군경 및 전몰군경의 유가족은 법률이 정하는 바에 의하여 우선적으로 근로의 기회를 부여받는다.
            국회의원은 국회에서 직무상 행한 발언과 표결에 관하여 국회외에서 책임을 지지 아니한다. 대통령은 국가의 안위에
            관계되는 중대한 교전상태에 있어서 국가를 보위하기 위하여 긴급한 조치가 필요하고 국회의 집회가 불가능한 때에
            한하여 법률의 효력을 가지는 명령을 발할 수 있다.
          </div>
        </li>
        <li>
          <button>고객 지원</button>
          <div>
            국방상 또는 국민경제상 긴절한 필요로 인하여 법률이 정하는 경우를 제외하고는, 사영기업을 국유 또는 공유로
            이전하거나 그 경영을 통제 또는 관리할 수 없다. 국가는 청원에 대하여 심사할 의무를 진다. 행정각부의 장은
            국무위원 중에서 국무총리의 제청으로 대통령이 임명한다. 훈장등의 영전은 이를 받은 자에게만 효력이 있고,
            어떠한 특권도 이에 따르지 아니한다.
          </div>
        </li>
      </ul>
    </footer>
    <nav id="nav__footer">
      <NuxtLink to="/"> 카테고리 </NuxtLink> <NuxtLink to="/"> 홈 </NuxtLink>
      <NuxtLink to="/"> 마이 </NuxtLink>
    </nav>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss">
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
