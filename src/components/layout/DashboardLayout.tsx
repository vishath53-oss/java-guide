import { useState, type ReactNode } from 'react'
import { Outlet, Link, ScrollRestoration } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Code2,
  Bell,
  Search,
  Menu,
  X,
  User,
} from 'lucide-react'
import Sidebar from './Sidebar'
import ThemeToggle from '@/components/common/ThemeToggle'
import IconButton from '@/components/common/IconButton'

export interface DashboardLayoutProps {
  children?: ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false)

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[var(--bg-base)] text-[var(--fg-primary)]">
      {/* Top Bar */}
      <header className="h-14 border-b border-[var(--border-default)] bg-[var(--bg-surface)] px-4 flex items-center justify-between shrink-0 z-30">
        <div className="flex items-center gap-3">
          {/* Mobile sidebar trigger */}
          <button
            type="button"
            onClick={() => setMobileSidebarOpen(true)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[var(--bg-elevated)] lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Open sidebar"
          >
            <Menu size={20} />
          </button>

          {/* Logo link */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white shadow-sm">
              <Code2 size={15} />
            </div>
            <span className="font-bold text-sm tracking-tight hidden sm:inline">
              Java<span className="text-blue-400">Study</span>Mate
            </span>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 ml-1">
              STUDENT
            </span>
          </Link>
        </div>

        {/* Search & Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden md:flex items-center gap-2 px-2.5 py-1 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-default)] text-xs text-slate-400">
            <Search size={14} />
            <span>Search topics, problems... (Ctrl + K)</span>
          </div>

          <ThemeToggle size="sm" />

          {/* Notifications */}
          <div className="relative">
            <IconButton
              icon={<Bell size={16} />}
              label="Notifications"
              variant="ghost"
              size="sm"
            />
            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-blue-500 ring-2 ring-[var(--bg-surface)]" />
          </div>

          {/* User profile capsule */}
          <div className="flex items-center gap-2 pl-2 border-l border-[var(--border-default)]">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-violet-600 flex items-center justify-center text-white text-xs font-semibold shadow-inner">
              <User size={15} />
            </div>
            <div className="hidden sm:block text-left text-xs">
              <div className="font-medium text-slate-200">Java Explorer</div>
              <div className="text-[10px] text-slate-400">Level 2 Coder</div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Workspace Body: Sidebar + Scrollable Content */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block h-full">
          <Sidebar />
        </div>

        {/* Mobile Drawer Overlay */}
        <AnimatePresence>
          {mobileSidebarOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/70 backdrop-blur-xs z-40 lg:hidden"
                onClick={() => setMobileSidebarOpen(false)}
                aria-hidden="true"
              />
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                className="fixed inset-y-0 left-0 w-64 z-50 bg-[var(--bg-surface)] shadow-2xl lg:hidden flex flex-col"
              >
                <div className="p-3 border-b border-[var(--border-default)] flex items-center justify-between">
                  <span className="font-semibold text-sm text-slate-200">Navigation</span>
                  <button
                    type="button"
                    onClick={() => setMobileSidebarOpen(false)}
                    className="p-1 rounded-md text-slate-400 hover:text-white"
                    aria-label="Close menu"
                  >
                    <X size={18} />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <Sidebar defaultCollapsed={false} />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Content Viewport */}
        <main
          id="dashboard-main"
          className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-[var(--bg-base)]"
          role="main"
        >
          {children ?? <Outlet />}
        </main>
      </div>

      <ScrollRestoration />
    </div>
  )
}
