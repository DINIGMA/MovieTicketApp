<template>
  <div class="flex items-center justify-between" v-if="isAuth">
    <div class="flex flex-col">
      <span class="text-sm text-gray">Welcome Back,</span>
      <span class="text-lg">{{ userInfo.username }}</span>
    </div>
    <div>
      <img src="../../../public/img/Profile.png" alt="avatar" />
    </div>
  </div>
  <div class="flex justify-between items-center mb-3" v-else>
    <h2 class="text-xl font-bold">
      Movie<br />
      ticket App
    </h2>
    <div class="flex gap-3">
      <RouterLink
        to="/register"
        class="relative py-2 pr-5 pl-9 rounded-xl text-center bg-blue-400 active:bg-white active:text-black"
        ><SignUpIcon class="absolute top-2 left-1 w-6 h-6"></SignUpIcon>
        <div>Sign Up</div></RouterLink
      >
      <RouterLink
        to="/login"
        class="relative py-2 pr-5 pl-9 rounded-xl bg-blue-400 transition active:bg-white active:text-black"
        ><LoginIcon class="absolute top-2 left-1 w-6 h-6 fill-white"></LoginIcon>
        <div>Sign In</div></RouterLink
      >
    </div>
  </div>
</template>

<script setup>
import { useAuth } from '@/stores/auth'
import SignUpIcon from '../UI-components/icons/SignUpIcon.vue'
import LoginIcon from '../UI-components/icons/LoginIcon.vue'

import { storeToRefs } from 'pinia'

const authStore = useAuth()
const { isAuth, userInfo } = storeToRefs(authStore)
</script>

<style></style>
