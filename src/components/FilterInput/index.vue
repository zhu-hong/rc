<script setup>
import { shallowRef } from '@vue/reactivity';

defineProps({
  keyword: String,
})

const key = shallowRef('');
</script>

<template>
  <div class="relative w-80 mx-auto mb-4">
    <input
      class="w-full p-3 pr-12 bg-gray-900 text-white font-bold rounded-lg outline-none transition focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      v-model="key"
      @input="$emit('update:keyword', key)"
      autofocus
    />
    <transition name="x">
      <span
        class="absolute right-3 top-2 text-white text-2xl grid place-items-center cursor-pointer"
        v-show="keyword.length"
        @click="() => { $emit('update:keyword', ''); key = ''; }"
      >
        ❌
      </span>
    </transition>
  </div>
</template>

<style>
.x-enter-active,
.x-leave-active {
  transition: all 0.2s linear;
}

.x-enter-from,
.x-leave-to {
  transform: translateX(100%) scale(0);
}
</style>