<template>
  <div class="flex flex-col gap-4 mb-10">
    <div>
      <span class="block text-xs mb-2">Cinemas</span
      ><Multiselect
        v-model="cinema"
        :options="cinemas"
        label="name"
        placeholder="Pick at least one"
        :show-labels="false"
      ></Multiselect>
    </div>
    <div class="flex gap-8">
      <div class="w-full">
        <span class="block text-xs mb-2">Date</span
        ><Multiselect
          v-model="date"
          :options="availableDate"
          placeholder=""
          :show-labels="false"
        ></Multiselect>
      </div>
      <div class="w-full">
        <span class="block text-xs mb-2">Time</span
        ><Multiselect
          v-model="time"
          :options="availableTime"
          placeholder=""
          :show-labels="false"
        ></Multiselect>
      </div>
    </div>
  </div>
  <div class="flex flex-col justify-center items-center mb-12">
    <Screen></Screen>
    <div>{{ selectedShowtimes }}</div>
  </div>
  <div class="flex items-center justify-between">
    <div class="flex items-center">
      <span class="bg-buttonActive rounded-full h-3 w-3 mr-3"></span>
      <p class="text-xs font-regular text-textLight">Selected</p>
    </div>
    <div class="flex items-center">
      <span class="bg-accentRed rounded-full h-3 w-3 mr-3"></span>
      <p class="text-xs font-regular text-textLight">Reserved</p>
    </div>
    <div class="flex items-center">
      <span class="border border-graySlate rounded-full h-3 w-3 mr-3"></span>
      <p class="text-xs font-regular text-textLight">Available</p>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import Multiselect from 'vue-multiselect'
import Screen from '../UI-components/icons/Screen.vue'
import { useShowtimes } from '@/stores/showtimes'
import { storeToRefs } from 'pinia'
import { DateTime } from 'luxon'

const showtimesStore = useShowtimes()
const { showtimes } = storeToRefs(showtimesStore)

const props = defineProps({
  id: String
})

const cinema = ref('')
const date = ref('')
const time = ref('')

const cinemas = computed(() => {
  if (showtimes.value) {
    const uniqueCinemas = Array.from(
      new Set(showtimes.value.map((item) => JSON.stringify(item.cinema)))
    ).map((item) => JSON.parse(item))
    return uniqueCinemas
  }
})

const availableDate = computed(() => {
  if (cinema.value) {
    const dates = showtimes.value
      .filter((item) => item.cinema.name == cinema.value.name)
      .map((item) => DateTime.fromISO(item.start_time).toFormat('dd LLL yyyy'))
    return Array.from(new Set(dates))
  }
  return []
})

const availableTime = computed(() => {
  if (cinema.value && date.value) {
    return showtimes.value
      .filter((item) => {
        const showtimeDate = DateTime.fromISO(item.start_time).toFormat('dd LLL yyyy')
        return item.cinema.name == cinema.value.name && showtimeDate == date.value
      })
      .map((item) => DateTime.fromISO(item.start_time).toFormat('HH:mm'))
  }
  return []
})

const selectedShowtimes = computed(() => {
  if (cinema.value && date.value && time.value) {
    const selectedDateTime = DateTime.fromFormat(date.value + ' ' + time.value, 'dd MMM yyyy HH:mm')
    const selected = showtimes.value.find((item) => {
      const showtimeDate = DateTime.fromISO(item.start_time)
      console.log(item.cinema.name)
      console.log(showtimeDate.toISO())
      return (
        item.cinema.name == cinema.value.name && showtimeDate.toISO() === selectedDateTime.toISO()
      )
    })
    return selected
  }
  return null
})

watch([cinema, availableDate], () => {
  date.value = ''
  time.value = ''
})

watch(date, () => {
  time.value = ''
})

onMounted(async () => {
  showtimesStore.getShowtimesMovie(props.id)
})
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
.multiselect {
  color: #b2b5bb;
  font-size: 12px;
}

.multiselect__tags {
  min-height: 48px;
  display: block;
  padding: 13px 40px 13px 24px;
  border-radius: 10px;
  border: 1px solid rgba(178, 181, 187, 0.5);
  background: transparent;
  font-size: 12px;
  font-weight: 500;
}

.multiselect__placeholder {
  font-size: 14px;
  padding: 0;
  margin: 0;
}

.multiselect__tags > input {
  background: transparent;
}

.multiselect__tags > input::placeholder {
  color: #b2b5bb;
  font-size: 14px;
  opacity: 0;
}

.multiselect__select {
  top: 8px;
}

.multiselect__single {
  padding: 0;
  margin: 0;
  background: transparent;
  font-size: inherit;
}

.multiselect__content-wrapper {
  border: 1px solid rgba(178, 181, 187, 0.5);
  background: #1b1e25;
}

.multiselect__input {
  padding: 0;
  margin: 0;
  font-size: 14px;
}
</style>
