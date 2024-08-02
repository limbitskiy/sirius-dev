// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/google-fonts", "@pinia/nuxt", "@nuxt/icon", "@nuxt/image", "@nuxt/ui", "@nuxtjs/tailwindcss"],
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
  colorMode: {
    preference: "light",
  },
});
