import { cn } from '@/lib/utils'

export interface ProgressBarProps {
  value: number // 0–100 or current
  max?: number
  label?: string
  showLabel?: boolean
  showValue?: boolean
  size?: 'sm' | 'md' | 'lg'
  variant?: 'blue' | 'violet' | 'gradient' | 'success' | 'warning' | 'error'
  className?: string
}

const trackSizes = {
  sm: 'h-1.5',
  md: 'h-2.5',
  lg: 'h-3.5',
}

const barColors = {
  blue: 'bg-[var(--accent-blue)]',
  violet: 'bg-[var(--accent-violet)]',
  gradient: 'bg-gradient-to-r from-blue-500 to-violet-500',
  success: 'bg-[var(--color-success)]',
  warning: 'bg-[var(--color-warning)]',
  error: 'bg-[var(--color-error)]',
}

export default function ProgressBar({
  value,
  max = 100,
  label,
  showLabel = true,
  showValue = false,
  size = 'md',
  variant = 'gradient',
  className,
}: ProgressBarProps) {
  const pct = Math.min(100, Math.max(0, (value / max) * 100))

  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      {(label && showLabel || showValue) && (
        <div className="flex items-center justify-between">
          {label && showLabel && (
            <span className="text-xs font-medium text-slate-400">{label}</span>
          )}
          {showValue && (
            <span className="text-xs font-mono text-slate-400 font-semibold">{Math.round(pct)}%</span>
          )}
        </div>
      )}
      <div
        className={cn('w-full rounded-full bg-[var(--bg-muted)] overflow-hidden', trackSizes[size])}
        role="progressbar"
        aria-valuenow={pct}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={label || 'Progress'}
      >
        <div
          className={cn('h-full rounded-full transition-all duration-500', barColors[variant])}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
