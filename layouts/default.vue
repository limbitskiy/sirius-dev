<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <div class="content min-h-[100dvh]">
      <slot />
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts"></script>
