<script setup>

import NewGameArena from "./NewGameArena.vue";
import list from "/src/components/list.vue";

import {useRouter} from 'vue-router';

const router = useRouter();

const navigateTo = (page) => {
  router.push(`/${page}`);
};

</script>

<script>

import currentUserToken from "../App.vue";
import Api from "../service/Api.js";

function arenaToCell(arena) {
  let cell = []
  cell.push(arena.game_ID)
  cell.push(arena.size)
  cell.push(arena.creation_date)
  cell.push(arena.HP_max)
  cell.push(arena.players_games)

  return cell
}

function arenasToCells(arenas) {
  return arenas.map(arenaToCell)
}

export default {
  data() {
    return {
      arenas: []
    }
  },
  methods: {
    cellClicked(cell) {
      const arenaID = cell.target.innerText;
      this.joinGame(arenaID);
      this.$router.push("/GameArena");
    },
    joinGame(gameIDpassed) {
      Api.joinArenaAPICall(gameIDpassed, localStorage.getItem("currentUserToken")).then((response) => {
        if (response.ok) {
          alert("Arena Joined");
          this.response = "Arena Joined!";
          return response;
        }
        return response.json();
      }).then((res) => {
        if (res.ok === undefined) {
          this.response = res.error.message;
        }
      }).catch((error) => {
        this.response = "No connection with API";
      });
    },
    getAllArenas() {
      const getAllArenas = {}

      Api.getArenasAPICall(localStorage.getItem("currentUserToken")).then((response) => {
        if (response.ok === undefined) {
          alert("Wrong Request");
        }
        return response.json();
      }).then((data) => {
        console.log(data);

        this.arenas = arenasToCells(data);
        console.log(this.arenas)
      }).catch((error) => {
        alert("No connection with the API");
        this.response = "No connection with API";
      });
    }
  }
}

</script>


<template>
  <!--setting up background and formating page-->
  <div class="arena-manage-container flex flex-col justify-content">
    <!--creating the top part of the table and the formatting in a linear horizontal fashion -->
    <section class="flex mx-auto flex-col sm:flex-row justify-center text-gray-600">
      <!--Bind elements to the center of the page -->
      <div class="flex flex-col sm:flex-row justify-center items-center w-full pb-4 bg-none">
        <!--User Interactable search bar -->
        <input type="text" id="table-search"
               class="block m-2 p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-full sm:w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Search for Arenas">

        <div class="flex flex-col sm:flex-row w-full sm:w-auto">
          <div>
            <button id="dropdownRadioButton" data-dropdown-toggle="dropdownRadio"
                    class="inline-flex m-2 items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button">
              <svg class="w-3 h-3 text-gray-500 dark:text-gray-400 mr-2.5" aria-hidden="true"
                   xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path
                    d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z"/>
              </svg>
              Filter
              <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                   viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="m1 1 4 4 4-4"/>
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div id="dropdownRadio"
                 class="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                 data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top"
                 style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(522.5px, 3847.5px, 0px);">
              <ul class="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
                <li>
                  <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input id="filter-radio-example-1" type="radio" value="" name="filter-radio"
                           class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="filter-radio-example-1"
                           class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last
                      day</label>
                  </div>
                </li>
                <li>
                  <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <input checked="" id="filter-radio-example-2" type="radio" value="" name="filter-radio"
                           class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                    <label for="filter-radio-example-2"
                           class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Last 7
                      days</label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <button
              class="focus:outline-none m-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-full sm:w-auto"
              @click="navigateTo('NewGameArena')">New Arena
          </button>
          <button
              class="focus:outline-none m-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-full sm:w-auto"
              @click="getAllArenas">Load Arenas
          </button>
        </div>

      </div>
    </section>

    <list
        title="Arenas Rankings"
        subtitle="Here is the list of the Arena\'s and their contents."
        :columns="['Game ID', 'Matrix Size', 'Date Created', 'HP Max', 'Status']"
        :content="arenas"
        @:dblclick="cellClicked($event)"
    />

  </div>
</template>


<!--setting up background and formating page-->
<style scoped>
.arena-manage-container {
  background-image: url('src/assets/photos/tatami-room.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-content: center;
}

</style>