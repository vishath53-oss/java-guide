import { Loader2 } from 'lucide-react'

export default function LoadingPage() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] gap-4"
      role="status"
      aria-label="Loading page"
    >
      <Loader2 size={32} className="animate-spin text-blue-500 opacity-70" />
      <span className="text-slate-500 text-sm font-mono">Loading...</span>
    </div>
  )
}
