import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LogIn, Code2, Mail } from 'lucide-react'
import {
  Card,
  Button,
  TextInput,
  PasswordInput,
  Checkbox,
} from '@/components/common'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        {/* Brand mark */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/20 mb-3">
            <Code2 size={22} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-1">Welcome back</h1>
          <p className="text-slate-400 text-sm text-center">
            Sign in to continue your Java learning journey.
          </p>
        </div>

        <Card className="p-6">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-4"
            aria-label="Login form"
          >
            <TextInput
              id="login-email"
              type="email"
              label="Email Address"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              leftIcon={<Mail size={16} />}
            />

            <PasswordInput
              id="login-password"
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex items-center justify-between">
              <Checkbox
                id="remember-me"
                label="Remember me"
                checked={rememberMe}
                onChange={setRememberMe}
              />
              <span className="text-xs text-blue-400 hover:text-blue-300 cursor-pointer">
                Forgot password?
              </span>
            </div>

            <Button
              type="submit"
              size="md"
              className="mt-1 w-full"
              leftIcon={<LogIn size={16} />}
              onClick={() => {
                alert('Authentication will be integrated in a subsequent backend phase.')
              }}
            >
              Sign In
            </Button>

            <p className="text-center text-xs text-slate-500 font-mono">
              Demo preview · Auth connects in later screen
            </p>
          </form>
        </Card>

        <p className="text-center text-slate-400 text-sm mt-5">
          Don&apos;t have an account?{' '}
          <Link
            to="/register"
            className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
          >
            Create account
          </Link>
        </p>
      </div>
    </div>
  )
}
