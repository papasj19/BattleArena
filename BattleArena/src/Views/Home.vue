<script setup>

</script>

<template>

  <!--used to set the background and place contents of page in center -->
  <div class="home-container flex flex-col items-center">
    <!--setting color of the table -->
    <table class="bg-white dark:bg-gray-900">
      <!--setting the header of the table -->
      <caption
          class="p-5 text-lg font-semibold text-center text-gray-900 bg-white dark:text-white dark:bg-gray-800">
        Please Sign Up or use your Login!
        <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400"> Before you are able to fully participate
          in the program you must perform one of the two options below. This will allow you as the user to have a
          profile
          with all of your relevant battle information as well as participate in the arenas and secure your own place
          among the player leaderboard! <br> <br> And for our returning veterans, nice to see you again</p>
      </caption>
      <!--preparing table size -->
      <colgroup>
        <col class="column1">
        <col class="column2">
      </colgroup>
      <tbody>
      <tr>
        <!--sign up button -->
        <td>
          <button>Sign Up</button>
        </td>
        <td>Recruits Get Ready Here</td>
      </tr>
      <tr>
        <!--login in button -->
        <td>
          <button>Log In</button>
        </td>
        <td>Veterans Prepare Here</td>
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


.home-container {
  background-image: url("/Photos/home_screen.jpg");
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
  width: 35vw;
}

table td {
  text-align: center;
  margin: 12px 12px 12px 12px;
}


</style>