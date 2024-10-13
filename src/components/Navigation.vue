<template>
  <footer class="px-9 py-7 flex items-center justify-center bg-main">
    <div class="flex items-center gap-16">
      <router-link :to="{ name: 'Home' }"
        ><Home :fillColor="isActive('Home') ? '#54A8E5' : undefined"></Home
      ></router-link>
      <router-link :to="{ name: 'Explore' }"
        ><Explore :fillColor="isActive('Explore') ? '#54A8E5' : undefined"></Explore
      ></router-link>
      <router-link :to="{ name: 'Favorits' }"
        ><Favorits :fillColor="isActive('Favorits') ? '#54A8E5' : undefined"></Favorits
      ></router-link>
      <router-link :to="{ name: 'Profile' }"
        ><Profile :fillColor="isActive('Profile') ? '#54A8E5' : undefined"></Profile
      ></router-link>
    </div>
  </footer>
</template>

<script setup>
import Home from './UI-components/navigation/Home.vue'
import Explore from './UI-components/navigation/Explore.vue'
import Favorits from './UI-components/navigation/Favorits.vue'
import Profile from './UI-components/navigation/Profile.vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isActive = (name) => {
  return route.name === name
}
</script>

<style scoped>
footer {
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.active {
}
</style>
