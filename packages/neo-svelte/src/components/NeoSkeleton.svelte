<script lang="ts">
  export type SkeletonVariant = 'thumb' | 'title' | 'text' | 'avatar' | 'btn'
  export let variant: SkeletonVariant = 'text'
</script>

<div class="neo-skeleton neo-skeleton-{variant}" aria-hidden="true" />
