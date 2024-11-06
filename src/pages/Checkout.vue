<template>
  <div>
    <div v-if="selectedShowtime && selectedSeats.length > 0">
      <div class="mb-12">
        <h2 class="font-semibold text-xl mb-6">Seans info</h2>
        <div class="flex flex-col gap-6">
          <div class="flex justify-between items-center">
            <span>Cinema:</span>
            <p class="text-sm text-textLight">{{ selectedShowtime.cinema.name }}</p>
          </div>
          <div class="flex justify-between items-center">
            <span>Date:</span>
            <p class="text-sm text-textLight">{{ formatDate(selectedShowtime.start_time) }}</p>
          </div>
          <div class="flex justify-between items-center flex-wrap">
            <span>Seats:</span>
            <p class="text-sm text-textLight">{{ formatSeats(selectedSeats) }}</p>
          </div>
        </div>
      </div>
      <div class="mb-11">
        <h2 class="font-semibold text-xl mb-6">Payment Details</h2>
        <div class="mb-3">
          <h3 class="mb-2">Payment</h3>
          <Multiselect
            v-model="paymentDetails.payment"
            :options="['sberpay', 'credit']"
            placeholder="Pick at least one"
            :show-labels="false"
          ></Multiselect>
        </div>
        <div class="mb-3">
          <h3 class="mb-2">Your Email</h3>
          <Input
            v-model="paymentDetails.email"
            placeholder="Your email"
            @blur="v$.email.$touch"
            :class="[{ error: v$.email.$error }]"
          />
        </div>
        <div>
          <h3 class="mb-2">Your phone</h3>
          <MaskInput
            v-model="paymentDetails.phoneNumber"
            mask="+7(###) ###-##-##"
            placeholder="+7(___) ___-__-__"
            @blur="v$.phoneNumber.$touch"
            class="px-6 py-4 bg-transparent w-full border border-graySlate focus:outline-none rounded-lg text-sm text-textLight font-medium placeholder:text-textLight placeholder:text-sm"
            :class="[{ error: v$.phoneNumber.$error }]"
          />
        </div>
      </div>
      <div>
        <Button :class="{ disabled: v$.$invalid }" :buttonText="'Pay Now'" @click="pay()"></Button>
      </div>
    </div>
    <FullscreenLoader v-if="isPaying"></FullscreenLoader>
    <PaymentStatusPopup
      v-if="isOpenModal"
      :paymentSuccess="paymentSuccess"
      @closePopup="closePopup()"
    ></PaymentStatusPopup>
  </div>
</template>

<script setup>
import router from '@/router'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { DateTime } from 'luxon'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'
import Multiselect from 'vue-multiselect'
import { MaskInput } from 'vue-3-mask'
import Input from '@/components/UI-components/Input.vue'
import Button from '@/components/UI-components/Button.vue'
import FullscreenLoader from '@/components/UI-components/FullscreenLoader.vue'
import PaymentStatusPopup from '@/components/BookTicketComponents/PaymentStatusPopup.vue'

import { useShowtimes } from '@/stores/showtimes'
import { useTicket } from '@/stores/ticket'

const showtimesStore = useShowtimes()
const ticketStore = useTicket()

const { selectedShowtime, selectedSeats } = storeToRefs(showtimesStore)

const emits = defineEmits(['goSelectSeat'])

const isOpenModal = ref(false)
const paymentSuccess = ref(false)
const isPaying = ref(false)

const paymentDetails = ref({
  payment: '',
  email: '',
  phoneNumber: ''
})

const validationRules = {
  payment: { required },
  email: { required, email },
  phoneNumber: { required, minLength: minLength(17) }
}

const v$ = useVuelidate(validationRules, paymentDetails)

const formatDate = (date) => {
  return DateTime.fromISO(date).toFormat('dd LLL yyyy HH:mm')
}

const formatSeats = (seats) => {
  return seats.map((item) => item.number).join(', ')
}

const goBackPage = () => {
  router.go(-1)
}

const paymentImitation = async () => {
  // Вероятность успешной оплаты
  const probability = Math.floor(Math.random() * 101)
  await new Promise((resolve) => {
    setTimeout(() => {
      if (probability < 75) {
        paymentSuccess.value = true
      } else {
        paymentSuccess.value = false
      }
      resolve() // Разрешаем промис после задержки
    }, 4000)
  })
}

const pay = async () => {
  if (isPaying.value) return
  isPaying.value = true

  const isValid = await v$.value.$validate()

  if (isValid) {
    await paymentImitation()
    if (paymentSuccess.value) {
      await ticketStore.createOrder({
        user_id: JSON.parse(localStorage.getItem('user'))?.id,
        start_time: selectedShowtime.value.start_time,
        movie_id: selectedShowtime.value.movie_id,
        hall_id: selectedShowtime.value.hall.id,
        cinema_id: selectedShowtime.value.cinema.id,
        seats: selectedSeats.value,
        paymentDate: new Date()
      })
    }
    isOpenModal.value = true
  }
  isPaying.value = false
}

const closePopup = () => {
  if (!paymentSuccess.value) {
    isOpenModal.value = false
  }
}
</script>

<style scoped>
.error {
  border: 1px solid #eb5757;
}
.disabled {
  opacity: 0.5;
}
</style>
