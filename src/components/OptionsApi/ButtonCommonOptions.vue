<script  lang="ts">
import { type PropType } from 'vue';

export default {
  name: 'ButtonCommonOptions',
  props: {
    buttonType: {
      type: String as PropType<'button' | 'submit'>,
      default: 'button',
    },
  },
};
</script>

<template>
  <button
    :type="buttonType"
    @click="$emit('handle-click', $event)"
    class="ring-1 ring-neutral-400 rounded-sm px-4 py-2">
    <slot />
  </button>
</template>

<style scoped>
/* component style */
</style>
