import type { IDepartment } from '@/_homework/departments'
import type { IJobOpening } from '@/_homework/job-openings'

export interface IDepartmentWithJobOpenings {
  value: IDepartment['value']
  name: IDepartment['name']
  jobOpenings: IJobOpening[]
}
