<script setup lang="ts">

const tabsPinia = [
  {
    label: 'Counter',
    path: '/pinia/counter',
  },
  {
    label: 'Products',
    path: '/pinia/products',
  },
  {
    label: 'Cart',
    path: '/pinia/cart',
  },
];

</script>

<template>
  <h2 class="mb-10 text-4xl font-bold rounded text-emerald-600 bg-emerald-300/40">
    Pinia Demo (State Management)
  </h2>
  <div class="flex flex-col gap-4 p-6 mt-6 rounded-md ring-1 ring-emerald-500">
    <ul class="flex items-center gap-4 p-4 rounded-full divide-neutral-400/70 bg-neutral-300/30">
      <li v-for="tab in tabsPinia" :key="tab.label" class="">
        <RouterLink
          :to="tab.path"
          class="px-2 py-1 rounded-full bg-neutral-400/25 hover:bg-emerald-300/50"
          exact-active-class="font-bold text-emerald-600 bg-emerald-300/70"
        >
          {{ tab.label }}
        </RouterLink>
      </li>
    </ul>

    <div class="mt-4">
      <RouterView v-slot="{ Component }">
        <KeepAlive>
          <component :is="Component" />
        </KeepAlive>
      </RouterView>
    </div>
  </div>
</template>

<style scoped>
/* component style */
</style>
