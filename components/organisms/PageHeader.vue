<script setup lang="ts">
import NavMenu from "~/components/atoms/NavMenu.vue";
import SiriusLogo from "~/components/atoms/SiriusLogo.vue";
import SocialIcons from "~/components/atoms/SocialIcons.vue";

const onLogoClick = () => {
  window.scrollTo(0, 0);
};
</script>

<template>
  <div class="border-b border-[var(--border-color)] h-16 fixed top-0 w-full bg-white/80 z-10 backdrop-blur-sm px-4">
    <div class="container flex justify-between items-center h-full mx-auto">
      <SiriusLogo @click="onLogoClick" />

      <NavMenu />

      <div class="social-icons-cnt hidden sm:block">
        <SocialIcons />
      </div>
    </div>
  </div>
</template>
