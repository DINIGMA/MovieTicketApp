<template>
  <div class="container mx-auto px-7 pt-7">
    <Header :title="'Favorits'" class="mb-7"></Header>
    <div v-if="favorits">
      <FavoritsList
        :favorits="favorits"
        :removeFromFavorits="removeFromFavorits"
        :goCheckout="goCheckout"
      ></FavoritsList>
      <div
        v-if="favorits.length == 0"
        class="w-64 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      >
        <p class="mb-5">There are no favorites yet, go to the list of films to add</p>
        <Button
          :buttonText="'Go to movie list'"
          class="md:w-full"
          @click="router.push({ path: '/explore' })"
        ></Button>
      </div>
    </div>
    <Loader v-else class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></Loader>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import router from '@/router'
import FavoritsList from '@/components/FavoritsList.vue'
import Loader from '@/components/UI-components/Loader.vue'
import Button from '@/components/UI-components/Button.vue'
import { onMounted } from 'vue'
import { useFavorits } from '@/stores/favorits'
import { storeToRefs } from 'pinia'

const favoritsStore = useFavorits()

const { favorits } = storeToRefs(favoritsStore)

const removeFromFavorits = (movie) => {
  console.log(movie)
  favoritsStore.removeFromFavorits(movie)
}

const goCheckout = (id) => {
  router.push({ path: `/book-ticket/${id}` })
}

onMounted(async () => {
  await favoritsStore.getUserFavorits()
})
</script>

<style></style>
