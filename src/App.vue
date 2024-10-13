<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import Navigation from './components/Navigation.vue'
import { useFilms } from './stores/films'
import { onMounted, computed } from 'vue'

const filmsStore = useFilms()

const route = useRoute()

const showNavigationRoutes = ['Home', 'Explore', 'Favorits', 'Profile']
const shouldShowNavigation = computed(() => showNavigationRoutes.includes(route.name))

onMounted(async () => {
  await filmsStore.getFilms()
})
</script>

<template>
  <!-- <div class="container mx-auto px-7">
    <div>12131313131</div>
  </div> -->
  <div class="app-container">
    <RouterView></RouterView>
    <Navigation v-if="shouldShowNavigation" class="fixed-navigation"></Navigation>
  </div>
</template>

<style scoped>
.fixed-navigation {
  margin-top: auto; /* Это заставляет навигацию оставаться внизу контейнера */
}
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Заставляет контейнер занимать всю высоту экрана */
}
</style>
