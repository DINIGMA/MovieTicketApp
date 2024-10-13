<template>
  <div class="h-screen flex justify-center items-center">
    <div class="container px-7 pt-7 flex justify-center items-center">
      <div class="px-8 py-10 bg-buttonActive rounded-3xl w-80">
        <div class="mb-7 text-center"><h2 class="text-5xl font-bold text-main">Login</h2></div>
        <div>
          <form class="mb-8">
            <div class="mb-4">
              <label for="name" class="block text-lg text-main font-bold">Username</label>
              <div
                class="flex items-center bg-white gap-3 rounded-lg px-2 py-2 w-full transition duration-300"
              >
                <div class="flex items-center justify-center leading-6 w-6 h-6">
                  <img src="../../../public/img/icons/human.png" alt="" />
                </div>
                <input
                  type="text"
                  placeholder="Type your username"
                  class="bg-transparent w-full border-none focus:outline-none placeholder-gray transition text-main hover:opacity-70"
                />
              </div>
            </div>
            <div class="mb-7">
              <label for="name" class="block text-lg text-main font-bold">Password</label>
              <div
                class="flex items-center bg-white gap-3 rounded-lg px-2 py-2 w-full transition duration-300"
              >
                <div class="flex items-center justify-center leading-6 w-6 h-6">
                  <img src="../../../public/img/icons/lock.png" alt="" />
                </div>
                <input
                  type="text"
                  placeholder="Type your password"
                  class="bg-transparent w-full border-none focus:outline-none placeholder-gray text-main transition text-main hover:opacity-70"
                />
              </div>
            </div>

            <button
              type="submit"
              class="w-full bg-main text-white py-4 rounded-md hover:bg-white hover:text-main transition duration-200"
            >
              Sign in
            </button>
          </form>
          <div class="text-center">
            <RouterLink class="text-sm text-main font-medium" to="/register"
              >Dont' have account? Sign Up</RouterLink
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
