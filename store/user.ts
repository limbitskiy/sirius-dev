import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const user = ref({
    loading: true,
  });

  const loading = computed(() => user.value.loading);

  const setLoading = (value: boolean) => {
    user.value.loading = value;
  };

  return {
    loading,
    setLoading,
  };
});
