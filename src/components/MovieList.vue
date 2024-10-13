<template>
  <div>
    <div
      class="flex items-center justify-center md:justify-start flex-wrap gap-x-4 gap-y-4"
      v-auto-animate
    >
      <div v-for="{ id, title, grade } of films" :key="id">
        <RouterLink :to="`/details/${id}`">
          <div class="flex flex-col items-start w-64 md:w-48 md:h-72 card">
            <div class="mb-2 w-64 h-80 md:w-48 md:h-72">
              <img
                class="rounded-xl w-full h-full object-cover"
                :src="`../../public/img/films/${title}.jpg`"
                :alt="title"
              />
            </div>
            <div class="font-medium overflow-hidden">
              <h3 class="line-clamp-2">{{ title }}</h3>
            </div>
            <div>
              <RowRating :name="title" :rating="grade" />
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import RowRating from './RowRating.vue'
defineProps({
  films: Array
})
</script>

<style scoped>
.card {
  height: 100%;
}
.line-clamp-2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 1;
}
</style>
