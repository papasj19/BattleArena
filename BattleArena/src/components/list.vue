<script setup>

import {defineProps} from 'vue';

// Define props to accept dynamic column titles
const props = defineProps({
  title: {
    type: String,
    default: 'Arenas Rankings'
  },
  subtitle: {
    type: String,
    default: 'Here is the list of the Arena\'s and their contents.'
  },
  columns: {
    type: Array,
    default: () => ['Game ID', 'Matrix Size', 'Date Created', 'Number of Players', 'Status']
  },
  content: {
    type: Array
  }
});
</script>

<template>
  <div class="mx-8 text-gray-600 overflow-y-auto max-h-96">
    <div class="relative overflow-x-auto sm:rounded-lg">
      <table class="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          {{ props.title }}
          <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">{{ props.subtitle }}</p>
        </caption>
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 text-center dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" v-for="column in props.columns" :key="column" class="px-6 py-3">
            {{ column }}
          </th>
        </tr>
        </thead>

        <tbody>
        <tr scope="col" v-for="element in props.content" :key="element"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
          <th v-for="cell in element" :key="cell" scope="row"
              class="px-4 py-2 font-medium text-gray-900 whitespace-wrap dark:text-white">
            <a>{{ cell }}</a>
          </th>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


