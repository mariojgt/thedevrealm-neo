<script setup lang="ts">
const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function onChange(value: string) {
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="neo-toggle" role="group">
    <slot :active="modelValue" :onChange="onChange" />
  </div>
</template>
