<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'success' | 'warning' | 'error' | 'info'

const props = withDefaults(
  defineProps<{
    variant?: Variant
    title?: string
  }>(),
  { variant: 'info' }
)

const variantClass: Record<Variant, string> = {
  success: 'neo-alert-success',
  warning: 'neo-alert-warning',
  error:   'neo-alert-error',
  info:    'neo-alert-info',
}

const classes = computed(() =>
  ['neo-alert', variantClass[props.variant]].join(' ')
)
</script>

<template>
  <div role="alert" :class="classes">
    <span v-if="$slots.icon" class="neo-alert__icon" aria-hidden="true">
      <slot name="icon" />
    </span>
    <p class="neo-alert__content">
      <strong v-if="title" class="neo-alert__title">{{ title }} —&nbsp;</strong>
      <slot />
    </p>
  </div>
</template>
