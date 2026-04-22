# @thedevrealm/neo-css

> Core CSS kit for The Dev Realm Neo-Brutalist design system.  
> Design tokens + component classes + animations. Zero framework dependency.

**Live showcase →** https://mariojgt.github.io/thedevrealm-neo/

---

## Quick Start

### Option A — Plain HTML (no build tool)

Drop one `<link>` tag into your `<head>` and you're done:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My App</title>
  <!-- Neo CSS — full bundle via jsDelivr CDN -->
  <link rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/@thedevrealm/neo-css@latest/dist/neo.css">
</head>
<body class="neo-noise">

  <button class="neo-btn neo-btn-primary">Hello Neo</button>

</body>
</html>
```

> **Note:** If the package isn't published yet, copy `dist/neo.css` into your project and link it locally.

---

### Option B — npm / pnpm (recommended for bundler projects)

```bash
npm install @thedevrealm/neo-css
# or
pnpm add @thedevrealm/neo-css
```

#### Import everything (Vite / webpack / Parcel)

```js
// main.js / main.ts
import '@thedevrealm/neo-css/dist/neo.css'
```

#### Import via CSS `@import`

```css
/* styles.css */
@import '@thedevrealm/neo-css/dist/neo.css';
```

#### Import sub-bundles (tree-shake what you don't need)

```js
import '@thedevrealm/neo-css/dist/tokens.css'     // CSS custom properties only
import '@thedevrealm/neo-css/dist/components.css' // All component classes
import '@thedevrealm/neo-css/dist/animations.css' // Keyframes only
```

---

### Option C — Tailwind CSS preset

```js
// tailwind.config.js
module.exports = {
  presets: [require('@thedevrealm/neo-css/tailwind-preset')],
  content: ['./src/**/*.{html,js,ts,jsx,tsx,vue,svelte}'],
}
```

The preset extends Tailwind with Neo design tokens:
- `brand`, `surface`, `accent`, `muted`, `subtle` color utilities
- `shadow-neo`, `shadow-neo-sm`, `shadow-neo-lg`, `shadow-neo-xl`
- `border-3` width utility
- All Neo keyframes and animation helpers

---

## Framework Examples

### React

```jsx
// main.jsx
import '@thedevrealm/neo-css/dist/neo.css'
import { createRoot } from 'react-dom/client'
import App from './App'

createRoot(document.getElementById('root')).render(<App />)
```

```jsx
// Button.jsx
export function Button({ children, variant = 'primary', ...props }) {
  return (
    <button className={`neo-btn neo-btn-${variant}`} {...props}>
      {children}
    </button>
  )
}
```

### Vue 3

```js
// main.js
import { createApp } from 'vue'
import '@thedevrealm/neo-css/dist/neo.css'
import App from './App.vue'

createApp(App).mount('#app')
```

```vue
<!-- Card.vue -->
<template>
  <div class="neo-card" style="padding: 1.5rem">
    <slot />
  </div>
</template>
```

### Svelte

```js
// main.js
import '@thedevrealm/neo-css/dist/neo.css'
import App from './App.svelte'

new App({ target: document.getElementById('app') })
```

### Next.js (App Router)

```js
// app/layout.js
import '@thedevrealm/neo-css/dist/neo.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="neo-noise">{children}</body>
    </html>
  )
}
```

### Nuxt 3

```js
// nuxt.config.ts
export default defineNuxtConfig({
  css: ['@thedevrealm/neo-css/dist/neo.css'],
})
```

### Astro

```astro
---
// src/layouts/Base.astro
import '@thedevrealm/neo-css/dist/neo.css'
---
<html lang="en">
  <body class="neo-noise">
    <slot />
  </body>
</html>
```

---

## Component Reference

### Buttons

```html
<button class="neo-btn neo-btn-primary">Primary</button>
<button class="neo-btn neo-btn-accent">Accent</button>
<button class="neo-btn neo-btn-ghost">Ghost</button>
<button class="neo-btn neo-btn-danger">Danger</button>

