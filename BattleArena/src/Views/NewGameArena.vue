<script setup>

import { useRouter } from 'vue-router';

const router = useRouter();

const navigateTo = (page) => {
  router.push(`/${page}`);
};

</script>

<template>
  <title>
    Welcome to the Arena Creation Screen
  </title>


      <div class="new-game-arena-container flex flex-col items-center h-full pb-4 bg-white dark:bg-gray-900">
    <img src="/Photos/arena_template.png" class="h-100 mr-3" alt="new arena" />

    <button class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" @click="navigateTo('GameArena')">Create Arena</button>
      </div>




</template>

<style scoped>

.new-game-arena-container{

  justify-content: center;
  align-content: center;
}
</style>