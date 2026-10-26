import { Link } from 'react-router-dom'
import { Code2, CheckCircle2 } from 'lucide-react'

interface AuthBrandingProps {
  heading?: string
  description?: string
}

export default function AuthBranding({
  heading = 'Welcome Back!',
  description = 'Continue your Java learning journey and keep building your programming skills.',
}: AuthBrandingProps) {
  const benefits = [
    'Practice Java problems.',
    'Continue your six-month roadmap.',
    'Track your learning progress.',
  ]

  return (
    <div className="flex flex-col justify-between h-full p-6 sm:p-8 lg:p-10 bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/30 border-b lg:border-b-0 lg:border-r border-slate-800/80">
      <div>
        {/* Brand Header */}
        <Link to="/" className="inline-flex items-center gap-2.5 mb-8 group" aria-label="Java Study Mate Home">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
            <Code2 size={18} className="text-white" />
          </div>
          <span className="font-bold text-slate-100 text-base tracking-tight">
            Java<span className="text-blue-400">Study</span>Mate
          </span>
        </Link>

        {/* Heading & Subtitle */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
          {heading}
        </h2>
        <p className="text-slate-400 text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* Small Decorative Java Code Preview */}
        <div className="rounded-xl border border-slate-800/90 bg-slate-950/80 p-3.5 mb-6 font-mono text-xs overflow-hidden shadow-inner">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/70 text-[11px] text-slate-400 font-sans">
            <span className="text-amber-400 font-mono">Solution.java</span>
            <span className="text-emerald-400 font-mono">Java 21</span>
          </div>
          <div className="space-y-1 text-slate-300">
            <p className="text-slate-400 italic">// LeetCode-style Java practice</p>
            <p>
              <span className="text-violet-400">class</span> <span className="text-sky-300">Solution</span> {'{'}
            </p>
            <p className="pl-4">
              <span className="text-violet-400">public int</span>[] <span className="text-amber-300">twoSum</span>(
              <span className="text-violet-400">int</span>[] nums, <span className="text-violet-400">int</span> target) {'{'}
            </p>
            <p className="pl-8 text-slate-400">// Keep mastering daily challenges</p>
            <p className="pl-4">{'}'}</p>
            <p>{'}'}</p>
          </div>
        </div>

        {/* Three Short Benefits */}
        <div className="space-y-2.5">
          {benefits.map((benefit) => (
            <div key={benefit} className="flex items-center gap-2.5">
              <div className="w-5 h-5 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0">
                <CheckCircle2 size={12} className="text-blue-400" />
              </div>
              <span className="text-xs sm:text-sm text-slate-300 font-medium">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer hint */}
      <div className="pt-8 mt-6 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
        <span>Curated Java DSA & Course</span>
        <span className="font-mono text-slate-400">Self-Learning</span>
      </div>
    </div>
  )
}
