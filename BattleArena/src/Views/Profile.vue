<template>
  <main class="flex justify-center items-center flex-col sm:flex-row h-screen"
        style="background-image: url('src/assets/photos/tatami-room.jpg'); background-size: cover;">
    <div class="flex flex-col">
      <!-- Profile Information -->
      <div class="p-4">
        <div class="flex items-center space-x-4 bg-white p-2 rounded-lg">
          <img class="w-20 h-20 rounded" :src="playerInfo.img" alt="Large avatar">
          <div class="text-left font-medium text-black">
            <div>{{ playerInfo.player_ID }}</div>
            <p class="text-black-500 light:text-black-400">XP, Level, Coins: {{ playerInfo.info }}</p>
            <!-- Display Player Statistics -->
            <p class="text-black-500 light:text-black-400">Games Played: {{ playerInfo.statistics.games_played }}, Games
              Won: {{ playerInfo.statistics.games_won }}</p>
          </div>
        </div>
      </div>


      <!-- Modify Attacks Table -->
      <div class="p-4 text-left">
        <div class="profile screen">
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">Equip/Unequip Attacks</th>
                <th scope="col" class="px-6 py-3"><span class="sr-only">Actions</span></th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td scope="row" class="px-6 py-4">
                  <input v-model="newAttackID" class="w-full border border-gray-300 p-1" placeholder="Attack ID">
                </td>
                <td class="px-6 py-4 text-right">
                  <button @click="equipAttack" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                    Equip
                  </button>
                  <button @click="unequipAttack" class="font-medium text-red-600 dark:text-red-500 hover:underline">
                    Unequip
                  </button>
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <section class="flex flex-col">
        <list
            title="Your Player Attacks"
            subtitle=" "
            :columns="['Attack ID', 'Power', 'Positions', 'Equipped']"
            :content="attacksFromAPI"
        />

      </section>


      <div class="text-center mt-4">
        <button
            class="bg-red-500 text-white font-medium px-3 py-1 rounded hover:bg-red-600"
            @click="confirmDeleteAccount"
        >
          Delete Account
        </button>
      </div>
    </div>


    <!-- Backpacked Attacks Table -->
    <div class="p-4">
      <div class="profile screen">


        <div class="flex flex-col items-center relative overflow-x-auto shadow-md sm:rounded-lg">
          <button
              class="focus:outline-none m-2 max-w-64 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 w-full sm:w-auto"
              @click="grabInfo">Load Info
          </button>


        </div>
        <section class="flex flex-col">
          <list
              title="Games"
              subtitle="Here is the list of the Arena\'s youve played."
              :columns="['Game ID', 'Matrix Size', 'Date Created']"
              :content="gamesFromAPI"
              @:dblclick="cellClicked($event)"
          />

        </section>

      </div>
    </div>

  </main>
</template>

<script>

import list from "/src/components/list.vue";
import {ref, onMounted} from 'vue';
import {useRouter} from 'vue-router';
import Api from "../service/Api.js";
import currentUserToken from "../App.vue";
import List from "../components/list.vue";

function attackToCell(attack) {
  let cell = []
  cell.push(attack.attack_ID)
  cell.push(attack.power)
  cell.push(attack.positions)
  cell.push(attack.equipped)
  return cell
}

function attacksToCells(attacks) {
  return attacks.map(attackToCell)
}

function arenaToCell(arena) {
  let cell = []
  cell.push(arena.game_ID)
  cell.push(arena.size)
  cell.push(arena.creation_date)

  return cell
}

function arenasToCells(arenas) {
  return arenas.map(arenaToCell)
}


export default {
  components: {List},
  data() {
    return {
      newAttackID: '', // To store the new attack ID input
      attacksFromAPI: [], // to store attacks from the API
      gamesFromAPI: [], // to store games from the API
      playerInfo: {
        player_ID: '',
        img: '',
        info: '',
        statistics: {
          games_played: 0,
          games_won: 0,
        },
      },
    };
  },

  methods: {
    nextPage() {
      this.$router.push('/MoreProfile');
    },


    grabInfo() {
      this.getPlayerInfo();
      this.getMorePlayerInfo();
      this.getPlayerAttacks();
      this.getFinishedArenas();
    },

    getFinishedArenas() {
      Api.getFinishedArenasPlayerAPICall(localStorage.getItem("currentUserToken")).then((response) => {
        if (response.ok === undefined) {
          alert("Wrong Request");
        }
        return response.json();
      }).then((data) => {
        console.log(data);
        this.gamesFromAPI = arenasToCells(data);
        console.log(this.arenas)
      }).catch((error) => {
        alert("No connection with the API");
        this.response = "No connection with API";
      });
    },
    getMorePlayerInfo() {
      Api.getSinglePlayerAPICall(localStorage.getItem("currentUserToken"), localStorage.getItem("currentUserID")).then((response) => {
        if (response.ok === undefined) {
          alert("Wrong Request");
        }
        return response.json();
      }).then((data) => {
        console.log(data);
        this.playerInfo.player_ID = data.player_ID;
        this.playerInfo.img = data.img;
        this.playerInfo.info = data.xp + ", " + data.level + ", " + data.coins;
      }).catch((error) => {
        alert("No connection with the API single player");
      });
    },


    getPlayerInfo() {
      Api.getPlayerInfoAPICall(localStorage.getItem("currentUserToken")).then((response) => {
        if (response.ok === undefined) {
          alert("Wrong Request");
        }
        return response.json();
      }).then((data) => {
        console.log(data);
        this.playerInfo.statistics.games_played = data.games_played;
        this.playerInfo.statistics.games_won = data.games_won;
      }).catch((error) => {
        alert("No connection with the API lol");
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
        this.attacksFromAPI = attacksToCells(data);
      }).catch((error) => {
        alert("No connection with the API lol");
      });
    },


    equipAttack() {
      Api.equipAttackAPICall(this.newAttackID, localStorage.getItem("currentUserToken")).then((response) => {
        if (response.ok) {
          alert("Equipped!");
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
    unequipAttack() {
      Api.unequipAttackAPICall(this.newAttackID, localStorage.getItem("currentUserToken")).then((response) => {
        if (response.ok === undefined) {
          alert("Wrong Request");
        }
        return response.json();
      }).then((data) => {
        console.log(data);
        this.newAttackID = "";
      }).catch((error) => {
        alert("No connection with the API");
        this.response = "No connection with API";
      });
    },

    confirmDeleteAccount() {
      const confirmed = window.confirm("Are you sure you want to delete your account?");
      if (confirmed) {
        this.deleteAccountAPICall();
      }
    },

    async deleteAccountAPICall() {
      try {
        const token = currentUserToken;
        const api = new Api();

        const response = await api.deleteAccountAPICall(token);

        if (response.ok) {
          alert("Account Deleted");
          this.playerInfo.response = "Account Deleted!";
          this.$router.push('/logsign');
        } else {
          const errorData = await response.json();
          this.playerInfo.response = errorData.error.message;
        }
      } catch (error) {
        this.playerInfo.response = "No connection with API";
        console.error(error);
      }
    },
  },
  setup() {
    const router = useRouter();
    const playerInfo = ref({
      player_ID: '',
      img: '',
      info: '',
      response: '',
      statistics: {
        games_played: 0,
        games_won: 0,
      },
    });

    onMounted(async () => {
      await viewProfileInfoAPICall(playerInfo);
    });

    return {
      playerInfo,
    };
  },
};
</script>
