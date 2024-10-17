<script setup lang="ts">
import { ref } from 'vue';
import RenderList from '@/components/CompositionApi/RenderList.vue';
import SimpleCounter from '@/components/CompositionApi/SimpleCounter.vue';
import CounterOptios from '@/components/OptionsApi/CounterOptios.vue';
import RenderListOptions from '@/components/OptionsApi/RenderListOptions.vue';
import DemoWathcweOptions from '@/components/OptionsApi/WatchersOptions.vue';
import DynamicComponent from '@/components/OptionsApi/DynamicComponentDemo/DynamicComponent.vue';

const state = ref(0);
</script>

<template>
  <SimpleCounter />
  <RenderList />
  <RenderListOptions />
  <CounterOptios />
  <DemoWathcweOptions />
  <DynamicComponent />
</template>

<style scoped>
/* component style */
</style>
