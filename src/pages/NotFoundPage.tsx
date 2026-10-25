import { Link, useRouteError, isRouteErrorResponse } from 'react-router-dom'
import { Code2, Home, AlertTriangle } from 'lucide-react'
import Button from '@/components/common/Button'

export default function NotFoundPage() {
  const error = useRouteError()
  const is404 = isRouteErrorResponse(error) ? error.status === 404 : false
  const title = is404 ? '404' : 'Oops!'
  const message = is404
    ? "We couldn't find the page you're looking for."
    : 'Something unexpected went wrong.'

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      {/* Decorative code icon */}
      <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 shadow-xl">
        {is404 ? (
          <Code2 size={28} className="text-blue-400 opacity-70" />
        ) : (
          <AlertTriangle size={28} className="text-amber-400 opacity-70" />
        )}
      </div>

      <span className="text-7xl font-black text-slate-800 font-mono mb-2">{title}</span>
      <h1 className="text-xl font-semibold text-slate-300 mb-2">Page Not Found</h1>
      <p className="text-slate-500 text-sm max-w-sm mb-8">{message}</p>

      <Link to="/">
        <Button size="md">
          <Home size={16} />
          Back to Home
        </Button>
      </Link>

      <p className="text-slate-700 text-xs mt-10 font-mono">
        java-study-mate · screen-1
      </p>
    </div>
  )
}
