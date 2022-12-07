<template>
  <h1 class="font-bold text-[30px] mb-3">Job Openings</h1>
  <h3 class="mb-3">Departmets:</h3>
  <AppDropdown v-model="filter" :options="depOptions" multiple />
  <p class="my-3">
    Showing <strong>{{ openedAmount }}</strong> job openings
  </p>
  <hr class="border-gray-medium mb-3">
</template>

<script setup lang="ts">
const { filter, maxAmount, actualAmount, depOptions } = storeToRefs(useJobOpeningsStore())

const openedAmount = computed(() => {
  return filter.value.length === 0
    ? maxAmount.value
    : `${actualAmount.value} out of ${maxAmount.value}`
})
</script>
