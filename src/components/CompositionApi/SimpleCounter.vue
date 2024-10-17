<script setup lang="ts">
import { ref, computed, reactive } from 'vue';

const count = ref(0);

const countIsOdd = computed(() => count.value % 2 === 1);
const countIsEven = computed(() => count.value % 2 === 0);

const countIsBiggerThanZero = computed(() => count.value < 1);
const countIsLessThanTen = computed(() => count.value >= 10);

const classCount = reactive({
  odd: countIsOdd,
  even: countIsEven,
  'button-disable': countIsBiggerThanZero,
});

const handleCounter = (typeCounter: 'increment' | 'decrement') => {
  if (typeCounter === 'increment') {
    count.value += 1;
  } else {
    count.value -= 1;
  }
};

</script>

<template>
  <div class="mb-8 count-container">
    <div class="indicator-wrapper">
      <h1>
        Simple Counter App
      </h1>
      <h2>
        Count: {{ count }}
      </h2>
      <p v-if="countIsOdd">Ganjil</p>
      <p v-else>Genap</p>
    </div>

    <div class="button-count-container">
      <button
        class="counter-button"
        :class="classCount"
        :disabled="countIsLessThanTen"
        type="button"
        @click="handleCounter('increment')"
      >
        Increment
      </button>

      <button
        class="counter-button"
        :class="classCount"
        type="button"
        :disabled="countIsBiggerThanZero"
        @click="handleCounter('decrement')"
      >
        Decrement
      </button>

    </div>
  </div>
</template>

<style scoped>
.count-container{
  border: 2px solid skyblue;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 1rem;
}

.indicator-wrapper {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.button-count-container{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.counter-button {
  border-radius: .5rem;
  padding: 0.5rem 2rem;
  font-weight: 500;
  color: #fff;
  border: none;
  cursor: pointer;
}

.counter-button:disabled {
  opacity: .6;
  cursor: not-allowed;
}

.odd {
  background-color: blue;
}

.even {
  background-color: red;
}
</style>
