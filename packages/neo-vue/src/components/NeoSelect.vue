<script setup lang="ts">
interface Option {
  value: string
  label: string
  disabled?: boolean
}

defineProps<{
  options: Option[]
  placeholder?: string
  label?: string
  modelValue?: string
  disabled?: boolean
  id?: string
}>()

defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>

<template>
  <div class="neo-field">
    <label v-if="label" class="neo-label" :for="id">{{ label }}</label>
    <select
      :id="id"
      class="neo-select"
      :value="modelValue"
      :disabled="disabled"
      v-bind="$attrs"
      @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
    >
      <option v-if="placeholder" value="" disabled>{{ placeholder }}</option>
      <option
        v-for="opt in options"
        :key="opt.value"
        :value="opt.value"
        :disabled="opt.disabled"
      >
        {{ opt.label }}
      </option>
    </select>
  </div>
</template>
