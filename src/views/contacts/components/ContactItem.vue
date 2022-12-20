<template>
  <Card v-loading="pending">
    <div class="flex">
      <div class="flex-grow text-sm truncate" @click.stop>
        <template v-if="editMode">
          <input
            ref="inputRef"
            v-model="localContact.name"
            type="text"
            class="block font-medium w-full"
          >
          <input v-model="localContact.description" type="text" class="block mt-1 text-gray w-full">
        </template>

        <template v-else>
          <p class="font-medium cursor-text">{{ contact.name }}</p>
          <p class="text-gray cursor-text mt-1 truncate">
            {{ contact.description }}
          </p>
        </template>
      </div>

      <div
        class="flex items-center justify-center w-[40px] h-[40px] ml-2 rounded-full shrink-0 overflow-hidden
      border border-gray-medium bg-gray-ultra-light"
      >
        <span
          class="font-medium uppercase"
        >{{ nameAbbrv }}
        </span>
      </div>
    </div>

    <div class="flex justify-end mt-2 gap-2">
      <template v-if="editMode">
        <span
          class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
          @click.stop="editMode = false"
        >Cancel</span>

        <span
          class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
          @click.stop="onSave"
        >Save</span>
      </template>

      <template v-else>
        <span
          class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
          @click.stop="triggerEditMode"
        >Edit</span>

        <span
          class="text-red-500 font-medium text-xs cursor-pointer hover:underline"
          @click.stop="onDelete"
        >Delete</span>
      </template>
    </div>

    <template #footer>
      <div class="flex text-sm font-medium text-gray-dark border-t border-gray-ultra-light" @click.stop>
        <div class="flex items-center justify-center flex-1 py-4 cursor-pointer hover:text-gray">
          <IconEnvelope />
          <span class="ml-3">Email</span>
        </div>
        <div
          class="flex items-center justify-center flex-1 py-4 border-l
            border-gray-ultra-light cursor-pointer hover:text-gray"
        >
          <IconPhone />
          <span class="ml-3">Call</span>
        </div>
      </div>
    </template>
  </Card>
</template>

<script lang="ts" setup>
const props = defineProps<{
  contact: IContact
}>()

const { deleteContact, updateContact } = useContactsStore()

const inputRef = ref<HTMLInputElement>()

const pending = ref(false)

const localContact = ref<Omit<IContact, 'id'>>({
  name: '',
  description: ''
})

const nameAbbrv = computed(() => {
  return props.contact.name.split(' ').reduce((acc, cur) => {
    if (acc.length < 2) {
      acc = acc.concat(cur[0])
    }
    return acc
  }, '')
})

const editMode = ref(false)

async function triggerEditMode () {
  editMode.value = true
  localContact.value = { ...props.contact }
  await nextTick()
  inputRef.value?.focus()
}

async function onDelete () {
  pending.value = true
  await deleteContact(props.contact)
  pending.value = false
}

async function onSave () {
  pending.value = true
  await updateContact({ ...localContact.value, id: props.contact.id })
  pending.value = false
  editMode.value = false
}
</script>
