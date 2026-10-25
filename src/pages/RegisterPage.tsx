import { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserPlus, Code2, CheckCircle2, User, Mail } from 'lucide-react'
import {
  Card,
  Button,
  TextInput,
  PasswordInput,
  Checkbox,
} from '@/components/common'

const perks = [
  'Track your daily Java problem-solving streak',
  'Follow the 6-month structured curriculum roadmap',
  'Access curated LeetCode-style Java practice problems',
]

export default function RegisterPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [agreeTerms, setAgreeTerms] = useState(false)

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-sm">
        {/* Brand mark */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/20 mb-3">
            <Code2 size={22} className="text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-1">Create your account</h1>
          <p className="text-slate-400 text-sm text-center">
            Start your 6-month Java journey today. It&apos;s free.
          </p>
        </div>

        {/* Perks */}
        <div className="flex flex-col gap-2 mb-5">
          {perks.map((p) => (
            <div key={p} className="flex items-center gap-2.5">
              <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
              <span className="text-slate-400 text-xs">{p}</span>
            </div>
          ))}
        </div>

        <Card className="p-6">
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col gap-4"
            aria-label="Registration form"
          >
            <TextInput
              id="register-name"
              type="text"
              label="Full Name"
              placeholder="e.g. Alex Johnson"
              value={name}
              onChange={(e) => setName(e.target.value)}
              leftIcon={<User size={16} />}
            />

            <TextInput
              id="register-email"
              type="email"
              label="Email Address"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              leftIcon={<Mail size={16} />}
            />

            <PasswordInput
              id="register-password"
              label="Password"
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              hint="Must be at least 8 characters with numbers"
            />

            <Checkbox
              id="agree-terms"
              label="I agree to the Terms of Service & Privacy Policy"
              checked={agreeTerms}
              onChange={setAgreeTerms}
            />

            <Button
              type="submit"
              size="md"
              className="mt-1 w-full"
              leftIcon={<UserPlus size={16} />}
              onClick={() => {
                alert('Authentication will be integrated in a subsequent backend phase.')
              }}
            >
              Create Free Account
            </Button>

            <p className="text-center text-xs text-slate-500 font-mono">
              Demo preview · Auth connects in later screen
            </p>
          </form>
        </Card>

        <p className="text-center text-slate-400 text-sm mt-5">
          Already have an account?{' '}
          <Link
            to="/login"
            className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}
