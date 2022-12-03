<template>
  <div
    ref="dropdown"
    class="relative rounded-md font-medium border border-gray-medium focus:border-gray-dark text-sm py-1 pl-1 pr-3
    cursor-pointer  bg-white flex items-center justify-between gap-3"
    @click="optionsShow = !optionsShow"
  >
    <span v-if="showPlaceholder" class="text-gray-medium ml-1">{{ placeholder }}</span>

    <div v-else-if="multiple" class="inline-flex gap-1 flex-wrap overflow-x-auto">
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

    <AppDropdownList
      v-show="optionsShow"
      :selected-options="selectedOptions"
      :options="options"
      @remove="onRemove"
      @select="onSelect"
    />
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

const props = withDefaults(defineProps<{
  options: IOption[]
  multiple?: boolean
  placeholder?: string
  modelValue?: TOptionValue[]
}>(), {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore: Unreachable code error
  // options: [] as IOption[]
  multiple: false,
  placeholder: 'Select me'
})
const emit = defineEmits(['update:modelValue'])

const optionsShow = ref(false)
const selectedOptions = ref<IOption[]>(props.options.filter(opt => props.modelValue?.includes(opt.value)))
const dropdown = ref<HTMLDivElement>()

const showPlaceholder = computed(() => {
  return !!props.placeholder && selectedOptions.value.length === 0
})

onClickOutside(dropdown, () => {
  optionsShow.value = false
})

function onSelect (option: IOption) {
  if (props.multiple) {
    if (!selectedOptions.value.some(e => e.value === option.value)) {
      selectedOptions.value.push(option)
    }
  } else {
    selectedOptions.value = [option]
  }
  emit('update:modelValue', selectedOptions.value.map(e => e.value))
}

function onRemove (value: TOptionValue) {
  selectedOptions.value = selectedOptions.value.filter(e => e.value !== value)
  emit('update:modelValue', selectedOptions.value.map(e => e.value))
}
</script>
