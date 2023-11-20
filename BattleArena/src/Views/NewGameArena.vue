<script setup>

import {useRouter} from 'vue-router';
import ParamComp from "../components/ParamComp.vue";

const router = useRouter();

const navigateTo = (page) => {
  router.push(`/${page}`);
};
</script>

<script>

import ParamComp from "../components/ParamComp.vue";

import {useRouter} from 'vue-router';

const router = useRouter();

const navigateTo = (page) => {
  router.push(`/${page}`);
};

export default {
  components: {ParamComp},
  data() {
    return {
      textx: "0",
      texty: "0",
      numberPlayers: "0"
    }
  },
  methods: {
    modifyModel() {
      this.text = "Button clicked"
    },
    addOneX() {
      let newInt;
      newInt = parseInt(self.textx) + 1;
      newInt = toString();
      self.textx = newInt;
    }
  }
}

</script>

<template>
  <!-- Image container -->
  <div class="new-game-arena-container flex flex-col justify-center items-center min-h-screen">
    <!-- Aligning the page vertically -->
    <section class="flex flex-col sm:flex-row justify-center items-center w-fit">
      <!-- The side of the arena image -->
      <section class="flex-grow sm:flex sm:flex-row items-center p-5 bg-none dark:bg-none">
        <img src="src/assets/photos/arena_template.png" class="h-auto sm:h-75 mx-auto" alt="new arena"/>
      </section>
      <!-- formatting the right portion of the screen with a box nicely formatted for user visuals  -->
      <section class="flex flex-col justify-around rounded-lg bg-white dark:bg-gray-900">
        <!-- Centering the right portion of the screen  -->
        <section class="p-4 flex flex-col">
          <!-- centering the title of options section, giving the user options to pre load their arena -->
          <h2 class="text-center">Pre-Load:</h2>

          <p>Arena Size: {{ textx }} x {{ texty }}</p>
          <form>
            <label class="sizex" for="XSize">Size Matrix (x):</label>
            <input class="inputBox" id="XSize" v-model="textx">
            <button class="v_button" v-on:click="addOneX()">Add one</button>
            <ParamComp v-bind:aParameter=textx></ParamComp>


          </form>
          <form>
            <label class="sizey" for="YSize">Size Matrix (y):</label>
            <input class="inputBox" id="YSize" v-model="texty">


          </form>
          <form>
            <label class="numplayers" for="playernumb">Number Players:</label>
            <input class="inputBox" id="playernumb" v-model="numberPlayers">


          </form>
          <!-- Size of arena option -->

          <button id="dropdownHelperRadioButton" data-dropdown-toggle="dropdownHelperRadio"
                  class="inline-flex items-center m-2 text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  type="button">
            <svg class="w-3 h-3 text-gray-500 dark:text-gray-400 mr-2.5" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path
                  d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
            </svg>
            Matrix Size
            <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          <!-- Dropdown menu -->
          <div id="dropdownHelperRadio"
               class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-60 dark:bg-gray-700 dark:divide-gray-600"
               data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top"
               style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(522.5px, 6119.5px, 0px);">
            <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownHelperRadioButton">
              <li>
                <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <div class="flex items-center h-5">
                    <input id="helper-radio-4" name="helper-radio" type="radio" value=""
                           class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                  </div>
                  <div class="ms-2 text-sm">
                    <label for="helper-radio-4" class="font-medium text-gray-900 dark:text-gray-300">
                      <div>Individual</div>
                      <p id="helper-radio-text-4" class="text-xs font-normal text-gray-500 dark:text-gray-300">Some
                        helpful instruction goes over here.</p>
                    </label>
                  </div>
                </div>
              </li>
              <li>
                <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <div class="flex items-center h-5">
                    <input id="helper-radio-5" name="helper-radio" type="radio" value=""
                           class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                  </div>
                  <div class="ms-2 text-sm">
                    <label for="helper-radio-5" class="font-medium text-gray-900 dark:text-gray-300">
                      <div>Company</div>
                      <p id="helper-radio-text-5" class="text-xs font-normal text-gray-500 dark:text-gray-300">Some
                        helpful instruction goes over here.</p>
                    </label>
                  </div>
                </div>
              </li>
              <li>
                <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <div class="flex items-center h-5">
                    <input id="helper-radio-6" name="helper-radio" type="radio" value=""
                           class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                  </div>
                  <div class="ms-2 text-sm">
                    <label for="helper-radio-6" class="font-medium text-gray-900 dark:text-gray-300">
                      <div>Non profit</div>
                      <p id="helper-radio-text-6" class="text-xs font-normal text-gray-500 dark:text-gray-300">Some
                        helpful instruction goes over here.</p>
                    </label>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- level button -->
          <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio"
                  class="inline-flex items-center m-2 text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  type="button">
            <svg class="w-3 h-3 text-gray-500 dark:text-gray-400 mr-2.5" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path
                  d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
            </svg>
            Player Level
            <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          <!-- Rank option -->
          <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio"
                  class="inline-flex items-center m-2 text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  type="button">
            <svg class="w-3 h-3 text-gray-500 dark:text-gray-400 mr-2.5" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path
                  d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
            </svg>
            Player Rank
            <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          <!-- Attack option -->
          <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio"
                  class="inline-flex items-center m-2 text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  type="button">
            <svg class="w-3 h-3 text-gray-500 dark:text-gray-400 mr-2.5" aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path
                  d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
            </svg>
            Attacks
            <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                 viewBox="0 0 10 6">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m1 1 4 4 4-4"/>
            </svg>
          </button>
          <!-- Submit filters button -->
          <button
              class="focus:outline-none text-white m-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Apply Filter(s)
          </button>
        </section>
      </section>
    </section>
    <button
        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 m-2"
        @click="navigateTo('GameArena')">Create Arena
    </button>
  </div>


</template>


<!-- Attack button -->

<style scoped>

.v_button {
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: deepskyblue;
  cursor: pointer;
  transition: border-color 0.25s;
  width: 25%;
}

.new-game-arena-container {
  background-image: url("src/assets/photos/locker_room.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-content: center;
}

.inputBox {
  width: 15%;
  margin: 3px;
}

p {
  width: auto;
}

.sizex {
  width: 50%;
}

.sizey {
  width: 50%;
}

.numplayers {
  width: 50%;
}


</style>