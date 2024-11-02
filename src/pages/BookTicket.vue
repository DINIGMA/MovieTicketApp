<template>
  <!-- <div class="container mx-auto px-7 pt-7">
    <div class="flex justify-between items-center mb-7">
      <div class="flex justify-center items-center w-6 h-6 cursor-pointer" @click="goBackPage()">
        <PrevArrow></PrevArrow>
      </div>
      <h2 class="font-semibold text-xl text-center">Select Seats</h2>
      <div></div>
    </div>
    <ChooseSeans
      class="mb-11"
      :id="props.id"
      @updateSeats="updateSeats"
      @updateShowtimes="updateShowtimes"
    ></ChooseSeans>
    <div class="flex justify-center" v-auto-animate>
      <Button
        v-if="selectedSeats.length > 0 && selectedShowtime"
        :buttonText="'Checkout'"
        @click="checkout()"
      ></Button>
    </div>
  </div> -->

  <div class="container mx-auto px-7 pt-7">
    <div class="flex justify-between items-center mb-7">
      <div class="flex justify-center items-center w-6 h-6 cursor-pointer" @click="goBackPage()">
        <PrevArrow></PrevArrow>
      </div>
      <h2 class="font-semibold text-xl text-center">
        {{ currentComponent == 'ChooseSeans' ? 'Select Seats' : 'Checkout' }}
      </h2>
      <div></div>
    </div>
    <KeepAlive>
      <component
        :is="bookingComponents[currentComponent]"
        :id="props.id"
        @updateSeats="updateSeats"
        @updateShowtimes="updateShowtimes"
        @goPayment="goToPayment"
      ></component>
    </KeepAlive>
  </div>
</template>

<script setup>
import PrevArrow from '@/components/UI-components/icons/PrevArrow.vue'
import ChooseSeans from '@/components/BookTicketComponents/ChooseSeans.vue'
import Checkout from './Checkout.vue'
import router from '@/router'
import { onMounted, ref } from 'vue'
import { useShowtimes } from '@/stores/showtimes'
import { storeToRefs } from 'pinia'

const showtimesStore = useShowtimes()
const { selectedSeats, selectedShowtime } = storeToRefs(showtimesStore)

const currentComponent = ref('ChooseSeans')

const bookingComponents = {
  ChooseSeans,
  Checkout
}

const updateSeats = (item) => {
  showtimesStore.selectSeats(item)
}

const updateShowtimes = (item) => {
  showtimesStore.selectShowtime(item)
}

const goToPayment = () => {
  if (selectedSeats.value.length > 0 && selectedShowtime.value) {
    currentComponent.value = 'Checkout'
  }
}

const goBackPage = () => {
  if (currentComponent.value == 'ChooseSeans') {
    router.go(-1)
  } else {
    currentComponent.value = 'ChooseSeans'
  }
}

const props = defineProps({
  id: String
})

const checkout = () => {
  if (selectedSeats.value.length > 0 && selectedShowtime.value) {
    router.push({ name: 'checkoutTicket' })
  }
}

onMounted(() => {
  selectedSeats.value = []
  selectedShowtime.value = null
})
</script>

<style scoped>
/* Добавляем дополнительный элемент для нижнего скругления */
</style>
