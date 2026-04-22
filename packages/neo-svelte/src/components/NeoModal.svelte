<script lang="ts">
  import { createEventDispatcher, onMount, onDestroy } from 'svelte'

  export let open = false
  export let title: string | undefined = undefined

  const dispatch = createEventDispatcher<{ close: void }>()

  function onBackdropClick(e: MouseEvent) {
    if (e.target === e.currentTarget) dispatch('close')
  }

  $: {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = open ? 'hidden' : ''
    }
  }

  onDestroy(() => {
    if (typeof document !== 'undefined') document.body.style.overflow = ''
  })
</script>

{#if open}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div class="neo-modal-backdrop open" on:click={onBackdropClick}>
    <div class="neo-modal" role="dialog" aria-modal="true">
      {#if title || $$slots.header}
        <div class="neo-modal-header">
          <slot name="header">
            <h2 class="neo-modal-title">{title}</h2>
          </slot>
          <button class="neo-modal-close" aria-label="Close" on:click={() => dispatch('close')}>✕</button>
        </div>
      {/if}

      {#if $$slots.default}
        <div class="neo-modal-body"><slot /></div>
      {/if}

      {#if $$slots.footer}
        <div class="neo-modal-footer"><slot name="footer" /></div>
      {/if}
    </div>
  </div>
{/if}
