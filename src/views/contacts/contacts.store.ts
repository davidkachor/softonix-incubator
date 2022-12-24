export const useContactsStore = defineStore('contactsStore', () => {
  const contacts = ref<IContact[]>([
    {
      id: 0,
      name: 'Hello',
      description: 'World',
      image: 'https://picsum.photos/200'
    }, {
      id: 1,
      name: 'Hello',
      description: 'World',
      image: 'https://picsum.photos/200'
    }, {
      id: 2,
      name: 'Hello',
      description: 'World',
      image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80'
    }, {
      id: 3,
      name: 'Hello',
      description: 'World',
      image: 'https://picsum.photos/200'
    }, {
      id: 4,
      name: 'Hello',
      description: 'World',
      image: 'https://picsum.photos/200'
    }, {
      id: 5,
      name: 'Hello',
      description: 'World',
      image: 'https://picsum.photos/200'
    }, {
      id: 6,
      name: 'Hello',
      description: 'World',
      image: 'https://picsum.photos/200'
    }, {
      id: 7,
      name: 'Hello',
      description: 'World',
      image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80'
    },
    {
      id: 8,
      name: 'Hello',
      description: 'World',
      image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80'
    }, {
      id: 9,
      name: 'Hello',
      description: 'World',
      image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80'
    }, {
      id: 10,
      name: 'Hello',
      description: 'World',
      image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80'
    }, {
      id: 11,
      name: 'Hello',
      description: 'World',
      image: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80'
    }, {
      id: 12,
      name: 'Hello',
      description: 'World',
      image: 'https://this-person-does-not-exist.com/img/avatar-147d7edeaab74ee33edcd2592eef7467.jpg'
    }, {
      id: 13,
      name: 'Hello',
      description: 'World',
      image: 'https://this-person-does-not-exist.com/img/avatar-147d7edeaab74ee33edcd2592eef7467.jpg'
    }, {
      id: 14,
      name: 'Hello',
      description: 'World',
      image: 'https://thispersondoesnotexist.com/image'
    }, {
      id: 15,
      name: 'Hello',
      description: 'World',
      image: 'https://thispersondoesnotexist.com/image'
    }
  ])

  const getContacts = () => {
    if (contacts.value.length) return Promise.resolve()

    return contactsService.getContacts()
      .then(res => {
        contacts.value = res
      })
  }

  function addContact (contact: IContact) {
    contacts.value.push(contact)
  }

  function updateContact (contact: IContact) {
    const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
    contacts.value[currentIndex] = { ...contact }
  }

  function deleteContact (contact: IContact) {
    const currentIndex = contacts.value.findIndex(c => c.id === contact.id)
    contacts.value.splice(currentIndex, 1)
  }

  return {
    contacts,
    getContacts,
    addContact,
    deleteContact,
    updateContact
  }
})
