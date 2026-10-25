import { cn } from '@/lib/utils'

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'primary' | 'violet' | 'white' | 'muted'
  className?: string
  label?: string
}

const sizeClasses = {
  sm: 'w-4 h-4 border-2',
  md: 'w-6 h-6 border-2',
  lg: 'w-8 h-8 border-3',
  xl: 'w-12 h-12 border-4',
}

const variantClasses = {
  primary: 'border-blue-500/20 border-t-blue-500',
  violet: 'border-violet-500/20 border-t-violet-500',
  white: 'border-white/20 border-t-white',
  muted: 'border-slate-700 border-t-slate-300',
}

export function Spinner({
  size = 'md',
  variant = 'primary',
  className,
  label = 'Loading...',
}: SpinnerProps) {
  return (
    <div className="inline-flex items-center gap-2" role="status" aria-label={label}>
      <span
        className={cn(
          'inline-block rounded-full animate-spin',
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
      />
      <span className="sr-only">{label}</span>
    </div>
  )
}

export interface SkeletonProps {
  className?: string
  variant?: 'text' | 'rectangular' | 'circular'
  width?: string | number
  height?: string | number
}

export function Skeleton({
  className,
  variant = 'rectangular',
  width,
  height,
}: SkeletonProps) {
  const variantStyles = {
    text: 'h-4 rounded',
    rectangular: 'rounded-lg',
    circular: 'rounded-full',
  }

  return (
    <div
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
      }}
      className={cn(
        'animate-pulse bg-slate-800/60 border border-slate-700/30',
        variantStyles[variant],
        className
      )}
      aria-hidden="true"
    />
  )
}

export default Spinner
