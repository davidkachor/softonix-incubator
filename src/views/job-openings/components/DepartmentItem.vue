<template>
  <article>
    <button class="flex items-center gap-2" @click="toggleShowAll">
      <IconArrow :class="{'rotate-180': showAll}" class="w-3 h-3 transition" />
      <h2 class="font-bold">{{ item.name }} ({{ item.jobOpenings.length }})</h2>
    </button>

    <ul v-show="showAll">
      <li
        v-for="(job, index) of item.jobOpenings"
        v-show="showMore || index < 5"
        :key="job.id"
        class="flex gap-2 items-center"
      >
        <span
          :class="{'bg-red-600': job.isClosed, 'bg-green-600 ': !job.isClosed}"
          class="min-w-[10px] h-[10px] rounded-full"
        />
        <a class="text-blue-800 hover:underline" :href="job.url">{{ job.title }}</a>
      </li>
      <button
        v-if="showButton"
        class="text-blue-800 font-bold hover:underline"
        @click="showMore = true"
      >
        See more
      </button>
    </ul>
  </article>
</template>

<script setup lang="ts">
import type { IDepWithJobs } from '../job-openings.types'

const props = defineProps<{
  item: IDepWithJobs
}>()

const showMore = ref(false)
const showAll = ref(true)

const showButton = computed(() => !showMore.value && props.item.jobOpenings.length > 5 && showAll.value)

function toggleShowAll () {
  showAll.value = !showAll.value
  showMore.value = false
}
</script>
