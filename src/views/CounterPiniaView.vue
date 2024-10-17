<!-- eslint-disable no-console -->
<script setup lang="ts">
import useCountStore from '@/stores/useCountStore';
import { computed, ref } from 'vue';

const showDoubleNumber = ref(false);

const countStore = useCountStore();

const isGreaterThanZero = computed(() => countStore.count > 0);

countStore.$subscribe((mutation, state) => {
  console.log('m-events', mutation.events); // m is mutation
  console.log('m-storeId', mutation.storeId);
  console.log('m-type', mutation.type);
  console.log('state', state.count);
});

</script>

<template>
  <div>
    <h2 class="text-3xl font-bold rounded text-sky-600 bg-sky-300/40">
      Counter With Pinia (State Management)
    </h2>
    <div class="flex flex-col items-center justify-center gap-8 py-8 mt-8 rounded-sm ring-1 ring-emerald-500">
      <p
        class="font-bold text-7xl"
        :class="{
          'text-blue-600 bg-blue-300/50': countStore.isEven(showDoubleNumber),
          'text-emerald-600 bg-emerald-300/50': !countStore.isEven(showDoubleNumber),
        }"
      >
        {{ showDoubleNumber ? countStore.doubleCount : countStore.count }}
      </p>
      <div
        class="flex gap-4 "
      >
        <button
          type="button"
          @click="countStore.increment"
          class="px-4 py-2 text-lg text-white rounded-md bg-emerald-500 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Increment
        </button>

        <button
          type="button"
          @click="countStore.decrement"
          :disabled="!isGreaterThanZero"
          class="px-4 py-2 text-lg text-white bg-red-500 rounded-md hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Decrement
        </button>

        <button
          type="button"
          @click="showDoubleNumber = !showDoubleNumber"
          class="px-4 py-2 text-lg text-white rounded-md bg-violet-500 hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {{ showDoubleNumber ? 'Normalize' : 'Show Double' }}
        </button>

        <button
          type="button"
          @click="countStore.$reset"
          :disabled="!isGreaterThanZero"
          class="px-4 py-2 text-lg text-white rounded-md bg-amber-500 hover:bg-amber-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Reset Counter
        </button>
      </div>
    </div>

  </div>
</template>
