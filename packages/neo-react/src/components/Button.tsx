import * as React from 'react'

export type ButtonVariant = 'primary' | 'accent' | 'ghost' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual variant */
  variant?: ButtonVariant
  /** Size preset — maps to padding/font-size */
  size?: ButtonSize
  /** Render as an anchor element (pass href) */
  asChild?: boolean
}

const variantClass: Record<ButtonVariant, string> = {
  primary: 'neo-btn-primary',
  accent:  'neo-btn-accent',
  ghost:   'neo-btn-ghost',
  danger:  'neo-btn-danger',
}

const sizeClass: Record<ButtonSize, string> = {
  sm: 'neo-btn-sm',
  md: 'neo-btn-md',
  lg: 'neo-btn-lg',
}

/**
 * NeoButton — neo-brutalist styled button.
 *
 * @example
 * <NeoButton variant="primary" size="md">Download</NeoButton>
 */
export const NeoButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className, children, ...props }, ref) => {
    const classes = [
      'neo-btn',
      variantClass[variant],
      sizeClass[size],
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)

NeoButton.displayName = 'NeoButton'
