<template>
  <!-- <Teleport to="body"> -->
  <div class="loader-wrap fixed inset-0 bg-white w-full h-[100dvh] z-40 grid place-items-center overflow-hidden">
    <div class="loader flex flex-col items-center">
      <Icon name="eos-icons:bubble-loading" size="60" style="color: black" />
      <!-- <span class="text-center pt-5 text-xl font-bold text-black">Загрузка...</span> -->
    </div>
  </div>
  <!-- </Teleport> -->
</template>

<script setup lang="ts">
// onMounted(() => {
//   document.body.classList.add("no-scroll");
// });
// const nuxtApp = useNuxtApp();
// // const loading = ref(false);
// nuxtApp.hook("page:start", () => {
//   // loading.value = true;
//   console.log(`page start`);
// });
// nuxtApp.hook("page:finish", () => {
//   // loading.value = false;
//   console.log(`page finish`);
// });
</script>
