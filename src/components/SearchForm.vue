<template>
  <form class="flex gap-4" @submit.prevent="onSubmit">
    <AppInput v-model="inputValue" placeholder="Search" class="min-w-300px" />
    <AppButton type="submit">
      <template #icon>
        <IconGlass class="w-3.5 h-3.5" fill="white" />
      </template>
      Search
    </AppButton>
  </form>
</template>

<script setup lang="ts">
import AppInput from '@/components/AppInput.vue'
import AppButton from '@/components/AppButton.vue'
import IconGlass from '@/components/icons/IconGlass.vue'

import { ref } from 'vue'

defineProps<{
  modelValue?: string
}>()
const emit = defineEmits(['update:modelValue'])

const inputValue = ref('')

function onSubmit () {
  emit('update:modelValue', inputValue)
}
</script>

<style scoped>

</style>
