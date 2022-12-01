<template>
  <div class="flex items-center gap-4">
    <h3 class="font-medium m-0">Contact list</h3>

    <AppButton @click="createNewContact">
      <template #icon>
        <IconPlus class="w-5 h-5" />
      </template>
      Add Contact
    </AppButton>

    <FilterSortFrom v-model="searchParams" />
  </div>

  <div class="grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] grid gap-5 my-5">
    <ContactItem
      v-for="contact in showContacts"
      :key="contact.id"
      class="cursor-pointer"
      :contact="contact"
      @click="editContact(contact.id)"
      @delete="deleteContact"
      @save="updateContact"
    />
  </div>
</template>
<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useContactsStore } from '@/store'

import ContactItem from '@/components/ContactItem.vue'
import AppButton from '@/components/AppButton.vue'
import IconPlus from '@/components/icons/IconPlus.vue'
import FilterSortFrom from '@/components/FilterSortForm.vue'
import type { ISearchParams } from '@/types'
import { ref, computed } from 'vue'

const router = useRouter()

const contactsStore = useContactsStore()
const { updateContact, deleteContact, getWithParams } = contactsStore

const searchParams = ref<ISearchParams>({
  search: '',
  roles: [],
  sort: ['def']
})

const showContacts = computed(() => {
  return getWithParams(searchParams.value)
})

function createNewContact () {
  router.push({ name: 'upsertContact', params: { contactId: 'new' } })
}

function editContact (contactId: number) {
  router.push({ name: 'upsertContact', params: { contactId } })
}
</script>
