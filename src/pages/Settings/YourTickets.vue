<template>
  <div class="container mx-auto px-7 pt-7">
    <Header :title="'Tickets'"></Header>
    <div class="border border-graySlate px-12 py-8 rounded-xl flex flex-col gap-9">
      <div class="flex justify-between">
        <p>Order</p>
        <p>Details</p>
      </div>
      <div v-for="item in userTickets" :key="item" class="flex flex-col">
        <div class="flex justify-between items-center mb-2">
          <div>№{{ item.id }}</div>
          <button @click="router.push({ path: `/profile/your-tickets/${item.id}` })">View</button>
        </div>
        <div class="w-full border-t border-graySlate"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PrevArrow from '@/components/UI-components/icons/PrevArrow.vue'
import router from '@/router'
import { onMounted } from 'vue'
import { useTicket } from '@/stores/ticket'
import { storeToRefs } from 'pinia'
import { DateTime } from 'luxon'
import Button from '@/components/UI-components/Button.vue'
import Header from '@/components/Header.vue'

const ticketStore = useTicket()
const { userTickets } = storeToRefs(ticketStore)

const goBackPage = () => {
  router.go(-1)
}

const formatDate = (date) => {
  const luxonDate = DateTime.fromISO(date)
  return luxonDate.toFormat('dd LLL yyyy HH:mm')
}

onMounted(async () => {
  await ticketStore.getTicketsByUser()
})
</script>

<style scoped>
button {
  padding: 10px 20px;
  background: #54a8e5;
  border-radius: 10px;
  transition: 0.5s;
}
button:focus {
  outline: none;
  opacity: 0.7;
}
</style>
