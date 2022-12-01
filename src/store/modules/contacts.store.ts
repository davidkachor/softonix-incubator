import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { IContact, IOption, ISearchParams } from '@/types'
import includesSearchParam from '@/helpers/includesSearchParam'

export const useContactsStore = defineStore('contactsStore', () => {
  const contacts = ref<IContact[]>([
    {
      id: 1,
      name: 'Esther Howard',
      description: 'Some description about Forward Response Developer',
      role: 'Forward Response Developer',
      image: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
    },
    {
      id: 2,
      name: 'Jane Cooper',
      description: 'Some description about Regional Paradigm Technician Regional Paradigm Technician Regional Paradigm Technician',
      role: 'Regional Paradigm Technician Regional Paradigm Technician Regional Paradigm Technician',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
    },
    {
      id: 3,
      name: 'Cody Fisher',
      description: 'Some description about Product Directives Officer',
      role: 'Product Directives Officer',
      image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
    }
  ])

  const roleOptionList = computed(() => {
    return contacts.value.reduce((acc, curr) => {
      if (curr.role && !acc.some(e => e.value === curr.role)) {
        return [...acc, {
          value: curr.role,
          label: curr.role
        }]
      } else return acc
    },
    [] as IOption[])
  })

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

  function getWithParams (params: Partial<ISearchParams>) {
    const filtered = [...contacts.value]
      .filter(e => includesSearchParam(e.name, params.search || '') || includesSearchParam(e.description, params.search || ''))
      .filter(e => {
        if (!params.roles || params.roles.length === 0) return true
        if (!e.role) return false
        return params.roles.includes(e.role)
      })

    if (!params.sort || params.sort.includes('def')) return filtered
    if (params.sort.includes('asc')) return filtered.sort((a, b) => a.name.localeCompare(b.name))
    return filtered.sort((a, b) => b.name.localeCompare(a.name))
  }

  return {
    contacts,
    addContact,
    deleteContact,
    updateContact,
    roleOptionList,
    getWithParams
  }
})
