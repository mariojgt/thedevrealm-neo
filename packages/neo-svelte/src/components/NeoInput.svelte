<script lang="ts">
  export let value   = ''
  export let label   = ''
  export let placeholder = ''
  export let disabled    = false
  export let id: string | undefined = undefined
</script>

<div class="neo-field">
  {#if label}
    <label class="neo-label" for={id}>{label}</label>
  {/if}
  {#if $$slots.icon}
    <div class="neo-input-icon">
      <span class="neo-input-icon__icon" aria-hidden="true">
        <slot name="icon" />
      </span>
      <input
        {id}
        class="neo-input"
        bind:value
        {placeholder}
        {disabled}
        on:input
        on:change
        on:focus
        on:blur
      />
    </div>
  {:else}
    <input
      {id}
      class="neo-input"
      bind:value
      {placeholder}
      {disabled}
      on:input
      on:change
      on:focus
      on:blur
    />
  {/if}
</div>
