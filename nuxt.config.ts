// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      script: [{ src: "https://developers.kakao.com/sdk/js/kakao.min.js" }],
    },
  },
  devServer: {
    port: 4000,
  },
  modules: ["@pinia/nuxt"],

  compatibilityDate: "2024-07-15",
});
