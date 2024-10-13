<template>
  <div class="mx-auto justify-center mb-4 w-64 md:mx-0">
    <img
      :src="`/public/img/films/${movie.title}.jpg`"
      class="object-contain w-full h-auto rounded-2xl"
      :alt="movie?.id"
    />
  </div>
  <div class="flex flex-col items-start mb-3">
    <div class="mb-2">
      <h2 class="text-xl font-medium">{{ movie.title }}</h2>
    </div>
    <div class="flex items-center gap-2">
      <p class="text-gray-200 font-light text-sm">Director: Destin Daniel Cretton</p>
      <span class="text-button">|</span>
      <div class="flex items-center gap-1">
        <StarReating></StarReating>
        <span class="text-gray-200 text-sm">{{ movie.grade }}</span>
      </div>
    </div>
  </div>
  <div class="flex gap-x-3 gap-y-2 flex-wrap mb-7">
    <div
      class="bg-bgDark text-textLight px-3 py-1 rounded-lg"
      v-for="item of movie.genres"
      :key="item"
    >
      {{ item }}
    </div>
  </div>
  <div class="mb-6">
    <h3 class="text-xl font-medium mb-2">Synopsis</h3>
    <div class="text-container">
      <p class="inline font-light text-sm text-lak-100 truncate1" v-if="!isExpanded">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam veritatis ratione
        necessitatibus, unde sequi assumenda cupiditate ad odit pariatur commodi iste magni
        provident voluptatibus fuga molestiae sunt dolores ducimus. Voluptatem.
      </p>
      <p v-else class="inline font-light text-sm text-lak-100">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam veritatis ratione
        necessitatibus, unde sequi assumenda cupiditate ad odit pariatur commodi iste magni
        provident voluptatibus fuga molestiae sunt dolores ducimus. Voluptatem.
      </p>
      <span class="font-light text-sm text-buttonActive" @click="toggleExpand()">{{
        buttonText
      }}</span>
    </div>
  </div>
  <Button :buttonText="'Book Ticket'"></Button>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import StarReating from './UI-components/StarReating.vue'
import Button from './UI-components/Button.vue'

const props = defineProps({
  movie: Object
})

const isExpanded = ref(false)

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value
}

const buttonText = computed(() => (isExpanded.value ? 'Show less' : 'Read more'))
</script>

<style>
.truncate1 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; /* Ограничение до 3 строк */
  overflow: hidden; /* Скрываем текст, который не помещается */
}
.text-container {
  /* Высота для 3 строк */
  overflow: hidden; /* Скрытие лишнего текста */
  position: relative;
}
</style>
