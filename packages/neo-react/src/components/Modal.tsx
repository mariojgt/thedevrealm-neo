import * as React from 'react'

export interface ModalProps {
  /** Control open state */
  open: boolean
  /** Called when the user closes the modal */
  onClose: () => void
  title?: React.ReactNode
  children?: React.ReactNode
  footer?: React.ReactNode
  className?: string
}

export const NeoModal: React.FC<ModalProps> = ({
  open, onClose, title, children, footer, className = '',
}) => {
  React.useEffect(() => {
    if (open) { document.body.style.overflow = 'hidden' }
    else { document.body.style.overflow = '' }
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <div
      className="neo-modal-backdrop open"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className={`neo-modal ${className}`} role="dialog" aria-modal="true">
        {(title != null) && (
          <div className="neo-modal-header">
            <h2 className="neo-modal-title">{title}</h2>
            <button className="neo-modal-close" aria-label="Close" onClick={onClose}>✕</button>
          </div>
        )}
        {children && <div className="neo-modal-body">{children}</div>}
        {footer && <div className="neo-modal-footer">{footer}</div>}
      </div>
    </div>
  )
}
