import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface IconButtonProps
  extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag'
  > {
  icon: ReactNode
  label: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'ghost' | 'outline' | 'filled'
}

const sizeClasses = {
  sm: 'w-7 h-7',
  md: 'w-9 h-9',
  lg: 'w-11 h-11',
}

const variantClasses = {
  ghost: 'text-slate-400 hover:text-white hover:bg-slate-800/70',
  outline:
    'text-slate-400 hover:text-white border border-[var(--border-default)] hover:border-[var(--border-hover)] hover:bg-slate-800/40',
  filled: 'text-white bg-[var(--bg-elevated)] hover:bg-[var(--bg-overlay)]',
}

export default function IconButton({
  icon,
  label,
  size = 'md',
  variant = 'ghost',
  className,
  type = 'button',
  disabled,
  ...props
}: IconButtonProps) {
  const motionProps: HTMLMotionProps<'button'> = {
    whileHover: disabled ? undefined : { scale: 1.05 },
    whileTap: disabled ? undefined : { scale: 0.95 },
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      aria-label={label}
      {...motionProps}
      {...(props as any)}
      className={cn(
        'inline-flex items-center justify-center rounded-lg transition-colors',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-base)]',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      {icon}
    </motion.button>
  )
}
