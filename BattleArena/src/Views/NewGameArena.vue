<script setup>

import Api from "../service/Api.js";

</script>

<script>
import Api from "../service/Api.js";

export default {
  props: {
    arenaGridSize: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {
      arenaGridCells: [],
      gameID: "",
      size: 0,
      response: "",
      numberOfAttacks: 0,
      playerHP: 0
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
                  return {row: row, column: column, class: "ex"}
                })
    )
  },
  methods: {
    navigateTo(page) {
      this.$router.push(`/${page}`);
    },
    setHP(HP) {
      this.playerHP = HP;
    },
    setSize(sizeg) {
      this.arenaGridSize = sizeg;
    },
    createNewArena() {
      Api.newArenaAPICall(this.gameID, this.size, this.playerHP).then((response) => {
        if (response.ok) {
          alert("Arena Entered");
          this.response = "Arena Entered!";
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
      <section class="parent">
        <div v-for="cell in computedArenaGridCells" class="arena-grid-cell" :class="cell.class"
             :data-grid-row="cell.row"
             :data-grid-column="cell.column">
          {{ cell.class }}

        </div>

      </section>
      <!-- formatting the right portion of the screen with a box nicely formatted for user visuals  -->
      <section class="flex flex-col justify-around rounded-lg bg-white dark:bg-gray-900">
        <!-- Centering the right portion of the screen  -->
        <section class="p-4 flex flex-col">
          <!-- centering the title of options section, giving the user options to pre load their arena -->
          <h2 class="text-center">Pre-Load:</h2>
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


          <label for="hpPlay">Player HP: </label>
          <select name="hpPlay" id="hpPlay">
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
              v-on:click="createNewArena" @click="navigateTo('GameArena')">
            Apply Filter(s)
          </button>
        </section>
      </section>
    </section>
    <button
        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 m-2"
        v-on:click="createNewArena" @click="navigateTo('GameArena')">Create Arena
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