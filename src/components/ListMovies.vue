<template>
  <div class="flex flex-col">
    <Carousel
      :wrap-around="true"
      :snapAlign="'start'"
      :pagination-enabled="false"
      :breakpoints="{
        320: { itemsToShow: 1.5 },
        350: { itemsToShow: 1.55 },
        420: { itemsToShow: 2.1 },
        600: { itemsToShow: 3 },
        900: { itemsToShow: 3.5 },
        1200: { itemsToShow: 4 },
        1600: { itemsToShow: 7 }
      }"
    >
      <Slide v-for="slide in 10" :key="slide" class="mr-8">
        <div class="flex flex-col items-start">
          <!-- Добавим отступы с помощью mx-2 -->
          <div class="mb-2">
            <img
              class="rounded-xl object-contain h-72"
              src="../../public/img/films/No Time To Die.jpg"
              alt=""
            />
          </div>
          <div class="font-medium">
            <h3>No Time To Die</h3>
          </div>
          <div>
            <RowRating />
          </div>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import RowRating from './RowRating.vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const slidesToShow = computed(() => {
  const width = window.innerWidth
  if (width < 600) {
    return 1.7 // Мобильные устройства
  } else if (width < 900) {
    return 2.5 // Планшеты
  } else {
    return 4 // Десктопы
  }
})
</script>

<style scoped>
.carousel__slide {
  justify-content: start;
}

ol {
  gap: 20px;
}
</style>
