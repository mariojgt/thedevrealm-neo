<script setup lang="ts">
withDefaults(defineProps<{
  tip: string
}>(), {})
</script>

<!-- Pure-CSS tooltip — adds data-tip to the slot root element is not trivial in Vue,
     so we wrap in a span with data-tip instead. -->
<template>
  <span :data-tip="tip" style="display:contents">
    <slot />
  </span>
</template>
