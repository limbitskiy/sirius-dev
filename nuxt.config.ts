import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: false },
  modules: [
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/google-fonts",
  ],
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },
  i18n: {
    locales: [
      { code: "ru", language: "ru-RU", file: "ru.json" },
      { code: "en", language: "en-US", file: "en.json" },
    ],
    defaultLocale: "en",
  },
  colorMode: {
    preference: "light",
  },
  googleFonts: {
    families: {
      Montserrat: [400, 500, 600, 700, 800, 900],
      Inter: [400, 500, 600, 700, 800, 900],
      Raleway: [400, 500, 600, 700, 800, 900],
    },
  },
});
