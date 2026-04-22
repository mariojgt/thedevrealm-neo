# @thedevrealm/neo-css

> Core CSS kit for The Dev Realm Neo-Brutalist design system.
> Design tokens + component classes + animations. Zero framework dependency.

## Install

```bash
npm install @thedevrealm/neo-css
# or
pnpm add @thedevrealm/neo-css
```

## Usage

### Import everything

```css
@import '@thedevrealm/neo-css';
```

or in JavaScript:

```js
import '@thedevrealm/neo-css/dist/neo.css'
```

### Import a sub-bundle

```js
import '@thedevrealm/neo-css/tokens'      // CSS custom properties only
import '@thedevrealm/neo-css/components'  // Component classes only
import '@thedevrealm/neo-css/animations'  // Keyframes + animation utilities only
```

### Tailwind CSS preset

```js
// tailwind.config.js
module.exports = {
  presets: [require('@thedevrealm/neo-css/tailwind-preset')],
  content: ['./src/**/*.{html,js,ts,jsx,tsx,vue,svelte}'],
}
```

The preset extends Tailwind with:
- `brand`, `surface`, `accent`, `neo-border`, `muted`, `subtle` color scales
- `shadow-neo`, `shadow-neo-sm`, `shadow-neo-lg`, `shadow-neo-xl` utilities
- `border-3` utility
- All neo animation keyframes and utility classes

## Class Reference

See the [root README](../../README.md#css-class-reference) for the full list.

## License

MIT — © The Dev Realm
