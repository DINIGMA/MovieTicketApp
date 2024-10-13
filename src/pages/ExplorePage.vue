<template>
  <div class="container mx-auto px-7 pt-7">
    <div class="flex justify-between items-center mb-7">
      <div class="flex justify-center items-center w-6 h-6 cursor-pointer" @click="goBackPage()">
        <PrevArrow></PrevArrow>
      </div>
      <h2 class="font-semibold text-xl text-center">Explore Movie</h2>
      <div class="flex justify-center items-center w-6 h-6 cursor-pointer">
        <SearchIcon v-if="!isSearch" @click="toggleSearch()"></SearchIcon>
        <Close v-else @click="toggleSearch()"></Close>
      </div>
    </div>
    <div v-if="!isSearch" class="mb-7">
      <SwitchButton v-model="typeFilms"></SwitchButton>
    </div>
    <div v-else class="mb-7"><Search v-model="exploreSearchQuery"></Search></div>
  </div>
  <div v-if="!isSearch">
    <div v-if="typeFilms == 'Now Showing'">
      <div>
        <div class="container mx-auto px-7">
          <div class="flex justify-between mb-4">
            <h2 class="font-semibold text-xl">Top Movies</h2>
            <button class="text-button text-sm">See more</button>
          </div>
        </div>
        <TopMovies v-if="!loadingFilms" class="mb-4"></TopMovies>
        <div v-else class="container mx-auto pl-7 mb-4">
          <TopMoviesSkeleton></TopMoviesSkeleton>
        </div>
      </div>
      <div>
        <div class="container mx-auto px-7">
          <div class="flex justify-between mb-4">
            <h2 class="font-semibold text-xl">Recommended</h2>
            <button class="text-button text-sm">See more</button>
          </div>
        </div>
        <Recommended v-if="!loadingFilms"></Recommended>
        <div v-else class="container mx-auto pl-7"><RecommendedSkeleton></RecommendedSkeleton></div>
      </div>
    </div>
    <div v-else>
      <div class="container mx-auto px-7">
        <MovieList :films="getUpcomingFilms"></MovieList>
      </div>
    </div>
  </div>
  <div v-else class="container mx-auto px-7">
    <div v-if="filteredFilms.length == 0 && filmsStore.exploreSearchQuery">
      <h3 class="font-semibold text-xl">No movies were found for your search</h3>
    </div>
    <MovieList :films="filteredFilms"></MovieList>
  </div>
</template>

<script setup>
import { onMounted, provide, ref, computed, watch } from 'vue'
import TopMovies from '@/components/ExploreComponents/TopMovies.vue'
import TopMoviesSkeleton from '@/components/Skeletons/TopMoviesSkeleton.vue'
import Recommended from '@/components/Recommended.vue'
import RecommendedSkeleton from '@/components/Skeletons/RecommendedSkeleton.vue'
import PrevArrow from '@/components/UI-components/icons/PrevArrow.vue'
import SearchIcon from '@/components/UI-components/icons/SearchIcon.vue'
import SwitchButton from '@/components/ExploreComponents/SwitchButton.vue'
import Search from '@/components/HomePageComponents/Search.vue'
import Close from '@/components/UI-components/icons/Close.vue'
import MovieList from '@/components/MovieList.vue'
import { useFilms } from '@/stores/films'
import { storeToRefs } from 'pinia'
import router from '@/router'

const filmsStore = useFilms()

const { getNowShowingFilms, loadingFilms, getUpcomingFilms, typeFilms, films, exploreSearchQuery } =
  storeToRefs(filmsStore)

const goBackPage = () => {
  router.go(-1)
}

const isSearch = ref(false)

const toggleSearch = () => {
  isSearch.value ? (isSearch.value = false) : (isSearch.value = true)
}

const filteredFilms = computed(() => {
  const sortedFilms = [...films.value].sort((a, b) => a.title.localeCompare(b.title))
  if (!exploreSearchQuery.value) return sortedFilms

  return sortedFilms.filter((film) =>
    film.title.toLowerCase().includes(exploreSearchQuery.value.toLowerCase())
  )
})

watch(isSearch, (newVal) => {
  localStorage.setItem('isSearch', JSON.stringify(newVal))
})

onMounted(() => {
  const localIsSearch = localStorage.getItem('isSearch')
  isSearch.value = localIsSearch ? JSON.parse(localIsSearch) : false
})

// onMounted(() => {
//   filmsStore.clearSearchQuery()
// })
</script>

<style></style>
