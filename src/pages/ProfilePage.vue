<template>
  <div class="container mx-auto px-7 pt-7">
    <Header :title="'Profile'"></Header>
    <RowSettings></RowSettings>
  </div>
</template>

<script setup>
import RowSettings from '@/components/ProfileComponents/RowSettings.vue'
import Header from '@/components/Header.vue'
import router from '@/router'

const goBackPage = () => {
  router.go(-1)
}
</script>

<style></style>
