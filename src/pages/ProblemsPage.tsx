import { Search, Filter, ListChecks } from 'lucide-react'
import Card from '@/components/common/Card'
import Badge from '@/components/common/Badge'
import Button from '@/components/common/Button'

const sampleProblems = [
  { id: 1, title: 'Two Sum', difficulty: 'Easy', topic: 'Arrays', status: 'solved' },
  { id: 2, title: 'Reverse Linked List', difficulty: 'Easy', topic: 'Linked Lists', status: 'unsolved' },
  { id: 3, title: 'Binary Search', difficulty: 'Easy', topic: 'Search', status: 'unsolved' },
  { id: 4, title: 'Merge Intervals', difficulty: 'Medium', topic: 'Arrays', status: 'unsolved' },
  { id: 5, title: 'Valid Parentheses', difficulty: 'Easy', topic: 'Stack', status: 'solved' },
  { id: 6, title: 'Maximum Subarray (Kadane)', difficulty: 'Medium', topic: 'Dynamic Programming', status: 'unsolved' },
  { id: 7, title: 'Longest Palindromic Substring', difficulty: 'Medium', topic: 'Strings', status: 'unsolved' },
  { id: 8, title: 'Word Break', difficulty: 'Medium', topic: 'Dynamic Programming', status: 'unsolved' },
  { id: 9, title: 'Median of Two Sorted Arrays', difficulty: 'Hard', topic: 'Binary Search', status: 'unsolved' },
  { id: 10, title: 'N-Queens', difficulty: 'Hard', topic: 'Backtracking', status: 'unsolved' },
]

const difficultyVariant: Record<string, 'easy' | 'medium' | 'hard'> = {
  Easy: 'easy',
  Medium: 'medium',
  Hard: 'hard',
}

export default function ProblemsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-1">
          <ListChecks size={20} className="text-blue-400" />
          <h1 className="text-2xl font-bold text-white">Problems</h1>
        </div>
        <p className="text-slate-500 text-sm">
          Practice Java DSA problems organised by topic and difficulty. Full implementation coming soon.
        </p>
      </div>

      {/* Filter bar (placeholder) */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="flex-1 relative">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            placeholder="Search problems... (coming soon)"
            disabled
            className="w-full pl-9 pr-4 py-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 text-sm placeholder-slate-600 cursor-not-allowed"
          />
        </div>
        <Button variant="secondary" size="sm" disabled>
          <Filter size={14} />
          Filters
        </Button>
        <div className="flex gap-2">
          {['All', 'Easy', 'Medium', 'Hard'].map((d) => (
            <button
              key={d}
              disabled
              className="px-3 py-1.5 text-xs rounded-md border border-slate-800 text-slate-500 bg-slate-900/60 cursor-not-allowed"
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Problem list */}
      <Card className="overflow-hidden">
        <div className="divide-y divide-slate-800/60">
          {/* Table header */}
          <div className="grid grid-cols-[auto_1fr_auto_auto] gap-4 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-600">
            <span>#</span>
            <span>Title</span>
            <span className="hidden sm:block">Topic</span>
            <span>Difficulty</span>
          </div>
          {sampleProblems.map((p) => (
            <div
              key={p.id}
              className="grid grid-cols-[auto_1fr_auto_auto] gap-4 px-5 py-3.5 items-center hover:bg-slate-800/30 transition-colors duration-100 cursor-not-allowed opacity-90"
            >
              <span className="text-xs font-mono text-slate-600 w-6 text-right">{p.id}</span>
              <div className="flex items-center gap-2 min-w-0">
                {p.status === 'solved' && (
                  <span className="w-2 h-2 rounded-full bg-green-500 shrink-0" title="Solved" />
                )}
                <span className="text-sm text-slate-300 truncate">{p.title}</span>
              </div>
              <span className="hidden sm:block text-xs text-slate-500 bg-slate-900 px-2 py-0.5 rounded-full border border-slate-800">
                {p.topic}
              </span>
              <Badge variant={difficultyVariant[p.difficulty]}>{p.difficulty}</Badge>
            </div>
          ))}
        </div>
      </Card>

      <p className="text-center text-slate-600 text-xs mt-6 font-mono">
        Showing 10 of 300+ problems · Full problem set and code editor coming in a later screen.
      </p>
    </div>
  )
}
