<script setup>
import {useRouter} from 'vue-router';

const router = useRouter();

const navigateTo = (page) => {
  router.push(`/${page}`);
};
</script>

<template>

  <router-link to="/Home"
               class="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-center bg-none py-4 px-4">
    <img src="/Photos/icon.jpg" class="h-16 mr-3" alt="Logo"/>
    <span class="self-center text-2xl font-semibold whitespace-nowrap text-black dark:text-white">
      BattleArena
    </span>
  </router-link>

  <nav class="fixed inset-x-0 bottom-0 bg-none">
    <div class="container mx-auto px-4">
      <ul class="flex justify-around items-center py-4">
        <li>
          <button class="focus:outline-none shadow-md shadow-slate-700" @click="navigateTo('Profile')">
            Profile
          </button>
        </li>
        <li>
          <button class="focus:outline-none shadow-md shadow-slate-700" @click="navigateTo('BuySell')">
            Shop
          </button>
        </li>
        <li>
          <button class="focus:outline-none shadow-md shadow-slate-700" @click="navigateTo('ArenaManage')">
            Arena Manager
          </button>
        </li>
        <li>
          <button class="focus:outline-none shadow-md shadow-slate-700" @click="navigateTo('PlayerRankings')">
            Player Rankings
          </button>
        </li>
      </ul>
    </div>
  </nav>

  <router-view>

  </router-view>

</template>


