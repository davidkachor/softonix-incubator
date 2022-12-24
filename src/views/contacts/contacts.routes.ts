import type { RouteRecordRaw } from 'vue-router'

const contactsRoutesNames = {
  contacts: 'contacts',
  upsertContact: 'upsertContact'
}

const contactsRoutes: Array<RouteRecordRaw> = [
  {
    path: '/contacts',
    name: contactsRoutesNames.contacts,
    component: () => import('@/views/contacts/Contacts.vue'),
    meta: {
      isProtected: true
    }
  },
  {
    path: '/contacts/:contactId',
    name: contactsRoutesNames.upsertContact,
    component: () => import('@/views/contacts/UpsertContact.vue'),
    meta: {
      isProtected: true
    },
    beforeEnter (to, from, next) {
      const { contacts } = useContactsStore()
      if (to.params.contactId === 'new' || contacts.find(c => c.id === +to.params.contactId)) {
        next()
      } else {
        next({ name: contactsRoutesNames.contacts })
      }
    }
  }
]

export {
  contactsRoutesNames,
  contactsRoutes
}
