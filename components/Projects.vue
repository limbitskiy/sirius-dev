<template>
  <section id="projects" class="projects">
    <div class="container">
      <template v-if="locale === 'ru'">
        <h2 class="section-title text-center">Наши последние проекты</h2>
        <h3 class="section-title text-center">Вот несколько проектов которые мы закончили в последнее время</h3>
      </template>
      <template v-else>
        <h2 class="section-title text-center">Featured projects</h2>
        <h3 class="section-title text-center">Take a look at a few of our latest projects</h3>
      </template>
      <div class="pills-cnt mt-12 flex flex-col gap-12">
        <UIPill v-for="project in projects" :key="project.id">
          <div class="split-two">
            <div class="project-desc flex flex-col gap-2 justify-center my-4 md:p-4 order-2 lg:order-1">
              <span class="project-title">{{ project.title }}</span>
              <span class="project-desc text-gray-500 leading-2 lgleading-10">{{ project.desc }}</span>
              <a v-if="project.link" :href="project.link" class="text-blue-700">{{ project.link }}</a>
            </div>
            <NuxtImg :src="project.image" format="webp" class="w-full max-h-56 object-contain order-1 lg:order-2" alt="Project image" loading="lazy" :placeholder="[50, 25]" />
          </div>
        </UIPill>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useUserStore } from "~/store/user";

const userStore = useUserStore();
const { locale } = userStore;

const { data: projects } = await useFetch("/api/projects", {
  transform: (projects) => {
    return projects[locale];
  },
});
</script>
