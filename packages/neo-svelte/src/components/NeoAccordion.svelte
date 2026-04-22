<script lang="ts">
  export interface AccordionItem {
    id: string
    trigger: string
    content: string
  }

  export let items: AccordionItem[] = []
  export let multiple = false
  export let defaultOpen: string[] = []

  let openIds = new Set<string>(defaultOpen)

  function toggle(id: string) {
    const next = new Set(openIds)
    if (next.has(id)) { next.delete(id) }
    else {
      if (!multiple) next.clear()
      next.add(id)
    }
    openIds = next
  }
</script>

<div class="neo-accordion">
  {#each items as item (item.id)}
    <div class="neo-accordion-item" class:open={openIds.has(item.id)}>
      <button
        class="neo-accordion-trigger"
        aria-expanded={openIds.has(item.id)}
        on:click={() => toggle(item.id)}
      >
        {item.trigger}
        <span class="neo-accordion-chevron">▼</span>
      </button>
      <div class="neo-accordion-body">{item.content}</div>
    </div>
  {/each}
</div>
