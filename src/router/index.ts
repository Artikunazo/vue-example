import { createRouter, createWebHistory } from 'vue-router'
import ProductsView from '../views/ProductsView.vue'
import CartView from '../views/CartView.vue'
import CheckoutView from '../views/CheckoutView.vue'

const router = createRouter({
  // Gestiona el historial del navegador para que funcionen los botones de atrás/adelante.
  history: createWebHistory(import.meta.env.BASE_URL),
  
  // Aquí se definen las rutas de la aplicación.
  routes: [
    {
      path: '/',
      name: 'products',
      component: ProductsView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: CheckoutView
    }
  ]
})

export default router