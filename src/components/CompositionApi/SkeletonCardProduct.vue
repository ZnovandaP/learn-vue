<script setup lang="ts">
import useProductStore from '@/stores/useProductStore';
import { storeToRefs } from 'pinia';

const { isLoading } = storeToRefs(useProductStore());
</script>

<template>
  <template v-if="isLoading">
    <div
      v-for="i in 6"
      :key="i"
      class="p-4 rounded-md ring-1 ring-emerald-500"
    >
      <!--* header card product (media card {image, etc}) -->
      <div class="flex items-center justify-center h-40 mb-4">
        <div class="w-[60%] h-full rounded-md bg-emerald-300/40 animate-pulse" />
      </div>

      <!--* body card product (media card {text, price, etc}) -->
      <div class="pt-4 border-t border-emerald-500">
        <div class="w-4/5 h-6 mb-2 rounded-md bg-emerald-300/80" />

        <div
          class="w-1/3 h-8 mb-2 rounded-md bg-emerald-400/60 animate-pulse"
        />

        <div class="flex justify-between mt-2">
          <p class="h-6 rounded w-14 bg-emerald-300/60 animate-pulse" />
          <p class="h-6 rounded w-14 bg-emerald-300/60 animate-pulse" />
        </div>

        <div class="flex items-center justify-between gap-4 mt-4">
          <div
            class="w-3/4 h-10 px-4 py-2 text-white rounded bg-emerald-400/60 animate-pulse"
          />

          <div
            class="w-1/4 h-10 px-4 py-2 font-semibold rounded ring-1 ring-emerald-500 bg-emerald-300/40 animate-pulse"
          />
        </div>
      </div>
    </div>
  </template>
</template>
