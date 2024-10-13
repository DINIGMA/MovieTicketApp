<template>
  <div class="flex items-center gap-4 bg-bgButton p-3 rounded-xl r-all">
    <div class="w-full text-center">
      <input
        checked
        type="radio"
        name="toggle"
        id="1"
        class="hidden"
        value="Now Showing"
        v-model="modelValue"
      />
      <label class="radio-label py-3 px-2 rounded-md w-full block" for="1">Now Showing</label>
    </div>
    <div class="w-full text-center">
      <input
        type="radio"
        name="toggle"
        id="2"
        class="hidden"
        value="Upcoming"
        v-model="modelValue"
      />
      <label class="radio-label py-3 px-2 rounded-md w-full block" for="2">Upcoming</label>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const modelValue = defineModel()

const indicatorPosition = computed(() => {
  return modelValue.value === 'Now Showing' ? 0 : 100 // Позиции слайдера
})
</script>

<style scoped>
.active {
  background-color: #54a8e5;
}
.radio-label {
  transition: background-color 0.3s;
}

input[type='radio']:checked + label {
  background-color: #54a8e5; /* Цвет для родительского div */
}
</style>
