<script setup lang="ts">
import { ref } from 'vue';

const state = ref(0);
</script>

<template>
  <section class="flex justify-center items-center min-h-[70dvh] gap-6">
    <h2 class="font-bold text-8xl text-emerald-500">
      404
    </h2>

    <span class="block w-3 h-20 rounded-md bg-emerald-400" />

    <p class="text-5xl font-bold text-emerald-500 text-balance">
      Halaman tidak ditemukan
    </p>
  </section>
</template>

<style scoped>
/* component style */
</style>
