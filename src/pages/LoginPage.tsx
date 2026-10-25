import { Link } from 'react-router-dom'
import { LogIn, Code2 } from 'lucide-react'
import Card from '@/components/common/Card'
import Button from '@/components/common/Button'

export default function LoginPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        {/* Brand mark */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/20 mb-3">
            <Code2 size={22} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-1">Welcome back</h1>
          <p className="text-slate-500 text-sm text-center">
            Sign in to continue your Java learning journey.
          </p>
        </div>

        <Card className="p-6">
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4" aria-label="Login form">
            <div>
              <label htmlFor="login-email" className="block text-xs font-medium text-slate-400 mb-1.5">
                Email
              </label>
              <input
                id="login-email"
                type="email"
                placeholder="you@example.com"
                disabled
                className="w-full px-3.5 py-2.5 rounded-md bg-slate-900 border border-slate-700 text-slate-400 text-sm placeholder-slate-600 cursor-not-allowed"
              />
            </div>
            <div>
              <label htmlFor="login-password" className="block text-xs font-medium text-slate-400 mb-1.5">
                Password
              </label>
              <input
                id="login-password"
                type="password"
                placeholder="••••••••"
                disabled
                className="w-full px-3.5 py-2.5 rounded-md bg-slate-900 border border-slate-700 text-slate-400 text-sm placeholder-slate-600 cursor-not-allowed"
              />
            </div>

            <Button type="submit" size="md" disabled className="mt-1 w-full">
              <LogIn size={16} />
              Sign In
            </Button>

            <p className="text-center text-xs text-slate-600 font-mono">
              Authentication not yet implemented
            </p>
          </form>
        </Card>

        <p className="text-center text-slate-500 text-sm mt-5">
          Don&apos;t have an account?{' '}
          <Link to="/register" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}
