export const useContactsStore = defineStore('contactsStore', () => {
  const contacts = ref<IContact[]>([])
  const pending = ref(false)

  const getContacts = () => {
    if (contacts.value.length) return

    return contactsService.getContacts()
      .then(res => {
        contacts.value = res
      })
  }

  async function addContact (contact: IContact) {
    try {
      pending.value = true
      await contactsService.addContact(contact)
      contacts.value.push(contact)
    } catch (error) {
      console.error(error)
    } finally {
      pending.value = false
    }
  }

  async function updateContact (contact: IContact) {
    try {
      pending.value = true
      const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
      await contactsService.updateContact(contact)
      contacts.value[currentIndex] = { ...contact }
    } catch (err) {
      console.error(err)
    } finally {
      pending.value = false
    }
  }

  async function deleteContact (contact: IContact) {
    try {
      pending.value = true
      const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
      await contactsService.deleteContact(contact.id)
      contacts.value.splice(currentIndex, 1)
    } catch (err) {
      console.error(err)
    } finally {
      pending.value = false
    }
  }

  return {
    contacts,
    getContacts,
    addContact,
    deleteContact,
    updateContact,
    pending
  }
})
