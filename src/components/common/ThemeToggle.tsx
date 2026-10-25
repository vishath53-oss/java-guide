import { Sun, Moon } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/lib/utils'

interface ThemeToggleProps {
  className?: string
  size?: 'sm' | 'md'
}

export default function ThemeToggle({ className, size = 'md' }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <motion.button
      type="button"
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={cn(
        'relative inline-flex items-center justify-center rounded-lg transition-colors border border-[var(--border-default)] bg-[var(--bg-surface)] text-slate-300 hover:text-white hover:bg-[var(--bg-elevated)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-blue)]',
        size === 'sm' ? 'w-8 h-8' : 'w-9 h-9',
        className
      )}
    >
      <span className="sr-only">Toggle theme</span>
      {isDark ? (
        <Sun size={size === 'sm' ? 16 : 18} className="text-amber-400 transition-transform duration-200" />
      ) : (
        <Moon size={size === 'sm' ? 16 : 18} className="text-blue-400 transition-transform duration-200" />
      )}
    </motion.button>
  )
}
