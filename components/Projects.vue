<template>
  <section id="projects" class="architecture my-12">
    <div class="container">
      <h2 class="section-title text-center">Наши последние проекты</h2>
      <h3 class="section-title text-center">Вот несколько проектов которые мы закончили в последнее время</h3>
      <div class="pills-cnt mt-12 flex flex-col gap-12">
        <UIPill v-for="project in projects" :key="project.id">
          <div class="split-two flex flex-col lg:flex-row gap-8">
            <NuxtImg :src="project.image" class="w-full lg:w-1/3 h-auto object-contain" alt="Project image" />
            <div class="project-desc flex flex-col gap-2 justify-center mb-12 md:p-4">
              <span class="project-title">{{ project.title }}</span>
              <span class="project-desc text-gray-500 leading-2 lgleading-10">{{ project.desc }}</span>
            </div>
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
