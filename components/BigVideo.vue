<template>
  <section v-if="locale === 'ru'" class="big-video hidden lg:block">
    <div class="container">
      <video width="100%" height="auto" preload="none" autoPlay loop muted class="m-auto">
        <source src="/m3-promo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </section>
</template>

<script setup>
import { useUserStore } from "~/store/user";

const userStore = useUserStore();
const { locale } = userStore;
</script>
