/**
 * Simple build script for @thedevrealm/neo-css
 * Concatenates CSS files in the correct order and copies to dist/.
 * No build tool dependency — works with plain Node.js 18+.
 */

const fs   = require('fs')
const path = require('path')

const SRC  = path.join(__dirname, '..', 'src')
const DIST = path.join(__dirname, '..', 'dist')

// Order matters — tokens must come first.
const FILES = [
  'tokens.css',
  'base.css',
  'components/cards.css',
  'components/buttons.css',
  'components/tags.css',
  'components/forms.css',
  'components/table.css',
  'components/toggle.css',
  'components/alerts.css',
  'components/decorative.css',
  // New components
  'components/kbd.css',
  'components/tooltip.css',
  'components/skeleton.css',
  'components/avatar.css',
  'components/accordion.css',
  'components/modal.css',
  'components/command-palette.css',
  'components/gaming.css',
  'animations.css',
]

// components.css includes base.css so .neo-text-* and .neo-noise helpers are available
const COMPONENT_FILES = FILES.slice(1, -1) // base.css through gaming.css, no tokens or animations

const BUNDLES = {
  'neo.css':        FILES,
  'tokens.css':     ['tokens.css'],
  'components.css': COMPONENT_FILES,
  'animations.css': ['animations.css'],
}

fs.mkdirSync(DIST, { recursive: true })

for (const [outFile, srcs] of Object.entries(BUNDLES)) {
  const banner = `/* @thedevrealm/neo-css — ${outFile} | MIT License */\n`
  const content = srcs
    .map(f => fs.readFileSync(path.join(SRC, f), 'utf8'))
    .join('\n')
  fs.writeFileSync(path.join(DIST, outFile), banner + content)
  console.log(`✓  dist/${outFile}`)
}

console.log('\n@thedevrealm/neo-css built successfully.')
