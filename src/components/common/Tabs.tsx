import { useState } from 'react'
import { cn } from '@/lib/utils'

export interface Tab {
  id: string
  label: string
  icon?: React.ReactNode
  badge?: string
}

interface TabsProps {
  tabs: Tab[]
  activeTab?: string
  onChange?: (tabId: string) => void
  className?: string
}

export default function Tabs({ tabs, activeTab, onChange, className }: TabsProps) {
  const [internalActive, setInternalActive] = useState(tabs[0]?.id ?? '')
  const current = activeTab ?? internalActive

  const handleChange = (id: string) => {
    setInternalActive(id)
    onChange?.(id)
  }

  return (
    <div
      className={cn('flex items-center gap-1 border-b border-[var(--border-default)] overflow-x-auto', className)}
      role="tablist"
    >
      {tabs.map((tab) => (
        <button
          key={tab.id}
          role="tab"
          aria-selected={current === tab.id}
          onClick={() => handleChange(tab.id)}
          className={cn(
            'relative flex items-center gap-2 px-4 py-2.5 text-sm font-medium whitespace-nowrap transition-colors',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-blue)] focus-visible:ring-inset rounded-t-md',
            current === tab.id
              ? 'text-blue-400'
              : 'text-slate-500 hover:text-slate-200'
          )}
        >
          {tab.icon}
          {tab.label}
          {tab.badge && (
            <span className="px-1.5 py-0.5 rounded-full text-[10px] font-mono bg-[var(--bg-overlay)] text-slate-400">
              {tab.badge}
            </span>
          )}
          {/* Active indicator */}
          {current === tab.id && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full" />
          )}
        </button>
      ))}
    </div>
  )
}
