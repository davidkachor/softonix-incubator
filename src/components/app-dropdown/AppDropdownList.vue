<template>
  <ul
    class="absolute z-10 top-[110%] border-gray-medium border w-full rounded-md font-medium left-0
    bg-white overflow-x-hidden overflow-y-auto max-h-[300px]"
  >
    <li
      v-for="option in optionsWithSelected"
      :key="option.value"
      :class="{
        'p-2 cursor-pointer flex justify-between gap-4 items-center': true,
        'hover:bg-gray-light ': !option.selected,
        'bg-blue-500 text-white font-bold hover:bg-blue-700 ': option.selected
      }"
      @click="onSelect(option.selected, option)"
    >
      <span class="overflow-ellipsis overflow-hidden whitespace-nowrap">{{ option.label }}</span>
    </li>
  </ul>
</template>
<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  options: IOption[]
  selectedOptions: IOption[]
}>()
const emit = defineEmits<{
  (t: 'select', item: IOption): void
  (t: 'remove', id: TOptionValue): void
}>()

const optionsWithSelected = computed(() => {
  return props.options.map(opt => ({ ...opt, selected: props.selectedOptions.some(e => e.value === opt.value) }))
})

function onSelect (isSelected: boolean, option: IOption) {
  if (isSelected) {
    emit('remove', option.value)
  } else emit('select', { label: option.label, value: option.value })
}
</script>
