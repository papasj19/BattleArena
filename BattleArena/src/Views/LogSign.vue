<template>
  <main class="flex justify-center items-center flex-col sm:flex-row h-screen"
        style="background-image: url('src/assets/photos/cozy-room.png'); background-size: cover;">
    <!-- Sign Up Section -->
    <div class="p-4 w-full sm:w-1/2">
      <button v-if="isSignupButtonOpen" v-on:click="showSignUp()">{{ "Sign Up" }}</button>
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
                               placeholder="name@company.com" required="">
                      </div>
                      <!-- Password Input -->
                      <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••"
                               class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               required="">
                      </div>
                      <!-- Confirm Password Input -->
                      <div>
                        <label for="confirm-password"
                               class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm
                          password</label>
                        <input type="confirm-password" name="confirm-password" id="confirm-password"
                               placeholder="••••••••"
                               class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               required="">
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
                              class="w-full text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-800">
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
      <button v-if="isLoginButtonOpen" v-on:click="showLogin()">{{ "Log In" }}</button>
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
                               placeholder="name@company.com" required="">
                      </div>
                      <!-- Password Input -->
                      <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••"
                               class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                               required="">
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
                        <a href="#"
                           class="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot
                          password?</a>
                      </div>
                      <!-- Log In Button -->
                      <button type="submit"
                              class="w-full text-white bg-gray-500 hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-800">
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
export default {
  data() {
    return {
      isSignupButtonOpen: true,
      isSignupModalOpen: false,
      isLoginModalOpen: false,
      isLoginButtonOpen: true
    }
  },
  methods: {
    showLogin() {
      this.isLoginButtonOpen = false;
      this.isSignupButtonOpen = false;
      this.isLoginModalOpen = true;
    },
    showSignUp() {
      this.isLoginButtonOpen = false;
      this.isSignupButtonOpen = false;
      this.isSignupModalOpen = true;
    }
  }
}
</script>
