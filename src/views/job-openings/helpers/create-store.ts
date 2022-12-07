import type { IJobOpening } from '@/_homework/job-openings'
import type { IDepartment } from '@/_homework/departments'
import type { TDepWithJobsList } from '../job-openings.types'

// function, which refactors departments and job openings as object with key value as department value
// and value, which includes job openings

export function createStore (departments: IDepartment[], jobOpenings: IJobOpening[]): TDepWithJobsList {
  // sort the departmets array by name

  const sorted = departments.sort((a, b) => a.name.localeCompare(b.name))

  // refactor sorted array as TDepWithJobsList object

  const refactored = sorted.reduce((acc, curr) => {
    if (!acc[curr.value]) acc[curr.value] = { name: curr.name, show: false, jobOpenings: [] }
    return acc
  }, {} as TDepWithJobsList)

  // add "Other"

  refactored.other = {
    name: 'Other',
    jobOpenings: [],
    show: false
  }

  // loop over jobOpenings and add them to right department

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
