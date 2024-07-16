<template lang="">
  <div id="nav__header">
    <nav class="main__nav">
      <button
        v-for="(v, i) in mainMenu"
        :to="v.href"
        @click="navActive(i)"
        :class="activeIndex === i ? 'active' : ''"
        :style="{
          color: activeIndex === i ? v.color : 'rgb(179, 179, 179)',
        }"
      >
        {{ v.title }}
        <span v-if="activeIndex === i" class="underline" :style="{ backgroundColor: v.color }"></span>
      </button>
    </nav>
  </div>
  <div>바디</div>
</template>
<script lang="ts" setup>
  const activeIndex: any = ref(null);
  function navActive(index: number) {
    activeIndex.value = activeIndex.value === index ? null : index;
  }
  const mainMenu = ref([
    {
      title: "추천",
      href: "/",
      subTitle: null,
      color: "rgb(0, 0, 0)",
    },
    {
      title: "뷰티",
      href: "/",
      subTitle: null,
      color: "rgb(0, 0, 0)",
    },
    {
      title: "랭킹",
      href: "/",
      subTitle: null,
      color: "rgb(0, 0, 0)",
    },
    {
      title: "세일",
      href: "/",
      subTitle: "매일 14시",
      color: "rgb(255, 24, 24)",
    },
    {
      title: "스타일",
      href: "/",
      subTitle: null,
      color: "rgb(0, 0, 0)",
    },
    {
      title: "이벤트",
      href: "/",
      subTitle: null,
      color: "rgb(0, 0, 0)",
    },
  ]);
</script>
<style lang="scss">
  #nav__header {
    position: sticky;
    top: 0;
    nav {
      display: flex;
      justify-content: space-around;
      background-color: rgb(255, 255, 255);
      button {
        position: relative;
        display: flex;
        flex: 0 0 auto;
        height: 46px;
        font-size: 15px;
        padding: 0 8px;
        font-weight: 400;
        -webkit-box-align: center;
        align-items: center;
        color: rgb(179, 179, 179);

        &.active {
          font-weight: 700;
          color: rgb(0, 0, 0);

          .underline {
            position: absolute;
            bottom: 0;
            left: 10px;
            width: calc(100% - 20px);
            height: 2px;
            content: "";
          }

          &.active {
            font-weight: 700;
            color: inherit; /* Inherit color from inline style */

            .underline {
              background-color: inherit; /* Inherit background color from inline style */
            }
          }
        }
      }
    }
  }
</style>
