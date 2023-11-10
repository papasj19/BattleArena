<script setup>

import {useRouter} from 'vue-router';

const router = useRouter();

const navigateTo = (page) => {
  router.push(`/${page}`);
};

</script>


<template>
  <div class="game-arena-container flex flex-col justify-center items-center min-h-screen">
    <div class="flex flex-col sm:flex-row justify-center items-center w-fit">
      <!-- Image container -->
      <div class="flex-grow sm:flex sm:flex-row items-center p-5 bg-none dark:bg-none">
        <img src="src/assets/photos/arena_template.png" class="h-auto sm:h-75 mx-auto" alt="new arena"/>
      </div>
      <!-- Player info sections -->     
      <div class="flex flex-row sm:flex-col justify-around items-center h-full rounded-lg bg-white dark:bg-gray-900 m-2 w-screen sm:w-fit">        
        <!-- Player 1 Section -->
        <section class="p-2 flex-1">
          <h2 class="text-center">Player 1</h2>
          <img src="src/assets/photos/rick.png" class="object-cover h-14 w-14 sm:h-24 sm:w-24 mx-auto" alt="Player 1"/>
          <div class="w-full mt-1 bg-gray-200 rounded-full dark:bg-gray-700">
            <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 30%"> 30%</div>
          </div>
        </section>
        <!-- Player 2 Section -->
        <section class="px-2 flex-1">
          <h2 class="text-center">Player 2</h2>
          <img src="src/assets/photos/kitty.jpeg" class="object-cover h-14 w-14 sm:h-24 sm:w-24 mx-auto" alt="Player 2"/>
          <div class="w-full mt-1 bg-gray-200 rounded-full dark:bg-gray-700">
            <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style="width: 95%"> 95%</div>
          </div>
        </section>
      </div>
    </div>
    <!-- End Game Button -->
    <button
      class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm p-2 m-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
      @click="navigateTo('ArenaManage')">End Game
    </button>
  </div>
</template>


<!--Here i format the container of the ppage for the background and the content aligned to hte middle
  also i specifically format the buttons on this page to have the best contrast for the background
  this is along with the formatting of the table
-->

<style scoped>

.game-arena-container {
  background-image: url("src/assets/photos/arena_background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-content: center;
}

</style>