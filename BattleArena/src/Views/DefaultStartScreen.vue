<script setup>

</script>

<template>

  <!--setting background and organizing page layout -->
  <div class="default-start-container flex flex-col items-center">
    <!--setting table formatting -->
    <table class="guy bg-white dark:bg-gray-900">
      <!--setting header of the table -->
      <caption
          class="p-5 text-lg font-semibold text-center text-gray-900 bg-white dark:text-white dark:bg-gray-800">
        Welcome to the Website!
        <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400"> Below displays where the menu options are
          located and what purpose they serve.<br> Note: The buttons in the table are not clickable</p>
      </caption>
      <!--setting size of the table -->
      <colgroup>
        <col class="column1">
        <col class="column2">
        <col class="column3">
        <col class="column4">
        <col class="column5">
        <col class="column6">
      </colgroup>
      <thead>
      <tr>
        <th>Button</th><!--Button being described -->
        <th>Location</th><!--Where the button is located-->
        <th>Description</th><!--Descriptio = button functionality -->
      </tr>
      </thead>
      <tbody>
      <tr>
        <!--Top of Page Button -->
        <td>
          <button class="flex flex-row items-center"><img src="src/assets/photos/icon.jpg" class="h-6 m-1" alt="Logo"/>Battle
            Arena
          </button>
        </td>
        <td>Top Middle of Page</td>
        <td>Takes the user to the sign in screen</td>
      </tr>
      <!--profile -->
      <tr>
        <td>
          <button>Profile</button>
        </td>
        <td>Bottom Left</td>
        <td>Takes the user to their profile</td>
      </tr>
      <tr>
        <!--shop-->
        <td>
          <button>Shop</button>
        </td>
        <td>Bottom Middle Left</td>
        <td>The shop is where the user can can purchase attacks</td>
      </tr>
      <!--Top of Page Button -->
      <tr>
        <td>
          <button>Arena Manager</button>
        </td>
        <td>Bottom Middle Right</td>
        <td>The user will see the Arena Rankings/Arena Creation Menu</td>
      </tr>
      <tr>
        <td>
          <button>Player Rankings</button>
        </td>
        <td>Bottom Right</td>
        <td>Shows the User the Rankings of the Players</td>
      </tr>
      </tbody>
    </table>

  </div>

</template>


<!--Here i format the container of the ppage for the background and the content aligned to hte middle
  also i specifically format the buttons on this page to have the best contrast for the background
  this is along with the formatting of the table
-->

<style scoped>

.default-start-container {
  background-image: url("src/assets/photos/home_pic.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-content: center;
}

button {
  border-style: solid;
  border-color: #888888;
  border-width: 0.1rem;
  border-radius: 0.2rem;
  background-color: cornflowerblue;
  color: black;
  text-transform: uppercase;
}

button:hover {
  background: azure;
}

table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
  padding: 10px;
}

table.guy {

  margin-left: auto;
  margin-right: auto;

}

table.guy td {
  text-align: center;
  margin: 12px 12px 12px 12px;
}

</style>