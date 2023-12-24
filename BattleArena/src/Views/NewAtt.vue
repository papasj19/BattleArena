<script setup>

import {useRouter} from 'vue-router';

const router = useRouter();

const navigateTo = (page) => {
  router.push(`/${page}`);
};

</script>

<script>

import Api from "../service/Api.js";

export default {
  data() {
    return {
      attackID: "",
      positions: "",
      image: "",
    }
  },
  methods: {
    createNewAttack() {
      Api.newAttackAPICall(this.attackID, this.positions, this.image).then((response) => {
        if (response.ok) {
          alert("Attack Created");
          this.response = "Attack created!";
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
  <!-- Image container -->
  <div class="new-attack-container flex flex-col justify-center items-center min-h-screen">
    <!-- Aligning the page vertically -->
    <section class="flex flex-col sm:flex-row justify-center items-center w-fit">
      <!-- formatting the right portion of the screen with a box nicely formatted for user visuals  -->
      <section class="flex flex-col justify-around rounded-lg bg-white dark:bg-gray-900">
        <!-- Centering the right portion of the screen  -->
        <section class="p-4 flex flex-col">
          <!-- centering the title of options section, giving the user options to pre load their arena -->
          <h2 class="text-center">Forge your attack</h2>

          <form>
            <div class="item">
              <label class="idattack" for="attackID">Attack Name: </label>
              <input class="inputBar" type="text" placeholder="name" name="attackID" v-model="attackID">
            </div>
            <div class="item">
              <label class="pos" for="positions">Attack Orientation: </label>
              <input class="inputBar2" type="text" placeholder="direction" name="positions" v-model="positions">
            </div>
            <div class="item">
              <label class="imgurl" for="img">Attack Image: </label>
              <input class="inputBar" type="text" placeholder="image" name="img" v-model="image">
            </div>
          </form>
        </section>
      </section>
    </section>
    <button
        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 m-2"
        v-on:click="createNewAttack" @click="navigateTo('BuySell')">Create Attack
    </button>
  </div>


</template>


<!-- Attack button -->

<style scoped>


form {
  display: flex;
  flex-direction: column;
}

input {
  margin: 4px;
}

.item {

  display: flex;
  flex-direction: row;
  align-items: center;
}

.inputBar {
  width: 60%;
}


.inputBar2 {
  width: 49%;
}

.new-attack-container {
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
</style>