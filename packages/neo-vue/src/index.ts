import type { App } from 'vue'
import NeoButton      from './components/NeoButton.vue'
import NeoCard        from './components/NeoCard.vue'
import NeoTag         from './components/NeoTag.vue'
import NeoInput       from './components/NeoInput.vue'
import NeoSelect      from './components/NeoSelect.vue'
import NeoAlert       from './components/NeoAlert.vue'
import NeoTable       from './components/NeoTable.vue'
import NeoToggleGroup from './components/NeoToggleGroup.vue'

// Named exports for tree-shaking
export {
  NeoButton,
  NeoCard,
  NeoTag,
  NeoInput,
  NeoSelect,
  NeoAlert,
  NeoTable,
  NeoToggleGroup,
}

// Vue plugin — registers all components globally
const NeoVue = {
  install(app: App) {
    app.component('NeoButton',      NeoButton)
    app.component('NeoCard',        NeoCard)
    app.component('NeoTag',         NeoTag)
    app.component('NeoInput',       NeoInput)
    app.component('NeoSelect',      NeoSelect)
    app.component('NeoAlert',       NeoAlert)
    app.component('NeoTable',       NeoTable)
    app.component('NeoToggleGroup', NeoToggleGroup)
  },
}

export default NeoVue
