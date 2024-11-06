import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import http from '../http-common'

export const useTicket = defineStore('ticket', () => {
  const userTickets = ref()
  const selectedTicket = ref()

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

  const getTicketsByUser = async () => {
    const user = JSON.parse(localStorage.getItem('user'))
    try {
      const { data } = await http.get(`/tickets?_relations=cinemas,movies,halls&user_id=${user.id}`)
      userTickets.value = data
    } catch (err) {
      console.log(err)
    }
  }

  const getTicketDetails = async (ticketId) => {
    loading.value = true
    try {
      if (userTickets.value) {
        const ticket = userTickets.value.find((item) => item.id == ticketId)
        if (ticket) {
          selectedTicket.value = ticket
        }
      } else {
        const { data } = await http.get(`/tickets?_relations=movies,halls,cinemas&id=${ticketId}`)
        selectedTicket.value = data[0]
      }
    } catch (err) {
      console.log(err)
    } finally {
      loading.value = false
    }
  }

  return {
    userTickets,
    loading,
    selectedTicket,
    createOrder,
    getTicketsByUser,
    getTicketDetails
  }
})
