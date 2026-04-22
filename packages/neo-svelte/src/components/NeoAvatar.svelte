<script lang="ts">
  export type AvatarSize   = 'sm' | 'md' | 'lg' | 'xl'
  export type AvatarColor  = 'brand' | 'accent' | 'default'
  export type AvatarStatus = 'online' | 'offline' | undefined

  export let size:   AvatarSize   = 'md'
  export let color:  AvatarColor  = 'default'
  export let status: AvatarStatus = undefined

  $: cls = [
    'neo-avatar',
    `neo-avatar-${size}`,
    color !== 'default' ? `neo-avatar-${color}` : '',
    status ? `neo-avatar-${status}` : '',
  ].filter(Boolean).join(' ')
</script>

<div class={cls}><slot /></div>
