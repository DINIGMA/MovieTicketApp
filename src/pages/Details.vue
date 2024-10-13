<template>
  <div class="container mx-auto px-7 py-7">
    <div class="flex justify-between items-center mb-7">
      <div class="flex justify-center items-center w-6 h-6" @click="goBackPage()">
        <PrevArrow></PrevArrow>
      </div>
      <h2 class="font-semibold text-xl text-center">Details Movie</h2>
      <div class="flex justify-center items-center w-6 h-6"><Bookmark></Bookmark></div>
    </div>
    <div>
      <MovieInfo v-if="!loadingMovieDetails" :movie="selectedMovie"></MovieInfo>
      <MovieInfoSkeleton v-else></MovieInfoSkeleton>
    </div>
  </div>
</template>

<script setup>
import PrevArrow from '@/components/UI-components/icons/PrevArrow.vue'
import Bookmark from '@/components/UI-components/icons/Bookmark.vue'
import router from '@/router'
import MovieInfo from '@/components/MovieInfo.vue'
import MovieInfoSkeleton from '@/components/Skeletons/MovieInfoSkeleton.vue'
import { onMounted } from 'vue'
import { useFilms } from '@/stores/films'
import { storeToRefs } from 'pinia'

const filmsStore = useFilms()

const { selectedMovie, loadingMovieDetails } = storeToRefs(filmsStore)

const props = defineProps({
  id: String
})

const goBackPage = () => {
  router.go(-1)
}

onMounted(async () => {
  const id = props.id
  await filmsStore.getMovieDetails(id)
})
</script>

<style></style>
