<template>
  <main class="flex justify-center items-center flex-col sm:flex-row h-screen"
        style="background-image: url('src/assets/photos/cozy-room.png'); background-size: cover;">

    <!-- Sign Up Section -->
    <div class="p-4 w-full sm:w-1/2">
      <div v-if="isSignupModalOpen" class="modal">
        <form class="modal-content" action="/action_page.php">
          <div class="container">
            <section class="bg-transparent dark:bg-transparent">
              <div class="flex flex-col items-center justify-center px-6 py-4 mx-auto md:h-screen lg:py-0">
                <div
                    class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <!-- Sign Up Title -->
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Sign up
                    </h1>
                    <!-- Sign Up Form -->
                    <form class="space-y-4 md:space-y-6" action="#">
                      <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                          email</label>
                        <!-- Email Input -->
                        <input type="email" name="email" id="email"
                               class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="name@company.com" required="" v-model="playerMailS">
                      </div>
                      <!-- Password Input -->
                      <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••"
                               class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               required="" v-model="playerPasswordS">
                      </div>
                      <!-- Confirm Password Input -->
                      <div>
                        <label for="confirm-password"
                               class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm
                          password</label>
                        <input type="confirm-password" name="confirm-password" id="confirm-password"
                               placeholder="••••••••"
                               class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               required="" v-model="playerPasswordCS">
                      </div>
                      <div class="flex items-start">
                        <!-- Terms and Conditions Checkbox -->
                        <div class="flex items-center h-5">
                          <input id="terms" aria-describedby="terms" type="checkbox"
                                 class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                 required="">
                        </div>
                        <div class="ml-3 text-sm">
                          <!-- Terms and Conditions Label -->
                          <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a
                              class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms
                            and Conditions</a></label>
                        </div>
                      </div>
                      <!-- Sign Up Button -->
                      <button type="submit"
                              class="w-full text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                              v-on:click.prevent="createNewUser()">
                        Sign up
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </form>
      </div>
    </div>

    <!-- Log In Section -->
    <div class="p-4 w-full sm:w-1/2">
      <div v-if="isLoginModalOpen" class="modal">
        <form class="modal-content" action="/action_page.php">
          <div class="container">
            <section class="bg-transparent dark:bg-transparent">
              <div class="flex flex-col items-center justify-center px-6 py-4 mx-auto md:h-screen lg:py-0">
                <div
                    class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <!-- Log In Title -->
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Log in
                    </h1>
                    <!-- Log In Form -->
                    <form class="space-y-4 md:space-y-6" action="#">
                      <!-- Email Input -->
                      <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                          email</label>
                        <input type="email" name="email" id="email"
                               class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               placeholder="name@company.com" required="" v-model="playerMailL">
                      </div>
                      <!-- Password Input -->
                      <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••"
                               class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               required="" v-model="playerPasswordL">
                      </div>
                      <!-- Remember Me Checkbox and Forgot Password Link -->
                      <div class="flex items-center justify-between">
                        <div class="flex items-start">
                          <!-- Remember Me Checkbox -->
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox"
                                   class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                   required="">
                          </div>
                          <div class="ml-3 text-sm">
                            <!-- Remember Me Label -->
                            <label for="remember" class="text-gray-500 dark:text-gray-300">Remember me</label>
                          </div>
                        </div>
                        <!-- Forgot Password Link -->
                        <a href="#" class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot
                          password?</a>
                      </div>
                      <!-- Log In Button -->
                      <button type="submit"
                              class="w-full text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-800"
                              v-on:click.prevent="loginUser()">
                        Log in
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import Api from "../service/Api.js";
import app from "../App.vue";
import App from "../App.vue";
import currentUserToken from "../App.vue";

export default {
  data() {
    return {
      isSignupModalOpen: true,
      isLoginModalOpen: true,
      playerMailS: "",
      playerPasswordS: "",
      playerPasswordCS: "",
      playerMailL: "",
      playerPasswordL: "",
      response: ""
    };
  },
  methods: {
    navigateTo(page) {
      this.$router.push(`/${page}`);
    },
    createNewUser() {
      Api.registerUserAPICall(this.playerMailS, this.playerPasswordCS).then((response) => {
        if (response.ok) {
          alert("User Created");
          this.response = "User Created!";
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

    loginUser: function () {
      Api.loginUserAPICall(this.playerMailL, this.playerPasswordL).then((response) => {
        if (response.ok === undefined) {
          alert("Wrong Request");
        }
        return response.json();
      }).then((data) => {
        console.log(data);
        alert("Logged In");
        this.response = "Logged In!";
        this.$root.currentUserToken = data.token;
        console.log("token: " + this.$root.currentUserToken);
        localStorage.setItem("currentUserID", data.player_ID);
        localStorage.setItem("currentUserToken", data.token);
        this.$router.push("/newgamearena");
      }).catch((error) => {
        alert("No connection with the API");
        this.response = "No connection with API";
      });
    }
  }
};
</script>
