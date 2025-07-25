<template>
  <div class="border rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300">
    <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover mb-4 rounded">
    <h3 class="text-lg font-semibold mb-2">{{ product.name }}</h3>
    <p class="text-gray-700 font-bold mb-4">${{ product.price.toFixed(2) }}</p>
    <button @click="addToCart" class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
      Add to Cart
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/store/cart';
import type { Product } from '@/types';

// Use TypeScript syntax for defining props
const props = defineProps<{
  product: Product
}>();

const cartStore = useCartStore();

const addToCart = () => {
  cartStore.addToCart(props.product);
};
</script>