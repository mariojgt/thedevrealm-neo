<script lang="ts">
  export type RarityVariant = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary'
  export let name: string
  export let rarity: RarityVariant = 'common'
  export let icon: string | undefined = undefined

  $: label = rarity.charAt(0).toUpperCase() + rarity.slice(1)
</script>

<div class="neo-item-card neo-rarity neo-rarity-{rarity}">
  {#if icon}<div class="neo-item-icon">{icon}</div>{/if}
  <p class="neo-item-name">{name}</p>
  <p class="neo-item-rarity">{label}</p>
</div>
