import * as React from 'react'

export type RarityVariant = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary'

export interface RarityCardProps {
  name: string
  rarity?: RarityVariant
  icon?: React.ReactNode
  className?: string
}

export const NeoRarityCard: React.FC<RarityCardProps> = ({
  name, rarity = 'common', icon, className = '',
}) => (
  <div className={`neo-item-card neo-rarity neo-rarity-${rarity} ${className}`}>
    {icon && <div className="neo-item-icon">{icon}</div>}
    <p className="neo-item-name">{name}</p>
    <p className="neo-item-rarity">{rarity.charAt(0).toUpperCase() + rarity.slice(1)}</p>
  </div>
)

// ── Leaderboard ───────────────────────────────────────────────────────────────

export interface LeaderboardEntry {
  rank: number
  name: string
  score: number | string
  extra?: React.ReactNode
}

export interface LeaderboardProps {
  entries: LeaderboardEntry[]
  className?: string
}

const rankIcon = (r: number) => r === 1 ? '🥇' : r === 2 ? '🥈' : r === 3 ? '🥉' : String(r)
const rankClass = (r: number) =>
  `neo-lb-rank${r <= 3 ? ` neo-lb-rank-${r}` : ''}`

export const NeoLeaderboard: React.FC<LeaderboardProps> = ({ entries, className = '' }) => (
  <div className={`neo-leaderboard ${className}`}>
    <div className="neo-lb-header">
      <span>#</span>
      <span style={{ flex: 1 }}>Player</span>
      <span>Score</span>
    </div>
    {entries.map(e => (
      <div key={e.rank} className={`neo-lb-row${e.rank <= 3 ? ` neo-lb-row-${e.rank}` : ''}`}>
        <span className={rankClass(e.rank)}>{rankIcon(e.rank)}</span>
        <span className="neo-lb-name">{e.name}</span>
        <span className="neo-lb-score">{e.score}</span>
        {e.extra}
      </div>
    ))}
  </div>
)

// ── XP / HP / MP Bar ─────────────────────────────────────────────────────────

export type ProgressBarVariant = 'xp' | 'hp' | 'mp'

export interface ProgressBarProps {
  variant?: ProgressBarVariant
  value: number   // 0-100
  label?: string
  valueLabel?: string
  striped?: boolean
  className?: string
}

export const NeoProgressBar: React.FC<ProgressBarProps> = ({
  variant = 'xp', value, label, valueLabel, striped = false, className = '',
}) => {
  const track = `neo-${variant}-track`
  const fill  = `neo-${variant}-fill`
  return (
    <div className={`neo-${variant}-bar ${className}`}>
      {(label || valueLabel) && (
        <div className={`neo-${variant}-label`}>
          {label && <span className={`neo-${variant}-label-text`}>{label}</span>}
          {valueLabel && <span className={`neo-${variant}-label-val`}>{valueLabel}</span>}
        </div>
      )}
      <div className={track} {...(striped ? { 'data-striped': '' } : {})}>
        <div className={fill} style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
      </div>
    </div>
  )
}
