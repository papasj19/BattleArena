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
      playerTurn: "player1",
      player1Location: "",
      player1Orientation: "",
      player2Location: "",
      player2Orientation: "",
      gameID: "",
      mode: ""
    }
  },
  methods: {
    playerMovementAPICall() {
      const playerMovementRequest = {movement: this.movement}
      fetch("https://balandrau.salle.url.edu/i3/arenas/move", {
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
      if (this.playerTurn === "player1") {
        if (this.mode === "move") {
          console.log(this.player1Location)
          const x = document.getElementById(idPassed)
          if (x.backgroundColor === '#1a1a1a') {
            x.backgroundColor = 'aquamarine';
          }

          const y = document.getElementById(this.player1Location)

          if (y.backgroundColor === 'aquamarine') {
            y.backgroundColor = '#1a1a1a';
          }
          this.player1Location = idPassed

        } else {
          if (this.mode === "attack") {

          } else {
            if (this.mode === "orientation") {

            } else {
              console.log("please select a button type on the left of the screen")
            }
          }
        }
        this.playerTurn = "player2"
      } else {
        if (this.playerTurn === "player2") {
          if (this.mode === "move") {
            this.player2Location = location
            console.log(this.player2Location)


          } else {
            if (this.mode === "attack") {

            } else {
              if (this.mode === "orientation") {

              } else {
                console.log("please select a button type on the left of the screen")
              }
            }
          }

        }
        this.playerTurn = "player1"
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
      <section class="flex-grow sm:flex sm:flex-row items-center p-5 bg-none dark:bg-none">

        <div class="parent">
          <button class="div1" id="cell1" v-on:dblclick="cellClicked($event, 'one',this.id)">fuck</button>
          <div class="div2" v-on:dblclick="cellClicked($event, 'two')">2</div>
          <div class="div3" v-on:dblclick="cellClicked($event, 'three')">3</div>
          <div class="div4" v-on:dblclick="cellClicked($event, 'four')">4</div>
          <div class="div5" v-on:dblclick="cellClicked($event, 'five')">5</div>
          <div class="div6" v-on:dblclick="cellClicked($event, 'six')">7</div>
          <div class="div7">6</div>
          <div class="div8">8</div>
          <div class="div9">9</div>
          <div class="div10">10</div>
          <div class="div11">11</div>
          <div class="div12">12</div>
          <div class="div13">13</div>
          <div class="div14">14</div>
          <div class="div15">15</div>
          <div class="div16">16</div>
          <div class="div17">17</div>
          <div class="div18">18</div>
          <div class="div19">19</div>
          <div class="div20">20</div>
          <div class="div21">21</div>
          <div class="div22">22</div>
          <div class="div23">23</div>
          <div class="div24">24</div>
          <div class="div25">25</div>
          <div class="div26">26</div>
          <div class="div27">27</div>
          <div class="div28">28</div>
          <div class="div29">29</div>
          <div class="div30">30</div>
          <div class="div37">31</div>
          <div class="div32">32</div>
          <div class="div33">33</div>
          <div class="div34">34</div>
          <div class="div35">35</div>
          <div class="div36">36</div>
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
  grid-template-columns: 50px 50px 50px 50px 50px 50px;
  grid-template-rows: 50px 50px 50px 50px 50px 50px;
  grid-column-gap: 2px;
  grid-row-gap: 2px;
}

.div1 {
  grid-area: 1 / 1 / 2 / 2;
  background-color: #1a1a1a;
}

.div1:hover {
  background-color: blueviolet;
}

.div2 {
  grid-area: 1 / 2 / 2 / 3;
  background-color: #1a1a1a;
}

.div3 {
  grid-area: 1 / 3 / 2 / 4;
  background-color: #1a1a1a;
}

.div4 {
  grid-area: 1 / 4 / 2 / 5;
  background-color: #1a1a1a;
}

.div5 {
  grid-area: 1 / 5 / 2 / 6;
  background-color: #1a1a1a;
}

.div6 {
  grid-area: 2 / 2 / 3 / 3;
  background-color: #1a1a1a;
}

.div7 {
  grid-area: 2 / 1 / 3 / 2;
  background-color: #1a1a1a;
}

.div8 {
  grid-area: 2 / 3 / 3 / 4;
  background-color: #1a1a1a;
}

.div9 {
  grid-area: 2 / 4 / 3 / 5;
  background-color: #1a1a1a;
}

.div10 {
  grid-area: 2 / 5 / 3 / 6;
  background-color: #1a1a1a;
}

.div11 {
  grid-area: 3 / 1 / 4 / 2;
  background-color: #1a1a1a;
}

.div12 {
  grid-area: 3 / 2 / 4 / 3;
  background-color: #1a1a1a;
}

.div13 {
  grid-area: 3 / 3 / 4 / 4;
  background-color: aquamarine;
}

.div14 {
  grid-area: 3 / 4 / 4 / 5;
  background-color: #1a1a1a;
}

.div15 {
  grid-area: 3 / 5 / 4 / 6;
  background-color: #1a1a1a;
}

.div16 {
  grid-area: 4 / 1 / 5 / 2;
  background-color: #1a1a1a;
}

.div17 {
  grid-area: 4 / 2 / 5 / 3;
  background-color: #1a1a1a;
}

.div18 {
  grid-area: 4 / 3 / 5 / 4;
  background-color: #1a1a1a;
}

.div19 {
  grid-area: 4 / 4 / 5 / 5;
  background-color: #1a1a1a;
}

.div20 {
  grid-area: 4 / 5 / 5 / 6;
  background-color: #1a1a1a;
}

.div21 {
  grid-area: 5 / 1 / 6 / 2;
  background-color: #1a1a1a;
}

.div22 {
  grid-area: 5 / 2 / 6 / 3;
  background-color: #1a1a1a;
}

.div23 {
  grid-area: 5 / 3 / 6 / 4;
  background-color: #1a1a1a;
}

.div24 {
  grid-area: 5 / 4 / 6 / 5;
  background-color: #1a1a1a;
}

.div25 {
  grid-area: 5 / 5 / 6 / 6;
  background-color: #1a1a1a;
}

.div26 {
  grid-area: 6 / 1 / 7 / 2;
  background-color: #1a1a1a;
}

.div27 {
  grid-area: 6 / 2 / 7 / 3;
  background-color: #1a1a1a;
}

.div28 {
  grid-area: 6 / 3 / 7 / 4;
  background-color: #1a1a1a;
}

.div29 {
  grid-area: 6 / 4 / 7 / 5;
  background-color: #1a1a1a;
}

.div30 {
  grid-area: 6 / 5 / 7 / 6;
  background-color: #1a1a1a;
}

.div31 {
  grid-area: 6 / 6 / 7 / 7;
  background-color: #1a1a1a;
}


.div32 {
  grid-area: 6 / 6 / 7 / 7;
  background-color: #1a1a1a;
}

.div33 {
  grid-area: 5 / 6 / 6 / 7;
  background-color: #1a1a1a;
}

.div34 {
  grid-area: 4 / 6 / 5 / 7;
  background-color: #1a1a1a;
}

.div35 {
  grid-area: 3 / 6 / 4 / 7;
  background-color: #1a1a1a;
}

.div36 {
  grid-area: 2 / 6 / 3 / 7;
  background-color: #1a1a1a;
}

.div37 {
  grid-area: 1 / 6 / 2 / 7;
  background-color: #1a1a1a;

}

.div1:hover {

}

.div2:hover {
  background-color: blueviolet;
}

.div3:hover {
  background-color: blueviolet;
}

.div4:hover {
  background-color: blueviolet;
}

.div5:hover {
  background-color: blueviolet;
}

.div6:hover {
  background-color: blueviolet;
}

.div7:hover {
  background-color: blueviolet;
}

.div8:hover {
  background-color: blueviolet;
}

.div9:hover {
  background-color: blueviolet;
}

.div10:hover {
  background-color: blueviolet;
}

.div11:hover {
  background-color: blueviolet;
}

.div12:hover {
  background-color: blueviolet;
}

.div13:hover {
  background-color: blueviolet;
}

.div14:hover {
  background-color: blueviolet;
}

.div15:hover {
  background-color: blueviolet;
}

.div16:hover {
  background-color: blueviolet;
}

.div17:hover {
  background-color: blueviolet;
}

.div18:hover {
  background-color: blueviolet;
}

.div19:hover {
  background-color: blueviolet;
}

.div20:hover {
  background-color: blueviolet;
}

.div21:hover {
  background-color: blueviolet;
}

.div22:hover {
  background-color: blueviolet;
}

.div23:hover {
  background-color: blueviolet;
}

.div24:hover {
  background-color: blueviolet;
}

.div25:hover {
  background-color: blueviolet;
}

.div26:hover {
  background-color: blueviolet;
}

.div27:hover {
  background-color: blueviolet;
}

.div28:hover {
  background-color: blueviolet;
}

.div29:hover {
  background-color: blueviolet;
}

.div30:hover {
  background-color: blueviolet;
}

.div32:hover {
  background-color: blueviolet;
}

.div33:hover {
  background-color: blueviolet;
}

.div34:hover {
  background-color: blueviolet;
}

.div35:hover {
  background-color: blueviolet;
}

.div36:hover {
  background-color: blueviolet;
}

.div37:hover {
  background-color: blueviolet;
}


</style>