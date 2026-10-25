import { type ReactNode } from 'react'
import { AlertCircle, CheckCircle2, Info, AlertTriangle, X } from 'lucide-react'
import { cn } from '@/lib/utils'

export type AlertVariant = 'error' | 'warning' | 'info' | 'success'

export interface AlertProps {
  variant?: AlertVariant
  title?: string
  children: ReactNode
  onDismiss?: () => void
  className?: string
}

const variantStyles: Record<
  AlertVariant,
  { container: string; icon: ReactNode; text: string }
> = {
  error: {
    container: 'bg-red-950/40 border-red-800/50 text-red-300',
    icon: <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />,
    text: 'text-red-200',
  },
  warning: {
    container: 'bg-amber-950/40 border-amber-800/50 text-amber-300',
    icon: <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />,
    text: 'text-amber-200',
  },
  info: {
    container: 'bg-blue-950/40 border-blue-800/50 text-blue-300',
    icon: <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />,
    text: 'text-blue-200',
  },
  success: {
    container: 'bg-emerald-950/40 border-emerald-800/50 text-emerald-300',
    icon: <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />,
    text: 'text-emerald-200',
  },
}

export default function ErrorMessage({
  variant = 'error',
  title,
  children,
  onDismiss,
  className,
}: AlertProps) {
  const current = variantStyles[variant]

  return (
    <div
      role="alert"
      className={cn(
        'flex items-start gap-3 p-4 rounded-xl border text-sm',
        current.container,
        className
      )}
    >
      {current.icon}
      <div className="flex-1">
        {title && <h4 className="font-semibold mb-1 text-slate-100">{title}</h4>}
        <div className={current.text}>{children}</div>
      </div>
      {onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Dismiss alert"
        >
          <X size={16} />
        </button>
      )}
    </div>
  )
}
