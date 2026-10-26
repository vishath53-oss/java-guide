import { Info, CheckCircle2, AlertCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AuthAlertProps {
  type?: 'info' | 'success' | 'error'
  title?: string
  message: string
  className?: string
}

export default function AuthAlert({
  type = 'info',
  title,
  message,
  className,
}: AuthAlertProps) {
  const styles = {
    info: 'bg-blue-950/40 border-blue-500/30 text-blue-300',
    success: 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300',
    error: 'bg-rose-950/40 border-rose-500/30 text-rose-300',
  }

  const icons = {
    info: <Info size={16} className="text-blue-400 shrink-0 mt-0.5" />,
    success: <CheckCircle2 size={16} className="text-emerald-400 shrink-0 mt-0.5" />,
    error: <AlertCircle size={16} className="text-rose-400 shrink-0 mt-0.5" />,
  }

  return (
    <div
      role="status"
      className={cn(
        'rounded-xl border p-3.5 sm:p-4 text-xs sm:text-sm flex items-start gap-2.5 transition-all',
        styles[type],
        className
      )}
    >
      {icons[type]}
      <div className="flex-1 min-w-0">
        {title && <p className="font-semibold mb-0.5">{title}</p>}
        <p className="leading-relaxed opacity-90">{message}</p>
      </div>
    </div>
  )
}
