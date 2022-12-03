<template>
  <AppDropdown v-model="randomModelValue" :options="departmentsOptions" multiple />
</template>

<script setup lang="ts">
import { useJobOpeningsStore } from './job-openings.store'

const { departmentsOptions, departmentsStore } = useJobOpeningsStore()
const randomModelValue = ref([departmentsStore[2].value, departmentsStore[20].value])

</script>
