<script setup lang="ts">
import type { Product } from '@/stores/useProductStore';
import useCartStore from '@/stores/useCartStore';
import currencyUSD from '@/utils/format-currency';

const cartStore = useCartStore();

const { product } = defineProps<{ product: Product }>();

const handleProductAddToCart = () => {
  // eslint-disable-next-line no-alert
  window.alert(`${product.title}berhasil dimasukkan ke keranjang.`);
  cartStore.addProductToCart({
    id: product.id,
    price: product.price,
    qty: 1,
    title: product.title,
    image: product.image,
  });
};
</script>

<template>
  <div
    class="p-4 rounded-md ring-1 ring-emerald-500"
  >
    <div class="flex items-center justify-center h-40 mb-4">
      <img
        :src="product.image"
        :alt="`Image ${product.title}`"
        class="object-contain w-[60%] h-full rounded-md"
        loading="lazy"
      >
    </div>

    <div class="pt-4 border-t border-emerald-500">
      <h2 class="line-clamp-1 hover:line-clamp-none text-pretty text-emerald-500/80">
        {{ product.title }}
      </h2>

      <h3
        class="mt-2 text-xl font-bold text-pretty text-emerald-600"
      >
        {{currencyUSD(product.price) }}
      </h3>

      <div class="flex justify-between mt-2">
        <p class="font-semibold text-amber-500 text-pretty">
          Rate: {{ product.rating.rate }}
        </p>
        <p class="font-semibold text-cyan-500 text-pretty">
          Count: {{ product.rating.count }} pcs
        </p>
      </div>

      <div class="flex items-center justify-between gap-4 mt-4">
        <button
          type="button"
          class="w-3/4 px-4 py-2 text-white rounded bg-emerald-500 hover:opacity-75"
        >
          Buy Now
        </button>

        <button
          type="button"
          class="w-1/4 px-4 py-2 font-semibold rounded ring-1 ring-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white"
          @click="handleProductAddToCart"
        >
          Cart
        </button>
      </div>
    </div>
  </div>
</template>
