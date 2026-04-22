<script setup lang="ts">
import { ref } from 'vue'

export interface AccordionItem {
  id: string
  trigger: string
  content: string
}

const props = withDefaults(defineProps<{
  items: AccordionItem[]
  multiple?: boolean
  defaultOpen?: string[]
}>(), { multiple: false, defaultOpen: () => [] })

const openIds = ref<Set<string>>(new Set(props.defaultOpen))

function toggle(id: string) {
  const next = new Set(openIds.value)
  if (next.has(id)) { next.delete(id) }
  else {
    if (!props.multiple) next.clear()
    next.add(id)
  }
  openIds.value = next
}
</script>

<template>
  <div class="neo-accordion">
    <div
      v-for="item in items"
      :key="item.id"
      :class="['neo-accordion-item', { open: openIds.has(item.id) }]"
    >
      <button
        class="neo-accordion-trigger"
        :aria-expanded="openIds.has(item.id)"
        @click="toggle(item.id)"
      >
        {{ item.trigger }}
        <span class="neo-accordion-chevron">▼</span>
      </button>
      <div class="neo-accordion-body">{{ item.content }}</div>
    </div>
  </div>
</template>
