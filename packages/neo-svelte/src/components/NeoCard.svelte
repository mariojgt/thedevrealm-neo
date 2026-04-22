<script lang="ts">
  export type Variant = 'default' | 'brand' | 'stat' | 'filter'

  export let variant: Variant = 'default'
  export let pattern = false
  export let starred = false

  const variantClass: Record<Variant, string> = {
    default: 'neo-card',
    brand:   'neo-card-brand',
    stat:    'neo-stat-card',
    filter:  'neo-filter-card',
  }

  $: classes = [
    variantClass[variant],
    pattern && 'neo-card-pattern',
    starred && 'neo-star',
  ]
    .filter(Boolean)
    .join(' ')
</script>

<div class={classes}>
  <slot />
</div>
