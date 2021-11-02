<script setup>
import { pendings, statusGroup } from './data';
import Plaque from './components/Plaque/index.vue';
import Panel from './components/Panel/index.vue';
import FilterInput from './components/FilterInput/index.vue';
import ResetButton from './components/ResetButton/index.vue';
</script>

<template>
  <main class="max-w-full min-h-screen bg-gray-600 py-8">
    <filter-input></filter-input>
    <plaque :pendings="pendings" v-show="pendings.length"></plaque>
    <template v-for="group in statusGroup" :key="group.id">
      <panel :group="group" v-show="group.members.length"></panel>
    </template>
    <reset-button>重开</reset-button>
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