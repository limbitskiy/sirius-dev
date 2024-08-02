<template>
  <nav class="border-b">
    <div class="container flex justify-between items-center py-4 px-4">
      <Logo />
      <ul class="navigation items-center justify-center w-2/4 gap-[5vw] text-nowrap hidden sm:flex">
        <li v-for="menuItem in menuItems" :key="menuItem.id" class="cursor-pointer hover:text-[--accent-color]">
          <a :href="menuItem.href">{{ menuItem.text }}</a>
        </li>
      </ul>
      <div class="social-icons-cnt hidden sm:block">
        <SocialIcons />
      </div>
      <div class="hamburger-icon sm:hidden" @click="onMobileMenu">
        <svg width="34" height="22" viewBox="0 0 34 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 21H33M1 11H33M1 1H33" stroke="#2F4858" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useUserStore } from "~/store/user";

const userStore = useUserStore();
const { locale } = storeToRefs(userStore);
const { setMenuOpen } = userStore;

const { data } = await useFetch("/api/menu");

const menuItems = computed(() => data.value[locale.value]);

const onMobileMenu = () => {
  setMenuOpen(true);
};
</script>
