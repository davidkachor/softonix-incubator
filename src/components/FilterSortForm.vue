<template>
  <form class="flex gap-3" @submit.prevent="onSubmit">
    <AppInput placeholder="Search" />
    <AppDropdown
      v-model="searchParams.roles"
      :options="roleOptionList"
      placeholder="Filters"
      :is-multi="true"
    />
    <AppDropdown v-model="searchParams.sort" :options="sortingList" placeholder="Sort by" />
    <AppButton>
      <template #icon>
        <IconGlass class="w-4 h-4" fill="white" />
      </template>
      Search
    </AppButton>
  </form>
</template>

<script setup lang="ts">
import AppInput from '@/components/AppInput.vue'
import AppButton from '@/components/AppButton.vue'
import IconGlass from '@/components/icons/IconGlass.vue'
import AppDropdown from '@/components/AppDropdown.vue'

import { ref, reactive, computed } from 'vue'
import { useContactsStore } from '@/store/modules/contacts.store'

const sortingList = ref([
  { value: 'def', label: 'Default' },
  { value: 'dsc', label: 'Descending' },
  { value: 'asc', label: 'Ascending' }
])

const store = useContactsStore()
const { roleOptionList } = store

const searchParams = reactive({
  sort: ['def'],
  roles: []
})

function onSubmit () {
  console.log(searchParams)
}

</script>
