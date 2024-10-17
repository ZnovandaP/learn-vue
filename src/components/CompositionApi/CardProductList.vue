<script setup lang="ts">

import useProductStore from '@/stores/useProductStore';
import CardProduct from './CardProduct.vue';
import SkeletonCardProduct from './SkeletonCardProduct.vue';

const productsStore = useProductStore();

productsStore.getProducts();
</script>

<template>
  <div class="grid grid-cols-3 gap-6">
    <SkeletonCardProduct />
    <CardProduct
      v-for="product in productsStore.products"
      :key="product.id"
      :product="product" />
  </div>
</template>
