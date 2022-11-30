import { createRouter, createWebHistory } from 'vue-router'
import Contacts from '@/views/Contacts.vue'
import UpsertContact from '@/views/UpsertContact.vue'
import { useContactsStore } from '@/store'
import { storeToRefs } from 'pinia'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { name: 'contacts' }
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/contacts/:contactId',
      name: 'upsertContact',
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
})
