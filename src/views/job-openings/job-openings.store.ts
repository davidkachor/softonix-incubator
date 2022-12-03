import { jobOpenings, type IJobOpening } from '@/_homework/job-openings'
import { type IDepartment, departments } from '@/_homework/departments'
import type { IDepartmentWithJobOpenings } from './job-openings.types'

export const useJobOpeningsStore = defineStore('jobOpeningsStore', () => {
  const jobOpeningStore = shallowRef<IJobOpening[]>(jobOpenings)
  const departmentStore = shallowRef<IDepartment[]>(departments)

  const sortedJobOpenings = computed<IDepartmentWithJobOpenings[]>(() => {
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

  const departmentsOptions = computed<IOption[]>(() => {
    return [...departmentStore.value.map(e => ({ value: e.value, label: e.name })), { label: 'Other', value: 'other' }]
  })

  return { jobOpeningStore, departmentsStore: departmentStore, departmentsOptions, sortedJobOpenings }
})
