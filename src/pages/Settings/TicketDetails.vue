<template>
  <div class="container mx-auto px-7 pt-7">
    <Header :title="'E - Ticket'"></Header>
    <div class="mb-10">
      <h2 class="mb-2 font-semibold text-xl">Instruction</h2>
      <p class="font-light text-sm text-textLight">
        Come to the cinema, show and scan the barcode to the space provided. Continue to comply with
        health protocols.
      </p>
    </div>
    <div class="mb-11">
      <TicketInfo v-if="!loading" :ticketInfo="selectedTicket"></TicketInfo>
      <TicketInfoSkeleton v-else></TicketInfoSkeleton>
    </div>

    <div><Button :buttonText="'Download E-Ticket'"></Button></div>
  </div>
</template>

<script setup>
import router from '@/router'
import PrevArrow from '@/components/UI-components/icons/PrevArrow.vue'
import Button from '@/components/UI-components/Button.vue'
import TicketInfo from './TicketInfo.vue'
import TicketInfoSkeleton from '@/components/Skeletons/TicketInfoSkeleton.vue'
import Header from '@/components/Header.vue'
import { useTicket } from '@/stores/ticket'
import { onBeforeMount, onMounted } from 'vue'
import { storeToRefs } from 'pinia'

const ticketStore = useTicket()
const { userTickets, selectedTicket, loading } = storeToRefs(ticketStore)

const props = defineProps({
  id: String
})

const goBackPage = () => {
  router.go(-1)
}

onBeforeMount(async () => {
  await ticketStore.getTicketDetails(props.id)
})
</script>

<style scoped></style>
