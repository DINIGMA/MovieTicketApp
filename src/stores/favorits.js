import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import http from '../http-common'

export const useFavorits = defineStore('favorits', () => {
  const userId = JSON.parse(localStorage.getItem('user'))?.id
  const favorits = ref()
  const favoritsResponse = ref()

  const getUserFavorits = async () => {
    console.log(111)
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

  const addToFavorits = async (movieId) => {
    if (userId) {
      if (!favorits.value.includes(movieId)) {
        favorits.value.push(movieId)
        await updateFavorits()
      }
    }
  }

  const removeFromFavorits = async (movieId) => {
    if (userId) {
      favorits.value = favorits.value.filter((id) => id != movieId)
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
