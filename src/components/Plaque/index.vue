<script setup>
import Item from './item.vue';

defineProps({
  pendings: Array,
  statuses: Array,
  setStatus: Function,
})
</script>

<template>
  <div class="relative w-80 mx-auto my-8 p-6 pt-10 bg-gray-900 rounded-lg">
    <section
      class="absolute -top-4 left-4 px-4 py-2 bg-black text-green-500 text-xl grid grid-cols-2 gap-2"
    >
      🌲
      <small
        class="text-sm text-red-400 font-bold grid place-items-center"
      >
        {{ pendings.length }}
      </small>
    </section>
      <div class="relative w-full h-110 overflow-hidden">
        <virtual-scroll
          :totalData="pendings"
          :itemHeight="48"
          v-slot:default="slotProps"
        >
          <Item 
            :member="slotProps.item" 
            :statuses="statuses"
            :setStatus="setStatus"
          />
        </virtual-scroll>
      </div>
  </div>
</template>