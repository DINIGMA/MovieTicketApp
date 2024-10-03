<template>
  <div class="container mx-auto px-7 pt-7">
    <UserInfo class="mb-7"></UserInfo>
    <Search class="mb-7"></Search>
    <div class="mb-7">
      <ComingSoonFilms v-if="!loadingComingFilms" :films="comingFilms"></ComingSoonFilms>
      <ComingSoonSkeleton v-else></ComingSoonSkeleton>
    </div>
    <ListCinemas class="mb-5"></ListCinemas>
  </div>
</template>

<script setup>
import UserInfo from '@/components/HomePageComponents/UserInfo.vue'
import Search from '@/components/HomePageComponents/Search.vue'
import ComingSoonFilms from '@/components/HomePageComponents/ComingSoonFilms.vue'
import ListCinemas from '@/components/HomePageComponents/ListCinemas.vue'
import Navigation from '@/components/Navigation.vue'
import ComingSoonSkeleton from '@/components/Skeletons/ComingSoonSkeleton.vue'
import { onMounted } from 'vue'
import { useComingSoonFilms } from '@/stores/comingSoonFilms'
import { storeToRefs } from 'pinia'

const comingStore = useComingSoonFilms()
const { comingFilms, loadingComingFilms } = storeToRefs(comingStore)

onMounted(async () => {
  await comingStore.getComingSoonFilms()
})
</script>

<style></style>
