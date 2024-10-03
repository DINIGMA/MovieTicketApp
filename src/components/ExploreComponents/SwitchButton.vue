<template>
  <div class="flex items-center gap-4 bg-bgButton p-3 rounded-xl">
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
        checked
        type="radio"
        name="toggle"
        id="2"
        class="hidden"
        value="Upcoming"
        v-model="modelValue"
      />
      <label class="radio-label py-3 px-2 rounded-md w-full block" for="2">Upcoming</label>
    </div>
    <!-- <div class="flex justify-center items-center py-3 px-2 rounded-md text-center w-full">
      <input
        type="radio"
        name="toggle"
        id="2"
        class="hidden"
        value="Upcoming"
        v-model="modelValue"
      />
      <label class="radio-label" for="2">Upcoming</label>
    </div> -->

    <!-- <div class="space-x-4">
      <input type="radio" id="option1" name="options" class="hidden" checked />
      <label
        for="option1"
        class="radio-label px-4 py-2 rounded-lg bg-blue-500 text-white cursor-pointer"
        >Опция 1</label
      >

      <input type="radio" id="option2" name="options" class="hidden" />
      <label
        for="option2"
        class="radio-label px-4 py-2 rounded-lg bg-green-500 text-white cursor-pointer"
        >Опция 2</label
      >
    </div> -->

    <!-- <button
      class="active flex justify-center items-center py-3 px-2 rounded-md text-center w-full"
      :class="[{ active: abc }]"
      @change="toggleOptions()"
    >
      Now Showing
    </button>
    <button
      class="active flex justify-center items-center py-3 px-2 rounded-md w-full"
      @change="toggleOptions()"
    >
      Upcoming
    </button> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'

const modelValue = defineModel()
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
