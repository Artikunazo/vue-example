<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold text-center mb-8">Our Products</h1>
    <div v-if="loading" class="text-center">Loading products...</div>
    <div v-if="error" class="text-center text-red-500">{{ error }}</div>
    <div v-if="products.length" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      <ProductCard 
        v-for="product in products" 
        :key="product.id" 
        :product="product" 
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import ProductCard from '@/components/ProductCard.vue';
import ApiService from '@/services/ApiService.js';
import type { Product } from '@/types';

// Typed reactive variables
const products = ref<Product[]>([]);
const loading = ref<boolean>(true);
const error = ref<string | null>(null);

onMounted(async () => {
  try {
    const response = await ApiService.getProducts();
    products.value = response.data;
  } catch (err) {
    error.value = 'Failed to fetch products. Make sure the JSON server is running.';
    console.error(err);
  } finally {
    loading.value = false;
  }
});
</script>