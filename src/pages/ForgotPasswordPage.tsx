import { useState } from 'react'
import { Link } from 'react-router-dom'
import { KeyRound, Mail, ArrowLeft, ArrowRight } from 'lucide-react'
import { usePageTitle } from '@/hooks/usePageTitle'
import { Button, TextInput, Card } from '@/components/common'
import AuthAlert from '@/components/auth/AuthAlert'

export default function ForgotPasswordPage() {
  usePageTitle('Reset Your Password')

  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | undefined>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [demoMessage, setDemoMessage] = useState<string | null>(null)

  const validate = () => {
    if (!email.trim()) {
      setError('Email address is required.')
      return false
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.')
      return false
    }
    setError(undefined)
    return true
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setDemoMessage(null)

    if (!validate()) return

    setIsSubmitting(true)

    // Simulate frontend validation response
    setTimeout(() => {
      setIsSubmitting(false)
      setDemoMessage(
        'Demonstration mode: Password reset request validated. Reset functionality will be connected during the authentication integration phase.'
      )
    }, 600)
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 py-12">
      <div className="w-full max-w-md">
        <Card className="p-6 sm:p-8 bg-slate-950/80 border-slate-800/80 backdrop-blur-md shadow-2xl shadow-black/50">
          {/* Header icon */}
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/20 mb-5">
            <KeyRound size={22} className="text-white" />
          </div>

          <h1 className="text-2xl font-extrabold text-white tracking-tight mb-2">
            Reset Your Password
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed mb-6">
            Enter your registered email address to begin the password reset process.
          </p>

          {/* Demonstration message notification */}
          {demoMessage && (
            <div className="mb-5">
              <AuthAlert type="info" message={demoMessage} />
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4" noValidate aria-label="Forgot password form">
            <TextInput
              id="reset-email"
              type="email"
              label="Email Address"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (error) setError(undefined)
              }}
              error={error}
              leftIcon={<Mail size={16} />}
              autoComplete="email"
              disabled={isSubmitting}
            />

            <Button
              type="submit"
              size="lg"
              className="w-full justify-center mt-2"
              isLoading={isSubmitting}
              rightIcon={<ArrowRight size={16} />}
            >
              Send Reset Instructions
            </Button>
          </form>

          {/* Navigation back to login */}
          <div className="mt-6 pt-5 border-t border-slate-800/60 text-center">
            <Link
              to="/login"
              className="text-sm text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1.5 font-medium"
            >
              <ArrowLeft size={14} />
              <span>Back to Sign In</span>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  )
}
