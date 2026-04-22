<script lang="ts">
  export type Variant = 'success' | 'warning' | 'error' | 'info'

  export let variant: Variant = 'info'
  export let title = ''

  const variantClass: Record<Variant, string> = {
    success: 'neo-alert-success',
    warning: 'neo-alert-warning',
    error:   'neo-alert-error',
    info:    'neo-alert-info',
  }

  $: classes = ['neo-alert', variantClass[variant]].join(' ')
</script>

<div role="alert" class={classes}>
  {#if $$slots.icon}
    <span class="neo-alert__icon" aria-hidden="true">
      <slot name="icon" />
    </span>
  {/if}
  <p class="neo-alert__content">
    {#if title}
      <strong class="neo-alert__title">{title} —&nbsp;</strong>
    {/if}
    <slot />
  </p>
</div>
