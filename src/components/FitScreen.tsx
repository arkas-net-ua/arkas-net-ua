import { cloneElement, isValidElement, type ReactNode } from 'react'

export function FitScreen({ children, className }: { children: ReactNode; className?: string; autoFit?: boolean }) {
  const section = isValidElement<{ id?: string }>(children) ? children : null
  const id = section?.props.id
  return (
    <div id={id} className={['fit-screen', 'viewport-screen', className].filter(Boolean).join(' ')}>
      <div className="fit-screen-inner">{section && id ? cloneElement(section, { id: undefined }) : children}</div>
    </div>
  )
}
