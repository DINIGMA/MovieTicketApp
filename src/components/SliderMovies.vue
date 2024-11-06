<template>
  <div class="flex flex-col">
    <Carousel
      :wrap-around="true"
      :snapAlign="'start'"
      :pagination-enabled="false"
      :breakpoints="breakPoints"
    >
      <Slide v-for="{ id, title, grade, genres } of films" :key="id">
        <RouterLink :to="`/details/${id}`"
          ><div class="flex flex-col items-start">
            <div class="mb-2">
              <img
                class="rounded-xl object-cover"
                :class="[height, width]"
                :src="`../../public/img/films/${title}.jpg`"
                :alt="title"
              />
            </div>
            <div class="font-medium">
              <h3 class="ellipsis text-left" :class="width">{{ title }}</h3>
            </div>
            <div>
              <RowRating v-if="isRating" :name="title" :rating="grade" />
              <p v-else class="text-gray-200 text-xs">{{ genres[0] }}</p>
            </div>
          </div></RouterLink
        >
      </Slide>
    </Carousel>
  </div>
</template>

<script setup>
import { computed, inject } from 'vue'
import { RouterLink } from 'vue-router'
import RowRating from './RowRating.vue'
import StarReating from './UI-components/StarReating.vue'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const props = defineProps({
  films: {
    type: Array,
    required: true
  },
  breakPoints: Object,
  height: {
    type: String
  },
  width: {
    type: String
  },
  isRating: Boolean
})
</script>

<style scoped>
.carousel__slide {
  justify-content: start;
}

.ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; /* Чтобы видеть границы контейнера */
}

ol {
  gap: 20px;
}
</style>
