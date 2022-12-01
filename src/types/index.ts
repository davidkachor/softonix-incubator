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
