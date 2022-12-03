<template>
  <h1 class="font-bold text-[30px] mb-3">Job Openings</h1>
  <h3 class="mb-3">Departmets:</h3>
  <AppDropdown v-model="randomModelValue" :options="departmentsOptions" multiple />
  <p class="my-3">Showing <strong>{{ jobOpeningStore.length }}</strong> job openings</p>
  <hr class="border-gray-medium mb-3">

  <section class="flex flex-col gap-2">
    <DepartmentItem v-for="dep of sortedJobOpenings" :key="dep.value" :item="dep" />
  </section>
</template>

<script setup lang="ts">
const { departmentsOptions, departmentsStore, jobOpeningStore, sortedJobOpenings } = useJobOpeningsStore()
const randomModelValue = ref([departmentsStore[2].value, departmentsStore[20].value])
console.log(sortedJobOpenings)

</script>
