<script setup>

import {useRouter} from 'vue-router';

const router = useRouter();

const navigateTo = (page) => {
  router.push(`/${page}`);
};

</script>

<script>

export default {
  data() {
    return {
      movement: "",
      playerOrientation: "",
      gameID: "",
    }
  },
  methods: {
    playerMovementAPICall() {
      const playerMovementRequest = {movement: this.movement}
      fetch("https://balandrau.salle.url.edu/i3/players", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(playerMovementRequest)
      }).then((response) => {
        if (response.ok) {
          alert("PLayer moved");
          this.response = "PLayer moved!";
          return response;
        }

        return response.json();
      }).then((res) => {
        if (res.ok == undefined) {
          this.response = res.error.message;
        }
      }).catch((error) => {
        this.response = "No connection with API";
      });
    },
    leaveGameAPICall() {
      const leaveGameRequest = {gameID: this.gameID}
      fetch("https://balandrau.salle.url.edu/i3/players", {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(leaveGameRequest)
      }).then((response) => {
        if (response.ok) {
          alert("You have left the game");
          this.response = "You have left the game!";
          return response;
        }

        return response.json();
      }).then((res) => {
        if (res.ok == undefined) {
          this.response = res.error.message;
        }
      }).catch((error) => {
        this.response = "No connection with API";
      });
    },
    viewGameLogAPICall() {
      const viewGameLogRequest = {gameID: this.gameID}
      fetch("https://balandrau.salle.url.edu/i3/players", {
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(viewGameLogRequest)
      }).then((response) => {
        if (response.ok) {
          alert("INSERT GAME LOG HERE OR SOMETHING");
          this.response = "SHOW GAME LOG";
          return response;
        }

        return response.json();
      }).then((res) => {
        if (res.ok == undefined) {
          this.response = res.error.message;
        }
      }).catch((error) => {
        this.response = "No connection with API";
      });
    },
    changePlayerOrientationAPICall() {
      const changePlayerOrientationRequest = {playerOrientation: this.playerOrientation}
      fetch("https://balandrau.salle.url.edu/i3/players", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(changePlayerOrientationRequest)
      }).then((response) => {
        if (response.ok) {
          alert("changed orientation");
          this.response = "changed orientation!";
          return response;
        }

        return response.json();
      }).then((res) => {
        if (res.ok == undefined) {
          this.response = res.error.message;
        }
      }).catch((error) => {
        this.response = "No connection with API";
      });
    },
    gameAttackAPICall() {
      const gameAttackRequest = {attack_ID: this.playerOrientation}
      fetch("https://balandrau.salle.url.edu/i3/players", {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(gameAttackRequest)
      }).then((response) => {
        if (response.ok) {
          alert("Attacked");
          this.response = "Attacked!";
          return response;
        }

        return response.json();
      }).then((res) => {
        if (res.ok == undefined) {
          this.response = res.error.message;
        }
      }).catch((error) => {
        this.response = "No connection with API";
      });
    }
  }

}


</script>


<template>
  <!-- formatting the background -->
  <div class="game-arena-container flex flex-col justify-center items-center min-h-screen">
    <!-- aligning page content vertically -->
    <div class="flex flex-col sm:flex-row justify-center items-center w-fit">
      <!-- Image container -->
      <section class="flex-grow sm:flex sm:flex-row items-center p-5 bg-none dark:bg-none">
        <img src="src/assets/photos/arena_template.png" class="h-auto sm:h-75 mx-auto" alt="new arena"/>
      </section>
      <!-- Player info sections -->
      <section
          class="flex flex-row sm:flex-col justify-around items-center h-full rounded-lg bg-white dark:bg-gray-900 m-2 w-screen sm:w-fit">
        <!-- Player 1 Section -->
        <section class="p-2 flex-1">
          <h2 class="text-center">Player 1</h2>
          <img src="src/assets/photos/rick.png" class="object-cover h-14 w-14 sm:h-24 sm:w-24 mx-auto" alt="Player 1"/>
          <div class="w-full mt-1 bg-gray-200 rounded-full dark:bg-gray-700">
            <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                 style="width: 30%"> 30%
            </div>
          </div>
        </section>
        <!-- Player 2 Section -->
        <section class="px-2 flex-1">
          <h2 class="text-center">Player 2</h2>
          <img src="src/assets/photos/kitty.jpeg" class="object-cover h-14 w-14 sm:h-24 sm:w-24 mx-auto"
               alt="Player 2"/>
          <div class="w-full mt-1 bg-gray-200 rounded-full dark:bg-gray-700">
            <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                 style="width: 95%"> 95%
            </div>
          </div>
        </section>
        <!-- ViewLogs Button -->
        <button
            class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-2 m-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            v-on:click="viewGameLogAPICall">Game Log
        </button>

      </section>
    </div>
    <!-- End Game Button -->
    <button
        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm p-2 m-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        v-on:click="leaveGameAPICall" @click="navigateTo('ArenaManage')">End Game
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
  background-position: center center;
  background-attachment: fixed;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-content: center;
}

</style>