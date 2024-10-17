<script lang="ts">
import { nextTick } from 'vue';
import ButtonCommonOptions from './ButtonCommonOptions.vue';

//* VUE Options API
export default {
  components: {
    ButtonCommonOptions,
  },

  name: 'CounterOptios',
  data() {
    return {
      count: 0,
      isActive: false,
    };
  },
  mounted() {
    // eslint-disable-next-line no-console
    console.log(this.count);
  },

  methods: {
    async addTwo() {
      this.count += 2;
      await nextTick();
    },

    toggleIsActive() {
      this.isActive = !this.isActive;
    },
  },

  computed: {
    isEven() {
      return this.count % 2 === 0;
    },
  },
};

</script>

<template>
  <div class="mt-6 flex flex-col gap-3">
    <h1 class="text-3xl font-bold underline">
      Counter App (Options API VueJs)
    </h1>

    <h2
      class="text-xl font-medium"
      :class="{
        'bg-emerald-600/60 text-white font-bold': isEven,
        'bg-red-600/60 text-white font-bold': !isEven,
      }"
    >
      Count: {{count}}
    </h2>

    <div class="flex gap-4">
      <ButtonCommonOptions
        buttonType="button"
        @handle-click="count++"
      >
        Increament
      </ButtonCommonOptions>

      <ButtonCommonOptions
        buttonType="button"
        @handle-click="addTwo"
      >
        add 2
      </ButtonCommonOptions>

      <ButtonCommonOptions
        buttonType="button"
        @handle-click="toggleIsActive"
      >
        Toggle {{isActive ? 'Active' : 'Not Active'}}
      </ButtonCommonOptions>

    </div>
  </div>
</template>

<style scoped>
.button-count-container {
  display: flex;
  gap: 1rem;
}
/* component style */
</style>
