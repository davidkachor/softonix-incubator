interface IContact {
  id: number
  name: string
  description: string
  image?: string
}

interface IContactTableRow extends IContact {
  editMode: boolean
  imageHasError: boolean
}
