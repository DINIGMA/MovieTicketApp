import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import http from '../http-common'

export const useCinemas = defineStore('cinemas', () => {
  const cinemas = ref([])
  const loadingCinemas = ref(true)

  const getCinemas = async () => {
    loadingCinemas.value = true
    try {
      const { data } = await http.get('/cinemas')
      cinemas.value = data
    } catch (err) {
      console.log(err)
    } finally {
      loadingCinemas.value = false
    }
  }

  return {
    cinemas,
    loadingCinemas,
    getCinemas
  }
})
