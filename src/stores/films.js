import { ref, reactive, computed, onMounted } from 'vue'
import { defineStore } from 'pinia'
import http from '../http-common'
import { DateTime } from 'luxon'
import axios from 'axios'

export const useFilms = defineStore('films', () => {
  const films = ref([])

  const loadingFilms = ref(true)
  const loadingMovieDetails = ref(true)
  const selectedMovie = ref(null)
  const typeFilms = ref('Now Showing')
  const homeSearchQuery = ref('')
  const exploreSearchQuery = ref('')

  const getFilms = async () => {
    loadingFilms.value = true
    try {
      const { data } = await http.get('/movies')
      films.value = data
    } catch (err) {
      console.log(err)
    } finally {
      loadingFilms.value = false
    }
  }

  // const clearSearchQuery = () => {
  //   searchQuery.value = ''
  // }

  const getMovieDetails = async (id) => {
    loadingMovieDetails.value = true
    try {
      const movie = films.value.find((item) => item.id == id)
      if (movie) {
        selectedMovie.value = movie
      } else {
        const { data } = await http.get(`/movies/${id}`)
        selectedMovie.value = data
      }
    } catch (err) {
      console.log(err)
    } finally {
      loadingMovieDetails.value = false
    }
  }

  const getUpcomingFilms = computed(() => {
    const nowDate = DateTime.local()
    if (films) {
      const upcomingFilms = films.value.filter((item) => {
        const release = DateTime.fromISO(item.release_date)
        if (release > nowDate) {
          return item
        }
      })
      return upcomingFilms
    }
  })

  const getNowShowingFilms = computed(() => {
    const nowDate = DateTime.local()
    if (films) {
      const upcomingFilms = films.value.filter((item) => {
        const release = DateTime.fromISO(item.release_date)
        if (release < nowDate) {
          return item
        }
      })
      return upcomingFilms
    }
  })

  return {
    films,
    homeSearchQuery,
    exploreSearchQuery,
    loadingFilms,
    typeFilms,
    getFilms,
    getUpcomingFilms,
    getNowShowingFilms,
    getMovieDetails,
    selectedMovie,
    loadingMovieDetails
  }
})
