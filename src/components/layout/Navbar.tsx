import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import {
  Code2,
  LayoutDashboard,
  BookOpen,
  CalendarDays,
  ListChecks,
  Menu,
  X,
  ChevronRight,
} from 'lucide-react'

const navLinks = [
  { to: '/problems', label: 'Problems', icon: <ListChecks size={15} /> },
  { to: '/course', label: '6-Month Course', icon: <BookOpen size={15} /> },
  { to: '/timeline', label: 'Study Timeline', icon: <CalendarDays size={15} /> },
  { to: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={15} /> },
]

const activeLinkClass = 'text-blue-400 bg-blue-500/10'
const baseLinkClass =
  'flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-slate-400 hover:text-slate-100 hover:bg-slate-800/70 transition-all duration-150'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 12)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800/70 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Brand */}
        <Link
          to="/"
          className="flex items-center gap-2.5 group shrink-0"
          aria-label="Java Study Mate home"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-200">
            <Code2 size={16} className="text-white" />
          </div>
          <span className="font-bold text-slate-100 text-sm sm:text-base tracking-tight">
            Java<span className="text-blue-400">Study</span>Mate
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1" role="navigation" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `${baseLinkClass} ${isActive ? activeLinkClass : ''}`
              }
            >
              {link.icon}
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop auth actions */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <NavLink
            to="/login"
            className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-white transition-colors duration-150"
          >
            Sign In
          </NavLink>
          <NavLink
            to="/register"
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-md text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 shadow-md shadow-blue-500/20 hover:shadow-blue-500/30 transition-all duration-200"
          >
            Get Started
            <ChevronRight size={14} />
          </NavLink>
        </div>

        {/* Mobile menu toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileOpen((o) => !o)}
          className="md:hidden p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="md:hidden bg-slate-950/98 backdrop-blur-md border-b border-slate-800 pb-4 px-4"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `${baseLinkClass} ${isActive ? activeLinkClass : ''}`
                }
              >
                {link.icon}
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-slate-800">
            <NavLink
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="text-center px-4 py-2 rounded-md text-sm font-medium text-slate-300 border border-slate-700 hover:border-slate-500 hover:text-white transition-all"
            >
              Sign In
            </NavLink>
            <NavLink
              to="/register"
              onClick={() => setMobileOpen(false)}
              className="text-center px-4 py-2 rounded-md text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600"
            >
              Get Started
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
