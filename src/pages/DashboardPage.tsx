import { LayoutDashboard, Flame, CheckCircle2, Target, Lock } from 'lucide-react'
import Card from '@/components/common/Card'
import Badge from '@/components/common/Badge'

const statCards = [
  { label: 'Problems Solved', value: '27', sub: 'of 300+', icon: <CheckCircle2 size={18} className="text-green-400" /> },
  { label: 'Current Streak', value: '5', sub: 'days', icon: <Flame size={18} className="text-orange-400" /> },
  { label: 'Current Month', value: '1', sub: 'of 6', icon: <Target size={18} className="text-blue-400" /> },
]

const recentActivity = [
  { problem: 'Two Sum', difficulty: 'Easy', date: 'Today', solved: true },
  { problem: 'Valid Parentheses', difficulty: 'Easy', date: 'Yesterday', solved: true },
  { problem: 'Reverse Linked List', difficulty: 'Easy', date: '2 days ago', solved: false },
]

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <LayoutDashboard size={20} className="text-blue-400" />
            <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          </div>
          <p className="text-slate-500 text-sm">
            Your personal progress overview. Log in to see real data — this is a preview with sample values.
          </p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-900/20 border border-amber-800/40 text-amber-400 text-xs shrink-0">
          <Lock size={13} />
          Auth required
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {statCards.map((s) => (
          <Card key={s.label} className="p-5">
            <div className="flex items-center gap-2 mb-2 text-slate-500">
              {s.icon}
              <span className="text-xs font-medium">{s.label}</span>
            </div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-3xl font-bold text-white font-mono">{s.value}</span>
              <span className="text-xs text-slate-500">{s.sub}</span>
            </div>
          </Card>
        ))}
      </div>

      {/* Two-column lower area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Recent activity */}
        <Card className="overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-800/60">
            <h2 className="text-sm font-semibold text-slate-200">Recent Activity</h2>
          </div>
          <div className="divide-y divide-slate-800/40">
            {recentActivity.map((a, i) => (
              <div key={i} className="flex items-center justify-between px-5 py-3 gap-3">
                <div className="flex items-center gap-2.5 min-w-0">
                  {a.solved ? (
                    <CheckCircle2 size={14} className="text-green-500 shrink-0" />
                  ) : (
                    <div className="w-3.5 h-3.5 rounded-full border-2 border-slate-600 shrink-0" />
                  )}
                  <span className="text-sm text-slate-300 truncate">{a.problem}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Badge variant={a.difficulty.toLowerCase() as 'easy' | 'medium' | 'hard'}>
                    {a.difficulty}
                  </Badge>
                  <span className="text-xs text-slate-600">{a.date}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Topic coverage placeholder */}
        <Card className="p-5">
          <h2 className="text-sm font-semibold text-slate-200 mb-4">Topic Coverage</h2>
          <div className="flex flex-col gap-3">
            {[
              { topic: 'Arrays', pct: 60 },
              { topic: 'Strings', pct: 40 },
              { topic: 'Linked Lists', pct: 25 },
              { topic: 'Stack / Queue', pct: 50 },
              { topic: 'Dynamic Programming', pct: 5 },
            ].map((t) => (
              <div key={t.topic}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-slate-400">{t.topic}</span>
                  <span className="text-slate-600 font-mono">{t.pct}%</span>
                </div>
                <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-600 to-violet-600 rounded-full"
                    style={{ width: `${t.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-slate-600 mt-5 font-mono">
            Sample data · Connect account to see real stats.
          </p>
        </Card>
      </div>
    </div>
  )
}
