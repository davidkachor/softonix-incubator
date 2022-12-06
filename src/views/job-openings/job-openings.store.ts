import { jobOpenings } from '@/_homework/job-openings'
import { departments } from '@/_homework/departments'
import type { TDepWithJobsList } from './job-openings.types'

export const useJobOpeningsStore = defineStore('jobOpeningsStore', () => {
  const store = ref<TDepWithJobsList>(createStore())

  const filters = ref<string[]>([])

  const depOptions = computed(() => {
    const options: IOption[] = []

    for (const dep in store.value) {
      if (store.value[dep].show) options.push({ label: store.value[dep].name, value: dep })
    }

    return options
  })

  const filteredStore = computed(() => {
    if (filters.value.length === 0) return store.value

    return Object.keys(store.value).reduce((acc, curr) => {
      if (filters.value.includes(curr)) return { ...acc, [curr]: store.value[curr] }
      return acc
    }, {} as TDepWithJobsList)
  })

  function createStore (): TDepWithJobsList {
    console.log('created')
    const sorted = departments.sort((a, b) => a.name.localeCompare(b.name))

    const refactored = sorted.reduce((acc, curr) => {
      if (!acc[curr.value]) acc[curr.value] = { name: curr.name, show: false, jobOpenings: [] }
      return acc
    }, {} as TDepWithJobsList)

    refactored.other = {
      name: 'Other',
      jobOpenings: [],
      show: false
    }

    for (const job of jobOpenings) {
      if (job.departments.length === 0) {
        refactored.other.jobOpenings.push(job)
        refactored.other.show = true
      } else {
        job.departments.forEach(dep => {
          if (refactored[dep]) {
            refactored[dep].jobOpenings.push(job)
            refactored[dep].show = true
          }
        })
      }
    }

    return refactored
  }

  return {
    jobs: filteredStore,
    filters,
    depOptions
  }
})
