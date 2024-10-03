<template>
  <div class="container mx-auto px-7 pt-7">
    <div class=""></div>
    <div class="flex justify-between mb-4">
      <h2 class="font-semibold text-xl">Top Movies</h2>
      <button class="text-button text-sm">See more</button>
    </div>
  </div>
  <div class="container mx-auto pl-7">
    <ListMovies></ListMovies>
  </div>
</template>

<script setup>
import ListMovies from '../ListMovies.vue'
</script>

<style scoped></style>
