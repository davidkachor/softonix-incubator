import type { IDepartment } from '@/_homework/departments'
import type { IJobOpening } from '@/_homework/job-openings'

export interface IDepWithJobs {
  name: IDepartment['name']
  jobOpenings: IJobOpening[]
  show: boolean
}

export type TDepWithJobsList = Record<IDepartment['value'], IDepWithJobs>
