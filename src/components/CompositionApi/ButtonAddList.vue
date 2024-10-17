<script setup lang="ts">

type EmitButtonAddList = {
  (e: 'add-list', event: MouseEvent): void
};

const emit = defineEmits<EmitButtonAddList>();

const handlingAddNewList = (event: MouseEvent) => {
  emit('add-list', event);
};

</script>

<template>
  <button type="button" @click="handlingAddNewList($event)" class="button-add-list">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.button-add-list {
  padding: .75rem 1.5rem;
  font-weight: 500;
  background-color: deeppink;
  color: white;
  border: none;
  border-radius: .5rem;
  cursor: pointer;
}
</style>
