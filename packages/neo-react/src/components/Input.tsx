import * as React from 'react'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Optional leading icon element (e.g. a Lucide icon) */
  icon?: React.ReactNode
  /** Label rendered above the input */
  label?: string
  /** Wraps input + label in a .neo-field container when true (default true) */
  fieldWrap?: boolean
}

/**
 * NeoInput — styled text input, optionally with leading icon and label.
 *
 * @example
 * <NeoInput label="Email" placeholder="you@example.com" icon={<MailIcon />} />
 */
export const NeoInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ icon, label, fieldWrap = true, className, id, ...props }, ref) => {
    const inputEl = icon ? (
      <div className="neo-input-icon">
        <span className="neo-input-icon__icon" aria-hidden="true">
          {icon}
        </span>
        <input
          ref={ref}
          id={id}
          className={['neo-input', className].filter(Boolean).join(' ')}
          {...props}
        />
      </div>
    ) : (
      <input
        ref={ref}
        id={id}
        className={['neo-input', className].filter(Boolean).join(' ')}
        {...props}
      />
    )

    if (!fieldWrap && !label) return inputEl

    return (
      <div className="neo-field">
        {label && (
          <label className="neo-label" htmlFor={id}>
            {label}
          </label>
        )}
        {inputEl}
      </div>
    )
  }
)

NeoInput.displayName = 'NeoInput'

/* ── Textarea ────────────────────────────────────────────────────────────── */

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
}

/**
 * NeoTextarea — styled multi-line text input.
 */
export const NeoTextarea = React.forwardRef<
  HTMLTextAreaElement,
  TextareaProps
>(({ label, className, id, ...props }, ref) => (
  <div className="neo-field">
    {label && (
      <label className="neo-label" htmlFor={id}>
        {label}
      </label>
    )}
    <textarea
      ref={ref}
      id={id}
      className={['neo-input', className].filter(Boolean).join(' ')}
      {...props}
    />
  </div>
))

NeoTextarea.displayName = 'NeoTextarea'
