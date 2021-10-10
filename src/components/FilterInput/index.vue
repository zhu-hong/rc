<script setup>
import { keyword } from '../../data'
</script>

<template>
  <div class="relative w-80 mx-auto mb-4">
    <input
      class="w-full p-3 pr-12 bg-gray-900 text-white font-bold rounded-lg outline-none transition focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      v-model="keyword"
      autofocus
    />
    <transition name="x">
      <span
        class="absolute right-3 top-2 text-white text-2xl grid place-items-center"
        v-show="keyword.length"
        @click="keyword = ''"
      >
        ❌
      </span>
    </transition>
  </div>
</template>

<style>
.x-enter-active {
  transition: all 0.2s linear;
}

.x-leave-active {
  transition: all 0.2s linear;
}

.x-enter-from,
.x-leave-to {
  transform: scale(0);
}
</style>