# @thedevrealm/neo-react

> React component library for The Dev Realm Neo-Brutalist design system.
> Fully typed with TypeScript. Tree-shakeable. Peer dep: React ≥ 17.

## Install

```bash
npm install @thedevrealm/neo-css @thedevrealm/neo-react
```

## Setup

Import the CSS once in your app root:

```tsx
// app/layout.tsx  or  src/index.tsx
import '@thedevrealm/neo-css/dist/neo.css'
```

## Components

### NeoButton

```tsx
import { NeoButton } from '@thedevrealm/neo-react'

<NeoButton variant="primary" size="md">Download</NeoButton>
<NeoButton variant="accent" size="lg">Boost</NeoButton>
<NeoButton variant="ghost">Cancel</NeoButton>
<NeoButton variant="danger" disabled>Delete</NeoButton>
```

**Props:** `variant` (`primary` | `accent` | `ghost` | `danger`), `size` (`sm` | `md` | `lg`), all `<button>` HTML attrs.

---

### NeoCard

```tsx
import { NeoCard, NeoHeaderBar, NeoHR } from '@thedevrealm/neo-react'

<NeoCard variant="brand" pattern>
  <NeoHeaderBar title="Creative Studio" action={<span>★</span>} />
  <div style={{ padding: '1.5rem' }}>
    <NeoHR />
    <p>Content goes here.</p>
  </div>
</NeoCard>
```

**Props:** `variant` (`default` | `brand` | `stat` | `filter`), `pattern` (boolean), `starred` (boolean).

---

### NeoTag / NeoBadge

```tsx
import { NeoTag, NeoBadge } from '@thedevrealm/neo-react'

<NeoTag variant="accent" rotated>Hot</NeoTag>
<NeoBadge variant="success">Published</NeoBadge>
```

---

### NeoInput / NeoTextarea

```tsx
import { NeoInput, NeoTextarea } from '@thedevrealm/neo-react'
import { SearchIcon } from 'lucide-react'

<NeoInput label="Name" placeholder="Your name..." />
<NeoInput label="Search" icon={<SearchIcon size={16} />} placeholder="Search..." />
<NeoTextarea label="Message" placeholder="Write here..." />
```

---

### NeoSelect

```tsx
import { NeoSelect } from '@thedevrealm/neo-react'

<NeoSelect
  label="Level"
  placeholder="Choose..."
  options={[
    { value: 'beginner',     label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced',     label: 'Advanced' },
  ]}
/>
```

---

### NeoAlert

```tsx
import { NeoAlert } from '@thedevrealm/neo-react'
import { CheckIcon } from 'lucide-react'

<NeoAlert variant="success" title="Saved" icon={<CheckIcon size={20} />}>
  Your changes have been saved.
</NeoAlert>
```

**variants:** `success` | `warning` | `error` | `info`

---

### NeoTable

```tsx
import { NeoTable } from '@thedevrealm/neo-react'

<NeoTable
  rowKey="id"
  columns={[
    { key: 'name',     header: 'Course' },
    { key: 'students', header: 'Students' },
    { key: 'rating',   header: 'Rating',
      render: (v) => <span style={{ color: 'var(--neo-accent)' }}>★ {v}</span> },
  ]}
  data={courses}
/>
```

---

### NeoToggleGroup / NeoToggleItem

```tsx
import { NeoToggleGroup, NeoToggleItem } from '@thedevrealm/neo-react'

const [view, setView] = React.useState('grid')

<NeoToggleGroup value={view} onChange={setView}>
  <NeoToggleItem value="grid">Grid</NeoToggleItem>
  <NeoToggleItem value="list">List</NeoToggleItem>
  <NeoToggleItem value="table">Table</NeoToggleItem>
</NeoToggleGroup>
```

---

### NeoTabBar / NeoTab

```tsx
import { NeoTabBar, NeoTab } from '@thedevrealm/neo-react'

const [tab, setTab] = React.useState('details')

<NeoTabBar value={tab} onChange={setTab}>
  <NeoTab value="details">Details</NeoTab>
  <NeoTab value="media">Media</NeoTab>
  <NeoTab value="settings">Settings</NeoTab>
</NeoTabBar>
```

## License

MIT — © The Dev Realm
