import * as React from 'react'

export function Badge({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs dark:border-zinc-700 ${className}`}>
      {children}
    </span>
  )
}
