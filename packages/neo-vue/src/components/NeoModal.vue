<script setup lang="ts">
import { watch } from 'vue'

const props = withDefaults(defineProps<{
  open: boolean
  title?: string
}>(), { open: false })

const emit = defineEmits<{
  (e: 'close'): void
}>()

watch(() => props.open, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})

function onBackdropClick(e: MouseEvent) {
  if (e.target === e.currentTarget) emit('close')
}
</script>

<template>
  <div v-if="open" class="neo-modal-backdrop open" @click="onBackdropClick">
    <div class="neo-modal" role="dialog" aria-modal="true">
      <div v-if="title || $slots.header" class="neo-modal-header">
        <slot name="header">
          <h2 class="neo-modal-title">{{ title }}</h2>
        </slot>
        <button class="neo-modal-close" aria-label="Close" @click="emit('close')">✕</button>
      </div>
      <div v-if="$slots.default" class="neo-modal-body">
        <slot />
      </div>
      <div v-if="$slots.footer" class="neo-modal-footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
