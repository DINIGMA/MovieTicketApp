<template>
  <div class="container mx-auto px-7 pt-7">
    <Header :title="'Personal Data'"></Header>
  </div>
</template>

<script setup>
import PrevArrow from '@/components/UI-components/icons/PrevArrow.vue'
import Header from '@/components/Header.vue'
import router from '@/router'

const goBackPage = () => {
  router.go(-1)
}
</script>

<style></style>
