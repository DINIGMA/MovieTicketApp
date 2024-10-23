<template>
  <div class="container mx-auto px-7 pt-7">
    <UserInfo class="mb-7"></UserInfo>
    <Search class="mb-7" v-model="homeSearchQuery"></Search>
    <div v-if="!filmsStore.homeSearchQuery">
      <div class="mb-7">
        <ComingSoonFilms v-if="!loadingFilms" :films="getUpcomingFilms"></ComingSoonFilms>
        <ComingSoonSkeleton v-else></ComingSoonSkeleton>
      </div>
      <div>
        <ListCinemas v-if="!loadingCinemas" :cinemas="cinemas" class="mb-5"></ListCinemas>
        <ListCinemasSkeleton v-else></ListCinemasSkeleton>
      </div>
    </div>
    <div v-else>
      <div v-if="filteredFilms.length == 0 && filmsStore.homeSearchQuery">
        <h3 class="font-semibold text-xl">No movies were found for your search</h3>
      </div>
      <MovieList :films="filteredFilms"></MovieList>
    </div>
  </div>
</template>

<script setup>
import UserInfo from '@/components/HomePageComponents/UserInfo.vue'
import Search from '@/components/HomePageComponents/Search.vue'
import ComingSoonFilms from '@/components/HomePageComponents/ComingSoonFilms.vue'
import ListCinemas from '@/components/HomePageComponents/ListCinemas.vue'
import MovieList from '@/components/MovieList.vue'
import ComingSoonSkeleton from '@/components/Skeletons/ComingSoonSkeleton.vue'
import ListCinemasSkeleton from '@/components/Skeletons/ListCinemasSkeleton.vue'
import LoginIcon from '@/components/UI-components/icons/LoginIcon.vue'
import SignUpIcon from '@/components/UI-components/icons/SignUpIcon.vue'
import { computed, onMounted, ref, watch } from 'vue'
import { useFilms } from '@/stores/films'
import { useCinemas } from '@/stores/cinemas'
import { storeToRefs } from 'pinia'

const filmsStore = useFilms()
const cinemasStore = useCinemas()

const { comingFilms, loadingFilms, getUpcomingFilms, films, clearSearchQuery, homeSearchQuery } =
  storeToRefs(filmsStore)

const { cinemas, loadingCinemas } = storeToRefs(cinemasStore)

const filteredFilms = computed(() => {
  const sortedFilms = [...films.value].sort((a, b) => a.title.localeCompare(b.title))
  if (!homeSearchQuery.value) return sortedFilms

  return sortedFilms.filter((film) =>
    film.title.toLowerCase().includes(homeSearchQuery.value.toLowerCase())
  )
})

onMounted(async () => {
  await Promise.all([cinemasStore.getCinemas()])
})
</script>

<style></style>
