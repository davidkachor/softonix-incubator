class ContactsService {
  // rest/v1/contacts
  getContacts () {
    return useHttp.get<IContact[]>('rest/v1/contacts')
  }

  addContact (payload: IContact) {
    const { id, ...rest } = payload
    return useHttp.post('rest/v1/contacts', rest)
  }

  updateContact (payload: IContact) {
    const { id, ...rest } = payload
    return useHttp.patch(`rest/v1/contacts?id=eq.${id}`, rest)
  }

  deleteContact (id: number) {
    return useHttp.delete(`rest/v1/contacts?id=eq.${id}`)
  }
}

export const contactsService = new ContactsService()
