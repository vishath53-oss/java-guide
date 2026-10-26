import { Link } from 'react-router-dom'
import { Code2 } from 'lucide-react'

const navigationLinks = [
  { label: 'Home', to: '/' },
  { label: 'Problems', to: '/problems' },
  { label: 'Six-Month Course', to: '/course' },
  { label: 'Study Timeline', to: '/timeline' },
  { label: 'Dashboard', to: '/dashboard' },
]

const accountLinks = [
  { label: 'Sign In', to: '/login' },
  { label: 'Register', to: '/register' },
]

const currentYear = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 bg-slate-950/80 mt-auto">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand column */}
          <div className="space-y-3 sm:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-md shadow-blue-500/20">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="font-bold text-slate-100 text-sm tracking-tight">
                Java<span className="text-blue-400">Study</span>Mate
              </span>
            </Link>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Build your Java programming skills with hands-on coding challenges and a structured six-month learning roadmap. Learn concepts, solve problems, and track your progress in one place.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4 font-mono">
              Platform
            </h3>
            <ul className="space-y-2.5">
              {navigationLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-slate-400 text-xs sm:text-sm hover:text-blue-400 transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account Links */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4 font-mono">
              Account
            </h3>
            <ul className="space-y-2.5">
              {accountLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-slate-400 text-xs sm:text-sm hover:text-blue-400 transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-10 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <span>© {currentYear} JavaStudyMate. All rights reserved.</span>
          <span className="text-slate-500">
            Self-learning platform for Java programming & problem solving.
          </span>
        </div>
      </div>
    </footer>
  )
}

