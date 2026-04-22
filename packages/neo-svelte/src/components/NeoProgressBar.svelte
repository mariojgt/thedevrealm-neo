<script lang="ts">
  export type ProgressBarVariant = 'xp' | 'hp' | 'mp'
  export let variant: ProgressBarVariant = 'xp'
  export let value: number
  export let label: string | undefined = undefined
  export let valueLabel: string | undefined = undefined
  export let striped = false

  $: pct = `${Math.min(100, Math.max(0, value))}%`
</script>

<div class="neo-{variant}-bar">
  {#if label || valueLabel}
    <div class="neo-{variant}-label">
      {#if label}<span class="neo-{variant}-label-text">{label}</span>{/if}
      {#if valueLabel}<span class="neo-{variant}-label-val">{valueLabel}</span>{/if}
    </div>
  {/if}
  <div class="neo-{variant}-track" data-striped={striped || undefined}>
    <div class="neo-{variant}-fill" style="width:{pct}" />
  </div>
</div>
