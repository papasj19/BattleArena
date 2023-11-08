<template>

  <main class="flex justify-center items-center flex-col sm:flex-row h-screen" style="background-image: url('Photos/tatami-room.jpg'); background-size: cover;">
      <div class="p-4">
        <div class="text-center">
          <img class="w-20 h-20 rounded" src="/Photos/SJ_cat.jpeg" alt="Large avatar">
          <div class="text-left font-medium dark:text-white">
            <div>Garfield(Name)</div>
          </div>
          <p class="text-left text-white-500 light:text-white-400">
            Based cat. Basic INFO
          </p>
        </div>
  
        <div class="p-4 text-left">
          <div class="profile screen">
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Equipped Attacks
                    </th>
                    <th scope="col" class="px-6 py-3">
                      <span class="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(attack, index) in attacks" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td scope="row" class="px-6 py-4">
                      <input v-model="attack.name" class="w-full border border-gray-300 p-1">
                    </td>
                    <td class="px-6 py-4 text-right">
                      <button @click="editAttack(index)" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</button>
                      <button @click="deleteAttack(index)" class="font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="text-center mt-4">
              <button @click="addNewAttack" class="bg-green-500 text-white font-medium px-3 py-1 rounded hover:bg-green-600">Add Attack</button>
            </div>
          </div>
        </div>
      </div>
  
      <div class="p-4">
        <div class="profile screen">
          <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Backpacked Attacks
                  </th>
                  <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Light Attack
                  </th>
                  <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  </td>
                </tr>
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Heavy Attack
                  </th>
                  <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  </td>
                </tr>
                <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover-bg-gray-600">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Special Attack
                  </th>
                  <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="text-center mt-4">
            <button @click="deleteAccount" class="bg-red-500 text-white font-medium px-3 py-1 rounded hover:bg-red-600">Delete Account</button>
          </div>
        </div>
      </div>
    </main>
  </template>
  <script>
  
  export default {
    data() {
      return {
        attacks: [
          { name: 'Light Attack' },
          { name: 'Heavy Attack' },
          { name: 'Special Attack' },
        ],
      };
      },
      methods: {
        editAttack(index) {
          // Handle editing logic, e.g., send data to a server or store changes
        },
        deleteAttack(index) {
          this.attacks.splice(index, 1);
        },
        addNewAttack() {
          this.attacks.push({ name: '' });
        },
        deleteAccount() {
          // Handle account deletion logic here
        },
      },
    };
  </script>