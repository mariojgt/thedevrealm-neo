<script setup lang="ts">
defineProps<{
  label?: string
  modelValue?: string
  placeholder?: string
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
    <div v-if="$slots.icon" class="neo-input-icon">
      <span class="neo-input-icon__icon" aria-hidden="true">
        <slot name="icon" />
      </span>
      <input
        :id="id"
        class="neo-input"
        :value="modelValue"
        :placeholder="placeholder"
        :disabled="disabled"
        v-bind="$attrs"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
    </div>
    <input
      v-else
      :id="id"
      class="neo-input"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      v-bind="$attrs"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>
