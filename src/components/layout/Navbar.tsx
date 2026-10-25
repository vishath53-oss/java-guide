import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
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
import ThemeToggle from '@/components/common/ThemeToggle'

const navLinks = [
  { to: '/', label: 'Home', icon: null },
  { to: '/problems', label: 'Problems', icon: <ListChecks size={15} /> },
  { to: '/course', label: 'Six-Month Course', icon: <BookOpen size={15} /> },
  { to: '/timeline', label: 'Study Timeline', icon: <CalendarDays size={15} /> },
  { to: '/dashboard', label: 'Dashboard', icon: <LayoutDashboard size={15} /> },
]

const activeLinkClass = 'text-blue-400 bg-blue-500/10'
const baseLinkClass =
  'flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium text-slate-400 hover:text-slate-100 hover:bg-slate-800/70 transition-all duration-150'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

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
          : 'bg-slate-950/70 backdrop-blur-sm border-b border-slate-800/30'
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
        <div className="hidden lg:flex items-center gap-1" role="navigation" aria-label="Main navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `${baseLinkClass} ${isActive ? activeLinkClass : ''}`
              }
            >
              {link.icon}
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Desktop auth actions + Theme toggle */}
        <div className="hidden lg:flex items-center gap-2.5 shrink-0">
          <ThemeToggle size="sm" />
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

        {/* Mobile menu toggle & Theme toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle size="sm" />
          <button
            id="mobile-menu-toggle"
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile animated dropdown with Framer Motion */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="lg:hidden bg-slate-950/98 backdrop-blur-md border-b border-slate-800 px-4 pb-5 overflow-hidden"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1 pt-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `${baseLinkClass} ${isActive ? activeLinkClass : ''}`
                  }
                >
                  {link.icon}
                  {link.label}
                </NavLink>
              ))}

              <div className="my-2 border-t border-slate-800/80" />

              <div className="flex flex-col gap-2 pt-1">
                <NavLink
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 text-center text-sm font-medium text-slate-300 hover:text-white rounded-md hover:bg-slate-900 border border-slate-800"
                >
                  Sign In
                </NavLink>
                <NavLink
                  to="/register"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-md text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-violet-600 shadow-md shadow-blue-500/20"
                >
                  Get Started
                  <ChevronRight size={14} />
                </NavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
