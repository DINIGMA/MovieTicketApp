<template>
  <div class="flex flex-col">
    <Carousel
      :wrap-around="true"
      :snapAlign="'start'"
      :pagination-enabled="false"
      :breakpoints="breakPointsTopMovies"
    >
      <Slide v-for="slide in 5" :key="slide">
        <div class="flex flex-col">
          <div class="mb-2 w-full">
            <AnimatedPlaceholder
              height="256px"
              width="192px"
              borderRadius="12px"
            ></AnimatedPlaceholder>
          </div>
          <div class="font-medium mb-1">
            <AnimatedPlaceholder height="100%" width="60%" borderRadius="6px"></AnimatedPlaceholder>
          </div>
          <div>
            <AnimatedPlaceholder width="50%" height="18px" borderRadius="6px"></AnimatedPlaceholder>
          </div>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script setup>
import AnimatedPlaceholder from './AnimatedPlaceholder.vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const breakPointsTopMovies = {
  320: { itemsToShow: 1.3 },
  350: { itemsToShow: 1.55 },
  400: { itemsToShow: 1.8 },
  450: { itemsToShow: 2.1 },
  520: { itemsToShow: 2.4 },
  600: { itemsToShow: 2.9 },
  800: { itemsToShow: 3.2 },
  900: { itemsToShow: 3.5 },
  1200: { itemsToShow: 4.5 },
  1600: { itemsToShow: 7 }
}
</script>

<style scoped>
.carousel__slide {
  justify-content: start;
}
</style>
