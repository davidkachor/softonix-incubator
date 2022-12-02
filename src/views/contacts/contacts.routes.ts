import type { RouteRecordRaw } from 'vue-router'

import Contacts from '@/views/contacts/Contacts.vue'
import UpsertContact from '@/views/contacts/UpsertContact.vue'

export const contactRouteNames = {
  contacts: 'contacts',
  upsertContact: 'upsertContact'
}

export const contactsRoutes: RouteRecordRaw[] = [
  {
    path: '/contacts',
    name: contactRouteNames.contacts,
    component: Contacts
  },
  {
    path: '/contacts/:contactId',
    name: contactRouteNames.upsertContact,
    component: UpsertContact,
    beforeEnter (to, from, next) {
      const contactsStore = useContactsStore()
      const { contacts } = storeToRefs(contactsStore)
      if (to.params.contactId === 'new' || contacts.value.find(c => c.id === +to.params.contactId)) {
        next()
      } else {
        next({ name: 'contacts' })
      }
    }
  }
]
