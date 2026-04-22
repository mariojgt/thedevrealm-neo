<script lang="ts">
  export let tip: string
</script>

<span data-tip={tip} style="display:contents">
  <slot />
</span>
