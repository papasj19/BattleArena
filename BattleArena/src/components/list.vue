<script setup>

import { defineProps } from 'vue';

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
  }
});
</script>

<template>
  <div class="mx-auto text-gray-600">
    <div class="relative overflow-x-auto sm:rounded-lg">
      <table class="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          {{ props.title }}
          <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">{{ props.subtitle }}</p>
        </caption>
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" v-for="column in props.columns" :key="column" class="px-6 py-3">
              {{ column }}
            </th>
          </tr>
        </thead>

        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
            <th scope="row" class="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Game 1
          </th>
          <td class="px-6 py-4">
            2x2
          </td>
          <td class="px-6 py-4">
            30/03
          </td>
          <td class="px-6 py-4">
            2
          </td>
          <td class="px-6 py-4">
            Finished
          </td>
        </tr>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Game 2
          </th>
          <td class="px-6 py-4">
            5x5
          </td>
          <td class="px-6 py-4">
            10/02
          </td>
          <td class="px-6 py-4">
            4
          </td>
          <td class="px-6 py-4">
            In Progress
          </td>
        </tr>
        <tr class="bg-white dark:bg-gray-800 text-center">
          <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Game 3
          </th>
          <td class="px-6 py-4">
            10x10
          </td>
          <td class="px-6 py-4">
            22/06
          </td>
          <td class="px-6 py-4">
            9
          </td>
          <td class="px-6 py-4">
           In Progress
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


