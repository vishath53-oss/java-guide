import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LogIn, Mail, ArrowRight } from 'lucide-react'
import { usePageTitle } from '@/hooks/usePageTitle'
import { Button, TextInput, PasswordInput, Checkbox } from '@/components/common'
import AuthBranding from '@/components/auth/AuthBranding'
import AuthAlert from '@/components/auth/AuthAlert'
import { useAuth } from '@/hooks/useAuth'

export default function LoginPage() {
  usePageTitle('Sign In')
  const navigate = useNavigate()
  const { signIn } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  // Validation errors & server message
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const validate = () => {
    const newErrors: { email?: string; password?: string } = {}

    // Email validation
    if (!email.trim()) {
      newErrors.email = 'Email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address.'
    }

    // Password validation
    if (!password) {
      newErrors.password = 'Password is required.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setServerError(null)
    setSuccessMessage(null)

    if (!validate()) return

    setIsSubmitting(true)

    try {
      const { error } = await signIn(email, password)
      if (error) {
        setServerError(error.message)
      } else {
        setSuccessMessage('Successfully signed in! Redirecting...')
        setTimeout(() => {
          navigate('/dashboard')
        }, 800)
      }
    } catch (err: any) {
      setServerError(err.message || 'An unexpected error occurred.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 py-10 sm:py-14">
      {/* Centered two-column card */}
      <div className="w-full max-w-4xl rounded-2xl border border-slate-800/80 bg-slate-950/80 backdrop-blur-md shadow-2xl shadow-black/50 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[560px]">
          {/* Left section — Branding */}
          <div className="lg:col-span-5">
            <AuthBranding
              heading="Welcome Back!"
              description="Continue your Java learning journey and keep building your programming skills."
            />
          </div>

          {/* Right section — Login Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <div className="max-w-md w-full mx-auto">
              <div className="mb-6">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                  Sign in to Java Study Mate
                </h1>
                <p className="text-slate-400 text-sm">
                  Enter your details to continue learning.
                </p>
              </div>

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

              <form onSubmit={handleSubmit} className="space-y-4" noValidate aria-label="Login form">
                {/* Email Address */}
                <TextInput
                  id="login-email"
                  type="email"
                  label="Email Address"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }))
                  }}
                  error={errors.email}
                  leftIcon={<Mail size={16} />}
                  autoComplete="email"
                  disabled={isSubmitting}
                />

                {/* Password with visibility toggle */}
                <PasswordInput
                  id="login-password"
                  label="Password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }))
                  }}
                  error={errors.password}
                  autoComplete="current-password"
                  disabled={isSubmitting}
                />

                {/* Remember me & Forgot password */}
                <div className="flex items-center justify-between pt-1">
                  <Checkbox
                    id="remember-me"
                    label="Remember me"
                    checked={rememberMe}
                    onChange={setRememberMe}
                    disabled={isSubmitting}
                  />

                  <Link
                    to="/forgot-password"
                    className="text-xs text-blue-400 hover:text-blue-300 font-medium transition-colors"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full justify-center mt-2"
                  isLoading={isSubmitting}
                  leftIcon={<LogIn size={18} />}
                  rightIcon={<ArrowRight size={16} />}
                >
                  Sign In
                </Button>
              </form>

              {/* Navigation link to register */}
              <div className="mt-8 pt-6 border-t border-slate-800/60 text-center">
                <p className="text-slate-400 text-sm">
                  Don&apos;t have an account?{' '}
                  <Link
                    to="/register"
                    className="text-blue-400 hover:text-blue-300 font-semibold transition-colors inline-flex items-center gap-1"
                  >
                    Create an account
                    <ArrowRight size={14} />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
