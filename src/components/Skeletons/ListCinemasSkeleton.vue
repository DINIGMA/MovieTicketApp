<template>
  <div>
    <div class="flex justify-between mb-3">
      <h2 class="font-semibold text-xl">Cinema Near You</h2>
      <button class="text-button text-sm">See all</button>
    </div>
    <div class="flex flex-col gap-5">
      <div class="flex items-center justify-between" v-for="skeleton in 3" :key="skeleton">
        <div class="flex items-center gap-3">
          <AnimatedPlaceholder width="78px" height="78px" borderRadius="12px"></AnimatedPlaceholder>
          <div class="flex flex-col w-32">
            <div class="flex items-center">
              <AnimatedPlaceholder
                width="80%"
                height="100%"
                borderRadius="6px"
                class="mb-1"
              ></AnimatedPlaceholder>
            </div>
            <AnimatedPlaceholder width="95%" borderRadius="6px" class="mb-1"></AnimatedPlaceholder>
            <AnimatedPlaceholder width="70%" height="16px" borderRadius="6px"></AnimatedPlaceholder>
          </div>
        </div>
        <div class="flex items-center gap-1">
          <AnimatedPlaceholder width="50px" borderRadius="6px"></AnimatedPlaceholder>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AnimatedPlaceholder from './AnimatedPlaceholder.vue'
</script>

<style></style>
