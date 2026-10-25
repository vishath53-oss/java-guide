import { type ReactNode, forwardRef } from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  children: ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
  variant?: 'default' | 'elevated' | 'glass'
}

const variantStyles = {
  default: 'border-slate-800/60 bg-slate-900/60',
  elevated: 'border-slate-700/60 bg-slate-900/90 shadow-lg shadow-black/30',
  glass: 'border-slate-800/40 bg-slate-950/40 backdrop-blur-md',
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className = '',
      hover = false,
      glow = false,
      variant = 'default',
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        whileHover={hover ? { y: -2, transition: { duration: 0.15 } } : undefined}
        className={cn(
          'rounded-xl border transition-colors',
          variantStyles[variant],
          hover && 'hover:border-slate-700 hover:bg-slate-900 cursor-pointer',
          glow && 'hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-500/30',
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = 'Card'

export default Card
