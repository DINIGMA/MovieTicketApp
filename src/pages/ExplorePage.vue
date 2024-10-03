<template>
  <div class="container mx-auto px-7 pt-7">
    <div class="flex justify-between items-center mb-7">
      <div class="w-5 h-5"></div>
      <h2 class="font-semibold text-xl text-center">Explore Movie</h2>
      <div class="w-5 h-5"></div>
    </div>
    <SwitchButton class="mb-7" v-model="typeFilms"></SwitchButton>
  </div>
  <TopMovies></TopMovies>
</template>

<script setup>
import { ref } from 'vue'
import TopMovies from '@/components/ExploreComponents/TopMovies.vue'
import SwitchButton from '@/components/ExploreComponents/SwitchButton.vue'

const typeFilms = ref('')
</script>

<style></style>
