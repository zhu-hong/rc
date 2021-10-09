<script setup>
import { statusInfo } from '../../data'
defineProps({
  member: Object
})
</script>

<template>
  <div class="w-full h-10 grid grid-cols-5 rounded-lg overflow-hidden">
    <span
      class="grid place-items-center col-span-2 bg-green-400 text-lg font-bold"
    >
      {{ member.name }}
    </span>
    <template v-for="status in statusInfo">
      <button
        :class="['font-semibold rounded-none', status.color]"
      >
        {{ status.text }}
      </button>
    </template>
  </div>
</template>