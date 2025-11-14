import * as React from 'react'

export function Card({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return <div className={`bg-white dark:bg-zinc-900 ${className}`}>{children}</div>
}

export function CardContent({ className = '', children }: { className?: string; children: React.ReactNode }) {
  return <div className={className}>{children}</div>
}
