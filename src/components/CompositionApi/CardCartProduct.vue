<script setup lang="ts">
import useCartStore from '@/stores/useCartStore';
import currencyUSD from '@/utils/format-currency';

const cartStore = useCartStore();
</script>

<template>
  <div
    v-for="product in cartStore.cart.items"
    :key="product.id"
    class="flex gap-6 p-4 border-b border-blue-500"
  >
    <div class="flex items-center justify-center h-32 w-28">
      <img
        :src="product.image"
        :alt="product.title"
        class="object-contain h-full min-w-28 mix-blend-multiply"
        loading="lazy"
      >
    </div>

    <div class="flex flex-col w-full justify-items-center">
      <h2 class="text-lg font-semibold text-blue-500 text-pretty ">
        {{ product.title }}
      </h2>

      <h3 class="mt-2 text-xl font-bold text-blue-600">
        {{ currencyUSD(product.pricePerPcs) }}/pcs
      </h3>

      <div class="flex items-center justify-between w-full gap-4 mt-4">
        <div class="flex items-center gap-4">
          <h3 class="font-bold text-blue-500">
            QTY:
          </h3>
          <div class="flex items-center gap-2 ">
            <button
              type="button"
              class="w-8 h-8 text-lg font-bold text-white bg-red-400 rounded-md hover:bg-red-600"
              @click="cartStore.decrementQtyProductInCart(product.id)"
            >
              -
            </button>
            <p
              class="flex items-center justify-center w-8 h-8 text-lg font-bold text-blue-600"
            >
              {{ product.qty }}
            </p>
            <button
              type="button"
              class="w-8 h-8 text-lg font-bold text-white bg-blue-400 rounded-md hover:bg-blue-600"
              @click="cartStore.incrementQtyProductInCart(product.id)"
            >
              +
            </button>
          </div>
        </div>

        <div>
          <h3 class="text-xl font-bold text-blue-600 bg-blue-200">
            Total: {{ currencyUSD(product.Totalprice) }}
          </h3>
        </div>
      </div>

      <div class="flex justify-end mt-4">
        <button
          type="button"
          class="py-2 font-medium text-white rounded-md bg-red-500/90 hover:bg-red-600 px-9"
          @click="cartStore.deleteProductInCart(product.id)"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* component style */
</style>
