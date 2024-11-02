import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import http from '../http-common'

export const useTicket = defineStore('ticket', () => {
  const tickets = ref([])

  const loading = ref(false)
  const errors = ref()

  const createOrder = async (data) => {
    loading.value = true
    try {
      const response = await http.post('/tickets', data)
    } catch (err) {
      console.log(err)
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    createOrder
  }
})
