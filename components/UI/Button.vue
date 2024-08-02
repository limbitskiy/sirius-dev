<template>
  <button
    class="rounded-xl text-lg font-bold select-none uppercase text-white pointer-events-auto transition-all w-full sm:w-auto"
    :class="[variant, size === 'sm' ? 'py-2 px-8' : 'py-4 px-16']"
    @click="emit('onClick')"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  variant: string;
  size?: string;
}>();

const emit = defineEmits<{
  (e: "onClick");
}>();
</script>
