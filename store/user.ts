import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const user = ref({
    locale: "ru",
    loading: ref(false),
    menuItems: {
      ru: [
        {
          id: 0,
          text: "Главная",
        },
        {
          id: 1,
          text: "Наши технологии",
        },
        {
          id: 2,
          text: "Проекты",
        },
        {
          id: 3,
          text: "Контакты",
        },
      ],
      en: [
        {
          id: 0,
          text: "IT development",
        },
        {
          id: 1,
          text: "Special offer",
        },
        {
          id: 2,
          text: "Featured projects",
        },
        {
          id: 3,
          text: "Blog",
        },
        {
          id: 4,
          text: "Contacts",
        },
      ],
    },
  });

  const locale = computed(() => user.value.locale);
  const loading = computed(() => user.value.loading);
  const menuItems = computed(() => user.value.menuItems[user.value.locale]);

  const setLocale = (locale) => {
    user.value.locale = locale;
  };

  return { locale, loading, menuItems, setLocale };
});
