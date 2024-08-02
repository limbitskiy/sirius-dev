<template>
  <div class="up-button fixed right-4 bottom-4 cursor-pointer z-30">
    <Icon name="material-symbols:arrow-circle-up" size="60" class="bg-[#ea445a] hover:bg-[#fc2c47] transition-colors" @click="onUpBtn" />
  </div>
</template>

<script setup lang="ts">
const onUpBtn = () => {
  // reset hash

  window.scrollTo(0, 0);
};
</script>
