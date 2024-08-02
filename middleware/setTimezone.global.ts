import { useUserStore } from "~/store/user";

export default defineNuxtRouteMiddleware(async (to, from) => {
  const cookieTimezone = useCookie("timezone").value;
  const nuxtApp = useNuxtApp();

  if (!cookieTimezone) return;

  const userStore = useUserStore();
  const { setLocale, setLoading } = userStore;

  const { data: timezones } = await useFetch("/api/timezones");

  if (timezones.value.includes(cookieTimezone)) {
    setLocale("ru");
  } else {
    setLocale("en");
  }

  nuxtApp.hook("page:finish", () => {
    setLoading(false);
    document.body.style.overflow = "auto";
  });
});
