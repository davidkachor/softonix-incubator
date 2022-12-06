<template>
  <JobOpeningsFilter />

  <section class="flex flex-col gap-2">
    <DepartmentItem
      v-for="(item, value) of jobs"
      v-show="item.show && item.jobOpenings.length !== 0"
      :key="value"
      :item="item"
    />
  </section>
</template>

<script setup lang="ts">
const { jobs } = storeToRefs(useJobOpeningsStore())
</script>
