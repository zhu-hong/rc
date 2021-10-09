<script setup>
import { pendings } from './data'
import Plaque from './components/Plaque/index.vue'
</script>

<template>
  <main class="max-w-full min-h-screen bg-gray-600 py-8">
    <plaque :pendings="pendings" v-show="pendings.length"></plaque>
  </main>
</template>

<style>
* {
  user-select: none;
}
::-webkit-scrollbar {
  display: none;
}
</style>