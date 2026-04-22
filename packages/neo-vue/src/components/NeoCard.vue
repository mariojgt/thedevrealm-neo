<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'default' | 'brand' | 'stat' | 'filter'

const props = withDefaults(
  defineProps<{
    variant?: Variant
    pattern?: boolean
    starred?: boolean
  }>(),
  { variant: 'default', pattern: false, starred: false }
)

const variantClass: Record<Variant, string> = {
  default: 'neo-card',
  brand:   'neo-card-brand',
  stat:    'neo-stat-card',
  filter:  'neo-filter-card',
}

const classes = computed(() =>
  [
    variantClass[props.variant],
    props.pattern && 'neo-card-pattern',
    props.starred && 'neo-star',
  ]
    .filter(Boolean)
    .join(' ')
)
</script>

<template>
  <div :class="classes">
    <slot />
  </div>
</template>
