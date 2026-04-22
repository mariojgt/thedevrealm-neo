import type { App } from 'vue'
import NeoButton      from './components/NeoButton.vue'
import NeoCard        from './components/NeoCard.vue'
import NeoTag         from './components/NeoTag.vue'
import NeoInput       from './components/NeoInput.vue'
import NeoSelect      from './components/NeoSelect.vue'
import NeoAlert       from './components/NeoAlert.vue'
import NeoTable       from './components/NeoTable.vue'
import NeoToggleGroup from './components/NeoToggleGroup.vue'
import NeoModal       from './components/NeoModal.vue'
import NeoAccordion   from './components/NeoAccordion.vue'
import NeoTooltip     from './components/NeoTooltip.vue'
import NeoSkeleton    from './components/NeoSkeleton.vue'
import NeoAvatar      from './components/NeoAvatar.vue'
import NeoKbd         from './components/NeoKbd.vue'
import NeoRarityCard  from './components/NeoRarityCard.vue'
import NeoLeaderboard from './components/NeoLeaderboard.vue'
import NeoProgressBar from './components/NeoProgressBar.vue'

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
  NeoModal,
  NeoAccordion,
  NeoTooltip,
  NeoSkeleton,
  NeoAvatar,
  NeoKbd,
  NeoRarityCard,
  NeoLeaderboard,
  NeoProgressBar,
}

export type { LeaderboardEntry } from './components/NeoLeaderboard.vue'

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
    app.component('NeoModal',       NeoModal)
    app.component('NeoAccordion',   NeoAccordion)
    app.component('NeoTooltip',     NeoTooltip)
    app.component('NeoSkeleton',    NeoSkeleton)
    app.component('NeoAvatar',      NeoAvatar)
    app.component('NeoKbd',         NeoKbd)
    app.component('NeoRarityCard',  NeoRarityCard)
    app.component('NeoLeaderboard', NeoLeaderboard)
    app.component('NeoProgressBar', NeoProgressBar)
  },
}

export default NeoVue