<!-- Sizes -->
<button class="neo-btn neo-btn-primary neo-btn-sm">Small</button>
<button class="neo-btn neo-btn-primary neo-btn-lg">Large</button>
```

### Cards

```html
<div class="neo-card" style="padding:1.5rem">Basic card</div>
<div class="neo-card-brand" style="padding:1.5rem">Brand-accent top border</div>
<div class="neo-stat-card">Stat / metric card</div>
```

### Badges & Tags

```html
<span class="neo-badge neo-badge-success">Live</span>
<span class="neo-badge neo-badge-warning">Beta</span>
<span class="neo-badge neo-badge-error">Down</span>

<span class="neo-tag neo-tag-brand">Design</span>
<span class="neo-tag neo-tag-accent">Gaming</span>
```

### Alerts

```html
<div class="neo-alert neo-alert-success">
  <span class="neo-alert__icon">✓</span>
  <div class="neo-alert__content">
    <p class="neo-alert__title">Success</p>
    Everything worked.
  </div>
</div>

<!-- Variants: neo-alert-success | neo-alert-warning | neo-alert-error | neo-alert-info -->
```

### Forms

```html
<div class="neo-field">
  <label class="neo-label" for="email">Email</label>
  <input class="neo-input" id="email" type="email" placeholder="you@example.com">
</div>

<select class="neo-select">
  <option>Option A</option>
  <option>Option B</option>
</select>
```

### Table

```html
<table class="neo-table">
  <thead>
    <tr><th>Name</th><th>Score</th></tr>
  </thead>
  <tbody>
    <tr><td>Alice</td><td>9,800</td></tr>
  </tbody>
</table>
```

### Accordion

```html
<div class="neo-accordion">
  <div class="neo-accordion-item open">
    <button class="neo-accordion-trigger" onclick="neoAccordion(this)">
      Question <span class="neo-accordion-chevron">▼</span>
    </button>
    <div class="neo-accordion-body">Answer goes here.</div>
  </div>
</div>

<script>
function neoAccordion(btn) {
  const item = btn.closest('.neo-accordion-item')
  const isOpen = item.classList.contains('open')
  item.closest('.neo-accordion')
      .querySelectorAll('.neo-accordion-item.open')
      .forEach(el => el.classList.remove('open'))
  if (!isOpen) item.classList.add('open')
}
</script>
```

### Modal

```html
<!-- Trigger -->
<button class="neo-btn neo-btn-primary" onclick="neoModalOpen('my-modal')">Open</button>

<!-- Modal markup — place anywhere in <body> -->
<div class="neo-modal-backdrop" id="my-modal"
     onclick="if(event.target===this)neoModalClose('my-modal')">
  <div class="neo-modal">
    <div class="neo-modal-header">
      <h2 class="neo-modal-title">Title</h2>
      <button class="neo-modal-close" onclick="neoModalClose('my-modal')">✕</button>
    </div>
    <div class="neo-modal-body">Body content here.</div>
    <div class="neo-modal-footer">
      <button class="neo-btn neo-btn-ghost" onclick="neoModalClose('my-modal')">Cancel</button>
      <button class="neo-btn neo-btn-primary">Confirm</button>
    </div>
  </div>
</div>

<script>
function neoModalOpen(id) {
  document.getElementById(id).classList.add('open')
  document.body.style.overflow = 'hidden'
}
function neoModalClose(id) {
  document.getElementById(id).classList.remove('open')
  document.body.style.overflow = ''
}
// Close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape')
    document.querySelectorAll('.neo-modal-backdrop.open')
      .forEach(el => { el.classList.remove('open'); document.body.style.overflow = '' })
})
</script>
```

### Tooltip (pure CSS — zero JS)

```html
<!-- Add data-tip to any element -->
<button class="neo-btn neo-btn-primary" data-tip="Creates a new file">New</button>
<span class="neo-badge neo-badge-success" data-tip="Deployed 2m ago">Live</span>
```

### Skeleton Loaders

```html
<!-- Text lines -->
<div class="neo-skeleton neo-skeleton-title"></div>
<div class="neo-skeleton neo-skeleton-text"></div>
<div class="neo-skeleton neo-skeleton-text" style="width:70%"></div>

