<script setup>
import { changeStatus } from '../../utils'
defineProps({
  group: Object
})
</script>

<template>
  <div class="relative w-80 mx-auto my-8 p-6 pt-10 bg-gray-900 rounded-lg">
    <section class="absolute -top-4 left-4 px-3 py-2 bg-black text-lg text-green-500">
      {{ group.title }}
      <small
        class="inline-block w-4 ml-1 text-left text-sm text-red-400 font-bold"
      >{{ group.members.length }}</small>
    </section>
    <div class="grid grid-cols-4">
      <template v-for="member in group.members" :key="member.id">
        <span
          :class="['grid place-items-center p-1 text-lg font-bold border-r border-b border-black', group.color]"
          @click="changeStatus(member.id, 'pending')"
        >{{ member.name }}</span>
      </template>
    </div>
  </div>
</template>