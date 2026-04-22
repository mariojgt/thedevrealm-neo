import * as React from 'react'

export type TagVariant = 'brand' | 'accent' | 'ghost'

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Color variant */
  variant?: TagVariant
  /** Apply a slight rotation for emphasis */
  rotated?: boolean
}

const variantClass: Record<TagVariant, string> = {
  brand:  'neo-tag-brand',
  accent: 'neo-tag-accent',
  ghost:  'neo-tag-ghost',
}

/**
 * NeoTag — small neo-brutalist tag / label.
 *
 * @example
 * <NeoTag variant="accent" rotated>Hot</NeoTag>
 */
export const NeoTag = React.forwardRef<HTMLSpanElement, TagProps>(
  ({ variant = 'ghost', rotated, className, children, ...props }, ref) => {
    const classes = [
      'neo-tag',
      variantClass[variant],
      rotated && 'neo-tag-rotate',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <span ref={ref} className={classes} {...props}>
        {children}
      </span>
    )
  }
)

NeoTag.displayName = 'NeoTag'

/* ── Badge ───────────────────────────────────────────────────────────────── */

export type BadgeVariant = 'default' | 'success' | 'warning' | 'error'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
}

const badgeVariantClass: Record<BadgeVariant, string> = {
  default: 'neo-badge-default',
  success: 'neo-badge-success',
  warning: 'neo-badge-warning',
  error:   'neo-badge-error',
}

/**
 * NeoBadge — inline status badge.
 *
 * @example
 * <NeoBadge variant="success">Published</NeoBadge>
 */
export const NeoBadge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = 'default', className, children, ...props }, ref) => (
    <span
      ref={ref}
      className={['neo-badge', badgeVariantClass[variant], className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {children}
    </span>
  )
)

NeoBadge.displayName = 'NeoBadge'
