<script setup lang="ts">
const { data: menuItems } = await useFetch("/api/menu");
</script>

<template>
  <nav>
    <ul class="items-center justify-center gap-8 text-nowrap hidden sm:flex font-semibold text-gray-500 text-sm">
      <li v-for="menuItem in menuItems" :key="menuItem" class="cursor-pointer hover:text-black">
        <a :href="'#' + menuItem">{{ $t("menuitem-" + menuItem) }}</a>
      </li>
    </ul>
  </nav>
</template>
