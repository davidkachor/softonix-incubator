<template>
  <img
    v-if="isObserved"
    :src="src"
    :alt="alt || src"
    @error="$emit('error')"
    @load="$emit('load')"
  >

  <div
    v-else
    ref="placeholderEl"
    class="bg-red-300"
    :style="{width: `${width || 300}px`, height: `${ height || 300 }px`}"
  />
</template>

<script setup lang="ts">
const props = defineProps<{
  src: string
  alt?: string
  width?: number
  height?: number
}>()

defineEmits(['error', 'load'])

const isObserved = ref(false)

const placeholderEl = ref<HTMLDivElement>()

const observer = new IntersectionObserver(entries => {
  const { isIntersecting, target } = entries[0]
  if (isIntersecting) {
    console.log(props.alt || props.src, 'is intersepting')
    observer.unobserve(target)
    isObserved.value = true
  }
}, {
  rootMargin: '300px'
})

watch(() => placeholderEl.value, newValue => {
  if (!newValue) return
  observer.observe(newValue)
})

</script>
