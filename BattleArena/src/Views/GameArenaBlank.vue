<script setup>

import {useRouter} from 'vue-router';
import Api from "../service/Api.js";
import currentUserToken from "../App.vue";
import list from "/src/components/list.vue";

const router = useRouter();

const navigateTo = (page) => {
  router.push(`/${page}`);
};

</script>

<script>

import Api from "../service/Api.js";
import currentUserToken from "../App.vue";

function attackToCell(attack) {
  let cell = []
  cell.push(attack.attack_ID)
  cell.push(attack.power)
  cell.push(attack.equipped)
  return cell
}

function attacksToCells(attacks) {
  return attacks.map(attackToCell)
}

export default {
  props: {
    arenaGridSize: {
      type: Number,
      default: 4
    }
  },
  data() {
    return {
      arenaGridCells: [],
      movement: "",
      gameLog: "",
      player1token: currentUserToken,
      player1LocationRow: 2,
      player1LocationCol: 2,
      player1Orientation: "EST",
      player1Health: 15,
      player1Attacks: [],
      player1FutureOrientation: "",
      player1Damage: 0,
      player1class: "uparrow",
      player2LocationRow: 1,
      player2LocationCol: 1,
      player2Orientation: "NORD",
      player2Health: 15,
      gameID: "",
      mode: "",
      response: ""
    }
  },
  computed: {
    computedArenaGridCells() {
      console.log(this.arenaGridCells)
      return this.arenaGridCells.flat();
    }
  },
  mounted() {
    this.grabGameInfo()
    console.log(this.arenaGridSize)
    this.arenaGridCells = Array(this.arenaGridSize).fill(0).map(
        (v1, row) =>
            Array(this.arenaGridSize).fill(0)
                .map((v2, column) => {
                  console.log(this.arenaGridSize)
                  return {row: row, column: column, class: "desert"}
                })
    )
    this.getPlayerAttacks()
    const rndInt1 = Math.floor(Math.random() * 4) + 1
    const rndInt2 = Math.floor(Math.random() * 4) + 1
    this.player1LocationRow = rndInt1
    this.player1LocationCol = rndInt2
    this.arenaGridCells[this.player1LocationRow][this.player1LocationCol].class = this.player1Orientation

  },
  methods: {
    cellTouched(event) {
      this.player1Damage = event.target.innerText;
    },
    grabGameInfo() {
      Api.currentGameAPICALL(localStorage.getItem("currentGameID"), localStorage.getItem("currentUserToken")).then((response) => {
        if (response.ok === undefined) {
          alert("Wrong Request");
        }
        return response.json();
      }).then((data) => {
        this.player2LocationRow = data.players_games[0].y_game;
        this.player2LocationCol = data.players_games[0].x_game;
        this.arenaGridSize = data.size;
      }).catch((error) => {
        alert("No connection with the API loading game");
      });
    },
    attackInGame() {
      Api.gameAttackAPICall().then((response) => {
        if (response.ok) {
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
    changeOrientation() {
      Api.changePlayerOrientationAPICall(this.player1FutureOrientation).then((response) => {
        if (response.ok) {
          alert("Changed");
          this.response = "Changed";
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
    getPlayerAttacks() {
      Api.getPlayerAttackAPICall(localStorage.getItem("currentUserToken")).then((response) => {
        if (response.ok === undefined) {
          alert("Wrong Request");
        }
        return response.json();
      }).then((data) => {
        console.log(data);
        this.player1Attacks = attacksToCells(data);
      }).catch((error) => {
        alert("Seems to be an error with attacks loading");
      });
    },
    movePlayer(movement) {
      Api.playerMovementAPICall(movement).then((response) => {
        if (response.ok) {
          alert("Moved");
          this.response = "Moved";
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
    leaveGame() {
      Api.leaveGameAPICall(this.gameID).then((response) => {
        if (response.ok) {
          alert("Game Left");
          this.response = "Game Left!";
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
    viewGameLogs() {

      alert(this.gameLog);
      Api.viewGameLogAPICall(this.gameID).then((response) => {
        if (response.ok) {
          alert("Game Log");
          this.response = response.description;
          alert(this.response);
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
    touchedQButton() {
      alert("To move, click the move button then double click on the cell you want to move to. \nTo attack, click on the attack button and then double click on the cell you want to attack. \nTo change orientation, click on the corresponding arrow button with the direction you want to face.\n To move Player 2 press fetch game info.");
    },
    touchedMoveButton() {
      this.mode = "move";
    },
    touchedAttackButton() {
      this.mode = "attack";
    },
    touchedOrientationButton() {
    },
    setFutureOrientation(orientation) {
      if (orientation === this.player1Orientation) {
        alert("You are already facing that direction")
      } else {
        this.player1FutureOrientation = orientation
        this.changeOrientation(this.player1FutureOrientation)
        let orient = "\nPlayer 1 changed orientation from " + this.player1Orientation + " to " + this.player1FutureOrientation + "\n"
        this.gameLog += orient

        this.player1Orientation = this.player1FutureOrientation
        this.arenaGridCells[this.player1LocationRow][this.player1LocationCol].class = this.player1Orientation
      }
    },
    checkOrientationBounds(column, row) {
      if (this.player1Orientation === "OEST") {
        return column > this.player1LocationCol;
      }
      if (this.player1Orientation === "EST") {
        return column < this.player1LocationCol;
      }
      if (this.player1Orientation === "NORD") {
        return row > this.player1LocationRow;
      }
      if (this.player1Orientation === "SUD") {
        return row < this.player1LocationRow;
      }
    },
    cellClicked(event) {
      console.log(event.target)
      const element = event.target
      let row = element.getAttribute("data-grid-row")
      let column = element.getAttribute("data-grid-column")
      if (this.mode === "attack") {

        if (this.checkOrientationBounds(column, row)) {
          alert("You can't attack that cell from your current orientation")
        } else {
          console.log(this.player2LocationCol + " " + this.player2LocationRow)
          if (this.arenaGridCells[row][column].class === "enemy") {
            this.attackInGame()
            let attackLog = "\nPlayer 1 attacked from (" + this.player1LocationRow + "," + this.player1LocationCol + ") to (" + row + "," + column + ")\n"
            this.gameLog += attackLog
            if (this.player2Health <= 10) {
              this.player2Health = 0
              this.arenaGridCells[row][column].class = "noHealth"

              let slain = "\nPlayer 1 defeated Player 2\n"
              this.gameLog += slain
            } else {
              this.player2Health = this.player2Health - 10
              this.arenaGridCells[row][column].class = "nuke"
              this.player2LocationCol = 5;
              this.player2LocationRow = 5;
              this.arenaGridCells[5][5].class = "enemy"
            }
          } else {
            let movement = "\nPlayer 1 missed attack on (" + row + "," + column + ")\n"
            this.gameLog += movement
            this.arenaGridCells[row][column].class = "miss"
          }
        }
      } else {
        if (this.mode === "move") {
          let movement = "\nPlayer 1 moved from (" + this.player1LocationRow + "," + this.player1LocationCol + ") to (" + row + "," + column + ")\n"
          this.gameLog += movement
          this.movePlayer(movement)
          this.arenaGridCells[row][column].class = this.player1Orientation
          this.arenaGridCells[this.player1LocationRow][this.player1LocationCol].class = "desert"
          this.player1LocationRow = row
          this.player1LocationCol = column
        }
      }
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
        <list
            title="Your Player Attacks"
            subtitle=" "
            :columns="['Attack ID', 'Power', 'Available']"
            :content="player1Attacks"
            @:dblclick="cellTouched($event)"
        />

      </section>


      <section class="flex flex-col">
        <button
            class="focus:outline-none text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm p-2 m-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
            v-on:click="touchedAttackButton">Attack
        </button>
        <button
            class="focus:outline-none text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm p-2 m-2 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
            v-on:click="touchedMoveButton">Move
        </button>
        <button type="button" class="call-to-action1" value="NORD" style="white-space:nowrap"
                v-on:click="setFutureOrientation('NORD')">N
          <span class="little-arrow"
                style="-ms-transform: rotate(180deg);transform: rotate(180deg); /* Chrome, Safari, Opera */; color: white; font-size:14px; display: inline-block">&#8711</span>
        </button>
        <div class="flex flex row">
          <button type="button" v-on:click="setFutureOrientation('OEST')" class="call-to-action1" value="OEST"
                  style="white-space:nowrap">
            <span class="little-arrow"
                  style="-ms-transform: rotate(90deg);transform: rotate(90deg); /* Chrome, Safari, Opera */; color: white; font-size:14px; display: inline-block">&#8711</span>
            W
          </button>
          <button type="button" v-on:click="setFutureOrientation('EST')" class="call-to-action1" value="EST"
                  style="white-space:nowrap">E
            <span class="little-arrow"
                  style="-ms-transform: rotate(270deg);transform: rotate(270deg); /* Chrome, Safari, Opera */; color: white; font-size:14px; display: inline-block">&#8711</span>
          </button>
        </div>
        <button type="button" v-on:click="setFutureOrientation('SUD')" class="call-to-action1" value="SUD"
                style="white-space:nowrap">S
          <span class="little-arrow"
                style="-ms-transform: rotate(0deg);transform: rotate(0deg); /* Chrome, Safari, Opera */; color: white; font-size:14px; display: inline-block">&#8711</span>
        </button>

        <button
            class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm p-2 m-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            v-on:click="touchedQButton">What To Do?
        </button>

        <button
            class="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm p-2 m-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
            v-on:click="grabGameInfo">Fetch Game Info
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
          class="flex flex-row sm:flex-col justify-around items-center rounded-lg bg-white dark:bg-gray-900 m-2 w-screen sm:w-fit">
        <!-- Player 1 Section -->
        <section class="p-2 flex-1">
          <h2 class="text-center">Player 1</h2>
          <img src="src/assets/photos/kitty.jpeg" class="object-cover h-14 w-14 sm:h-24 sm:w-24 mx-auto"
               alt="Player 1"/>
          <div class="w-full mt-1 bg-gray-200 rounded-full dark:bg-gray-700">
            <div class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                 :style="{ width: player1Health + '%' }"> {{ this.player1Health }}
            </div>
          </div>
        </section>
        <!-- ViewLogs Button -->
        <button
            class="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm p-2 m-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            v-on:click="viewGameLogs">Game Log
        </button>

      </section>
    </div>
    <!-- End Game Button -->
    <button
        class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm p-2 m-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        v-on:click="leaveGame" @click="navigateTo('ArenaManage')">End Game
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
  background-attachment: fixed;

}

.arena-grid-cell {

}

.desert {
  background-color: grey;
}

.nuke {
  background-color: coral;
}

.noHealth {
  background-color: navajowhite;
}

.miss {
  background-color: cornflowerblue;
}

.pl {

}

.OEST {
  height: 100%;
  width: 100%;
  background: url("src/assets/photos/newarrow.jpg");
  background-size: cover;
  background-position: center center;
}

.EST {
  height: 100%;
  width: 100%;
  background: url("src/assets/photos/rightarrow.jpg");
  background-size: cover;
  background-position: center center;
}

.NORD {
  height: 100%;
  width: 100%;
  background: url("src/assets/photos/uparrow.jpg");
  background-size: cover;
  background-position: center center;
}

.SUD {
  height: 100%;
  width: 100%;
  background: url("src/assets/photos/downarrow.jpg");
  background-size: cover;
  background-position: center center;
}

.enemy {
  background-color: crimson;
}


.arena-grid-cell:hover {
  background-color: blueviolet;
}

</style>