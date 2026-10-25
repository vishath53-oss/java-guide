import { useState, type ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  ListChecks,
  BookOpen,
  CalendarDays,
  Bookmark,
  Award,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from 'lucide-react'
import { cn } from '@/lib/utils'
import Tooltip from '@/components/common/Tooltip'

export interface SidebarItem {
  id: string
  label: string
  to: string
  icon: ReactNode
  badge?: string | number
  badgeColor?: 'blue' | 'emerald' | 'amber'
}

const defaultItems: SidebarItem[] = [
  { id: 'dashboard', label: 'Dashboard Overview', to: '/dashboard', icon: <LayoutDashboard size={18} /> },
  { id: 'problems', label: 'Problem Library', to: '/problems', icon: <ListChecks size={18} />, badge: '150+' },
  { id: 'course', label: '6-Month Plan', to: '/course', icon: <BookOpen size={18} />, badge: 'Active', badgeColor: 'blue' },
  { id: 'timeline', label: 'Study Timeline', to: '/timeline', icon: <CalendarDays size={18} /> },
  { id: 'bookmarks', label: 'Saved Problems', to: '/dashboard?tab=bookmarks', icon: <Bookmark size={18} /> },
  { id: 'submissions', label: 'Submissions', to: '/dashboard?tab=submissions', icon: <Award size={18} /> },
  { id: 'analytics', label: 'Performance', to: '/dashboard?tab=analytics', icon: <BarChart3 size={18} /> },
  { id: 'settings', label: 'Preferences', to: '/dashboard?tab=settings', icon: <Settings size={18} /> },
]

export interface SidebarProps {
  items?: SidebarItem[]
  defaultCollapsed?: boolean
  className?: string
  showStats?: boolean
}

export default function Sidebar({
  items = defaultItems,
  defaultCollapsed = false,
  className,
  showStats = true,
}: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)

  return (
    <aside
      className={cn(
        'relative flex flex-col h-full border-r border-[var(--border-default)] bg-[var(--bg-surface)] text-[var(--fg-primary)] transition-all duration-300 z-20 shrink-0 select-none',
        isCollapsed ? 'w-16' : 'w-64',
        className
      )}
    >
      {/* Collapse Toggle Button */}
      <div className="flex items-center justify-between p-3 border-b border-[var(--border-default)]">
        {!isCollapsed && (
          <div className="flex items-center gap-2 pl-2">
            <Sparkles size={16} className="text-blue-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Workspace
            </span>
          </div>
        )}
        <button
          type="button"
          onClick={() => setIsCollapsed((prev) => !prev)}
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[var(--bg-elevated)] transition-colors mx-auto lg:ml-auto"
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 overflow-y-auto p-2 space-y-1" aria-label="Sidebar Navigation">
        {items.map((item) => {
          const content = (
            <NavLink
              key={item.id}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors group relative',
                  isActive
                    ? 'bg-blue-600/15 text-blue-400 border border-blue-500/30'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-[var(--bg-elevated)]'
                )
              }
            >
              <span className="shrink-0 group-hover:text-blue-400 transition-colors">
                {item.icon}
              </span>

              {!isCollapsed && (
                <span className="truncate flex-1">{item.label}</span>
              )}

              {!isCollapsed && item.badge && (
                <span
                  className={cn(
                    'px-1.5 py-0.5 rounded text-[10px] font-semibold font-mono shrink-0',
                    item.badgeColor === 'blue'
                      ? 'bg-blue-500/20 text-blue-300'
                      : item.badgeColor === 'emerald'
                      ? 'bg-emerald-500/20 text-emerald-300'
                      : 'bg-slate-800 text-slate-300 border border-slate-700'
                  )}
                >
                  {item.badge}
                </span>
              )}
            </NavLink>
          )

          if (isCollapsed) {
            return (
              <Tooltip key={item.id} content={item.label} placement="right">
                {content}
              </Tooltip>
            )
          }

          return content
        })}
      </nav>

      {/* Quick Progress Mini-Card */}
      {showStats && !isCollapsed && (
        <div className="p-3 m-2 rounded-xl bg-gradient-to-br from-blue-950/30 to-violet-950/30 border border-blue-900/30">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-slate-300 font-medium">Course Progress</span>
            <span className="font-mono text-blue-400 font-semibold">22%</span>
          </div>
          <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full w-[22%]" />
          </div>
          <p className="text-[11px] text-slate-400 mt-2">
            34 / 150 problems solved
          </p>
        </div>
      )}
    </aside>
  )
}
