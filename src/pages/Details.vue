<template>
  <div class="container mx-auto px-7 py-7">
    <div class="flex justify-between items-center mb-7">
      <div class="flex justify-center items-center w-6 h-6" @click="goBackPage()">
        <PrevArrow></PrevArrow>
      </div>
      <h2 class="font-semibold text-xl text-center">Details Movie</h2>
      <div class="flex justify-center items-center w-6 h-6"><Bookmark></Bookmark></div>
    </div>
    <div class="mb-6">
      <MovieInfo v-if="!loadingMovieDetails" :movie="selectedMovie"></MovieInfo>
      <MovieInfoSkeleton v-else></MovieInfoSkeleton>
    </div>
    <Button :buttonText="'Book Ticket'" @click="buyTicket"></Button>
  </div>
</template>

<script setup>
import PrevArrow from '@/components/UI-components/icons/PrevArrow.vue'
import Bookmark from '@/components/UI-components/icons/Bookmark.vue'
import router from '@/router'
import MovieInfo from '@/components/MovieInfo.vue'
import MovieInfoSkeleton from '@/components/Skeletons/MovieInfoSkeleton.vue'
import Button from '../components/UI-components/Button.vue'
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

const buyTicket = () => {
  router.push(`/book-ticket/${props.id}`)
}

onMounted(async () => {
  const id = props.id
  await filmsStore.getMovieDetails(id)
})
</script>

<style></style>
