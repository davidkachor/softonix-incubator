<template>
  <h1 class="font-bold text-[30px] mb-3">Job Openings</h1>
  <h3 class="mb-3">Departmets:</h3>
  <AppDropdown v-model="filtered.filter" :options="departmentsOptions" multiple />
  <p class="my-3">
    Showing <strong>{{ openedAmount }}</strong> job openings
  </p>
  <hr class="border-gray-medium mb-3">

  <section class="flex flex-col gap-2">
    <DepartmentItem v-for="dep of filtered.list" :key="dep.value" :item="dep" />
  </section>
</template>

<script setup lang="ts">
const { departmentsOptions, jobOpeningStore, filtered } = useJobOpeningsStore()
const openedAmount = computed(() => {
  return filtered.filter.length === 0
    ? jobOpeningStore.length
    : `${filtered.amount} out of ${jobOpeningStore.length}`
})
</script>
