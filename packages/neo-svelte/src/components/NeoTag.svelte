<script lang="ts">
  export type Variant = 'brand' | 'accent' | 'ghost'

  export let variant: Variant = 'ghost'
  export let rotated = false

  const variantClass: Record<Variant, string> = {
    brand:  'neo-tag-brand',
    accent: 'neo-tag-accent',
    ghost:  'neo-tag-ghost',
  }

  $: classes = [
    'neo-tag',
    variantClass[variant],
    rotated && 'neo-tag-rotate',
  ]
    .filter(Boolean)
    .join(' ')
</script>

<span class={classes}><slot /></span>
