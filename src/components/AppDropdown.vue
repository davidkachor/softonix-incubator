<template>
  <div
    class="relative rounded-md font-medium border border-gray-medium focus:border-gray-dark text-sm py-1 pl-1 pr-3
    block cursor-pointer w-full max-w-[200px] bg-white flex items-center justify-between gap-3"
    @click="optionsShow = !optionsShow"
  >
    <span v-if="showPlaceholder" class="text-gray-medium ml-1">{{ placeholder }}</span>

    <div v-else-if="isMulti" class="inline-flex gap-1 overflow-x-auto">
      <div
        v-for="item in selectedOptions"
        :key="item.value"
        class="bg-blue-500 hover:bg-blue-700 font-bold text-white rounded-md p-1 flex items-center gap-2
        "
        @click.stop="onRemove(item.value)"
      >
        <span class="overflow-ellipsis overflow-hidden whitespace-nowrap">
          {{ item.label }}
        </span>
        <IconCloseCross class="w-3.5 h-3.5" fill="white" />
      </div>
    </div>

    <div v-else>
      <span class="ml-1">{{ selectedOptions[0].label }}</span>
    </div>

    <div @click="optionsShow === !optionsShow">
      <IconArrow :class="{'w-4 h-4 transition': true, 'rotate-180': optionsShow}" />
    </div>

    <ul
      v-show="optionsShow"
      class="absolute z-10 top-[100%] w-full rounded-md font-medium left-0 bg-white overflow-hidden"
    >
      <li
        v-for="option in optionsWithSelected"
        :key="option.value"
        :class="{
          'p-2 cursor-pointer flex justify-between gap-4 items-center': true,
          'hover:bg-gray-light ': !option.selected,
          'bg-blue-500 text-white font-bold hover:bg-blue-700 ': option.selected
        }"
        @click="!option.selected ? onSelect({ label: option.label, value: option.value }) : onRemove(option.value)"
      >
        <span class="overflow-ellipsis overflow-hidden whitespace-nowrap">{{ option.label }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import IconCloseCross from '@/components/icons/IconCloseCross.vue'
import IconArrow from '@/components/icons/IconArrow.vue'
import type { IOption } from '@/types'

const props = defineProps<{
  options: IOption[]
  isMulti?: boolean
  placeholder?: string
  modelValue?: (string | number)[]
}>()

const emit = defineEmits(['update:modelValue'])

const optionsShow = ref(false)
const selectedOptions = ref<IOption[]>(props.options.filter(opt => props.modelValue?.includes(opt.value)))

const optionsWithSelected = computed(() => {
  return props.options.map(opt => ({ ...opt, selected: selectedOptions.value.some(e => e.value === opt.value) }))
})

const showPlaceholder = computed(() => {
  return !!props.placeholder && selectedOptions.value.length === 0
})

function onSelect (option: IOption) {
  if (props.isMulti) {
    if (!selectedOptions.value.some(e => e.value === option.value)) {
      selectedOptions.value.push(option)
    }
  } else {
    selectedOptions.value = [option]
  }
  emit('update:modelValue', selectedOptions.value.map(e => e.value))
}

function onRemove (value: number | string) {
  selectedOptions.value = selectedOptions.value.filter(e => e.value !== value)
}

</script>
