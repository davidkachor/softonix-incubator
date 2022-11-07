import { createRouter, createWebHistory } from 'vue-router'
import { routeNames } from './routeNames'

import Contacts from '@/views/Contacts.vue'
import UpsertContact from '@/views/UpsertContact.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: routeNames.contacts }
    },
    {
      path: '/contacts',
      name: routeNames.contacts,
      component: Contacts
    },
    {
      path: '/contacts/:contactId',
      name: routeNames.upsertContact,
      component: UpsertContact,
      beforeEnter (to, from, next) {
        const { contacts } = useContactsStore()
        if (to.params.contactId === 'new' || contacts.find(c => c.id === +to.params.contactId)) {
          next()
        } else {
          next({ name: routeNames.contacts })
        }
      }
    }
  ]
})
