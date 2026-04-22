<script setup lang="ts">
type AvatarSize   = 'sm' | 'md' | 'lg' | 'xl'
type AvatarColor  = 'brand' | 'accent' | 'default'
type AvatarStatus = 'online' | 'offline' | undefined
withDefaults(defineProps<{
  size?:   AvatarSize
  color?:  AvatarColor
  status?: AvatarStatus
}>(), { size: 'md', color: 'default' })
</script>

<template>
  <div :class="['neo-avatar', `neo-avatar-${size}`, color !== 'default' ? `neo-avatar-${color}` : '', status ? `neo-avatar-${status}` : '']">
    <slot />
  </div>
</template>
