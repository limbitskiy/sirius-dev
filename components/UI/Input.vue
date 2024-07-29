<template>
  <input class="text-black w-full rounded-md h-14 p-2" :value="modelValue" :placeholder="placeholder" @input="emit('update:modelValue', $event.target.value)" />
</template>

<script setup lang="ts">
defineProps<{
  placeholder: string;
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", payload: string);
}>();
</script>
