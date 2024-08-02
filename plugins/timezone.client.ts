export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:created", async () => {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    if (!document.cookie.includes("timezone")) {
      await $fetch("/api/set-timezone", {
        method: "POST",
        body: JSON.stringify(timeZone),
      });
      window.location.reload();
    }
  });
});
