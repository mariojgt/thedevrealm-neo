<script setup lang="ts">
type SkeletonVariant = 'thumb' | 'title' | 'text' | 'avatar' | 'btn'
withDefaults(defineProps<{ variant?: SkeletonVariant }>(), { variant: 'text' })
</script>

<template>
  <div :class="`neo-skeleton neo-skeleton-${variant}`" aria-hidden="true" />
</template>
