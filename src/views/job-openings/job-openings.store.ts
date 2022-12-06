import { jobOpenings } from '@/_homework/job-openings'
import { departments } from '@/_homework/departments'
import type { TDepWithJobsList } from './job-openings.types'

export const useJobOpeningsStore = defineStore('jobOpeningsStore', () => {
  const store = ref<TDepWithJobsList>(createStore())

  const selected = ref<string[]>([])

  const depOptions = computed(() => {
    const options: IOption[] = []

    for (const dep in store.value) {
      if (store.value[dep].jobOpenings.length !== 0) options.push({ label: store.value[dep].name, value: dep })
    }

    return options
  })

  const filteredStore = computed(() => {
    if (selected.value.length === 0) return { ...store.value }

    return selected.value.sort((a, b) => a.localeCompare(b)).reduce((acc, curr) => {
      return { ...acc, [curr]: store.value[curr] }
    }, {} as TDepWithJobsList)
  })

  // watch(() => selected.value, value => {
  //   Object.keys(store.value).forEach(key => {
  //     if (value.includes(key)) {
  //       store.value[key].show = true
  //     } else store.value[key].show = false
  //   })
  // })

  function createStore (): TDepWithJobsList {
    console.log('created')
    const sorted = departments.sort((a, b) => a.name.localeCompare(b.name))

    const refactored = sorted.reduce((acc, curr) => {
      if (!acc[curr.value]) acc[curr.value] = { name: curr.name, show: true, jobOpenings: [] }
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
      } else {
        job.departments.forEach(dep => {
          if (refactored[dep]) {
            refactored[dep].jobOpenings.push(job)
          }
        })
      }
    }

    return refactored
  }

  return {
    jobs: filteredStore,
    selected,
    depOptions
  }
})
