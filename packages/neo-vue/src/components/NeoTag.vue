<script setup lang="ts">
import { computed } from 'vue'

type Variant = 'brand' | 'accent' | 'ghost'

const props = withDefaults(
  defineProps<{
    variant?: Variant
    rotated?: boolean
  }>(),
  { variant: 'ghost', rotated: false }
)

const variantClass: Record<Variant, string> = {
  brand:  'neo-tag-brand',
  accent: 'neo-tag-accent',
  ghost:  'neo-tag-ghost',
}

const classes = computed(() =>
  [
    'neo-tag',
    variantClass[props.variant],
    props.rotated && 'neo-tag-rotate',
  ]
    .filter(Boolean)
    .join(' ')
)
</script>

<template>
  <span :class="classes"><slot /></span>
</template>
