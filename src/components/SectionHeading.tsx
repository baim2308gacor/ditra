import type { ReactNode } from 'react'

export function SectionHeading({ index, eyebrow, title, description }: { index: string; eyebrow: string; title: ReactNode; description?: string }) {
  return (
    <div className="section-heading">
      <div className="section-meta">
        <span className="mono-index">{index}</span>
        <span className="eyebrow-text">{eyebrow}</span>
      </div>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  )
}
