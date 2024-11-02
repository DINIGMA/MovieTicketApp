<template>
  <button
    class="py-4 w-full md:w-1/2 bg-buttonActive rounded-xl transition-all active:opacity-70"
    :class="{ 'bg-main': isDark }"
  >
    {{ buttonText }}
  </button>
</template>

<script setup>
defineProps({
  buttonText: String,
  isDark: {
    type: Boolean,
    default: false
  }
})
</script>

<style></style>
