import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { Product, CartItem } from '@/types'; // <-- Import our types

export const useCartStore = defineStore('cart', () => {
  // State: The ref is typed with our CartItem interface
  const items = ref<CartItem[]>([]);

  // Getters: TypeScript infers the return types (number)
  const itemCount = computed(() => items.value.length);
  
  const totalAmount = computed(() => {
    return items.value.reduce((total, item) => total + (item.price * item.quantity), 0);
  });

  // Actions: The product parameter is strongly typed
  function addToCart(product: Product) {
    const existingItem = items.value.find(item => item.id === product.id);

    if (existingItem) {
      existingItem.quantity++;
    } else {
      items.value.push({ ...product, quantity: 1 });
    }
  }

  function clearCart() {
    items.value = [];
  }

  return { items, itemCount, totalAmount, addToCart, clearCart };
});