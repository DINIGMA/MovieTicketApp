<template>
  <div class="mb-5">
    <div class="flex justify-between items-center w-full mb-8">
      <div class="flex items-center gap-4">
        <img src="../../../public/img/Profile.png" alt="avatar" />
        <div>
          <p class="text-lg font-medium">{{ userInfo?.username }}</p>
          <span class="text-sm text-gray-100 font-medium">Film Hunter</span>
        </div>
      </div>
      <NextArrow />
    </div>
    <div class="line"></div>
  </div>
  <div class="mb-5">
    <h2 class="mb-3 text-xl font-semibold">Account</h2>
    <div class="flex flex-col gap-5 items-start mb-8">
      <div class="flex justify-between items-center w-full">
        <div class="flex items-center gap-4">
          <img src="../../../public/img/icons/PersonalData.png" alt="" />
          <p class="text-lg font-medium">Personal Data</p>
        </div>
        <NextArrow />
      </div>
      <div class="flex justify-between items-center w-full">
        <div class="flex items-center gap-4">
          <img src="../../../public/img/icons/EmailPayment.png" alt="" />
          <p class="text-lg font-medium">Email & Payment</p>
        </div>
        <NextArrow />
      </div>
      <div class="flex justify-between items-center w-full">
        <div class="flex items-center gap-4">
          <img src="../../../public/img/icons/deactivateAccount.png" alt="" />
          <p class="text-lg font-medium">Deactive Account</p>
        </div>
        <NextArrow />
      </div>
    </div>
    <div class="line"></div>
  </div>
  <div>
    <h2 class="mb-3 text-xl font-semibold">Privacy & Policy</h2>
    <div class="flex flex-col gap-5 items-start">
      <div class="flex justify-between items-center w-full">
        <div class="flex items-center gap-4">
          <img src="../../../public/img/icons/notification.png" alt="" />
          <p class="text-lg font-medium">Notification</p>
        </div>
        <NextArrow />
      </div>
      <div class="flex justify-between items-center w-full">
        <div class="flex items-center gap-4">
          <img src="../../../public/img/icons/tickets.png" alt="" />
          <p class="text-lg font-medium">Your Ticket</p>
        </div>
        <NextArrow />
      </div>
      <div class="flex justify-between items-center w-full" @click="logout()">
        <div class="flex items-center gap-4">
          <img src="../../../public/img/icons/logout.png" alt="" />
          <p class="text-lg font-medium">Logout</p>
        </div>
        <NextArrow />
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import NextArrow from '../UI-components/icons/NextArrow.vue'

import { useAuth } from '@/stores/auth'
import router from '@/router'

const authStore = useAuth()
const { userInfo } = storeToRefs(authStore)

const logout = () => {
  authStore.logout()
  router.push({ path: '/' })
}
</script>

<style scoped>
.line {
  width: 100%;
  border-top: 2px solid rgba(255, 255, 255, 0.3);
}
</style>
