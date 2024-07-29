<template>
  <div class="up-button fixed right-4 bottom-4 cursor-pointer">
    <Icon name="material-symbols:arrow-circle-up" size="60" class="bg-[#416880] hover:bg-[#5587a7] transition-colors" @click="onUpBtn" />
  </div>
</template>

<script setup lang="ts">
const onUpBtn = () => {
  window.scrollTo(0, 0);
};
</script>
