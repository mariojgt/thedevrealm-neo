# @thedevrealm/neo-vue

> Vue 3 component library for The Dev Realm Neo-Brutalist design system.
> `<script setup>` SFCs. Fully typed. Peer dep: Vue ≥ 3.3.

## Install

```bash
npm install @thedevrealm/neo-css @thedevrealm/neo-vue
```

## Setup

### Register all components globally (plugin)

```ts
// main.ts
import '@thedevrealm/neo-css/dist/neo.css'
import { createApp } from 'vue'
import NeoVue from '@thedevrealm/neo-vue'
import App from './App.vue'

createApp(App).use(NeoVue).mount('#app')
```

### Or import individually (tree-shaking)

```vue
<script setup>
import '@thedevrealm/neo-css/dist/neo.css'
import { NeoButton, NeoCard } from '@thedevrealm/neo-vue'
</script>
```

## Components

### NeoButton

```vue
<NeoButton variant="primary" size="md">Download</NeoButton>
<NeoButton variant="accent" @click="onBoost">Boost</NeoButton>
<NeoButton variant="ghost" :disabled="loading">Cancel</NeoButton>
```

### NeoCard

```vue
<NeoCard variant="brand" :pattern="true">
  <div style="padding:1.5rem">Content</div>
</NeoCard>
```

### NeoTag

```vue
<NeoTag variant="accent" :rotated="true">Hot</NeoTag>
<NeoTag variant="brand">New</NeoTag>
```

### NeoInput

```vue
<NeoInput v-model="name" label="Full Name" placeholder="Your name..." />

<!-- With icon slot -->
<NeoInput v-model="query" label="Search" placeholder="Search...">
  <template #icon>
    <SearchIcon :size="16" />
  </template>
</NeoInput>
```

### NeoSelect

```vue
<NeoSelect
  v-model="level"
  label="Skill Level"
  placeholder="Choose a level..."
  :options="[
    { value: 'beginner',     label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced',     label: 'Advanced' },
  ]"
/>
```

### NeoAlert

```vue
<NeoAlert variant="success" title="Saved">
  <template #icon><CheckIcon :size="20" /></template>
  Your changes have been saved.
</NeoAlert>
```

### NeoTable

```vue
<NeoTable
  :columns="[
    { key: 'name',     header: 'Course' },
    { key: 'students', header: 'Students' },
  ]"
  :data="courses"
  row-key="id"
>
  <!-- Scoped slot for custom cell rendering -->
  <template #students="{ value }">
    <strong>{{ value }}</strong>
  </template>
</NeoTable>
```

### NeoToggleGroup

```vue
<NeoToggleGroup v-model="view">
  <template #default="{ active, onChange }">
    <button
      v-for="opt in ['grid','list','table']"
      :key="opt"
      class="neo-toggle-btn"
      :class="active === opt && 'neo-toggle-btn-active'"
      @click="onChange(opt)"
    >{{ opt }}</button>
  </template>
</NeoToggleGroup>
```

## License

MIT — © The Dev Realm
