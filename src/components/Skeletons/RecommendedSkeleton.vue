<template>
  <div class="flex flex-col">
    <Carousel
      :wrap-around="true"
      :snapAlign="'start'"
      :pagination-enabled="false"
      :breakpoints="breakPointsRecomendedMovies"
    >
      <Slide v-for="slide in 3" :key="slide">
        <div class="flex flex-col w-full">
          <div class="mb-2">
            <AnimatedPlaceholder
              height="180px"
              width="85%"
              borderRadius="12px"
            ></AnimatedPlaceholder>
          </div>
          <div class="font-medium mb-2">
            <AnimatedPlaceholder height="100%" width="60%" borderRadius="6px"></AnimatedPlaceholder>
          </div>
          <div>
            <AnimatedPlaceholder width="50%" height="20px" borderRadius="6px"></AnimatedPlaceholder>
          </div>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script setup>
import AnimatedPlaceholder from './AnimatedPlaceholder.vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const breakPointsRecomendedMovies = {
  320: { itemsToShow: 2 },
  350: { itemsToShow: 2.5 },
  420: { itemsToShow: 3 },
  600: { itemsToShow: 3.5 },
  750: { itemsToShow: 5 },
  900: { itemsToShow: 6 },
  1200: { itemsToShow: 8 },
  1600: { itemsToShow: 10 }
}
</script>

<style></style>
