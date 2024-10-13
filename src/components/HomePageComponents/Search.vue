<template>
  <div
    class="flex items-center gap-3 bg-lak rounded-3xl px-8 py-4 w-full hover:opacity-75 transition duration-300"
  >
    <div class="flex items-center justify-center leading-6 w-6 h-6">
      <img src="../../../public/img/search.png" alt="" />
    </div>
    <input
      type="text"
      placeholder="Search your favourite movie"
      v-model="modelValue"
      @blur="blurFunction"
      class="bg-transparent w-full border-none focus:outline-none placeholder-gray-500"
    />
  </div>
</template>

<script setup>
import { useModel, defineModel } from 'vue'

const modelValue = defineModel()

defineProps({
  blurFunction: {
    type: Function,
    default: null
  }
})
</script>

<style></style>
