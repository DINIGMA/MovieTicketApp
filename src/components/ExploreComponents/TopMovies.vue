<template>
  <div>
    <div class="container mx-auto pl-7">
      <SliderMovies
        :films="getNowShowingFilms"
        :breakPoints="breakPointsTopMovies"
        :isRating="true"
        :height="'h-64'"
        :width="'w-48'"
      ></SliderMovies>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import SliderMovies from '../SliderMovies.vue'
import { useFilms } from '@/stores/films'

const filmsStore = useFilms()

const { getNowShowingFilms } = storeToRefs(filmsStore)

const breakPointsTopMovies = {
  320: { itemsToShow: 1.3 },
  350: { itemsToShow: 1.55 },
  400: { itemsToShow: 1.8 },
  450: { itemsToShow: 2.1 },
  600: { itemsToShow: 3 },
  900: { itemsToShow: 3.5 },
  1200: { itemsToShow: 4 },
  1600: { itemsToShow: 7 }
}
</script>

<style scoped></style>
