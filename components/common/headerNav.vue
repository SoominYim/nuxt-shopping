<template>
  <div id="nav__header">
    <nav class="main__nav">
      <NuxtLink
        v-for="(v, i) in mainMenu"
        :to="v.href"
        @click="navActive(i)"
        :class="v.href === route.path ? 'active' : ''"
        :style="{
          color: v.href === route.path ? v.color : 'rgb(179, 179, 179)',
        }"
      >
        <div class="sub_title">{{ v.subTitle }}</div>
        {{ v.title }}
        <span v-if="v.href === route.path" class="underline" :style="{ backgroundColor: v.color }"></span>
      </NuxtLink>
    </nav>
  </div>
</template>

<script setup lang="ts">
  import { useMain_nav } from "~/store/useMain_nav";
  import { useRoute } from "vue-router";

  const route = useRoute();

  console.log(route.path);
  /* 페이지 추가 루트
    ~/data/mainMenu.js
  */
  const { mainMenu } = useMain_nav();

  const { activeIndex } = storeToRefs(useMain_nav());

  function navActive(index: number) {
    activeIndex.value = activeIndex.value === index ? null : index;
  }
</script>

<style lang="scss">
  #nav__header {
    position: sticky;
    top: 0;
    nav {
      display: flex;
      justify-content: space-around;
      background-color: rgb(255, 255, 255);
      a {
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
        .sub_title {
          position: absolute;
          font-size: 11px;
          font-weight: 600;
          top: 0;
          left: calc(50% - 22px / 2);
        }
      }
    }
  }
</style>
