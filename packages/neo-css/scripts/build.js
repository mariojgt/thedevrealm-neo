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
  'animations.css',
]

const BUNDLES = {
  'neo.css':        FILES,
  'tokens.css':     ['tokens.css'],
  'components.css': FILES.slice(2, -1),  // everything between base and animations
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
