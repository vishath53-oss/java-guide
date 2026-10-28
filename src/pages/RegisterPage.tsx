import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserPlus, User, Mail, ArrowRight } from 'lucide-react'
import { usePageTitle } from '@/hooks/usePageTitle'
import { Button, TextInput, PasswordInput, Checkbox } from '@/components/common'
import AuthBranding from '@/components/auth/AuthBranding'
import AuthAlert from '@/components/auth/AuthAlert'
import { useAuth } from '@/hooks/useAuth'

export default function RegisterPage() {
  usePageTitle('Create Your Account')
  const navigate = useNavigate()
  const { signUp } = useAuth()

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [agreeTerms, setAgreeTerms] = useState(false)

  // Validation errors
  const [errors, setErrors] = useState<{
    fullName?: string
    email?: string
    password?: string
    confirmPassword?: string
    agreeTerms?: string
  }>({})

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)
  const [successMessage, setSuccessMessage] = useState<string | null>(null)

  const validate = () => {
    const newErrors: {
      fullName?: string
      email?: string
      password?: string
      confirmPassword?: string
      agreeTerms?: string
    } = {}

    // Full name validation
    if (!fullName.trim()) {
      newErrors.fullName = 'Full name is required.'
    }

    // Email validation
    if (!email.trim()) {
      newErrors.email = 'Email address is required.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address.'
    }

    // Password validation (min 8 characters)
    if (!password) {
      newErrors.password = 'Password is required.'
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters.'
    }

    // Confirm password validation
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Confirm your password.'
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = 'Passwords do not match.'
    }

    // Terms validation
    if (!agreeTerms) {
      newErrors.agreeTerms = 'You must agree to the Terms and Conditions.'
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
      const { error, user } = await signUp(email, password, fullName)
      if (error) {
        setServerError(error.message)
      } else {
        if (user && user.identities && user.identities.length === 0) {
          setServerError('An account with this email address already exists.')
        } else {
          setSuccessMessage(
            'Account created successfully! Check your email to confirm if required, or sign in now.'
          )
          setTimeout(() => {
            navigate('/dashboard')
          }, 1200)
        }
      }
    } catch (err: any) {
      setServerError(err.message || 'Registration failed. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 py-10 sm:py-14">
      {/* Centered two-column card */}
      <div className="w-full max-w-4xl rounded-2xl border border-slate-800/80 bg-slate-950/80 backdrop-blur-md shadow-2xl shadow-black/50 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[620px]">
          {/* Left section — Branding */}
          <div className="lg:col-span-5">
            <AuthBranding
              heading="Start Learning Java"
              description="Join the structured six-month Java programming curriculum and master problem solving step by step."
            />
          </div>

          {/* Right section — Register Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
            <div className="max-w-md w-full mx-auto">
              <div className="mb-6">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                  Create Your Account
                </h1>
                <p className="text-slate-400 text-sm">
                  Start learning Java and improve your coding skills every day.
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

              <form onSubmit={handleSubmit} className="space-y-3.5" noValidate aria-label="Registration form">
                {/* Full Name */}
                <TextInput
                  id="register-fullname"
                  type="text"
                  label="Full Name"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => {
                    setFullName(e.target.value)
                    if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }))
                  }}
                  error={errors.fullName}
                  leftIcon={<User size={16} />}
                  autoComplete="name"
                  disabled={isSubmitting}
                />

                {/* Email Address */}
                <TextInput
                  id="register-email"
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

                {/* Password with strength indicator */}
                <PasswordInput
                  id="register-password"
                  label="Password"
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                    if (errors.password) setErrors((prev) => ({ ...prev, password: undefined }))
                  }}
                  error={errors.password}
                  autoComplete="new-password"
                  disabled={isSubmitting}
                />

                {/* Confirm Password */}
                <PasswordInput
                  id="register-confirm-password"
                  label="Confirm Password"
                  placeholder="Re-enter your password"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value)
                    if (errors.confirmPassword) setErrors((prev) => ({ ...prev, confirmPassword: undefined }))
                  }}
                  error={errors.confirmPassword}
                  autoComplete="new-password"
                  disabled={isSubmitting}
                />

                {/* Terms and conditions checkbox */}
                <div>
                  <Checkbox
                    id="agree-terms"
                    label={
                      <span className="text-slate-400 text-xs sm:text-sm">
                        I agree to the{' '}
                        <a href="#" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
                          Terms &amp; Conditions
                        </a>{' '}
                        and{' '}
                        <a href="#" className="text-blue-400 hover:text-blue-300 underline underline-offset-2">
                          Privacy Policy
                        </a>
                      </span>
                    }
                    checked={agreeTerms}
                    onChange={(checked) => {
                      setAgreeTerms(checked)
                      if (errors.agreeTerms) setErrors((prev) => ({ ...prev, agreeTerms: undefined }))
                    }}
                    error={errors.agreeTerms}
                    disabled={isSubmitting}
                  />
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full justify-center mt-2"
                  isLoading={isSubmitting}
                  leftIcon={<UserPlus size={18} />}
                  rightIcon={<ArrowRight size={16} />}
                >
                  Create Account
                </Button>
              </form>

              {/* Navigation link to sign in */}
              <div className="mt-6 pt-5 border-t border-slate-800/60 text-center">
                <p className="text-slate-400 text-sm">
                  Already have an account?{' '}
                  <Link
                    to="/login"
                    className="text-blue-400 hover:text-blue-300 font-semibold transition-colors inline-flex items-center gap-1"
                  >
                    <span>Sign in</span>
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
