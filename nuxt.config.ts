// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  devServer: {
    port: 4000,
  },
  modules: ["@pinia/nuxt"],

  compatibilityDate: "2024-07-15",
});
