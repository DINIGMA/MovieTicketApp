import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import http from '../http-common'

export const useComingSoonFilms = defineStore('comingSoonFilms', () => {
  const comingFilms = ref([])
  const loadingComingFilms = ref(false)

  const getComingSoonFilms = async () => {
    loadingComingFilms.value = true
    try {
      const { data } = await http.get('/commingSoonFilms')
      comingFilms.value = data
    } catch (err) {
      console.log(err)
    } finally {
      loadingComingFilms.value = false
    }
  }

  return {
    comingFilms,
    loadingComingFilms,
    getComingSoonFilms
  }
})
