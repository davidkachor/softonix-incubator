<template>
  <div class="inline-flex gap-1 flex-wrap">
    <TransitionGroup name="items">
      <div
        v-for="item in selectedOptions"
        :key="item.value"
        class="bg-blue-500 hover:bg-blue-700 font-bold text-white rounded-md p-1 flex items-center gap-2
        "
        @click.stop="$emit('remove', item.value)"
      >
        <span class="overflow-ellipsis overflow-hidden whitespace-nowrap">
          {{ item.label }}
        </span>
        <IconCloseCross class="w-3.5 h-3.5" fill="white" />
      </div>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  selectedOptions: IOption[]
}>()
defineEmits<{
  (e: 'remove', value: TOptionValue): void
}>()
</script>

<style scoped>
.items-enter-active,
.items-leave-active {
  @apply transition;
}
.items-enter-from,
.items-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>
