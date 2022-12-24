<template>
  <div class="flex items-center gap-4">
    <h3 class="font-medium m-0">Contact list</h3>

    <el-button :type="$elComponentType.primary" @click="createNewContact">
      <template #icon>
        <IconPlus class="w-5 h-5" />
      </template>
      Add Contact
    </el-button>

    <el-button
      class="!ml-0"
      :type="$elComponentType.danger"
      @click="logout"
    >
      Logout
    </el-button>
  </div>

  <AsyncExample v-if="!loading" />

  <div class="grid-cols-[repeat(auto-fill,_minmax(320px,_1fr))] grid gap-5 my-5">
    <ContactItem
      v-for="contact in contacts"
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
const AsyncExample = defineAsyncComponent(() => import('./components/AsyncExample.vue'))

const { $routeNames } = useGlobalProperties()

const router = useRouter()
const { logout } = useAuthStore()
const contactsStore = useContactsStore()
const { getContacts, updateContact, deleteContact } = contactsStore
const { contacts } = storeToRefs(contactsStore)
const loading = ref(true)

function createNewContact () {
  router.push({ name: $routeNames.upsertContact, params: { contactId: 'new' } })
}

function editContact (contactId: number) {
  router.push({ name: $routeNames.upsertContact, params: { contactId } })
}

onMounted(() => {
  // get data for the page
  getContacts()
    .finally(() => (loading.value = false))
})
</script>
