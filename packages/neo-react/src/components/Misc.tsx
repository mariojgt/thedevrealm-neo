import * as React from 'react'

export interface TooltipProps {
  tip: string
  children: React.ReactElement
}

/** Pure-CSS tooltip — wraps any element with data-tip. No JS needed. */
export const NeoTooltip: React.FC<TooltipProps> = ({ tip, children }) => {
  return React.cloneElement(children, { 'data-tip': tip })
}

// ── Skeleton ─────────────────────────────────────────────────────────────────

export type SkeletonVariant = 'thumb' | 'title' | 'text' | 'avatar' | 'btn'

export interface SkeletonProps {
  variant?: SkeletonVariant
  className?: string
  style?: React.CSSProperties
}

export const NeoSkeleton: React.FC<SkeletonProps> = ({
  variant = 'text', className = '', style,
}) => (
  <div
    className={`neo-skeleton neo-skeleton-${variant} ${className}`}
    aria-hidden="true"
    style={style}
  />
)

// ── Avatar ────────────────────────────────────────────────────────────────────

export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl'
export type AvatarStatus = 'online' | 'offline' | undefined

export interface AvatarProps {
  children?: React.ReactNode
  size?: AvatarSize
  color?: 'brand' | 'accent' | 'default'
  status?: AvatarStatus
  className?: string
}

export const NeoAvatar: React.FC<AvatarProps> = ({
  children, size = 'md', color = 'default', status, className = '',
}) => {
  const cls = [
    'neo-avatar',
    `neo-avatar-${size}`,
    color !== 'default' ? `neo-avatar-${color}` : '',
    status ? `neo-avatar-${status}` : '',
    className,
  ].filter(Boolean).join(' ')
  return <div className={cls}>{children}</div>
}

export const NeoAvatarGroup: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children, className = '',
}) => <div className={`neo-avatar-group ${className}`}>{children}</div>

// ── Kbd ───────────────────────────────────────────────────────────────────────

export interface KbdProps {
  children: React.ReactNode
  className?: string
}

export const NeoKbd: React.FC<KbdProps> = ({ children, className = '' }) => (
  <span className={`neo-kbd ${className}`}>{children}</span>
)
