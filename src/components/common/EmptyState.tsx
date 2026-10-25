import { type ReactNode } from 'react'
import { FolderCode } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface EmptyStateProps {
  icon?: ReactNode
  title: string
  description?: string
  action?: ReactNode
  className?: string
}

export default function EmptyState({
  icon,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center p-8 sm:p-12 text-center rounded-2xl border border-[var(--border-default)] bg-[var(--bg-surface)]/50',
        className
      )}
    >
      <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4 shadow-inner">
        {icon ?? <FolderCode size={26} />}
      </div>
      <h3 className="text-base sm:text-lg font-semibold text-slate-100 mb-1.5">
        {title}
      </h3>
      {description && (
        <p className="text-sm text-slate-400 max-w-sm mb-6 leading-relaxed">
          {description}
        </p>
      )}
      {action && <div className="mt-2">{action}</div>}
    </div>
  )
}
