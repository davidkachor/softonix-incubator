<template>
  <div class="max-w-[1440px] p-6">
    <div class="flex flex-row gap-10">
      <h3 class="font-medium m-0">Contact list</h3>
      <button
        class="text-blue-500 font-medium cursor-pointer hover:underline"
        @click="formOpen = true"
      >
        Add contact
      </button>
    </div>

    <div class="contact-list grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] grid gap-5 my-5">
      <ContactItem
        v-if="formOpen"
        is-new
        :contact="{description: '', name: '', image: '', id: 0}"
        @cancel="onCancel"
        @create="onContactCreate"
      />
      <ContactItem
        v-for="(contact, index) in contacts"
        :key="contact.id"
        :contact="contact"
        @delete="deleteContact(index)"
        @save="onContactSave($event, index)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { IContact } from '@/types'
import ContactItem from '@/components/ContactItem.vue'

const formOpen = ref(false)

const contacts = ref<IContact[]>([
  {
    id: 1,
    name: 'Esther Howard',
    description: 'Forward Response Developer',
    image: 'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  },
  {
    id: 2,
    name: 'Jane Cooper',
    description: 'Regional Paradigm Technician Regional Paradigm Technician Regional Paradigm Technician',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  },
  {
    id: 3,
    name: 'Cody Fisher',
    description: 'Product Directives Officer',
    image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60'
  }
])

function deleteContact (index: number) {
  contacts.value.splice(index, 1)
}

function onContactSave (contact: IContact, index: number) {
  contacts.value[index] = { ...contact }
}

function onContactCreate (item: Omit<IContact, 'id'>) {
  formOpen.value = false
  const id = Math.floor(Math.random() * 100000000000)
  contacts.value.unshift({ ...item, id })
}
function onCancel () {
  formOpen.value = false
}
</script>
