<template>
  <div class="flex gap-3">
    <SearchForm v-model="searchParams.search" />
    <AppDropdown
      v-model="searchParams.roles"
      :options="roleOptionList"
      placeholder="Filters"
      :is-multi="true"
    />
    <AppDropdown v-model="searchParams.sort" :options="sortingList" placeholder="Sort by" />
  </div>
</template>

<script setup lang="ts">
import AppDropdown from '@/components/AppDropdown.vue'
import SearchForm from '@/components/SearchForm.vue'

import { ref, reactive } from 'vue'
import { useContactsStore } from '@/store/modules/contacts.store'
import type { ISearchParams } from '@/types'

const props = defineProps<{
  modelValue?: ISearchParams
}>()

const sortingList = ref([
  { value: 'def', label: 'Default' },
  { value: 'dsc', label: 'Descending' },
  { value: 'asc', label: 'Ascending' }
])

const store = useContactsStore()
const { roleOptionList } = store

const searchParams = reactive<ISearchParams>(props.modelValue || {
  sort: ['def'],
  roles: [],
  search: ''
})

</script>
