<template>
  <div
    class="fixed top-0 left-0 h-screen w-full z-50 flex justify-center items-center transition-all"
  >
    <div
      class="w-full h-full fixed bg-darkSlate opacity-70 -z-10"
      @click="emits('closePopup')"
    ></div>
    <div class="notification" :class="{ error: !paymentSuccess }">
      <div v-if="paymentSuccess">
        <img src="../../../public/img/icons/IconSuccess.png" alt="" />
        <div class="flex flex-col gap-4 text-center mb-8">
          <h2 class="text-2xl font-semibold">Your payment was successful</h2>
          <p class="text-sm font-light">
            Adele is a Scottish heiress whose extremely wealthy family owns estates and grounds.
            When she was a teenager. Read More
          </p>
        </div>
      </div>
      <div v-else>
        <img src="../../../public/img/icons/errorIcon.png" alt="" />
        <div class="flex flex-col gap-4 text-center mb-8">
          <h2 class="text-2xl font-semibold">An error has occurred</h2>
          <p class="text-sm font-light">
            Adele is a Scottish heiress whose extremely wealthy family owns estates and grounds.
            When she was a teenager. Read More
          </p>
        </div>
      </div>
      <Button
        :buttonText="paymentSuccess ? 'See E-Ticket' : 'Try again'"
        :isDark="true"
        @click="complete()"
      ></Button>
    </div>
  </div>
</template>

<script setup>
import Button from '../UI-components/Button.vue'
import router from '@/router'

const emits = defineEmits(['closePopup'])

const props = defineProps({
  paymentSuccess: Boolean
})

const complete = () => {
  if (props.paymentSuccess) {
    router.push({ name: 'yourTickets' })
  } else {
    emits('closePopup')
  }
}
</script>

<style scoped>
.notification {
  position: relative;
  margin: 0 auto;
  width: 300px;
  padding: 74px 26px 30px 26px;
  background-color: #54a8e5;
  border-radius: 60px 60px 20px 20px;
}
.error {
  background-color: #eb5757;
}
img {
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
