<template>
  <ElTable :data="tableData" border @row-click="$emit( 'edit', $event.id)">
    <ElTableColumn prop="image" label="Image">
      <template #default="{ row }">
        <div
          class="flex items-center justify-center w-[40px] h-[40px] rounded-full shrink-0 overflow-hidden
          border border-gray-medium bg-gray-ultra-light m-auto"
        >
          <span
            v-if="row.imageHasError || !row.image"
            class="font-medium uppercase"
          >
            {{ nameAbbrv(row) }}
          </span>
          <img
            v-else
            :src="row.image"
            :alt="row.name"
            class="object-cover"
            @error="row.imageHasError = true"
            @load="row.imageHasError = false"
          >
        </div>
      </template>
    </ElTableColumn>

    <ElTableColumn prop="name" label="Name">
      <template #default="{ row }">
        <p v-if="!row.editMode" class="text-center">{{ row.name }}</p>

        <ElInput v-else v-model="localContact[row.id].name" type="text" @click.stop />
      </template>
    </ElTableColumn>

    <ElTableColumn prop="description" label="Description">
      <template #default="{ row }">
        <p v-if="!row.editMode" class="text-center">{{ row.description }}</p>

        <ElInput v-else v-model="localContact[row.id].description" type="text" @click.stop />
      </template>
    </ElTableColumn>

    <ElTableColumn label="Actions">
      <template #default="{ row }">
        <div class="flex flex-row justify-center">
          <ElButtonGroup v-if="!row.editMode">
            <ElButton :type="$elComponentType.primary" @click.stop="toggleEditButton(row)">Edit</ElButton>
            <ElButton :type="$elComponentType.danger" @click.stop="deleteContact(row)">Delete</ElButton>
          </ElButtonGroup>

          <ElButtonGroup v-else>
            <ElButton
              :type="$elComponentType.primary"
              @click.stop="saveContact(row.id)"
            >
              Save
            </ElButton>
            <ElButton
              :type="$elComponentType.danger"
              @click.stop="row.editMode = false"
            >
              Cancel
            </ElButton>
          </ElButtonGroup>
        </div>
      </template>
    </ElTableColumn>
  </ElTable>
</template>

<script setup lang="ts">

defineEmits(['edit'])

const contactsStore = useContactsStore()
const { contacts } = storeToRefs(contactsStore)

const tableData = computed(() => {
  return contacts.value
    .map(
      ({ name, description, id, image }) => ({ name, description, id, image, editMode: false, imageHasError: false })
    ) as IContactTableRow[]
})

const { deleteContact, updateContact } = contactsStore

const localContact = ref <Record<number, Omit<IContact, 'id'>>>({})

function saveContact (id: number) {
  updateContact({ ...localContact.value[id], id })
}

function toggleEditButton (contact: IContactTableRow) {
  const { editMode, imageHasError, ...data } = contact
  localContact.value[data.id] = data
  contact.editMode = true
}

function nameAbbrv (contact: IContact) {
  return contact.name.split(' ').reduce((acc, cur) => {
    if (acc.length < 2) {
      acc = acc.concat(cur[0])
    }
    return acc
  }, '')
}

</script>
