<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">Your Shopping Cart</h1>
    <div v-if="cartStore.itemCount > 0" class="bg-white shadow-md rounded-lg p-6">
      <ul>
        <li v-for="item in cartStore.items" :key="item.id" class="flex justify-between items-center border-b py-4">
          <div class="flex items-center">
            <img :src="item.image" :alt="item.name" class="w-20 h-20 object-cover rounded mr-4">
            <div>
              <h2 class="text-lg font-semibold">{{ item.name }}</h2>
              <p class="text-gray-600">${{ item.price.toFixed(2) }} x {{ item.quantity }}</p>
            </div>
          </div>
          <p class="text-lg font-bold">${{ (item.price * item.quantity).toFixed(2) }}</p>
        </li>
      </ul>
      <div class="text-right mt-6">
        <p class="text-2xl font-bold">Total: ${{ cartStore.totalAmount.toFixed(2) }}</p>
        <router-link to="/checkout">
            <button class="mt-4 bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition-colors">
                Proceed to Checkout
            </button>
        </router-link>
      </div>
    </div>
    <div v-else class="text-center py-10">
      <p class="text-xl text-gray-500">Your cart is empty.</p>
      <router-link to="/" class="text-blue-500 hover:underline mt-4 inline-block">
        Continue Shopping
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/store/cart';
const cartStore = useCartStore();
</script>