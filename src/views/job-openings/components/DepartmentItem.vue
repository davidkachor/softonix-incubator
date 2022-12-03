<template>
  <article v-if="item.jobOpenings.length !== 0">
    <h2 class="font-bold">{{ item.name }} ({{ item.jobOpenings.length }})</h2>

    <ul>
      <li v-for="job of jobOpenings" :key="job.id" class="flex gap-2 items-center">
        <span :class="{'bg-red-600': job.isClosed, 'bg-green-600 ': !job.isClosed}" class="w-3 h-3 rounded-full" />
        <a class="text-blue-800 hover:underline" :href="job.url">{{ job.title }}</a>
      </li>
    </ul>
    <button
      v-if="(!fullyOpened && item.jobOpenings.length > 5)"
      class="text-blue-800 font-bold hover:underline"
      @click="fullyOpened = true"
    >
      See more
    </button>
  </article>
</template>

<script setup lang="ts">
import type { IDepartmentWithJobOpenings } from '../job-openings.types'
const props = defineProps<{
  item: IDepartmentWithJobOpenings
}>()

const fullyOpened = ref(false)

const jobOpenings = computed(() => {
  if (props.item.jobOpenings.length <= 5) {
    return props.item.jobOpenings
  }
  if (!fullyOpened.value) {
    return props.item.jobOpenings.slice(0, 5)
  }
  return props.item.jobOpenings
})
</script>
