<template>
  <div class="flex justify-between items-center mb-7">
    <div class="flex justify-center items-center w-6 h-6 cursor-pointer" @click="goBackPage()">
      <PrevArrow></PrevArrow>
    </div>
    <h2 class="font-semibold text-xl text-center">{{ title }}</h2>
    <div></div>
  </div>
</template>

<script setup>
import router from '@/router'
import PrevArrow from './UI-components/icons/PrevArrow.vue'

const goBackPage = () => {
  router.go(-1)
}

defineProps({
  title: String
})
</script>

<style></style>
