<template>
  <div>
    <div class="flex justify-between mb-3">
      <h2 class="font-semibold text-xl">Cinema Near You</h2>
      <button class="text-button text-sm">See all</button>
    </div>
    <div class="flex flex-col gap-5">
      <div
        class="flex items-center justify-between"
        v-for="{ id, name, grade } of cinemas"
        :key="id"
      >
        <div class="flex items-center gap-3">
          <img
            :src="`../../../public/img/cinemas/${name}.jpg`"
            :alt="name"
            class="rounded-xl object-contain"
            style="height: 76px; width: 76px"
          />
          <div class="flex flex-col">
            <div class="flex items-center">
              <LocationIcon></LocationIcon>
              <p class="text-blue-400">5,2 Kilometers</p>
            </div>
            <h4>{{ name }}</h4>
            <span class="text-gray-200 text-xs">Closed 10.00 PM</span>
          </div>
        </div>
        <div class="flex items-center gap-1">
          <StarReating></StarReating>
          <span class="text-gray-200">{{ grade }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import StarReating from '../UI-components/StarReating.vue'
import LocationIcon from '../UI-components/LocationIcon.vue'

defineProps({
  cinemas: Array
})
</script>

<style scoped>
.star {
  width: 30px; /* Ширина звездочки */
  height: 30px; /* Высота звездочки */
}
</style>
