import * as React from 'react'

/* ── Toggle Group ────────────────────────────────────────────────────────── */

export interface ToggleGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Currently active value */
  value: string
  /** Fires when a different button is clicked */
  onChange: (value: string) => void
}

/**
 * NeoToggleGroup — segmented toggle control.
 *
 * @example
 * const [view, setView] = React.useState('grid')
 * <NeoToggleGroup value={view} onChange={setView}>
 *   <NeoToggleItem value="grid">Grid</NeoToggleItem>
 *   <NeoToggleItem value="list">List</NeoToggleItem>
 * </NeoToggleGroup>
 */
export const NeoToggleGroup = React.forwardRef<HTMLDivElement, ToggleGroupProps>(
  ({ value, onChange, className, children, ...props }, ref) => {
    const ctx = React.useMemo(() => ({ value, onChange }), [value, onChange])

    return (
      <ToggleCtx.Provider value={ctx}>
        <div
          ref={ref}
          role="group"
          className={['neo-toggle', className].filter(Boolean).join(' ')}
          {...props}
        >
          {children}
        </div>
      </ToggleCtx.Provider>
    )
  }
)

NeoToggleGroup.displayName = 'NeoToggleGroup'

/* ── Toggle Item ─────────────────────────────────────────────────────────── */

export interface ToggleItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The value this button represents */
  value: string
}

/**
 * NeoToggleItem — individual button inside a NeoToggleGroup.
 */
export const NeoToggleItem = React.forwardRef<
  HTMLButtonElement,
  ToggleItemProps
>(({ value, className, children, ...props }, ref) => {
  const ctx = React.useContext(ToggleCtx)
  const isActive = ctx?.value === value

  return (
    <button
      ref={ref}
      role="radio"
      aria-checked={isActive}
      aria-pressed={isActive}
      data-state={isActive ? 'active' : 'inactive'}
      className={[
        'neo-toggle-btn',
        isActive && 'neo-toggle-btn-active',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      onClick={() => ctx?.onChange(value)}
      type="button"
      {...props}
    >
      {children}
    </button>
  )
})

NeoToggleItem.displayName = 'NeoToggleItem'

/* ── Context ─────────────────────────────────────────────────────────────── */

interface ToggleCtxValue {
  value: string
  onChange: (v: string) => void
}

const ToggleCtx = React.createContext<ToggleCtxValue | null>(null)

/* ── Tab Bar ─────────────────────────────────────────────────────────────── */

export interface TabBarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  value: string
  onChange: (value: string) => void
}

export const NeoTabBar = React.forwardRef<HTMLDivElement, TabBarProps>(
  ({ value, onChange, className, children, ...props }, ref) => {
    const ctx = React.useMemo(() => ({ value, onChange }), [value, onChange])
    return (
      <TabCtx.Provider value={ctx}>
        <div
          ref={ref}
          role="tablist"
          className={['neo-tabs', className].filter(Boolean).join(' ')}
          {...props}
        >
          {children}
        </div>
      </TabCtx.Provider>
    )
  }
)

NeoTabBar.displayName = 'NeoTabBar'

export interface TabProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}

export const NeoTab = React.forwardRef<HTMLButtonElement, TabProps>(
  ({ value, className, children, ...props }, ref) => {
    const ctx = React.useContext(TabCtx)
    const isActive = ctx?.value === value

    return (
      <button
        ref={ref}
        role="tab"
        aria-selected={isActive}
        data-state={isActive ? 'active' : 'inactive'}
        className={[
          'neo-tab',
          isActive && 'neo-tab-active',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        onClick={() => ctx?.onChange(value)}
        type="button"
        {...props}
      >
        {children}
      </button>
    )
  }
)

NeoTab.displayName = 'NeoTab'

const TabCtx = React.createContext<ToggleCtxValue | null>(null)
