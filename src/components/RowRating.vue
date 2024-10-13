<template>
  <div class="flex gap-1">
    <StarReating
      v-for="index in 5"
      :key="index"
      :index="index"
      :name="name.replace(/\s/g, '')"
      :filled="filledStar(index)"
    ></StarReating>
  </div>
</template>

<script setup>
import StarReating from './UI-components/StarReating.vue'
import { ref } from 'vue'

const props = defineProps({
  rating: {
    type: Number,
    default: null
  },
  name: {
    type: String,
    default: ''
  }
})

const filledStar = (index) => {
  if (props.rating !== null) {
    const ratingInteger = Math.floor(props.rating)
    const ratingFraction = props.rating - ratingInteger

    if (index <= ratingInteger) {
      return 1
    } else if (index === ratingInteger + 1) {
      return ratingFraction
    }
    return 0
  }
}
</script>

<style></style>
