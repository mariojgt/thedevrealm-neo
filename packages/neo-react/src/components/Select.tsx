import * as React from 'react'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  /** Options to render */
  options: SelectOption[]
  /** Optional placeholder option (value = "") */
  placeholder?: string
  /** Label rendered above the select */
  label?: string
}

/**
 * NeoSelect — styled select dropdown.
 *
 * @example
 * <NeoSelect
 *   label="Level"
 *   placeholder="Choose a level..."
 *   options={[
 *     { value: 'beginner', label: 'Beginner' },
 *     { value: 'advanced', label: 'Advanced' },
 *   ]}
 * />
 */
export const NeoSelect = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ options, placeholder, label, className, id, ...props }, ref) => (
    <div className="neo-field">
      {label && (
        <label className="neo-label" htmlFor={id}>
          {label}
        </label>
      )}
      <select
        ref={ref}
        id={id}
        className={['neo-select', className].filter(Boolean).join(' ')}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map(opt => (
          <option key={opt.value} value={opt.value} disabled={opt.disabled}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  )
)

NeoSelect.displayName = 'NeoSelect'
