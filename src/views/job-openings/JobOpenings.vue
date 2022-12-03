<template>
  <JobOpeningsFilter />

  <section class="flex flex-col gap-2">
    <DepartmentItem v-for="dep of filtered.list" :key="dep.value" :item="dep" />
  </section>
</template>

<script setup lang="ts">
const { filtered } = useJobOpeningsStore()

</script>
