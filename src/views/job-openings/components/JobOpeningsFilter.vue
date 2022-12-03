<template>
  <h1 class="font-bold text-[30px] mb-3">Job Openings</h1>
  <h3 class="mb-3">Departmets:</h3>
  <AppDropdown v-model="filtered.filter" :options="departmentsOptions" multiple />
  <p class="my-3">
    Showing <strong>{{ openedAmount }}</strong> job openings
  </p>
  <hr class="border-gray-medium mb-3">
</template>

<script setup lang="ts">
const { filtered, jobOpeningStore, departmentsOptions } = useJobOpeningsStore()

const openedAmount = computed(() => filtered.filter.length === 0
  ? jobOpeningStore.length
  : `${filtered.amount} out of ${jobOpeningStore.length}`)
</script>
