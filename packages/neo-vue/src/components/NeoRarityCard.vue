<script setup lang="ts">
type RarityVariant = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary'
withDefaults(defineProps<{
  name: string
  rarity?: RarityVariant
  icon?: string
}>(), { rarity: 'common' })
</script>

<template>
  <div :class="`neo-item-card neo-rarity neo-rarity-${rarity}`">
    <div v-if="icon" class="neo-item-icon">{{ icon }}</div>
    <p class="neo-item-name">{{ name }}</p>
    <p class="neo-item-rarity">{{ rarity.charAt(0).toUpperCase() + rarity.slice(1) }}</p>
  </div>
</template>
