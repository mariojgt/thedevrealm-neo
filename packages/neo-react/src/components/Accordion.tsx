import * as React from 'react'

export interface AccordionItem {
  id: string
  trigger: React.ReactNode
  content: React.ReactNode
}

export interface AccordionProps {
  items: AccordionItem[]
  /** Allow multiple items open at once */
  multiple?: boolean
  defaultOpen?: string[]
  className?: string
}

export const NeoAccordion: React.FC<AccordionProps> = ({
  items, multiple = false, defaultOpen = [], className = '',
}) => {
  const [openIds, setOpenIds] = React.useState<Set<string>>(new Set(defaultOpen))

  const toggle = (id: string) => {
    setOpenIds(prev => {
      const next = new Set(prev)
      if (next.has(id)) { next.delete(id) }
      else {
        if (!multiple) next.clear()
        next.add(id)
      }
      return next
    })
  }

  return (
    <div className={`neo-accordion ${className}`}>
      {items.map(item => (
        <div key={item.id} className={`neo-accordion-item${openIds.has(item.id) ? ' open' : ''}`}>
          <button
            className="neo-accordion-trigger"
            onClick={() => toggle(item.id)}
            aria-expanded={openIds.has(item.id)}
          >
            {item.trigger}
            <span className="neo-accordion-chevron">▼</span>
          </button>
          <div className="neo-accordion-body">{item.content}</div>
        </div>
      ))}
    </div>
  )
}
