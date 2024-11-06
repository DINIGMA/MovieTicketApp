<template>
  <div class="container mx-auto px-7 pt-7">
    <Header :title="'Favorits'" class="mb-7"></Header>
    <FavoritsList :favorits="favorits"></FavoritsList>
    <Loader class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></Loader>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import router from '@/router'
import FavoritsList from '@/components/FavoritsList.vue'
import Loader from '@/components/UI-components/Loader.vue'
import { onMounted } from 'vue'
import { useFavorits } from '@/stores/favorits'
import { storeToRefs } from 'pinia'

const favoritsStore = useFavorits()

const { favorits } = storeToRefs(favoritsStore)

onMounted(async () => {
  await favoritsStore.getUserFavorits()
})
</script>

<style></style>
