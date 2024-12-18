import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import http from '../http-common'

export const useShowtimes = defineStore('showtimes', () => {
  const showtimes = ref([])
  const loadingShowtimes = ref(false)

  const selectedShowtime = ref()
  const selectedSeats = ref([])

  const getShowtimesMovie = async (movieId) => {
    loadingShowtimes.value = true
    try {
      const { data } = await http.get(
        `/showtimes?_relations=cinemas,halls&sortBy=start_time&movie_id=${movieId}`
      )
      showtimes.value = data
    } catch (err) {
      console.log(err)
    } finally {
      loadingShowtimes.value = false
    }
  }

  const selectShowtime = (showtime) => {
    selectedShowtime.value = showtime
  }

  const selectSeats = (seats) => {
    selectedSeats.value = seats
  }

  return {
    showtimes,
    selectedShowtime,
    selectedSeats,
    getShowtimesMovie,
    selectShowtime,
    selectSeats
  }
})
