import { BookOpen, CheckCircle2, Clock } from 'lucide-react'
import Card from '@/components/common/Card'
import Badge from '@/components/common/Badge'

const months = [
  {
    month: 1,
    title: 'Java Foundations',
    tagline: 'Core language, OOP, collections, I/O, and basic data structures.',
    weeks: 4,
    problems: 40,
    color: 'from-blue-600 to-blue-800',
    accent: 'text-blue-400',
    border: 'border-blue-900/40',
  },
  {
    month: 2,
    title: 'Data Structures Deep Dive',
    tagline: 'Arrays, linked lists, stacks, queues, hash maps, trees, and heaps.',
    weeks: 4,
    problems: 55,
    color: 'from-violet-600 to-violet-800',
    accent: 'text-violet-400',
    border: 'border-violet-900/40',
  },
  {
    month: 3,
    title: 'Algorithms & Sorting',
    tagline: 'Searching, sorting, recursion, backtracking, and greedy algorithms.',
    weeks: 4,
    problems: 50,
    color: 'from-sky-600 to-sky-800',
    accent: 'text-sky-400',
    border: 'border-sky-900/40',
  },
  {
    month: 4,
    title: 'Dynamic Programming',
    tagline: 'Memoization, tabulation, 0/1 knapsack, LCS, LIS, and classic DP patterns.',
    weeks: 4,
    problems: 50,
    color: 'from-emerald-600 to-emerald-800',
    accent: 'text-emerald-400',
    border: 'border-emerald-900/40',
  },
  {
    month: 5,
    title: 'Graphs & Advanced Structures',
    tagline: 'BFS, DFS, shortest paths, MST, tries, segment trees, and union-find.',
    weeks: 4,
    problems: 55,
    color: 'from-amber-600 to-amber-800',
    accent: 'text-amber-400',
    border: 'border-amber-900/40',
  },
  {
    month: 6,
    title: 'System Design & Interview Prep',
    tagline: 'Design patterns, SOLID, concurrency, scalability, and mock interview problems.',
    weeks: 4,
    problems: 50,
    color: 'from-rose-600 to-rose-800',
    accent: 'text-rose-400',
    border: 'border-rose-900/40',
  },
]

export default function CoursePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-1">
          <BookOpen size={20} className="text-violet-400" />
          <h1 className="text-2xl font-bold text-white">6-Month Java Course</h1>
        </div>
        <p className="text-slate-500 text-sm max-w-2xl">
          A structured, battle-tested curriculum that takes you from Java basics to interview-ready in 6 months.
          Detailed week-by-week lessons and video content will be added in upcoming screens.
        </p>
      </div>

      {/* Summary bar */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        {[
          { label: 'Total Months', value: '6', icon: <Clock size={16} className="text-blue-400" /> },
          { label: 'Total Weeks', value: '24', icon: <CheckCircle2 size={16} className="text-green-400" /> },
          { label: 'Total Problems', value: '300+', icon: <BookOpen size={16} className="text-violet-400" /> },
        ].map((s) => (
          <Card key={s.label} className="p-4 flex items-center gap-3">
            {s.icon}
            <div>
              <div className="text-lg font-bold text-white font-mono">{s.value}</div>
              <div className="text-xs text-slate-500">{s.label}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Month cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {months.map((m) => (
          <Card key={m.month} hover glow className={`overflow-hidden border ${m.border}`}>
            {/* Coloured header bar */}
            <div className={`h-1.5 bg-gradient-to-r ${m.color}`} />
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-mono font-semibold ${m.accent}`}>Month {m.month}</span>
                <Badge variant="outline">{m.problems} problems</Badge>
              </div>
              <h3 className="font-bold text-slate-100 mb-1.5 text-sm">{m.title}</h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-4">{m.tagline}</p>
              <div className="flex items-center gap-3 text-xs text-slate-600">
                <span className="flex items-center gap-1">
                  <Clock size={11} />
                  {m.weeks} weeks
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle2 size={11} />
                  Coming soon
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <p className="text-center text-slate-600 text-xs mt-10 font-mono">
        Full lesson content, code examples, and quizzes will be added in a later screen.
      </p>
    </div>
  )
}
