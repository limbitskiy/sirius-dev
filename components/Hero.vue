<template>
  <section class="hero grid items-center bg-image relative flex-1 min-h-[70dvh]">
    <!-- <Backdrop /> -->
    <div v-if="locale === 'ru'" class="container flex flex-col items-center relative">
      <h1 class="center">
        Мы создаем <span class="text-[--accent-color]">B2B&nbsp;системы</span>
        <br />
        <span class="text-gray-500">Легкие. Мощные. Быстрые.</span>
      </h1>
      <h3 class="max-w-3xl text-center mt-4 text-clamp">Создание B2B систем с нуля под ваши нужды или доработка уже готового продукта. Мы можем все.</h3>
      <div class="head__btns mt-8 flex gap-x-12 gap-y-4 flex-wrap justify-center">
        <UIButton type="accent-btn" @onClick="navigateTo('#contacts')">связаться</UIButton>
        <UIButton type="black-btn" @onClick="navigateTo('#projects')">проекты</UIButton>
      </div>
    </div>
    <div v-else class="container flex relative">
      <div class="hero-left flex flex-col justify-center mx-auto text-center lg:text-left">
        <h1>
          UniRender + <span class="text-[--accent-color]">UniBackend</span>
          <br />
          <!-- <span class="text-gray-500">=</span> -->
        </h1>
        <h3 class="max-w-3xl mt-4 text-clamp">next-generation AI technology to build flexible and high performance backend-driven apps and systems</h3>
        <div class="head__btns mt-8">
          <UIButton type="accent-btn" @onClick="navigateTo('#contacts')">contact</UIButton>
          <!-- <UIButton type="black-btn" @onClick="navigateTo('#projects')">projects</UIButton> -->
        </div>
      </div>
      <div class="hero-right max-w-[40%] rounded-xl overflow-hidden hidden lg:block">
        <video width="100%" height="auto" preload="none" autoPlay loop muted class="m-auto">
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useUserStore } from "~/store/user";

const userStore = useUserStore();
const { locale } = userStore;
</script>
