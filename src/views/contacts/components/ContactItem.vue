<template>
  <el-card shadow="hover">
    <div class="flex">
      <div class="flex-grow flex flex-col text-sm truncate" @click.stop>
        <template v-if="editMode">
          <el-input
            ref="inputRef"
            v-model="localContact.name"
            type="text"
            class="block font-medium w-full"
          />
          <el-input v-model="localContact.description" type="text" class="block mt-1 text-gray w-full" />
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
          v-if="imageHasError || !contact.image"
          class="font-medium uppercase"
        >{{ nameAbbrv }}
        </span>

        <img
          v-else
          class="object-cover"
          :src="contact.image"
          alt="contact-logo"
          @error="imageHasError = true"
          @load="imageHasError = false"
        >
      </div>
    </div>

    <div class="flex justify-end mt-2 gap-2">
      <template v-if="editMode">
        <el-button
          :type="$elComponentType.danger"
          plain
          @click.stop="editMode = false"
        >
          Cancel
        </el-button>

        <el-button
          :type="$elComponentType.success"
          plain
          @click.stop="onSave"
        >
          Save
        </el-button>
      </template>

      <template v-else>
        <el-button
          plain
          @click.stop="triggerEditMode"
        >
          Edit
        </el-button>

        <el-button
          :type="$elComponentType.danger"
          plain
          @click.stop="$emit('delete', contact)"
        >
          Delete
        </el-button>
      </template>
    </div>

    <div class="flex text-sm font-medium pt-2 mt-2 text-gray-dark border-t border-gray-ultra-light" @click.stop>
      <el-button
        class="flex flex-auto" :icon="Message"
      >
        Email
      </el-button>
      <el-button
        :icon="Phone"
        class="flex flex-auto"
      >
        Call
      </el-button>
    </div>
  </el-card>
</template>

<script lang="ts" setup>
import { Message, Phone } from '@element-plus/icons-vue'

const props = defineProps<{
  contact: IContact
}>()

const emit = defineEmits(['delete', 'save'])

const inputRef = ref<HTMLInputElement>()

const localContact = ref<Omit<IContact, 'id'>>({
  name: '',
  description: '',
  image: ''
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

function onSave () {
  emit('save', localContact.value)
  editMode.value = false
}

const imageHasError = ref(false)
</script>
