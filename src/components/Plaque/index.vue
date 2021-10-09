<script setup>
import Item from './item.vue';
import { isRoll } from '../../data';
defineProps({
  pendings: Array
})
</script>

<template>
  <div class="relative w-80 mx-auto my-8 p-6 pt-10 bg-gray-900 rounded-lg">
    <section
      class="absolute -top-4 left-4 px-4 py-2 bg-black text-green-500 text-xl grid grid-cols-3 gap-2"
    >
      🌲
      <small
        class="text-sm text-red-400 font-bold grid place-items-center"
      >{{ pendings.length }}</small>
      <small
        :class="['cursor-pointer transition-transform grid place-items-center', { 'transform rotate-180': isRoll }]"
        @click="isRoll = !isRoll"
      >
        ⬆
      </small>
    </section>
    <transition name="roll">
      <div class="w-full grid gap-4 origin-top" v-show="!isRoll">
        <template v-for="member in pendings" :key="member.id">
          <item :member="member"></item>
        </template>
      </div>
    </transition>
  </div>
</template>

<style>
.roll-enter-active {
  transition: all 0.2s linear;
}

.roll-leave-active {
  transition: all 0.2s linear;
}

.roll-enter-from,
.roll-leave-to {
  transform: scaleY(0);
}
</style>