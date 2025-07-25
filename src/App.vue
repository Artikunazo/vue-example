<template>
  <div id="app" class="bg-gray-100 min-h-screen">
    <Navbar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
</script>