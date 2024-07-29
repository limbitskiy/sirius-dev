// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@nuxtjs/google-fonts", "@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt", "@nuxt/icon"],
  css: ["~/assets/css/main.scss"],
  googleFonts: {
    families: {
      Inter: [400, 700],
      Play: [400, 700],
    },
  },
  app: {
    head: {
      style: ["html { scroll-behavior: smooth }"],
    },
  },
});
