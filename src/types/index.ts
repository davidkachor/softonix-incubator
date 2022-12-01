export interface IContact {
  id: number
  name: string
  description: string
  image?: string
  role?: string
}

export interface IOption {
  label: string
  value: string | number
}

export interface ISearchParams {
  sort: ['asc' | 'dsc' | 'def']
  roles: string[]
  search: ''
}
