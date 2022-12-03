import type { RouteRecordRaw } from 'vue-router'
import JobOpenings from './JobOpenings.vue'

export const jobOpeningsRouteNames = {
  jobOpenings: 'jobOpenings'
}

export const jobOpeningsRoutes: RouteRecordRaw[] = [
  {
    path: '/job-openings',
    name: jobOpeningsRouteNames.jobOpenings,
    component: JobOpenings
  }
]
