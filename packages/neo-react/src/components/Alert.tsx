import * as React from 'react'

export type AlertVariant = 'success' | 'warning' | 'error' | 'info'

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Semantic variant */
  variant?: AlertVariant
  /** Icon displayed on the left. Pass a React node (e.g. a Lucide icon). */
  icon?: React.ReactNode
  /** Bold heading before the message */
  title?: string
}

const variantClass: Record<AlertVariant, string> = {
  success: 'neo-alert-success',
  warning: 'neo-alert-warning',
  error:   'neo-alert-error',
  info:    'neo-alert-info',
}

/**
 * NeoAlert — status alert banner.
 *
 * @example
 * <NeoAlert variant="success" title="Saved" icon={<CheckIcon />}>
 *   Your changes have been saved.
 * </NeoAlert>
 */
export const NeoAlert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ variant = 'info', icon, title, className, children, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={['neo-alert', variantClass[variant], className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {icon && (
        <span className="neo-alert__icon" aria-hidden="true">
          {icon}
        </span>
      )}
      <p className="neo-alert__content">
        {title && <strong className="neo-alert__title">{title} —&nbsp;</strong>}
        {children}
      </p>
    </div>
  )
)

NeoAlert.displayName = 'NeoAlert'
