import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink, RotateCcw } from 'lucide-react'
import {
  Card,
  Badge,
  Button,
  SearchField,
  Dropdown,
  SectionHeading,
  EmptyState,
} from '@/components/common'

const allProblems = [
  { id: 1, title: 'Two Sum in Java', difficulty: 'Easy', topic: 'Arrays & Hash Maps', status: 'solved', acceptance: '53.2%' },
  { id: 2, title: 'Reverse Linked List', difficulty: 'Easy', topic: 'Linked Lists', status: 'unsolved', acceptance: '74.8%' },
  { id: 3, title: 'Binary Search Implementation', difficulty: 'Easy', topic: 'Binary Search', status: 'unsolved', acceptance: '56.9%' },
  { id: 4, title: 'Merge Intervals', difficulty: 'Medium', topic: 'Arrays & Sorting', status: 'unsolved', acceptance: '47.1%' },
  { id: 5, title: 'Valid Parentheses', difficulty: 'Easy', topic: 'Stack', status: 'solved', acceptance: '40.6%' },
  { id: 6, title: 'Maximum Subarray (Kadane)', difficulty: 'Medium', topic: 'Dynamic Programming', status: 'unsolved', acceptance: '50.8%' },
  { id: 7, title: 'Longest Palindromic Substring', difficulty: 'Medium', topic: 'Strings', status: 'unsolved', acceptance: '33.9%' },
  { id: 8, title: 'Word Break in Java', difficulty: 'Medium', topic: 'Dynamic Programming', status: 'unsolved', acceptance: '46.3%' },
  { id: 9, title: 'Median of Two Sorted Arrays', difficulty: 'Hard', topic: 'Binary Search', status: 'unsolved', acceptance: '39.8%' },
  { id: 10, title: 'N-Queens Backtracking', difficulty: 'Hard', topic: 'Backtracking', status: 'unsolved', acceptance: '67.4%' },
]

const difficultyOptions = [
  { value: 'ALL', label: 'All Difficulties' },
  { value: 'Easy', label: 'Easy' },
  { value: 'Medium', label: 'Medium' },
  { value: 'Hard', label: 'Hard' },
]

export default function ProblemsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDifficulty, setSelectedDifficulty] = useState('ALL')

  const filteredProblems = allProblems.filter((p) => {
    const matchesQuery =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.topic.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesDiff =
      selectedDifficulty === 'ALL' || p.difficulty === selectedDifficulty

    return matchesQuery && matchesDiff
  })

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* Section Header */}
      <div className="mb-8">
        <SectionHeading
          as="h1"
          title="Problem Library"
          badge={
            <Badge variant="blue" className="text-xs">
              150+ Java Problems
            </Badge>
          }
          description="Practice LeetCode-style Java problems categorized by pattern, topic, and difficulty. Select any problem to enter the interactive workbench."
        />
      </div>

      {/* Filter and Search Bar using Reusable Components */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6 items-center">
        <div className="flex-1 w-full">
          <SearchField
            placeholder="Search problems by name or topic (e.g. Arrays, Two Sum)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="w-full sm:w-52 shrink-0">
          <Dropdown
            options={difficultyOptions}
            value={selectedDifficulty}
            onChange={(val) => setSelectedDifficulty(val)}
          />
        </div>

        {(searchQuery || selectedDifficulty !== 'ALL') && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setSearchQuery('')
              setSelectedDifficulty('ALL')
            }}
            leftIcon={<RotateCcw size={14} />}
          >
            Reset
          </Button>
        )}
      </div>

      {/* Problem list or Empty State */}
      {filteredProblems.length === 0 ? (
        <EmptyState
          title="No problems found"
          description={`No problems match your filter "${searchQuery}". Try adjusting your keywords or clearing the difficulty filter.`}
          action={
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                setSearchQuery('')
                setSelectedDifficulty('ALL')
              }}
            >
              Clear filters
            </Button>
          }
        />
      ) : (
        <Card className="overflow-hidden">
          <div className="divide-y divide-slate-800/60">
            {/* Table header */}
            <div className="grid grid-cols-[auto_1fr_auto_auto_auto] gap-4 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 bg-[var(--bg-elevated)]/40">
              <span className="w-8 text-right">#</span>
              <span>Title</span>
              <span className="hidden md:block">Topic</span>
              <span className="hidden sm:block">Acceptance</span>
              <span>Difficulty</span>
            </div>

            {filteredProblems.map((p) => (
              <Link
                key={p.id}
                to="/workspace"
                className="grid grid-cols-[auto_1fr_auto_auto_auto] gap-4 px-5 py-3.5 items-center hover:bg-slate-800/40 transition-colors duration-150 group"
              >
                <span className="text-xs font-mono text-slate-500 w-8 text-right">
                  {p.id}
                </span>

                <div className="flex items-center gap-2.5 min-w-0">
                  {p.status === 'solved' ? (
                    <span
                      className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"
                      title="Solved"
                    />
                  ) : (
                    <span
                      className="w-2 h-2 rounded-full border border-slate-600 shrink-0"
                      title="Unsolved"
                    />
                  )}
                  <span className="text-sm text-slate-200 group-hover:text-blue-400 font-medium transition-colors truncate">
                    {p.title}
                  </span>
                  <ExternalLink
                    size={12}
                    className="text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity hidden sm:inline"
                  />
                </div>

                <span className="hidden md:block text-xs text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded-md border border-slate-700/60 font-mono">
                  {p.topic}
                </span>

                <span className="hidden sm:block text-xs font-mono text-slate-500">
                  {p.acceptance}
                </span>

                <Badge
                  variant={p.difficulty.toLowerCase() as 'easy' | 'medium' | 'hard'}
                >
                  {p.difficulty}
                </Badge>
              </Link>
            ))}
          </div>
        </Card>
      )}

      <p className="text-center text-slate-500 text-xs mt-6 font-mono">
        Showing {filteredProblems.length} of {allProblems.length} curated problems · Click any problem to open the interactive coding workspace.
      </p>
    </div>
  )
}
