<script lang="ts">
import HomeTab from './Tabs/HomeTab.vue';
import AboutTab from './Tabs/AboutTab.vue';
import ContactTab from './Tabs/ContactTab.vue';

export default {
  components: {
    Home: HomeTab,
    About: AboutTab,
    Contact: ContactTab,
  },
  name: 'DynamicComponent',
  data() {
    return {
      currentTab: window.location.hash.slice(1) || 'Home',
      tabs: [
        'Home',
        'About',
        'Contact',
      ],
    };
  },

  methods: {
    changeTab(tab: string) {
      this.currentTab = tab;
      window.location.hash = tab;
    },
  },

};
</script>

<template>
  <section class="mt-6">
    <div class="inline py-2 divide-x rounded-md divide-neutral-400 ring-1 ring-neutral-400">
      <button
        v-for="tab in tabs"
        :key="tab"
        :href="`#${tab}`"
        type="button"
        @click="changeTab(tab)"
        class="px-4 py-2 rounded-sm hover:bg-emerald-400/60"
        :class="
          {
            'bg-emerald-400/60 font-semibold': tab === currentTab,
          }
        "
      >
        {{ tab }}
      </button>
    </div>

    <div class="flex flex-col gap-4 px-6 py-4 rounded-md ring-1 ring-neutral-400">
      <h2
        class="font-semibold text-emerald-500"
      >
        Dynamic Tab Demo: Tab Demo ({{ currentTab }})
      </h2>
      <component :is="currentTab" />
    </div>

  </section>
</template>

<style scoped>
/* component style */
</style>
