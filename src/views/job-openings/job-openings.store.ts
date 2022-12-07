import { jobOpenings } from '@/_homework/job-openings'
import { departments } from '@/_homework/departments'
import type { TDepWithJobsList } from './job-openings.types'

import { createStore } from './helpers'

export const useJobOpeningsStore = defineStore('jobOpeningsStore', () => {
  const store = ref<TDepWithJobsList>(createStore(departments, jobOpenings))

  const selected = ref<string[]>([])

  const filteredStore = computed(() => {
    if (selected.value.length === 0) return store.value

    return selected.value.sort((a, b) => a.localeCompare(b)).reduce((acc, curr) => {
      return { ...acc, [curr]: store.value[curr] }
    }, {} as TDepWithJobsList)
  })

  const maxAmount = computed(() => {
    return jobOpenings.length
  })

  const actualAmount = computed(() => {
    const allJobs: unknown[] = []

    for (const dep in filteredStore.value) {
      allJobs.push(...filteredStore.value[dep].jobOpenings)
    }
    // return amount of unique ones
    return [...new Set(allJobs)].length
  })

  const depOptions = computed(() => {
    // creates options for dropdown

    const options: IOption[] = []

    for (const dep in store.value) {
      if (store.value[dep].show) options.push({ label: store.value[dep].name, value: dep })
    }

    return options
  })

  return {
    list: filteredStore,
    maxAmount,
    actualAmount,
    filter: selected,
    depOptions
  }
})
