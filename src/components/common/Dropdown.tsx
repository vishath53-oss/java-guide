import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { cn } from '@/lib/utils'

export interface DropdownOption {
  value: string
  label: string
  icon?: React.ReactNode
}

export interface DropdownProps {
  options: DropdownOption[]
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  label?: string
  disabled?: boolean
  className?: string
}

export default function Dropdown({
  options,
  value,
  onChange,
  placeholder = 'Select...',
  label,
  disabled = false,
  className,
}: DropdownProps) {
  const [open, setOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const selected = options.find((o) => o.value === value)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') setOpen(false)
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setOpen((o) => !o)
    }
  }

  return (
    <div className={cn('flex flex-col gap-1.5', className)} ref={containerRef}>
      {label && (
        <span className="text-xs font-medium text-slate-400">{label}</span>
      )}
      <div className="relative">
        <button
          type="button"
          disabled={disabled}
          onClick={() => setOpen((o) => !o)}
          onKeyDown={handleKeyDown}
          aria-haspopup="listbox"
          aria-expanded={open}
          className={cn(
            'w-full flex items-center justify-between gap-2 rounded-lg border px-3.5 py-2.5 text-sm',
            'bg-[var(--bg-surface)] border-[var(--border-default)] hover:border-[var(--border-hover)]',
            'focus:border-[var(--accent-blue)] focus:ring-1 focus:ring-[var(--accent-blue)] focus:outline-none',
            'transition-colors disabled:opacity-50 disabled:cursor-not-allowed',
            selected ? 'text-slate-200' : 'text-slate-500'
          )}
        >
          <span className="flex items-center gap-2 truncate">
            {selected?.icon}
            {selected?.label || placeholder}
          </span>
          <ChevronDown
            size={14}
            className={cn('text-slate-500 transition-transform duration-200', open && 'rotate-180')}
          />
        </button>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.15 }}
              role="listbox"
              className="absolute z-[var(--z-dropdown)] mt-1 w-full rounded-lg border border-[var(--border-default)] bg-[var(--bg-elevated)] shadow-lg shadow-black/30 py-1 max-h-60 overflow-y-auto"
            >
              {options.map((opt) => (
                <li
                  key={opt.value}
                  role="option"
                  aria-selected={opt.value === value}
                  onClick={() => {
                    onChange?.(opt.value)
                    setOpen(false)
                  }}
                  className={cn(
                    'flex items-center gap-2 px-3.5 py-2 text-sm cursor-pointer transition-colors',
                    opt.value === value
                      ? 'text-blue-400 bg-[var(--accent-blue-muted)]'
                      : 'text-slate-300 hover:bg-[var(--bg-overlay)] hover:text-white'
                  )}
                >
                  {opt.icon}
                  {opt.label}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
