<script setup>

import Api from "../service/Api.js";

</script>

<script>
import Api from "../service/Api.js";
import gameArena from "./GameArena.vue";
import GameArena from "./GameArena.vue";
import currentUserToken from "../App.vue";
import {computed} from "vue";

export default {
  data() {
    return {
      gameID: "",
      leaveGameID: "",
      size: 2,
      response: "",
      numberOfAttacks: 0,
      playerHP: 50
    }
  },

  methods: {
    navigateTo(page) {
      this.$router.push(`/${page}`);
    },
    setHP(HP) {
      this.playerHP = HP;
    },
    setSize(sizeg) {
      this.size = sizeg;
    },
    grabGameInfo() {
      Api.currentGameAPICALL(this.gameID, localStorage.getItem("currentUserToken")).then((response) => {
        if (response.ok === undefined) {
          alert("Wrong Request");
        }
        return response.json();
      }).then((data) => {
        console.log(data);

        this.leaveGameID = data[0].game_ID;

        console.log("leave game id3:" + this.leaveGameID)
      }).catch((error) => {
        alert("No connection with the API");
        this.response = "No connection with API";
      });
    },
    leaveGame() {
      Api.leaveGameAPICall(this.leaveGameID, localStorage.getItem("currentUserToken")).then((response) => {
        if (response.ok === undefined) {
          alert("Wrong Request");
        }
        return response.json();
      }).then((data) => {
        console.log(data);
        this.gameID = "";
        console.log("wtf" + this.gameID)
      }).catch((error) => {
        alert("No connection with the API");
        this.response = "No connection with API";
      });
    },
    createNewArena() {

      localStorage.setItem("currentGameID", this.gameID);
      Api.newArenaAPICall(this.gameID, this.size, this.playerHP, localStorage.getItem("currentUserToken")
      ).then((response) => {
        console.log("new arena api call; token: " + this.$root.currentUserToken);
        if (response.ok) {
          this.$router.push("/GameArena");
        }

        return response.json();
      }).then((res) => {
        if (res.ok === undefined) {
          this.response = res.error.message;
        }
        this.response = "Arena Entered!";
      }).catch((error) => {
        this.response = "No connection with API";
      });
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
      <!-- Image container -->
      <section class="flex-grow sm:flex sm:flex-row items-center p-5 bg-none dark:bg-none">
        <img src="src/assets/photos/arena_template.png" class="h-auto sm:h-75 mx-auto" alt="new arena"/>
      </section>
      <!-- formatting the right portion of the screen with a box nicely formatted for user visuals  -->
      <section class="flex flex-col justify-around rounded-lg bg-white dark:bg-gray-900">
        <!-- Centering the right portion of the screen  -->
        <form class="p-4 flex flex-col" @submit.prevent>
          <!-- centering the title of options section, giving the user options to pre load their arena -->
          <h2 class="text-center">Pre-Load:</h2>

          <label for="Game Name">Game Name</label>
          <input placeholder="game name" name="Game Name" v-model="gameID">
          <!-- Size of arena option -->
          <label for="sizeMatrix">Matrix Size: </label>
          <select name="sizeMatrix" id="sizeMatrix">
            <option value="2" onclick="setSize(2)">2</option>
            <option value="3" onclick="setSize(3)">3</option>
            <option value="4" onclick="setSize(4)">4</option>
            <option value="5" onclick="setSize(5)">5</option>
            <option value="6" onclick="setSize(6)">6</option>
            <option value="7" onclick="setSize(7)">7</option>
            <option value="8" onclick="setSize(8)">8</option>
            <option value="9" onclick="setSize(9)">9</option>
            <option value="10" onclick="setSize(10)">10</option>
          </select>
          <!-- Health players option -->
          <label for="hpPlay">Player HP: </label>
          <select name="hpPlay" id="hpPlay">
            <option value="50" onclick="setHP(15)">15</option>
            <option value="50" onclick="setHP(50)">50</option>
            <option value="75" onclick="setHP(75)">75</option>
            <option value="100" onclick="setHP(100)">100</option>
            <option value="200" onclick="setHP(200)">200</option>
          </select>
          <!-- Attack option -->
          <label for="attacks">Equipped Attacks: </label>
          <select name="attacks" id="attacks">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <!-- Submit filters button -->
          <button
              class="focus:outline-none text-white m-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              v-on:click="createNewArena">
            Apply Filter(s)
          </button>
          <label>Hit Testing before Leave</label>
          <button
              class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm p-2 m-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
              v-on:click="leaveGame">Leave Entered Game
          </button>
          <button
              class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 m-2"
              v-on:click="grabGameInfo">testing
          </button>
        </form>
      </section>
    </section>
    <button
        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 m-2"
        v-on:click="createNewArena">Create Arena
    </button>
  </div>


</template>


<!-- Attack button -->

<style scoped>

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


.parent {
  display: grid;
  grid-template-columns: repeat(v-bind(arenaGridSize), 1fr);
  grid-template-rows: repeat(v-bind(arenaGridSize), 1fr);
  grid-column-gap: 2px;
  grid-row-gap: 2px;
  width: calc(v-bind(arenaGridSize) * 50px);
  height: calc(v-bind(arenaGridSize) * 50px);
  background-attachment: fixed;

}

.arena-grid-cell {

}

.ex {
  background-color: grey;
}
</style>