<script setup lang="ts">
import CardCartProduct from '@/components/CompositionApi/CardCartProduct.vue';
import useCartStore from '@/stores/useCartStore';
import currencyUSD from '@/utils/format-currency';

const cartStore = useCartStore();

</script>

<template>
  <h2 class="mb-6 text-3xl font-bold text-blue-500 bg-blue-300/40">
    Cart System (Pinia) Demo
  </h2>

  <div class="sticky z-10 flex items-center justify-between p-6 mb-8 bg-white rounded-lg shadow top-24 shadow-neutral-400/70">
    <h2 class="flex flex-col text-2xl font-bold text-blue-600">
      Amount Total Price:
      <span class="">
        {{ currencyUSD(cartStore.amountTotalPriceInCart) }}
      </span>
    </h2>

    <button
      type="button"
      class="self-end px-4 py-2 font-semibold text-white bg-red-500 rounded hover:bg-red-700"
      @click="cartStore.clearCart"
    >
      Clear All Cart
    </button>
  </div>

  <div class="rounded ring-1 ring-blue-500">
    <CardCartProduct />
  </div>
</template>
