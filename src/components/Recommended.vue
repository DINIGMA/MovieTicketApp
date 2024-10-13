<template>
  <div>
    <div>
      <div class="container mx-auto pl-7">
        <SliderMovies
          :films="getNowShowingFilms"
          :breakPoints="breakPointsTopMovies"
          :isRating="false"
          :height="'h-48'"
          :width="'w-32'"
        ></SliderMovies>
      </div>
    </div>
  </div>
</template>

<script setup>
import SliderMovies from './SliderMovies.vue'
import { useFilms } from '@/stores/films'
import { storeToRefs } from 'pinia'

const filmsStore = useFilms()

const { getNowShowingFilms } = storeToRefs(filmsStore)

const breakPointsTopMovies = {
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
