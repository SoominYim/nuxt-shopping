import { defineStore } from "pinia";

export const useAuth = defineStore("auth", () => {
  // 로그인 페이지 자동로그인 활성화
  const isAutoLogin = ref<Boolean>();

  return { isAutoLogin };
});
