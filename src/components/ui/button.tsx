import * as React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
}

export function Button({ className = '', children, ...props }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md border border-zinc-200 bg-white hover:bg-zinc-50 dark:bg-zinc-900 dark:border-zinc-800 dark:hover:bg-zinc-800 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
