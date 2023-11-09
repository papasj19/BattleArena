<script setup>

import {useRouter} from 'vue-router';

const router = useRouter();

const navigateTo = (page) => {
  router.push(`/${page}`);
};

</script>


<template>
  <!-- laying out the background of the page-->
  <div class="game-arena-container flex flex-col justify-content">
    <!-- laying out page vertically-->
    <div class="flex flex-col justify-center items-center">
      <!-- laying out page horizontally-->
      <div class="flex flex-row items-center p-5 h-full pb-4 bg-none dark:bg-none">
        <img src="/Photos/arena_template.png" class="h-75 mr-3" alt="new arena"/>
        <!-- laying out page vertically on right portion-->
        <section class="flex flex-col justify-around h-full rounded-lg bg-white dark:bg-gray-900">

          <section class="p-4">
            <h2 class="text-center">Player 1</h2>
            <img src="/Photos/rick.png" class="object-cover h-24 w-24" alt="new arena"/>
            <div class="w-full mt-1 bg-gray-200 rounded-full dark:bg-gray-700">
              <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                   style="width: 30%"> 30%
              </div>
            </div>
          </section>


          <section class="px-2">
            <h2 class="text-center">Player 2</h2>
            <img src="/Photos/kitty.jpeg" class="object-cover h-24 w-24" alt="new arena"/>
            <div class="w-full mt-1 bg-gray-200 rounded-full dark:bg-gray-700">
              <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                   style="width: 95%"> 95%
              </div>
            </div>
          </section>
        </section>
      </div>
      <button
          class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          @click="navigateTo('ArenaManage')">End Game
      </button>
    </div>

  </div>


</template>

<!--Here i format the container of the ppage for the background and the content aligned to hte middle
  also i specifically format the buttons on this page to have the best contrast for the background
  this is along with the formatting of the table
-->

<style scoped>

.game-arena-container {
  background-image: url("Photos/arena_background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-content: center;
}

</style>