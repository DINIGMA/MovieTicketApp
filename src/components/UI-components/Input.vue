<template>
  <input
    type="text"
    v-model="modelValue"
    class="px-6 py-4 bg-transparent w-full border border-graySlate focus:outline-none rounded-lg"
  />
</template>

<script setup>
const modelValue = defineModel()
</script>

<style scoped>
input {
  color: #b2b5bb;
  font-size: 14px;
  font-weight: 500;
}
input::placeholder {
  color: #b2b5bb;
  font-size: 14px;
}
</style>
