<template>
  <div class="rounded-lg bg-white shadow relative">
    <div class="p-6 pb-2">
      <div class="flex">
        <div class="flex-grow text-sm truncate">
          <template v-if="editMode || props.isNew">
            <input
              ref="inputRef"
              v-model="localContact.name"
              type="text"
              class="block font-medium w-full"
              placeholder="e.g. Elvis Presley"
              @input="validateInputs"
            >
            <input
              v-model="localContact.description"
              type="text"
              class="block mt-1 text-gray w-full"
              placeholder="e.g. Singer and actor"
              @input="validateInputs"
            >
            <input
              v-if="props.isNew"
              v-model="localContact.image"
              type="text"
              class="block mt-1 text-gray w-full"
              placeholder="e.g. https://www.graceland.com/assets/2597/bio3_verticalresponsive.jpg"
              @input="validateInputs"
            >
          </template>

          <template v-else>
            <p class="font-medium">{{ contact.name }}</p>
            <p class="text-gray mt-1 truncate">
              {{ contact.description }}
            </p>
          </template>
        </div>
        <img
          v-if="!props.isNew"
          class="w-[40px] h-[40px] object-cover ml-2 rounded-full shrink-0"
          :src="contact.image" alt="contact-logo"
        >
      </div>
      <div class="flex justify-end mt-2 gap-2">
        <template v-if="editMode || props.isNew">
          <button
            class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
            @click="onCancel"
          >
            Cancel
          </button>

          <button
            ref="saveButtonRef"
            class="save-btn"
            @click="props.isNew ? onCreate() : onSave()"
          >
            {{ props.isNew ? 'Create' : 'Save' }}
          </button>
        </template>

        <template v-else>
          <button
            class="text-blue-500 font-medium text-xs cursor-pointer hover:underline"
            @click="triggerEditMode"
          >
            Edit
          </button>

          <button
            class="text-red-500 font-medium text-xs cursor-pointer hover:underline"
            @click="$emit('delete')"
          >
            Delete
          </button>
        </template>
      </div>
    </div>

    <div v-if="!props.isNew" class="flex text-sm font-medium text-gray-dark border-t border-gray-ultra-light">
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
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick, onMounted } from 'vue'
import type { IContact } from '@/types'
import IconEnvelope from '@/components/icons/IconEnvelope.vue'
import IconPhone from '@/components/icons/IconPhone.vue'

const props = defineProps<{
  contact: IContact
  isNew?: boolean
}>()

onMounted(() => {
  if (props.isNew) {
    validateInputs()
  }
})

const emit = defineEmits(['delete', 'save', 'create', 'cancel'])

const inputRef = ref<HTMLInputElement>()
const saveButtonRef = ref<HTMLButtonElement>()

const localContact = ref<Omit<IContact, 'id'>>({
  name: '',
  description: '',
  image: ''
})

const editMode = ref(false)

async function triggerEditMode () {
  editMode.value = true
  localContact.value = { ...props.contact }
  await nextTick()
  validateInputs()
  inputRef.value?.focus()
}

function validateInputs () {
  const { name, image, description } = localContact.value
  if (!saveButtonRef.value) return
  saveButtonRef.value.disabled = !(name.trim() !== '' && image.trim() !== '' && description.trim() !== '')
}

function onSave () {
  emit('save', localContact.value)
  editMode.value = false
}

function onCreate () {
  emit('create', localContact.value)
}

function onCancel () {
  emit('cancel')
  editMode.value = false
}
</script>

<style lang="scss">
.save-btn {
  @apply
  text-blue-500 font-medium text-xs cursor-pointer disabled:text-gray hover:underline hover:disabled:no-underline;
}
</style>
