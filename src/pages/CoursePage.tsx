import { BookOpen, CheckCircle2, Clock, ArrowRight } from 'lucide-react'
import { Card, Badge, SectionHeading, Button } from '@/components/common'
import { Link } from 'react-router-dom'

const months = [
  {
    month: 1,
    title: 'Java Foundations',
    tagline: 'Core language syntax, OOP principles, collections, I/O, and basic data structures.',
    weeks: 4,
    problems: 40,
    color: 'from-blue-600 to-blue-800',
    accent: 'text-blue-400',
    border: 'border-blue-900/40',
  },
  {
    month: 2,
    title: 'Data Structures Deep Dive',
    tagline: 'Arrays, linked lists, stacks, queues, hash maps, binary trees, and priority heaps.',
    weeks: 4,
    problems: 55,
    color: 'from-violet-600 to-violet-800',
    accent: 'text-violet-400',
    border: 'border-violet-900/40',
  },
  {
    month: 3,
    title: 'Algorithms & Sorting Patterns',
    tagline: 'Binary search, two pointers, sliding window, recursion, and greedy algorithms.',
    weeks: 4,
    problems: 50,
    color: 'from-sky-600 to-sky-800',
    accent: 'text-sky-400',
    border: 'border-sky-900/40',
  },
  {
    month: 4,
    title: 'Dynamic Programming Mastery',
    tagline: 'Memoization, 1D/2D tabulation, 0/1 knapsack, LCS, LIS, and classic state transitions.',
    weeks: 4,
    problems: 50,
    color: 'from-emerald-600 to-emerald-800',
    accent: 'text-emerald-400',
    border: 'border-emerald-900/40',
  },
  {
    month: 5,
    title: 'Graphs & Advanced Structures',
    tagline: 'BFS, DFS, Dijkstra, topological sort, tries, segment trees, and union-find.',
    weeks: 4,
    problems: 55,
    color: 'from-amber-600 to-amber-800',
    accent: 'text-amber-400',
    border: 'border-amber-900/40',
  },
  {
    month: 6,
    title: 'System Design & Interview Readiness',
    tagline: 'Java concurrency, design patterns, mock tech rounds, and optimal complexity trade-offs.',
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
        <SectionHeading
          as="h1"
          title="Six-Month Java Curriculum"
          badge={<Badge variant="violet">Structured Roadmap</Badge>}
          description="A battle-tested curriculum engineered to take you from foundational Java syntax to solving hard LeetCode problems and passing technical interviews."
          action={
            <Link to="/timeline">
              <Button variant="secondary" size="sm" rightIcon={<ArrowRight size={14} />}>
                View Timeline
              </Button>
            </Link>
          }
        />
      </div>

      {/* Summary bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {[
          { label: 'Total Duration', value: '6 Months', icon: <Clock size={18} className="text-blue-400" /> },
          { label: 'Structured Weeks', value: '24 Weeks', icon: <CheckCircle2 size={18} className="text-emerald-400" /> },
          { label: 'DSA Problems', value: '300+ Problems', icon: <BookOpen size={18} className="text-violet-400" /> },
        ].map((s) => (
          <Card key={s.label} className="p-4 flex items-center gap-3.5">
            <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-default)]">
              {s.icon}
            </div>
            <div>
              <div className="text-lg font-bold text-slate-100 font-mono">{s.value}</div>
              <div className="text-xs text-slate-400">{s.label}</div>
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
                <span className={`text-xs font-mono font-semibold ${m.accent}`}>
                  Month {m.month}
                </span>
                <Badge variant="outline">{m.problems} problems</Badge>
              </div>
              <h3 className="font-bold text-slate-100 mb-1.5 text-sm">{m.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed mb-4">{m.tagline}</p>
              <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-800/60">
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {m.weeks} weeks
                </span>
                <Link
                  to="/problems"
                  className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1"
                >
                  Explore &rarr;
                </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <p className="text-center text-slate-500 text-xs mt-10 font-mono">
        Curriculum structured for consistent weekly milestones · Detailed syllabus coming in next phase.
      </p>
    </div>
  )
}
