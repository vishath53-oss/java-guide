import { type ReactNode, type ElementType } from 'react'
import { cn } from '@/lib/utils'

export interface SectionHeadingProps {
  title: string
  description?: string
  badge?: ReactNode
  action?: ReactNode
  as?: 'h1' | 'h2' | 'h3'
  align?: 'left' | 'center'
  className?: string
}

export default function SectionHeading({
  title,
  description,
  badge,
  action,
  as = 'h2',
  align = 'left',
  className,
}: SectionHeadingProps) {
  const Component: ElementType = as

  const headingSizes = {
    h1: 'text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight',
    h2: 'text-xl sm:text-2xl font-bold tracking-tight',
    h3: 'text-lg sm:text-xl font-semibold',
  }

  return (
    <div
      className={cn(
        'flex flex-col gap-2',
        align === 'center' ? 'items-center text-center' : 'items-start',
        className
      )}
    >
      <div
        className={cn(
          'w-full flex items-center justify-between gap-4 flex-wrap',
          align === 'center' && 'justify-center'
        )}
      >
        <div className="flex items-center gap-2.5 flex-wrap">
          <Component className={cn('text-slate-100', headingSizes[as])}>
            {title}
          </Component>
          {badge && <div className="shrink-0">{badge}</div>}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>

      {description && (
        <p
          className={cn(
            'text-sm sm:text-base text-slate-400 leading-relaxed',
            align === 'center' ? 'max-w-2xl' : 'max-w-3xl'
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
