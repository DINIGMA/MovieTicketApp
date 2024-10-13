<template>
  <div class="mx-auto mb-4 w-64 md:mx-0">
    <AnimatedPlaceholder width="100%" height="382px" borderRadius="12px"></AnimatedPlaceholder>
  </div>
  <div class="flex flex-col items-start mb-4">
    <div class="mb-2">
      <AnimatedPlaceholder width="200px" height="100%" borderRadius="6px"></AnimatedPlaceholder>
    </div>
    <div class="">
      <AnimatedPlaceholder width="240px" height="100%" borderRadius="6px"></AnimatedPlaceholder>
    </div>
  </div>
  <div class="flex items-start gap-x-3 gap-y-2 flex-wrap mb-8">
    <div class="rounded-lg" v-for="item of 3" :key="item">
      <AnimatedPlaceholder width="90px" height="100%" borderRadius="6px"></AnimatedPlaceholder>
    </div>
  </div>
  <div class="mb-6">
    <div class="mb-3">
      <AnimatedPlaceholder width="200px" height="100%" borderRadius="6px"></AnimatedPlaceholder>
    </div>
    <div class="text-container">
      <AnimatedPlaceholder width="264px" height="80px" borderRadius="6px"></AnimatedPlaceholder>
    </div>
  </div>
  <AnimatedPlaceholder width="100%" height="57px" borderRadius="6px"></AnimatedPlaceholder>
</template>

<script setup>
import AnimatedPlaceholder from './AnimatedPlaceholder.vue'
</script>

<style></style>
