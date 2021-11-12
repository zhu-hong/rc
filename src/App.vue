<script setup>
import { computed, reactive, shallowRef } from '@vue/reactivity';
import { watch } from '@vue/runtime-core';

import Plaque from './components/Plaque/index.vue';
import Panel from './components/Panel/index.vue';
import FilterInput from './components/FilterInput/index.vue';
import ResetButton from './components/ResetButton/index.vue';

import { TYPES, list } from './data';
import { getShortName, smoothToTop } from './utils';

const members = reactive(JSON.parse(localStorage.getItem('members')) || list);
const keyword = shallowRef('');

const statuses = [
  {
    status: TYPES.ARRIVE.STATUS,
    text: TYPES.ARRIVE.TEXT,
    color: TYPES.ARRIVE.COLOR,
  },
  {
    status: TYPES.LEAVE.STATUS,
    text: TYPES.LEAVE.TEXT,
    color: TYPES.LEAVE.COLOR,
  },
  {
    status: TYPES.ABSENT.STATUS,
    text: TYPES.ABSENT.TEXT,
    color: TYPES.ABSENT.COLOR,
  },
];

const pendings = computed(
  () => members.filter((member) => {
    return (
      member.status === TYPES.PENDING.STATUS &&
      (
        member.name.includes(keyword.value) ||
        getShortName(member.name).startsWith(keyword.value.toLowerCase())
      )
    )
  })
);

const groups = reactive([
  {
    members: computed(() => members.filter(member => member.status === TYPES.ARRIVE.STATUS)),
    title: TYPES.ARRIVE.TEXT + '✨',
    color: TYPES.ARRIVE.COLOR,
  },
  {
    members: computed(() => members.filter(member => member.status === TYPES.LEAVE.STATUS)),
    title: TYPES.LEAVE.TEXT + '🤕',
    color: TYPES.LEAVE.COLOR,
  },
  {
    members: computed(() => members.filter(member => member.status === TYPES.ABSENT.STATUS)),
    title: TYPES.ABSENT.TEXT + '💢',
    color: TYPES.ABSENT.COLOR,
  },
]);

const setStatus = (id, status) => {
  members.find(member => member.id === id).status = status;
}

const restart = () => {
  smoothToTop();
  keyword.value && (keyword.value = '')
  if (localStorage.getItem('members')) {
    members.forEach(member => { member.status = TYPES.PENDING.STATUS });
    localStorage.removeItem('members');
  }
}

watch(
  () => members,
  () => {
    localStorage.setItem('members', JSON.stringify(members));
  },
  {
    deep: true,
  }
);
</script>

<template>
  <main class="max-w-full min-h-screen bg-gray-600 py-8">
    <FilterInput v-model:keyword="keyword" />
    <Plaque
      :pendings="pendings"
      :statuses="statuses"
      :setStatus="setStatus"
      v-show="pendings.length"
    />
    <template v-for="group in groups">
      <Panel :group="group" :setStatus="setStatus" v-show="group.members.length" />
    </template>
    <reset-button :restart="restart">重开</reset-button>
  </main>
</template>