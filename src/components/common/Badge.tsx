interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'easy' | 'medium' | 'hard' | 'blue' | 'violet' | 'outline'
  className?: string
}

const variantClasses: Record<NonNullable<BadgeProps['variant']>, string> = {
  default: 'bg-slate-700/60 text-slate-300',
  easy: 'bg-green-900/40 text-green-400 border border-green-800/50',
  medium: 'bg-amber-900/40 text-amber-400 border border-amber-800/50',
  hard: 'bg-red-900/40 text-red-400 border border-red-800/50',
  blue: 'bg-blue-900/40 text-blue-400 border border-blue-800/50',
  violet: 'bg-violet-900/40 text-violet-400 border border-violet-800/50',
  outline: 'bg-transparent text-slate-400 border border-slate-700',
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  )
}
