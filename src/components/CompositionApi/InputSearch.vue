<!-- eslint-disable no-param-reassign -->
<script setup lang="ts">
import {
  ref, type ObjectDirective, type DirectiveBinding,
} from 'vue';

const model = defineModel('searchModel', {
  required: true,
  default: '',
});

const inputRef = ref(null);

defineExpose({
  inputRef,
});

const vBorderRed: ObjectDirective = {
  mounted: (el: HTMLElement, binding: DirectiveBinding) => {
    el.style.borderColor = 'red';
    // eslint-disable-next-line no-console
    console.log(binding);
  },
};
</script>

<template>
  <div class="search-container">
    <label for="search-task">
      <span> Search Task</span>
      <input type="search" v-Border-Red:border-red id="search-task" v-model="model" ref="inputRef" />
    </label>
  </div>
</template>

<style scoped lang="scss">
.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;

  &>label {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
  }
}
/* component style */
</style>
