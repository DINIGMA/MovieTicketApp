<template>
  <div class="h-screen flex justify-center items-center">
    <div class="container px-7 pt-7 flex justify-center items-center">
      <div class="px-8 py-10 bg-buttonActive rounded-3xl w-80 sm:w-96 shadow-2xl shadow-white">
        <div class="mb-7 text-center"><h2 class="text-5xl font-bold text-main">Register</h2></div>
        <div>
          <form class="mb-8" @submit.prevent>
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
                  placeholder="Type username"
                  v-model="username"
                  required
                  class="bg-transparent w-full border-none focus:outline-none placeholder-gray transition text-main hover:opacity-70"
                />
              </div>
            </div>
            <div class="mb-4">
              <label for="name" class="block text-lg text-main font-bold">Email</label>
              <div
                class="flex items-center bg-white gap-3 rounded-lg px-2 py-2 w-full transition duration-300"
              >
                <div class="flex items-center justify-center leading-6 w-6 h-6">
                  <img src="../../../public/img/icons/mail.png" alt="" />
                </div>
                <input
                  type="email"
                  placeholder="Type email"
                  v-model="email"
                  required
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
                  type="password"
                  v-model="password"
                  required
                  placeholder="Type password"
                  class="bg-transparent w-full border-none focus:outline-none placeholder-gray text-main transition text-main hover:opacity-70"
                />
              </div>
            </div>
            <div v-if="!loading">
              <button
                @click="signUp()"
                class="w-full mb-8 bg-main text-white py-4 rounded-md hover:bg-white hover:text-main transition duration-200"
              >
                Sign up
              </button>
              <div class="text-center">
                <RouterLink class="text-sm text-main font-medium" to="/login"
                  >Already have an account? Sign In</RouterLink
                >
              </div>
            </div>
            <Loader v-else></Loader>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useAuth } from '@/stores/auth'
import { storeToRefs } from 'pinia'
import Loader from '../UI-components/Loader.vue'
import { useRouter } from 'vue-router'

const authStore = useAuth()
const router = useRouter()
const { loading } = storeToRefs(authStore)

const username = ref()
const email = ref()
const password = ref()

const signUp = async () => {
  await authStore.signUp({ username: username.value, email: email.value, password: password.value })
  if (!authStore.error) {
    router.push('/login')
  }
}
</script>

<style></style>
