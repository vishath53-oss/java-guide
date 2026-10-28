import { useState } from 'react'
import { Link } from 'react-router-dom'
import { KeyRound, Mail, ArrowLeft, Send } from 'lucide-react'
import { usePageTitle } from '@/hooks/usePageTitle'
import { Button, TextInput, Card } from '@/components/common'
import AuthAlert from '@/components/auth/AuthAlert'
import { useAuth } from '@/hooks/useAuth'

export default function ForgotPasswordPage() {
  usePageTitle('Reset Password')
  const { resetPassword } = useAuth()

  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState<string | undefined>()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setEmailError(undefined)
    setServerError(null)
    setSuccessMessage(null)

    if (!email.trim()) {
      setEmailError('Email address is required.')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setEmailError('Please enter a valid email address.')
      return
    }

    setIsSubmitting(true)

    try {
      const { error } = await resetPassword(email)
      if (error) {
        setServerError(error.message)
      } else {
        setSuccessMessage(
          'Password reset instructions have been sent to your email address.'
        )
      }
    } catch (err: any) {
      setServerError(err.message || 'Failed to send password reset email.')
    } finally {
      setIsSubmitting(false)
    }
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

          {/* Server error notification */}
          {serverError && (
            <div className="mb-5">
              <AuthAlert type="error" message={serverError} />
            </div>
          )}

          {/* Success notification */}
          {successMessage && (
            <div className="mb-5">
              <AuthAlert type="success" message={successMessage} />
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <TextInput
              id="reset-email"
              type="email"
              label="Email Address"
              placeholder="Enter your registered email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                if (emailError) setEmailError(undefined)
              }}
              error={emailError}
              leftIcon={<Mail size={16} />}
              autoComplete="email"
              disabled={isSubmitting}
            />

            <Button
              type="submit"
              size="lg"
              className="w-full justify-center mt-2"
              isLoading={isSubmitting}
              leftIcon={<Send size={16} />}
            >
              Send Reset Instructions
            </Button>
          </form>

          {/* Back to sign in link */}
          <div className="mt-6 pt-5 border-t border-slate-800/60 text-center">
            <Link
              to="/login"
              className="text-xs sm:text-sm text-slate-400 hover:text-white font-medium transition-colors inline-flex items-center gap-1.5"
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
