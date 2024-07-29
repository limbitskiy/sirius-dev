import { useUserStore } from "~/store/user";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const cookieTimezone = useCookie("timezone").value;

  const userStore = useUserStore();
  const { setLocale } = userStore;

  const { data: timezones } = await useFetch("/api/timezones");

  if (timezones.value.includes(cookieTimezone)) {
    setLocale("ru");
  } else {
    setLocale("en");
  }
});
