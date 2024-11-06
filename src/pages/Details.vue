<template>
  <div class="container mx-auto px-7 py-7">
    <div class="flex justify-between items-center mb-7">
      <div class="flex justify-center items-center w-6 h-6" @click="goBackPage()">
        <PrevArrow></PrevArrow>
      </div>
      <h2 class="font-semibold text-xl text-center">Details Movie</h2>
      <div class="flex justify-center items-center w-6 h-6">
        <Bookmark @click="toggleFavorits()" :isFavorite="isFavorits"></Bookmark>
      </div>
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
import { computed, onMounted } from 'vue'
import { useFilms } from '@/stores/films'
import { useFavorits } from '@/stores/favorits'
import { storeToRefs } from 'pinia'

const filmsStore = useFilms()
const favoritsStore = useFavorits()

const { selectedMovie, loadingMovieDetails } = storeToRefs(filmsStore)
const { favorits } = storeToRefs(favoritsStore)

const props = defineProps({
  id: String
})

const isFavorits = computed(() => {
  if (favorits.value) {
    return favorits.value.includes(Number(props.id))
  }
})

const toggleFavorits = () => {
  if (isFavorits.value) {
    favoritsStore.removeFromFavorits(Number(props.id))
  } else {
    favoritsStore.addToFavorits(Number(props.id))
  }
}

const goBackPage = () => {
  router.go(-1)
}

const buyTicket = () => {
  router.push(`/book-ticket/${props.id}`)
}

onMounted(async () => {
  const id = props.id
  await filmsStore.getMovieDetails(id)
  await favoritsStore.getUserFavorits()
})
</script>

<style scoped></style>
