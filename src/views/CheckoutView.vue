<template>
  <div class="container mx-auto px-4 py-8 max-w-2xl">
    <h1 class="text-3xl font-bold mb-6">Checkout</h1>
    <div class="bg-white shadow-md rounded-lg p-6">
      <form @submit.prevent="handlePurchase">
        <div class="mb-4">
          <label for="name" class="block text-gray-700 font-bold mb-2">Full Name</label>
          <input type="text" id="name" v-model="customer.name" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
        </div>
        <div class="mb-4">
          <label for="email" class="block text-gray-700 font-bold mb-2">Email Address</label>
          <input type="email" id="email" v-model="customer.email" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
        </div>
        <div class="mb-6">
          <label for="address" class="block text-gray-700 font-bold mb-2">Shipping Address</label>
          <textarea id="address" v-model="customer.address" rows="3" class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
        </div>
        
        <div class="border-t pt-4">
          <h2 class="text-xl font-semibold mb-2">Order Summary</h2>
          <p class="text-lg font-bold text-right mb-4">Total: ${{ cartStore.totalAmount.toFixed(2) }}</p>
          <button type="submit" class="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors text-lg font-bold">
            Buy Now
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useCartStore } from '@/store/cart';
import { useRouter } from 'vue-router';

const cartStore = useCartStore();
const router = useRouter();

// Define an interface for the customer data
interface Customer {
  name: string;
  email: string;
  address: string;
}

// Type the customer ref
const customer = ref<Customer>({
  name: '',
  email: '',
  address: ''
});

const handlePurchase = () => {
  console.log('Order placed:', {
    customer: customer.value,
    items: cartStore.items,
    total: cartStore.totalAmount
  });
  
  cartStore.clearCart();
  
  alert('Thank you for your purchase!');
  router.push('/');
};
</script>