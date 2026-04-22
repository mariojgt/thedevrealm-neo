<script lang="ts">
  export type Variant = 'primary' | 'accent' | 'ghost' | 'danger'
  export type Size    = 'sm' | 'md' | 'lg'
</script>

<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  export let variant: Variant = 'primary'
  export let size: Size = 'md'
  export let disabled = false
  export let type: 'button' | 'submit' | 'reset' = 'button'

  const dispatch = createEventDispatcher()

  const variantClass: Record<Variant, string> = {
    primary: 'neo-btn-primary',
    accent:  'neo-btn-accent',
    ghost:   'neo-btn-ghost',
    danger:  'neo-btn-danger',
  }

  const sizeClass: Record<Size, string> = {
    sm: 'neo-btn-sm',
    md: 'neo-btn-md',
    lg: 'neo-btn-lg',
  }

  $: classes = ['neo-btn', variantClass[variant], sizeClass[size]].join(' ')
</script>

<button
  {type}
  {disabled}
  aria-disabled={disabled}
  class={classes}
  on:click
  on:focus
  on:blur
>
  <slot />
</button>
