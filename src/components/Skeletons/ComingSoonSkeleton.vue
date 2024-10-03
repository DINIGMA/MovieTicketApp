<template>
  <div>
    <div class="mb-2">
      <AnimatedPlaceholder width="75%" height="30px" borderRadius="6px"></AnimatedPlaceholder>
    </div>
    <div class="flex flex-col items-start w-full h-60">
      <div class="mb-1 h-44 w-full">
        <AnimatedPlaceholder width="100%" height="100%" borderRadius="12px"></AnimatedPlaceholder>
      </div>
      <div class="mb-1 w-full">
        <AnimatedPlaceholder width="50%" height="30px" borderRadius="6px"></AnimatedPlaceholder>
      </div>
      <AnimatedPlaceholder width="25%" height="20px" borderRadius="6px"></AnimatedPlaceholder>
    </div>
  </div>
</template>

<script setup>
import AnimatedPlaceholder from './AnimatedPlaceholder.vue'
</script>

<style></style>