<!-- Card skeleton -->
<div class="neo-skeleton neo-skeleton-thumb"></div>
<div class="neo-skeleton neo-skeleton-btn"></div>

<!-- Avatar skeleton -->
<div class="neo-skeleton neo-skeleton-avatar"></div>
```

### Avatar

```html
<!-- Sizes: neo-avatar-sm | md | lg | xl -->
<div class="neo-avatar neo-avatar-md">MJ</div>
<div class="neo-avatar neo-avatar-md neo-avatar-brand neo-avatar-online">AB</div>

<!-- Group (overlapping) -->
<div class="neo-avatar-group">
  <div class="neo-avatar neo-avatar-md">A</div>
  <div class="neo-avatar neo-avatar-md">B</div>
  <div class="neo-avatar neo-avatar-md">+3</div>
</div>
```

### Keyboard Shortcut Badge

```html
Press <span class="neo-kbd">⌘ K</span> to search.
Save with <span class="neo-kbd">⌃ S</span>.
<span class="neo-kbd">Esc</span> to dismiss.
```

### Leaderboard

```html
<div class="neo-leaderboard">
  <div class="neo-lb-header">
    <span style="width:1.75rem">#</span>
    <span style="flex:1">Player</span>
    <span>Score</span>
  </div>
  <div class="neo-lb-row">
    <span class="neo-lb-rank neo-lb-rank-1">🥇</span>
    <span class="neo-lb-name">mariojgt</span>
    <span class="neo-lb-score">142,830</span>
  </div>
  <div class="neo-lb-row">
    <span class="neo-lb-rank neo-lb-rank-2">🥈</span>
    <span class="neo-lb-name">darkwolf99</span>
    <span class="neo-lb-score">98,410</span>
  </div>
</div>
```

### Rarity Item Cards

```html
<!-- Variants: neo-rarity-common | uncommon | rare | epic | legendary -->
<div class="neo-item-card neo-rarity neo-rarity-legendary">
  <div class="neo-item-icon">👑</div>
  <p class="neo-item-name">Crown of Ages</p>
  <p class="neo-item-rarity">Legendary</p>
</div>
```

### Text Utilities

```html
<p class="neo-text-brand">Brand green</p>
<p class="neo-text-accent">Accent orange</p>
<p class="neo-text-muted">Muted</p>
<p class="neo-text-subtle">Subtle</p>
<p class="neo-text-white">White</p>
<h1 class="neo-text-gradient">Gradient heading</h1>
```

### Background / Texture Utilities

```html
<!-- Subtle noise texture on body -->
<body class="neo-noise">...</body>

<!-- Diagonal stripe pattern on any element -->
<div class="neo-stripe-pattern">...</div>
```

---

## Design Tokens (CSS Custom Properties)

Override any token after importing the stylesheet:

```css
:root {
  /* Brand */
  --neo-brand:       #0d9668;
  --neo-brand-light: #2bb885;
  --neo-brand-dark:  #047857;

  /* Surfaces */
  --neo-surface:          #0c1222;
  --neo-surface-light:    #131d33;
  --neo-surface-lighter:  #1a2742;
  --neo-body-bg:          #080d19;

  /* Borders & shadows */
  --neo-border-color: #3a506e;
  --neo-border:       3px solid var(--neo-border-color);
  --neo-radius:       0.375rem;
  --neo-shadow:       5px 5px 0 #000;

  /* Typography */
  --neo-font-sans: ui-sans-serif, system-ui, sans-serif;
  --neo-font-mono: ui-monospace, 'SFMono-Regular', monospace;
}
```

Example — custom brand color:

```css
/* After importing neo.css */
:root {
  --neo-brand:       #7c3aed;   /* purple brand */
  --neo-brand-light: #a78bfa;
  --neo-brand-dark:  #5b21b6;
}
```

---

## License

MIT — © The Dev Realm

