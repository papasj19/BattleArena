<script setup>

import {useRouter} from 'vue-router';

const router = useRouter();

const navigateTo = (page) => {
  router.push(`/${page}`);
};

</script>

<script>

export default {
  props: {
    arenaGridSize: {
      type: Number,
      default: 7
    }
  },
  data() {
    return {
      arenaGridCells: [],
      movement: "",
      playerTurn: "player1",
      player1Location: "",
      player1Orientation: "",
      player2Location: "",
      player2Orientation: "",
      gameID: "",
      mode: ""
    }
  },
  computed: {
    computedArenaGridCells() {
      console.log(this.arenaGridCells)
      return this.arenaGridCells.flat();

    }
  },
  mounted() {
    console.log(this.arenaGridSize)

    this.arenaGridCells = Array(this.arenaGridSize).fill(0).map(
        (v1, row) =>
            Array(this.arenaGridSize).fill(0)
                .map((v2, column) => {
                  console.log(this.arenaGridSize)
                  return {row: row, column: column, class: "desert"}
                })
    )
  },
  methods: {

    leaveGameAPICall() {
      const leaveGameRequest = {gameID: this.gameID}
      fetch("https://balandrau.salle.url.edu/i3/arena/{ID}play", {
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
      fetch("https://balandrau.salle.url.edu/i3/arenas/{gameID}/logs", {
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
      fetch("https://balandrau.salle.url.edu/i3/arenas/direction", {
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
      fetch("https://balandrau.salle.url.edu/i3/arenas/attack/{attackID}", {
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
    },
    touchedMoveButton() {
      this.mode = "move";
      console.log("move")
    },
    touchedAttackButton() {
      this.mode = "attack";
    },
    touchedOrientationButton() {
      this.mode = "orientation";
    },
    cellClicked(event, location, idPassed) {
      console.log(event.target)
      const element = event.target
      let row = element.getAttribute("data-grid-row")
      let column = element.getAttribute("data-grid-column")


      console.log(row)
      console.log(column)

      this.arenaGridCells[row][column].class = "nuke"


    }

  }

}


</script>


<template>
  <!-- formatting the background -->
  <div class="game-arena-container flex flex-col justify-center items-center min-h-screen">
    <!-- aligning page content vertically -->
    <div class="flex flex-col sm:flex-row justify-center items-center w-fit">


      <section class="flex flex-col">
        <button
            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm p-2 m-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            v-on:click="touchedAttackButton">Attack
        </button>
        <button
            class="focus:outline-none text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm p-2 m-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
            v-on:click="touchedMoveButton">Move
        </button>
        <button
            class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm p-2 m-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            v-on:click="touchedOrientationButton">Direction
        </button>
      </section>

      <!-- Image container -->
      <section class="parent">
        <div v-for="cell in computedArenaGridCells" class="arena-grid-cell" :class="cell.class"
             :data-grid-row="cell.row"
             :data-grid-column="cell.column"
             @:dblclick="cellClicked($event)">
          {{ cell.class }}


        </div>

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

.parent {
  display: grid;
  grid-template-columns: repeat(v-bind(arenaGridSize), 1fr);
  grid-template-rows: repeat(v-bind(arenaGridSize), 1fr);
  grid-column-gap: 2px;
  grid-row-gap: 2px;
  width: calc(v-bind(arenaGridSize) * 50px);
  height: calc(v-bind(arenaGridSize) * 50px);

}

.arena-grid-cell {
  background-color: #1a1a1a;
}

.desert {
  background-color: yellow;
}

.nuke {
  background-color: red;
}

.arena-grid-cell:hover {
  background-color: blueviolet;
}

</style>