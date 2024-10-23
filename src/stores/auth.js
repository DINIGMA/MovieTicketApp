import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import http from '../http-common'

export const useAuth = defineStore('auth', () => {
  const token = ref(localStorage.getItem('token') || null)
  const userInfo = ref(JSON.parse(localStorage.getItem('user')) || null)

  const error = ref('')
  const loading = ref(false)

  const signUp = async (user) => {
    error.value = ''
    loading.value = true
    try {
      const response = await http.post('/register', JSON.stringify(user))
      loading.value = false
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  const signIn = async (user) => {
    error.value = ''
    loading.value = true
    try {
      const { data } = await http.post('/auth', JSON.stringify(user))
      token.value = data.token
      userInfo.value = data.data
      localStorage.setItem('token', token.value)
      localStorage.setItem('user', JSON.stringify(data.data))
    } catch (err) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  const logout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    userInfo.value = null
    token.value = null
  }

  const isAuth = computed(() => (userInfo.value && token.value ? true : false))

  return {
    token,
    userInfo,
    isAuth,
    signUp,
    signIn,
    logout,
    error,
    loading
  }
})
