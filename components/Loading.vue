<template>
  <div v-if="loading" class="loader-wrap fixed inset-0 bg-white w-full h-[100dvh] z-40 grid place-items-center overflow-hidden">
    <div class="loader flex flex-col items-center">
      <Icon name="eos-icons:bubble-loading" size="60" style="color: black" />
      <span class="text-center pt-5 text-xl font-bold text-black">Загрузка...</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from "~/store/user";

const store = useUserStore();

const { loading } = storeToRefs(store);
</script>
