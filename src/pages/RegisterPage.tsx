import { Link } from 'react-router-dom'
import { UserPlus, Code2, CheckCircle2 } from 'lucide-react'
import Card from '@/components/common/Card'
import Button from '@/components/common/Button'

const perks = [
  'Track your daily problem-solving streak',
  'Follow the 6-month structured roadmap',
  'Mark problems solved and see progress',
]

export default function RegisterPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        {/* Brand mark */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/20 mb-3">
            <Code2 size={22} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-1">Create your account</h1>
          <p className="text-slate-500 text-sm text-center">
            Start your 6-month Java journey today. It&apos;s free.
          </p>
        </div>

        {/* Perks */}
        <div className="flex flex-col gap-2 mb-5">
          {perks.map((p) => (
            <div key={p} className="flex items-center gap-2.5">
              <CheckCircle2 size={14} className="text-green-500 shrink-0" />
              <span className="text-slate-400 text-xs">{p}</span>
            </div>
          ))}
        </div>

        <Card className="p-6">
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4" aria-label="Registration form">
            <div>
              <label htmlFor="register-name" className="block text-xs font-medium text-slate-400 mb-1.5">
                Full Name
              </label>
              <input
                id="register-name"
                type="text"
                placeholder="Your Name"
                disabled
                className="w-full px-3.5 py-2.5 rounded-md bg-slate-900 border border-slate-700 text-slate-400 text-sm placeholder-slate-600 cursor-not-allowed"
              />
            </div>
            <div>
              <label htmlFor="register-email" className="block text-xs font-medium text-slate-400 mb-1.5">
                Email
              </label>
              <input
                id="register-email"
                type="email"
                placeholder="you@example.com"
                disabled
                className="w-full px-3.5 py-2.5 rounded-md bg-slate-900 border border-slate-700 text-slate-400 text-sm placeholder-slate-600 cursor-not-allowed"
              />
            </div>
            <div>
              <label htmlFor="register-password" className="block text-xs font-medium text-slate-400 mb-1.5">
                Password
              </label>
              <input
                id="register-password"
                type="password"
                placeholder="••••••••"
                disabled
                className="w-full px-3.5 py-2.5 rounded-md bg-slate-900 border border-slate-700 text-slate-400 text-sm placeholder-slate-600 cursor-not-allowed"
              />
            </div>

            <Button type="submit" size="md" disabled className="mt-1 w-full">
              <UserPlus size={16} />
              Create Account
            </Button>

            <p className="text-center text-xs text-slate-600 font-mono">
              Authentication not yet implemented
            </p>
          </form>
        </Card>

        <p className="text-center text-slate-500 text-sm mt-5">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}
