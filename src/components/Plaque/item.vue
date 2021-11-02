<script setup>
import { statusInfo } from '../../data';
import { changeStatus } from '../../utils';
defineProps({
  member: Object,
})
</script>

<template>
  <div class="w-full h-10 mb-2 grid grid-cols-5 rounded-lg overflow-hidden text-black">
    <span
      class="grid place-items-center col-span-2 bg-green-400 text-lg font-bold"
    >
      {{ member.name }}
    </span>
    <template v-for="status in statusInfo" :key="status.id">
      <button
        :class="['font-semibold rounded-none', status.color]"
        @click="changeStatus(member.id, status.status)"
      >
        {{ status.text }}
      </button>
    </template>
  </div>
</template>