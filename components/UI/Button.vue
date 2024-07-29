<template>
  <button
    class="rounded-xl py-4 px-16 text-lg font-bold select-none uppercase text-white pointer-events-auto transition-all w-full sm:w-auto"
    :class="type"
    @click="emit('onClick')"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  type: string;
}>();

const emit = defineEmits<{
  (e: "onClick");
}>();
</script>
