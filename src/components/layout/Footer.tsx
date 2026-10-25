import { Link } from 'react-router-dom'
import { Code2, ExternalLink, MessageSquare, BookOpen } from 'lucide-react'

const footerLinks = {
  Platform: [
    { label: 'Problems', to: '/problems' },
    { label: '6-Month Course', to: '/course' },
    { label: 'Study Timeline', to: '/timeline' },
    { label: 'Dashboard', to: '/dashboard' },
  ],
  Account: [
    { label: 'Sign In', to: '/login' },
    { label: 'Register', to: '/register' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800/60 bg-slate-950/60 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2.5 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="font-bold text-slate-100 text-sm">
                Java<span className="text-blue-400">Study</span>Mate
              </span>
            </Link>
            <p className="text-slate-500 text-xs leading-relaxed max-w-xs">
              A structured Java coding practice platform. Learn DSA, solve curated problems, and follow a proven 6-month roadmap.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-500 hover:text-slate-300 transition-colors"
              >
                <ExternalLink size={17} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-slate-500 hover:text-slate-300 transition-colors"
              >
                <MessageSquare size={17} />
              </a>
              <a
                href="/course"
                aria-label="Course"
                className="text-slate-500 hover:text-slate-300 transition-colors"
              >
                <BookOpen size={17} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
                {group}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-slate-400 text-sm hover:text-slate-200 transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter stub */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
              Stay Updated
            </h3>
            <p className="text-slate-500 text-xs mb-3">
              New problems and course updates coming soon.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                aria-label="Email for updates"
                disabled
                className="flex-1 min-w-0 px-3 py-2 text-xs rounded-md bg-slate-900 border border-slate-700 text-slate-400 placeholder-slate-600 cursor-not-allowed"
              />
              <button
                disabled
                className="px-3 py-2 text-xs rounded-md bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed whitespace-nowrap"
              >
                Soon
              </button>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-10 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
          <span>© {currentYear} JavaStudyMate. All rights reserved.</span>
          <span className="font-mono text-slate-700">
            Built for Java learners, by Java learners.
          </span>
        </div>
      </div>
    </footer>
  )
}
