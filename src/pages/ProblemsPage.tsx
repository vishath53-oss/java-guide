import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink, RotateCcw, CheckCircle2, Circle } from 'lucide-react'
import {
  Card,
  Badge,
  Button,
  SearchField,
  Dropdown,
  SectionHeading,
  EmptyState,
} from '@/components/common'
import { usePageTitle } from '@/hooks/usePageTitle'
import { PROBLEMS_DATA, type ProblemItem } from '@/data/problemsData'

const difficultyOptions = [
  { value: 'ALL', label: 'All Difficulties' },
  { value: 'Easy', label: 'Easy' },
  { value: 'Medium', label: 'Medium' },
  { value: 'Hard', label: 'Hard' },
]

const topicOptions = [
  { value: 'ALL', label: 'All Topics' },
  { value: 'Java Fundamentals', label: 'Java Fundamentals' },
  { value: 'Strings', label: 'Strings' },
  { value: 'Arrays', label: 'Arrays' },
  { value: 'Object-Oriented Programming', label: 'Object-Oriented Programming' },
  { value: 'Collections', label: 'Collections' },
  { value: 'Searching and Sorting', label: 'Searching and Sorting' },
  { value: 'Data Structures', label: 'Data Structures' },
  { value: 'Algorithms', label: 'Algorithms' },
  { value: 'SQL', label: 'SQL' },
  { value: 'JDBC', label: 'JDBC' },
]

const monthOptions = [
  { value: 'ALL', label: 'All Months' },
  { value: '1', label: 'Month 1: Java Fundamentals' },
  { value: '2', label: 'Month 2: OOP & Intermediates' },
  { value: '3', label: 'Month 3: Collections & Modern Core' },
  { value: '4', label: 'Month 4: Concurrency & JDBC' },
  { value: '5', label: 'Month 5: DSA & SQL' },
  { value: '6', label: 'Month 6: Spring Boot & Testing' },
]

