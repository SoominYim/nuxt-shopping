import { defineStore } from "pinia";
import nav from "~/data/mainMenu";

export const useMain_nav = defineStore("Main_nav", () => {
  const activeIndex: any = ref(null);
  const mainMenu = ref(nav);

  return {
    activeIndex,
    mainMenu,
  };
});
