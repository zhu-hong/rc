<script setup>
defineProps({
  restart: Function,
})
</script>

<template>
  <button
    class="block mx-auto px-6 py-4 bg-pink-500 text-2xl uppercase rounded-lg tracking-widest"
    @click="restart"
  >
    <slot></slot>
  </button>
</template>