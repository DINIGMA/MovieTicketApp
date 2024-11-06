<template>
  <div class="relative bg-white rounded-xl text-black">
    <div class="pt-7 px-10">
      <div class="flex flex-col text-wrap mb-7">
        <div class="flex justify-between items-baseline mb-7">
          <p class="font-semibold text-base">Film: {{ ticketInfo.movie.title }}</p>
          <span class="text-accentRed font-semibold text-base">e-ticket</span>
        </div>
        <div class="flex justify-between items-center mb-7">
          <div class="flex flex-col">
            <span class="text-gray-300 font-semibold text-sm">Date</span>
            <p class="font-semibold text-sm">{{ formatDate(ticketInfo.start_time) }}</p>
          </div>
          <div class="flex flex-col w-1/4">
            <span class="text-gray-300 font-semibold text-sm">Seats</span>
            <p class="font-semibold text-sm">{{ formatSeats(ticketInfo.seats) }}</p>
          </div>
        </div>
        <div class="flex justify-between items-center mb-7">
          <div class="flex flex-col">
            <span class="text-gray-300 font-semibold text-sm">Location</span>
            <p class="font-semibold text-sm">{{ ticketInfo.cinema.name }}</p>
          </div>
          <div class="flex flex-col w-1/4">
            <span class="text-gray-300 font-semibold text-sm">Time</span>
            <p class="font-semibold text-sm">{{ formatTime(ticketInfo.start_time) }}</p>
          </div>
        </div>
        <div class="flex justify-between items-center">
          <div class="flex flex-col">
            <span class="text-gray-300 font-semibold text-sm">Payment</span>
            <p class="font-semibold text-sm">Successful</p>
          </div>
          <div class="flex flex-col w-1/4">
            <span class="text-gray-300 font-semibold text-sm">Order</span>
            <p class="font-semibold text-sm">{{ ticketInfo.id }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="h-10 relative mb-5">
      <div class="absolute top-0 right-0 bg-main w-10 h-10 rounded-full translate-x-1/2"></div>
      <div class="absolute top-0 left-0 bg-main w-10 h-10 rounded-full -translate-x-1/2"></div>
      <div class="absolute w-full top-1/2 left-0 border-t-2 border-dashed border-gray-900"></div>
    </div>
    <div class="pb-7 px-10 text-white">
      <Button :isDark="true" :buttonText="'Show QR'"></Button>
    </div>
  </div>
</template>

<script setup>
import Button from '@/components/UI-components/Button.vue'
import { DateTime } from 'luxon'

const props = defineProps({
  ticketInfo: Object
})

const formatSeats = (seats) => {
  return seats.map((item) => item.number).join(', ')
}

const formatTime = (time) => {
  return DateTime.fromISO(time).toFormat('HH.mm a')
}
const formatDate = (date) => {
  return DateTime.fromISO(date).toFormat('dd/MM/yyyy')
}
</script>

<style></style>
