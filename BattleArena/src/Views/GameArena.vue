<script setup>

import { useRouter } from 'vue-router';

const router = useRouter();

const navigateTo = (page) => {
  router.push(`/${page}`);
};

</script>




<template>

  <body>
  <div class="flex flex-col items-center space-x-5 pb-4 bg-white dark:bg-gray-900">
    <!-- laying out page horizontally-->
    <div class="flex flex-row items-center space-x-5 h-full pb-4 bg-white dark:bg-gray-900">
      <img src="/Photos/arena_template.png" class="h-75 mr-3" alt="new arena" />
      <!-- laying out page vertically on right portion-->
      <div class="flex flex-col items-center space-x-5 space-y-7 h-full pb-4 bg-white dark:bg-gray-900">
        <!-- player 1 layout-->
        <div class="flex flex-col items-center space-y-2 h-full pb-4 bg-white dark:bg-gray-900">
          <img src="/Photos/rick.png" class="h-20 mr-3" alt="new arena" />

          <!--<p class="text-gray-500 dark:text-gray-400">Player 1</p>
          leaving above in case its not a chat box and its a button to the profile -->

          <label for="player_one_chat" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Player 1</label>
          <input type="text" id="player_one_chat" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="chat" required>
        </div>
        <!-- player 2 layout-->
        <div class="flex flex-col items-center space-y-2 h-full pb-4 bg-white dark:bg-gray-900">
          <img src="/Photos/kitty.jpeg" class="h-20 mr-3" alt="new arena" />
          <label for="player_two_chat" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Player 2</label>
          <input type="text" id="player_two_chat" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="chat" required>
        </div>
      </div>
    </div>
    <button class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" @click="navigateTo('GameArena')">End Game</button>
  </div>


  </body>
</template>

<style scoped>

body {
  background-image: url("Photos/arena_background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100vw;
  height: 100vh;
  justify-content: center;
}

</style>