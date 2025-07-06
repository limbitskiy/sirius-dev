import { useUserStore } from "~/store/user";

export default defineNuxtRouteMiddleware(async (_to, _from) => {
  const cookieTimezone = useCookie("timezone").value;
  const nuxtApp = useNuxtApp();

  if (!cookieTimezone) return;

  const userStore = useUserStore();

  const { setLoading } = userStore;

  const { data: timezones } = await useFetch("/api/timezones");

  if (timezones.value!.includes(cookieTimezone)) {
    await nuxtApp.$i18n.setLocale("ru");
  } else {
    await nuxtApp.$i18n.setLocale("en");
  }

  nuxtApp.hook("page:finish", () => {
    setLoading(false);
    document.body.style.overflow = "auto";
  });
});
