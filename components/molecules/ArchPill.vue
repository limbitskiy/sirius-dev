<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <UCard class="bg-greybg">
    <div class="flex flex-col gap-4 items-start">
      <h4 class="font-bold text-xl w-full text-center sm:text-start">{{ title }}</h4>
      <slot name="content" />
    </div>
  </UCard>
</template>
