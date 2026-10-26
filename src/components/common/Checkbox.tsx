import { cn } from '@/lib/utils'

export interface CheckboxProps {
  checked?: boolean
  onChange?: (checked: boolean) => void
  label?: React.ReactNode
  id?: string
  disabled?: boolean
  error?: string
  className?: string
}

export default function Checkbox({
  checked = false,
  onChange,
  label,
  id,
  disabled = false,
  error,
  className,
}: CheckboxProps) {
  const checkId = id || 'cb-input'

  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={checkId}
        className={cn(
          'inline-flex items-center gap-2.5 cursor-pointer select-none',
          disabled && 'opacity-50 cursor-not-allowed',
          className
        )}
      >

      <div className="relative flex items-center justify-center">
        <input
          id={checkId}
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange?.(e.target.checked)}
          disabled={disabled}
          className="peer sr-only"
        />
        <div
          className={cn(
            'w-4.5 h-4.5 rounded border transition-all duration-150',
            'border-[var(--border-default)] bg-[var(--bg-surface)]',
            'peer-hover:border-[var(--border-hover)]',
            'peer-focus-visible:ring-2 peer-focus-visible:ring-[var(--accent-blue)] peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-[var(--bg-base)]',
            checked && 'bg-[var(--accent-blue)] border-[var(--accent-blue)]'
          )}
        >
          {checked && (
            <svg
              viewBox="0 0 16 16"
              fill="none"
              className="w-full h-full text-white p-0.5"
            >
              <path
                d="M4 8l3 3 5-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>
      {label && (
        <span className="text-sm text-slate-300">{label}</span>
      )}
    </label>
    {error && (
      <p id={`${checkId}-error`} className="text-xs text-[var(--color-error)]" role="alert">
        {error}
      </p>
    )}
  </div>
  )
}

