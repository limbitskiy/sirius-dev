import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const user = ref({
    locale: "ru",
    loading: true,
    modalOpen: false,
    notificationOpen: false,
    menuOpen: false,
  });

  const locale = computed(() => user.value.locale);
  const loading = computed(() => user.value.loading);
  const modalOpen = computed(() => user.value.modalOpen);
  const notificationOpen = computed(() => user.value.notificationOpen);
  const menuOpen = computed(() => user.value.menuOpen);

  const setLocale = (locale: string) => {
    user.value.locale = locale;
  };

  const setLoading = (value: boolean) => {
    user.value.loading = value;
  };

  const setModalOpen = (value: boolean) => {
    user.value.modalOpen = value;
  };

  const setNotificationOpen = (value: boolean) => {
    user.value.notificationOpen = value;
  };

  const setMenuOpen = (value: boolean) => {
    user.value.menuOpen = value;
  };

  return { locale, loading, modalOpen, notificationOpen, menuOpen, setLocale, setLoading, setModalOpen, setNotificationOpen, setMenuOpen };
});
