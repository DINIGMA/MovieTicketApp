<template>
  <div class="container mx-auto px-7 pt-7">
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
    <Button v-auto-animate v-if="seats.length > 0 && showtimes" :buttonText="'Checkout'"></Button>
  </div>
</template>

<script setup>
import PrevArrow from '@/components/UI-components/icons/PrevArrow.vue'
import ChooseSeans from '@/components/BookTicketComponents/ChooseSeans.vue'
import Button from '@/components/UI-components/Button.vue'
import router from '@/router'
import { ref } from 'vue'

const seats = ref([])
const showtimes = ref()

const updateSeats = (item) => {
  seats.value = item
}

const updateShowtimes = (item) => {
  showtimes.value = item
  console.log(showtimes.value)
}

const goBackPage = () => {
  router.go(-1)
}

const props = defineProps({
  id: String
})
</script>

<style scoped>
/* Добавляем дополнительный элемент для нижнего скругления */
</style>
