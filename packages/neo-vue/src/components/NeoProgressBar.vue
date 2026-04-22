<script setup lang="ts">
type ProgressBarVariant = 'xp' | 'hp' | 'mp'
withDefaults(defineProps<{
  variant?: ProgressBarVariant
  value: number
  label?: string
  valueLabel?: string
  striped?: boolean
}>(), { variant: 'xp', striped: false })

function clamp(v: number) { return Math.min(100, Math.max(0, v)) }
</script>

<template>
  <div :class="`neo-${variant}-bar`">
    <div v-if="label || valueLabel" :class="`neo-${variant}-label`">
      <span v-if="label" :class="`neo-${variant}-label-text`">{{ label }}</span>
      <span v-if="valueLabel" :class="`neo-${variant}-label-val`">{{ valueLabel }}</span>
    </div>
    <div :class="`neo-${variant}-track`" v-bind="striped ? { 'data-striped': '' } : {}">
      <div :class="`neo-${variant}-fill`" :style="`width:${clamp(value)}%`" />
    </div>
  </div>
</template>
