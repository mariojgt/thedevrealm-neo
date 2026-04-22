# @thedevrealm/neo-svelte

> Svelte 4 component library for The Dev Realm Neo-Brutalist design system.
> Peer dep: Svelte ≥ 4.

## Install

```bash
npm install @thedevrealm/neo-css @thedevrealm/neo-svelte
```

## Usage

```svelte
<script>
  import '@thedevrealm/neo-css/dist/neo.css'
  import { NeoButton, NeoCard, NeoTag, NeoInput, NeoAlert } from '@thedevrealm/neo-svelte'

  let name  = ''
  let level = ''
</script>

<NeoCard variant="brand" style="padding:1.5rem">
  <NeoTag variant="accent" rotated>Hot</NeoTag>
  <h2>Neo-Brutalist Card</h2>

  <NeoInput bind:value={name} label="Your Name" placeholder="Enter name..." />

  <NeoButton variant="primary" on:click={() => console.log(name)}>
    Submit
  </NeoButton>

  <NeoAlert variant="success" title="Done">All good!</NeoAlert>
</NeoCard>
```

## Components

| Component | Key props |
|---|---|
| `NeoButton` | `variant` (primary/accent/ghost/danger), `size` (sm/md/lg), `disabled` |
| `NeoCard`   | `variant` (default/brand/stat/filter), `pattern`, `starred` |
| `NeoTag`    | `variant` (brand/accent/ghost), `rotated` |
| `NeoInput`  | `value` (bindable), `label`, `placeholder`, `disabled`, `slot:icon` |
| `NeoAlert`  | `variant` (success/warning/error/info), `title`, `slot:icon` |

## License

MIT — © The Dev Realm
