import { jobOpenings, type IJobOpening } from '@/_homework/job-openings'
import { type IDepartment, departments } from '@/_homework/departments'
import type { IDepartmentWithJobOpenings } from './job-openings.types'

export const useJobOpeningsStore = defineStore('jobOpeningsStore', () => {
  const jobOpeningStore = shallowRef<IJobOpening[]>(jobOpenings)
  const departmentStore = shallowRef<IDepartment[]>(departments)

  const departmentFilter = ref<string[]>([])

  const departmentsWithJobOpenings = computed<IDepartmentWithJobOpenings[]>(() => {
    const list = departmentStore.value
      .reduce((acc, curr) =>
        ({ ...acc, [curr.value]: { ...curr, jobOpenings: [] } }), {} as Record<string, IDepartmentWithJobOpenings>
      )

    const other: IDepartmentWithJobOpenings = {
      name: 'Other',
      value: 'other',
      jobOpenings: []
    }

    for (const job of jobOpeningStore.value) {
      if (job.departments.length === 0) {
        other.jobOpenings.push(job)
        continue
      }

      for (const dep of job.departments) {
        if (list[dep]) {
          list[dep].jobOpenings.push(job)
        }
      }
    }

    return [...Object.values(list), other].sort((a, b) => a.name.localeCompare(b.name))
  })

  const filteredDepartments = computed<IDepartmentWithJobOpenings[]>(() => {
    return departmentsWithJobOpenings.value.filter(item => {
      if (item.jobOpenings.length === 0) return false
      if (departmentFilter.value.length === 0) return true
      return departmentFilter.value.includes(item.value)
    })
  })

  const filteredJobAmount = computed(() => {
    return Object.keys(filteredDepartments.value.reduce((acc, curr) => {
      for (const item of curr.jobOpenings) {
        if (acc[item.id]) {
          acc[item.id]++
        } else acc[item.id] = 0
      }
      return acc
    }, {} as Record<string, number>)).length
  })

  const departmentsOptions = computed<IOption[]>(() => {
    return filteredDepartments.value.map(e => ({ label: e.name, value: e.value }))
  })

  return {
    jobOpeningStore,
    departmentStore,
    departmentsOptions,
    filtered: reactive({
      filter: departmentFilter,
      list: filteredDepartments,
      amount: filteredJobAmount
    }),
    departmentsWithJobOpenings
  }
})
