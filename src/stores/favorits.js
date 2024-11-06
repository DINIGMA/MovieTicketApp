import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import http from '../http-common'

export const useFavorits = defineStore('favorits', () => {
  const userId = JSON.parse(localStorage.getItem('user'))?.id
  const favorits = ref()
  const favoritsResponse = ref()

  const getUserFavorits = async () => {
    try {
      if (userId) {
        const { data } = await http.get(`/favorits?user_id=${userId}`)
        if (!data.length) {
          await createUserWithEmptyBookmarks()
        } else {
          favorits.value = data[0].favorits
          favoritsResponse.value = data[0]
        }
      }
    } catch (err) {
      console.log(err)
    }
  }

  const addToFavorits = async (movie) => {
    if (userId) {
      const findMovie = favorits.value.find((item) => item.id == movie.id)
      if (!findMovie) {
        favorits.value.push(movie)
        await updateFavorits()
      }
    }
  }

  const removeFromFavorits = async (movie) => {
    if (userId) {
      console.log(111)
      favorits.value = favorits.value.filter((item) => item.id != movie.id)
      await updateFavorits()
    }
  }

  const updateFavorits = async (movie) => {
    try {
      const { data } = await http.patch(
        `/favorits/${favoritsResponse.value.id}`,
        {
          favorits: favorits.value
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          }
        }
      )
    } catch (err) {
      console.log(err)
    }
  }

  const createUserWithEmptyBookmarks = async () => {
    try {
      const { data } = await http.post('/favorits', {
        user_id: userId,
        favorits: []
      })
      await getUserFavorits()
    } catch (error) {
      console.error('Ошибка при создании пользователя:', error)
    }
  }

  return {
    favorits,
    getUserFavorits,
    createUserWithEmptyBookmarks,
    addToFavorits,
    removeFromFavorits
  }
})
