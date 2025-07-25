<template>
  <nav class="bg-gray-800 text-white shadow-lg">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <router-link to="/" class="text-xl font-bold">MyVueStore</router-link>
        </div>
        <div class="flex items-center">
          <router-link to="/cart" class="relative py-2 px-3 rounded-md hover:bg-gray-700">
            <span>Cart</span>
            <span v-if="cartStore.itemCount > 0" class="absolute top-0 right-0 -mt-1 -mr-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {{ cartStore.itemCount }}
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useCartStore } from '@/store/cart';
const cartStore = useCartStore();
</script>