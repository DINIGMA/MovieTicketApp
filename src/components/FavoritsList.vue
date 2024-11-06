<template>
  <div>
    <div class="flex flex-wrap gap-8 items-end" v-auto-animate>
      <div v-for="movie in favorits" :key="movie.id" class="w-80 flex flex-col gap-6 flex-1">
        <router-link :to="{ path: `/details/${movie.id}` }">
          <div class="flex justify-between items-center">
            <div class="flex gap-14 items-center">
              <div class="flex flex-col">
                <span class="text-buttonActive text-xs font-regular">{{}}</span>
                <h3 class="text-base font-medium">{{ movie.title }}</h3>
                <span class="text-gray-200 font-light text-xs">2h 43m</span>
              </div>
              <div class="flex items-center gap-1">
                <StarReating></StarReating>
                <span class="text-gray-200 text-sm">{{ movie.grade }}</span>
              </div>
            </div>
            <NextArrow></NextArrow>
          </div>
        </router-link>
        <div class="flex justify-between">
          <Button :buttonText="'Checkout'" @click="goCheckout(movie.id)"></Button>
          <div
            class="flex justify-center items-center border border-buttonActive rounded-xl ml-5"
            style="padding: 15px 18px 16px 22px"
            @click="removeFromFavorits(movie)"
          >
            <img src="../../public/img/icons/Delete.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import NextArrow from './UI-components/icons/NextArrow.vue'
import StarReating from './UI-components/StarReating.vue'
import Button from './UI-components/Button.vue'

defineProps({
  favorits: Array,
  removeFromFavorits: Function,
  goCheckout: Function
})
</script>

<style></style>
