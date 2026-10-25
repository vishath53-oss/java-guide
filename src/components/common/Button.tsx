import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'
import { Spinner } from './LoadingIndicator'

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag'> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  children: ReactNode
}

const variantClasses = {
  primary:
    'bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:from-blue-500 hover:to-violet-500 shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 border border-transparent',
  secondary:
    'bg-slate-800 text-slate-200 hover:bg-slate-700 border border-slate-700 hover:border-slate-600',
  ghost: 'text-slate-400 hover:text-white hover:bg-slate-800/70 border border-transparent',
  outline: 'border border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white',
  danger: 'bg-red-950/40 text-red-400 border border-red-800/50 hover:bg-red-900/50',
}

const sizeClasses = {
  sm: 'px-3 py-1.5 text-xs rounded-md gap-1.5',
  md: 'px-4 py-2 text-sm rounded-lg gap-2',
  lg: 'px-6 py-3 text-base rounded-xl gap-2.5',
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      className = '',
      disabled,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const motionProps: HTMLMotionProps<'button'> = {
      whileHover: disabled || isLoading ? undefined : { scale: 1.01 },
      whileTap: disabled || isLoading ? undefined : { scale: 0.98 },
      transition: { duration: 0.12 },
    }

    return (
      <motion.button
        ref={ref}
        type={type}
        disabled={disabled || isLoading}
        {...motionProps}
        {...(props as any)}
        className={cn(
          'inline-flex items-center justify-center font-medium transition-colors select-none',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          variantClasses[variant],
          sizeClasses[size],
          className
        )}
      >
        {isLoading ? (
          <>
            <Spinner size={size === 'lg' ? 'md' : 'sm'} variant="white" />
            <span>Loading...</span>
          </>
        ) : (
          <>
            {leftIcon && <span className="shrink-0">{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className="shrink-0">{rightIcon}</span>}
          </>
        )}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'

export default Button
