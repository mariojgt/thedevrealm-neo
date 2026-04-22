<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'primary' | 'accent' | 'ghost' | 'danger'
type Size = 'sm' | 'md' | 'lg'

const props = withDefaults(
  defineProps<{
    variant?: Variant
    size?: Size
    disabled?: boolean
  }>(),
  { variant: 'primary', size: 'md', disabled: false }
)

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void
}>()

const variantClass: Record<Variant, string> = {
  primary: 'neo-btn-primary',
  accent:  'neo-btn-accent',
  ghost:   'neo-btn-ghost',
  danger:  'neo-btn-danger',
}

const sizeClass: Record<Size, string> = {
  sm: 'neo-btn-sm',
  md: 'neo-btn-md',
  lg: 'neo-btn-lg',
}

const classes = computed(() =>
  ['neo-btn', variantClass[props.variant], sizeClass[props.size]].join(' ')
)
</script>

<template>
  <button
    :class="classes"
    :disabled="disabled"
    :aria-disabled="disabled"
    @click="emit('click', $event)"
  >
    <slot />
  </button>
</template>
