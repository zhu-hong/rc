<script setup>
import { reset } from '../../utils';
</script>

<template>
  <button
    @click="reset"
    class="block mx-auto px-6 py-4 bg-pink-500 text-2xl uppercase rounded-lg tracking-widest"
  >
    <slot></slot>
  </button>
</template>