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
      currentGameId: "",
      currentUserToken: ""
    }
  }
}
</script>

<template>
  <!--Top icon-->
  <router-link to="/"
               class="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-center bg-none py-4 px-4">
    <img src="src/assets/photos/icon.jpg" class="h-16 mr-3" alt="Logo"/>
    <span class="self-center text-2xl font-semibold whitespace-nowrap text-white dark:text-white">
      BattleArena
    </span>
  </router-link>


  <!-- Bottom menu -->
  <nav class="fixed inset-x-0 bottom-0 bg-transparent">
    <div class="container mx-auto px-4">
      <ul class="grid grid-cols-2 gap-4 py-4 sm:grid-cols-4">
        <li>
          <button class="focus:outline-none shadow-md shadow-slate-700 py-2 px-4 rounded-md w-full"
                  @click="navigateTo('Profile')">
            Profile
          </button>
        </li>
        <li>
          <button class="focus:outline-none shadow-md shadow-slate-700 py-2 px-4 rounded-md w-full"
                  @click="navigateTo('BuySell')">
            Shop
          </button>
        </li>
        <li>
          <button class="focus:outline-none shadow-md shadow-slate-700 py-2 px-4 rounded-md w-full"
                  @click="navigateTo('ArenaManage')">
            Arena Manager
          </button>
        </li>
        <li>
          <button class="focus:outline-none shadow-md shadow-slate-700 py-2 px-4 rounded-md w-full"
                  @click="navigateTo('PlayerRankings')">
            Player Rankings
          </button>
        </li>
      </ul>
    </div>
  </nav>

  <router-view>

  </router-view>

</template>