export default function ProblemsPage() {
  usePageTitle('Problem Library')

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedDifficulty, setSelectedDifficulty] = useState('ALL')
  const [selectedTopic, setSelectedTopic] = useState('ALL')
  const [selectedMonth, setSelectedMonth] = useState('ALL')

  // Completion status: kept decoupled from static problem dataset
  const [solvedIds] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('javastudymate_solved_ids')
      if (saved) return new Set(JSON.parse(saved))
    } catch {
      // ignore
    }
    // Default demonstration solved problems
    return new Set(
      PROBLEMS_DATA.filter((p) => p.status === 'solved').map((p) => p.id)
    )
  })

  // Filter problems immediately across search, topic, difficulty, and month
  const filteredProblems = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    return PROBLEMS_DATA.filter((p: ProblemItem) => {
      // 1. Keyword search matches title, topic, or description
      const matchesSearch =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.topic.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)

      // 2. Difficulty filter
      const matchesDifficulty =
        selectedDifficulty === 'ALL' ||
        p.difficulty.toLowerCase() === selectedDifficulty.toLowerCase()

      // 3. Topic filter
      const matchesTopic =
        selectedTopic === 'ALL' ||
        p.topic.toLowerCase() === selectedTopic.toLowerCase()

      // 4. Month filter
      const matchesMonth =
        selectedMonth === 'ALL' || p.month.toString() === selectedMonth

      return matchesSearch && matchesDifficulty && matchesTopic && matchesMonth
    })
  }, [searchQuery, selectedDifficulty, selectedTopic, selectedMonth])

  const hasActiveFilters =
    Boolean(searchQuery.trim()) ||
    selectedDifficulty !== 'ALL' ||
    selectedTopic !== 'ALL' ||
    selectedMonth !== 'ALL'

  const handleResetFilters = () => {
    setSearchQuery('')
    setSelectedDifficulty('ALL')
    setSelectedTopic('ALL')
    setSelectedMonth('ALL')
  }

  const totalUniqueCount = PROBLEMS_DATA.length
  const solvedCount = PROBLEMS_DATA.filter((p) => solvedIds.has(p.id)).length

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* Section Header */}
      <div className="mb-8">
        <SectionHeading
          as="h1"
          title="Problem Library"
          badge={
            <Badge variant="blue" className="text-xs">
              {totalUniqueCount} Java Problems
            </Badge>
          }
          description="Practice Java programming through structured coding challenges."
        />

        {/* Quick Progress Banner */}
        <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span>Solved: <strong className="text-slate-200 font-mono">{solvedCount}</strong> / {totalUniqueCount}</span>
          </div>
          <span className="text-slate-700">•</span>
          <span>Topics Available: <strong className="text-slate-200 font-mono">10 Domains</strong></span>
          <span className="text-slate-700">•</span>
          <span>Curriculum Alignment: <strong className="text-slate-200 font-mono">Months 1–6 (24 Weeks)</strong></span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col lg:flex-row gap-3 mb-6 items-stretch lg:items-center">
        {/* Search Field */}
        <div className="flex-1 w-full">
          <SearchField
            placeholder="Search problems by title, topic, or keywords (e.g. Arrays, Palindrome, Thread, SQL)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Topic Filter */}
        <div className="w-full sm:w-56 shrink-0">
          <Dropdown
            options={topicOptions}
            value={selectedTopic}
            onChange={(val) => setSelectedTopic(val)}
          />
        </div>

        {/* Difficulty Filter */}
        <div className="w-full sm:w-44 shrink-0">
          <Dropdown
            options={difficultyOptions}
            value={selectedDifficulty}
            onChange={(val) => setSelectedDifficulty(val)}
          />
        </div>

        {/* Month Filter */}
        <div className="w-full sm:w-48 shrink-0">
          <Dropdown
            options={monthOptions}
            value={selectedMonth}
            onChange={(val) => setSelectedMonth(val)}
          />
        </div>

        {/* Reset Button */}
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleResetFilters}
            leftIcon={<RotateCcw size={14} />}
            className="shrink-0"
          >
            Reset
          </Button>
        )}
      </div>

      {/* Problem List or Empty State */}
      {filteredProblems.length === 0 ? (
        <EmptyState
          title="No problems found"
          description={`No problems match your current criteria${searchQuery ? ` for "${searchQuery}"` : ''
            }. Try clearing your search keyword, difficulty, or topic filter.`}
          action={
            <Button variant="secondary" size="sm" onClick={handleResetFilters}>
              Clear all filters
            </Button>
          }
        />
      ) : (
        <Card className="overflow-hidden">
          <div className="divide-y divide-slate-800/60">
            {/* Table Header */}
            <div className="grid grid-cols-[auto_1fr_auto_auto_auto] gap-4 px-5 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500 bg-[var(--bg-elevated)]/40">
              <span className="w-8 text-right">#</span>
              <span>Title</span>
              <span className="hidden md:block">Topic</span>
              <span className="hidden sm:block">Acceptance</span>
              <span>Difficulty</span>
            </div>

            {/* Problem Rows */}
            {filteredProblems.map((p) => {
              const isSolved = solvedIds.has(p.id)

              return (
                <Link
                  key={p.id}
                  to={`/workspace/${p.id}`}
                  className="grid grid-cols-[auto_1fr_auto_auto_auto] gap-4 px-5 py-3.5 items-center hover:bg-slate-800/40 transition-colors duration-150 group"
                >
                  {/* Problem Number */}
                  <span className="text-xs font-mono text-slate-500 w-8 text-right">
                    {p.numId}
                  </span>

                  {/* Title & Status */}
                  <div className="flex items-center gap-2.5 min-w-0">
                    {isSolved ? (
                      <CheckCircle2
                        size={16}
                        className="text-emerald-400 shrink-0"
                        aria-label="Solved"
                      />
                    ) : (
                      <Circle
                        size={15}
                        className="text-slate-600 shrink-0 group-hover:text-slate-400 transition-colors"
                        aria-label="Unsolved"
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

                  {/* Topic Tag */}
                  <span className="hidden md:block text-xs text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded-md border border-slate-700/60 font-mono">
                    {p.topic}
                  </span>

                  {/* Acceptance */}
                  <span className="hidden sm:block text-xs font-mono text-slate-500">
                    {p.acceptance || '65.0%'}
                  </span>

                  {/* Difficulty Badge */}
                  <Badge
                    variant={p.difficulty.toLowerCase() as 'easy' | 'medium' | 'hard'}
                  >
                    {p.difficulty}
                  </Badge>
                </Link>
              )
            })}
          </div>
        </Card>
      )}

      {/* Footer Summary */}
      <p className="text-center text-slate-500 text-xs mt-6 font-mono">
        Showing {filteredProblems.length} of {totalUniqueCount} unique problems · Click any problem to open it directly in the interactive coding workspace.
      </p>
    </div>
  )
}
