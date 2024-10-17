<script setup lang="ts">
const tabsUser = [
  {
    label: 'User About',
    path: '/user/user-about',
  },
  {
    label: 'User Profile',
    path: '/user/user-profile',
  },
  {
    label: 'User Settings',
    path: '/user/user-settings',
  },
];

</script>

<template>
  <section class="">
    <h2 class="text-4xl font-bold text-emerald-600">
      User View/page Demo Nested Route
    </h2>

    <div class="flex flex-col gap-4 p-6 mt-6 rounded-md ring-1 ring-emerald-500">
      <ul class="flex items-center gap-4 divide-neutral-400/70">
        <li v-for="tab in tabsUser" :key="tab.label" class="">
          <RouterLink
            :to="tab.path"
            class="px-2 py-1 rounded-full bg-neutral-400/25 hover:bg-emerald-300/50"
            exact-active-class="font-bold text-emerald-600 bg-emerald-300/70"
          >
            {{ tab.label }}
          </RouterLink>
        </li>
      </ul>

      <div class="">
        <RouterView />
      </div>
    </div>
  </section>
</template>

<style scoped>
/* component style */
</style>
