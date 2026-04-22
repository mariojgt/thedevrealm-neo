import * as React from 'react'

export type CardVariant = 'default' | 'brand' | 'stat' | 'filter'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Card visual variant */
  variant?: CardVariant
  /** Overlay the micro-grid pattern on hover */
  pattern?: boolean
  /** Show a ★ decorator in the top-right corner */
  starred?: boolean
}

const variantClass: Record<CardVariant, string> = {
  default: 'neo-card',
  brand:   'neo-card-brand',
  stat:    'neo-stat-card',
  filter:  'neo-filter-card',
}

/**
 * NeoCard — neo-brutalist card container.
 *
 * @example
 * <NeoCard variant="brand" pattern>
 *   <p>Content</p>
 * </NeoCard>
 */
export const NeoCard = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant = 'default', pattern, starred, className, children, ...props }, ref) => {
    const classes = [
      variantClass[variant],
      pattern && 'neo-card-pattern',
      starred && 'neo-star',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    )
  }
)

NeoCard.displayName = 'NeoCard'

/* ── Header Bar ──────────────────────────────────────────────────────────── */

export interface HeaderBarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Content on the left  */
  title?: React.ReactNode
  /** Content on the right */
  action?: React.ReactNode
}

/**
 * NeoHeaderBar — branded diagonal-stripe header strip for cards / modals.
 */
export const NeoHeaderBar = React.forwardRef<HTMLDivElement, HeaderBarProps>(
  ({ title, action, className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={['neo-header-bar', className].filter(Boolean).join(' ')}
      {...props}
    >
      {title ?? children}
      {action && <span>{action}</span>}
    </div>
  )
)

NeoHeaderBar.displayName = 'NeoHeaderBar'

/* ── Divider ─────────────────────────────────────────────────────────────── */

export type DividerProps = React.HTMLAttributes<HTMLHRElement>

/** NeoHR — dashed divider with scissors icon. */
export const NeoHR = React.forwardRef<HTMLHRElement, DividerProps>(
  ({ className, ...props }, ref) => (
    <hr
      ref={ref}
      className={['neo-divider', className].filter(Boolean).join(' ')}
      {...props}
    />
  )
)

NeoHR.displayName = 'NeoHR'
