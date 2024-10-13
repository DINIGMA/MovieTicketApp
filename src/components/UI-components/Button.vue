<template>
  <button class="py-4 w-full md:w-1/2 bg-buttonActive rounded-xl">{{ buttonText }}</button>
</template>

<script setup>
defineProps({
  buttonText: String
})
</script>

<style></style>
