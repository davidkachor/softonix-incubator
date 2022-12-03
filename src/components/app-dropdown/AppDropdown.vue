<template>
  <div
    ref="dropdown"
    class="relative rounded-md font-medium border border-gray-medium focus:border-gray-dark text-sm py-1 pl-1 pr-3
    cursor-pointer  bg-white flex items-center justify-between gap-3"
    @click="optionsShow = !optionsShow"
  >
    <AppDropdownSelectedItems
      v-if="multiple"
      :placeholder="placeholder"
      :selected-options="selectedOptions"
      @remove="onRemove"
    />

    <div v-else>
      <span v-if="showPlaceholder" class="text-gray-medium ml-1">{{ placeholder }}</span>
      <span v-else class="ml-1">{{ selectedOptions[0].label }}</span>
    </div>

    <div @click="optionsShow === !optionsShow">
      <IconArrow :class="{'rotate-180': optionsShow}" class="w-4 h-4 transition" />
    </div>

    <Transition name="options">
      <AppDropdownList
        v-show="optionsShow"
        :selected-options="selectedOptions"
        :options="options"
        @remove="onRemove"
        @select="onSelect"
      />
    </Transition>
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

<style scoped>
  .options-enter-active,
  .options-leave-active {
    transition: .1s ease-in transform, .1s ease-in  opacity;
  }

  .options-enter-from,
  .options-leave-to {
    opacity: 0;
  }
</style>
