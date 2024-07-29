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

  // nuxtApp.hook("app:created", async () => {
  //   const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  //   if (process.server) {
  //     console.log(`server created`);
  //   } else {
  //     console.log(`client created`);
  //   }
  // });

  // nuxtApp.hook("app:rendered", async () => {
  //   if (process.server) {
  //     console.log(`server rendered`);
  //   } else {
  //     console.log(`client rendered`);
  //   }
  // });

  // nuxtApp.hook("app:mounted", async () => {
  //   if (process.server) {
  //     console.log(`server mounted`);
  //   } else {
  //     console.log(`client mounted`);
  //   }
  // });
});
