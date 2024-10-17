<script setup lang="ts">
import logo from '@/assets/logo.svg';

const dataNav = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'User',
    path: '/user',
  },
  {
    label: 'Posts',
    path: '/posts',
  },
  {
    label: 'Pinia',
    path: '/pinia',
  },
  {
    label: '404',
    path: '/404',
  },
];

</script>

<template>
  <header class="sticky top-0 z-10 py-4 bg-white ring-1 ring-emerald-500">
    <nav class="container flex items-center justify-between w-full">
      <div class="flex items-center gap-1">
        <img
          :src="logo"
          alt="Vue Logo"
          class="w-12 h-12"
        />
        <h1 class="text-2xl font-bold">
          Vue Logo
        </h1>
      </div>
      <ul class="flex items-center gap-3 underline text-emerald-500">
        <li v-for="nav in dataNav" :key="nav.label">
          <RouterLink
            :to="nav.path"
            class="hover:bg-emerald-300/50"
            active-class="font-bold bg-emerald-300/40"
          >
            {{nav.label}}
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>

  <main class="container pb-12 mt-8">
    <!-- RouterView slot implementation  -->
    <RouterView v-slot="{ Component }">
      <component :is="Component" />
    </RouterView>
  </main>
</template>

<style scoped>

.wrapper {
  display: flex;
}
</style>
