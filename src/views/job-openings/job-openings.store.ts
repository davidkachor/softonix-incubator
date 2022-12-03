import { jobOpenings, type IJobOpening } from '@/_homework/job-openings'
import { type IDepartment, departments } from '@/_homework/departments'

export const useJobOpeningsStore = defineStore('jobOpeningsStore', () => {
  const jobOpeningStore = shallowRef<IJobOpening[]>(jobOpenings)
  const departmentsStore = shallowRef<IDepartment[]>(departments)

  const departmentsOptions = computed<IOption[]>(() => {
    return departmentsStore.value.map(e => ({ value: e.value, label: e.name }))
  })

  return { jobOpeningStore, departmentsStore, departmentsOptions }
})
