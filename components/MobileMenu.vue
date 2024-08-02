<template>
  <ul class="mob-navigation grid place-items-center gap-8 text-2xl">
    <li v-for="menuItem in menuItems" :key="menuItem.id">
      <a :href="menuItem.href" @click="onMenuItemClick">{{ menuItem.text }}</a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useUserStore } from "~/store/user";

const userStore = useUserStore();
const { locale } = storeToRefs(userStore);
const { setMenuOpen } = userStore;

const { data } = await useFetch("/api/menu");

const menuItems = computed(() => data.value[locale.value]);

const onMenuItemClick = () => {
  setMenuOpen(false);
};
</script>
