<template>
  <div>
    <div class="mb-2">
      <h2 class="font-semibold text-xl">Coming Soon</h2>
    </div>
    <Carousel :autoplay="5000" :wrap-around="true">
      <Slide v-for="{ id, name, date } in films" :key="id" class="h-60">
        <div class="flex flex-col items-start w-full h-60">
          <div class="mb-1 h-44 w-full">
            <img
              :src="`../../../public/img/coomingSoonFilms/${name}.jpg`"
              alt="art"
              class="rounded-xl w-full h-full object-cover"
            />
          </div>
          <h3 class="font-semibold text-xl">{{ name }}</h3>
          <p class="block text-sm text-gray-100">{{ getFormattedDate(date) }}</p>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script setup>
import 'vue3-carousel/dist/carousel.css'
import { onMounted } from 'vue'
import { useComingSoonFilms } from '@/stores/comingSoonFilms'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { DateTime, Duration, Info, Interval, Settings } from 'luxon'
import ComingSoonSkeleton from '../Skeletons/ComingSoonSkeleton.vue'

defineProps({
  films: Array
})

const f = { year: 'numeric', month: 'long' }

const getFormattedDate = (date) => {
  const luxonDate = DateTime.fromISO(date)
  return luxonDate.setLocale('en').toLocaleString(f)
}
</script>

<style></style>
