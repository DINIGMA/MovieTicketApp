<template>
  <div class="container mx-auto px-7 pt-7">
    <div class="flex justify-between items-center mb-7">
      <div class="flex justify-center items-center w-6 h-6 cursor-pointer" @click="goBackPage()">
        <PrevArrow></PrevArrow>
      </div>
      <h2 class="font-semibold text-xl text-center">Select Seats</h2>
      <div></div>
    </div>
    <ChooseSeans :id="props.id"></ChooseSeans>
  </div>
</template>

<script setup>
import PrevArrow from '@/components/UI-components/icons/PrevArrow.vue'
import ChooseSeans from '@/components/BookTicketComponents/ChooseSeans.vue'
import Screen from '@/components/UI-components/icons/Screen.vue'
import router from '@/router'
import { onMounted } from 'vue'

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
