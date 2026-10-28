import { type ReactNode, useState, useEffect, useCallback, useMemo } from 'react'
import { Link, useSearchParams, useParams, useNavigate } from 'react-router-dom'
import Editor from '@monaco-editor/react'
import {
  ArrowLeft,
  Play,
  CheckCircle,
  Timer,
  Pause,
  RotateCcw,
  Settings2,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  BookOpen,
  Code2,
  Clock,
  Sparkles,
  Terminal,
  CheckCircle2,
  XCircle,
  Copy,
  Check,
  Download,
  AlertTriangle,
  Lightbulb,
  Maximize2,
  HelpCircle,
  Info,
  Sliders,
} from 'lucide-react'
import Badge from '@/components/common/Badge'
import Button from '@/components/common/Button'
import IconButton from '@/components/common/IconButton'
import Tooltip from '@/components/common/Tooltip'
import Modal from '@/components/common/Modal'
import ThemeToggle from '@/components/common/ThemeToggle'
import { useTheme } from '@/hooks/useTheme'
import { getProblemById, PROBLEMS_DATA, type ProblemItem } from '@/data/problemsData'

export interface CodingLayoutProps {
  problemTitle?: string
  problemDifficulty?: 'easy' | 'medium' | 'hard'
  descriptionSlot?: ReactNode
  editorSlot?: ReactNode
  consoleSlot?: ReactNode
  children?: ReactNode
}

interface CaseResult {
  caseId: number
  passed: boolean
  input: string
  expected: string
  actual: string
}

interface RunExecutionResult {
  status: 'idle' | 'running' | 'completed'
  verdict: 'Accepted' | 'Wrong Answer' | 'Compilation Error'
  runtimeMs: number
  memoryMb: number
  caseResults: CaseResult[]
  stdout?: string[]
  compileError?: string
}

interface SubmitExecutionResult {
  status: 'idle' | 'submitting' | 'completed'
  verdict: 'Accepted' | 'Wrong Answer' | 'Compilation Error' | 'Time Limit Exceeded' | 'Runtime Error'
  totalCases: number
  passedCases: number
  runtimeMs: number
  memoryMb: number
  beatsPercent: number
  compileError?: string
}

interface SubmissionRecord {
  id: string
  problemId: string
  timestamp: string
  verdict: 'Accepted' | 'Wrong Answer' | 'Compilation Error' | 'Time Limit Exceeded'
  passedCases: number
  totalCases: number
  runtime: string
  memory: string
  language: string
  codeSnapshot: string
}

export default function CodingLayout({
  problemTitle: propTitle,
  problemDifficulty: propDiff,
  descriptionSlot,
  editorSlot,
  consoleSlot,
  children,
}: CodingLayoutProps) {
  const { id: routeId } = useParams<{ id: string }>()
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { theme } = useTheme()

  // 1. Resolve Active Problem
  const problemIdParam = routeId || searchParams.get('id') || 'print-welcome-formatted'
  const activeProblem = useMemo<ProblemItem>(
    () => getProblemById(problemIdParam) || PROBLEMS_DATA[0],
    [problemIdParam]
  )

  const problemTitle = propTitle || `${activeProblem.numId}. ${activeProblem.title}`
  const problemDifficulty = (propDiff || activeProblem.difficulty.toLowerCase()) as 'easy' | 'medium' | 'hard'

  // 2. Navigation on Mobile (Description vs Editor vs Console)
  const [mobileTab, setMobileTab] = useState<'desc' | 'editor' | 'console'>('editor')

  // 3. Left Panel Tabs
  const [activeTab, setActiveTab] = useState<'description' | 'editorial' | 'solutions' | 'submissions'>('description')

  // 4. Collapsible Hints State
  const [expandedHints, setExpandedHints] = useState<Record<number, boolean>>({})
  const toggleHint = (idx: number) => {
    setExpandedHints((prev) => ({ ...prev, [idx]: !prev[idx] }))
  }

  // 5. Code Storage & Persistence
  const storageKey = `javastudymate_code_${activeProblem.id}`
  const [code, setCode] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(storageKey)
      if (saved && saved.trim().length > 0) return saved
    } catch {
      // ignore
    }
    return activeProblem.starterCode
  })

  // Synchronize when switching problems
  const [prevProblemId, setPrevProblemId] = useState(activeProblem.id)
  if (prevProblemId !== activeProblem.id) {
    setPrevProblemId(activeProblem.id)
    try {
      const saved = localStorage.getItem(`javastudymate_code_${activeProblem.id}`)
      setCode(saved && saved.trim().length > 0 ? saved : activeProblem.starterCode)
    } catch {
      setCode(activeProblem.starterCode)
    }
    setExpandedHints({})
  }

  const handleEditorChange = useCallback(
    (value: string | undefined) => {
      if (value !== undefined) {
        setCode(value)
        try {
          localStorage.setItem(storageKey, value)
        } catch {
          // ignore
        }
      }
    },
    [storageKey]
  )

  const handleResetCode = () => {
    setCode(activeProblem.starterCode)
    try {
      localStorage.removeItem(storageKey)
    } catch {
      // ignore
    }
  }

  const handleLoadSolution = () => {
    if (activeProblem.solutionCode) {
      setCode(activeProblem.solutionCode)
      try {
        localStorage.setItem(storageKey, activeProblem.solutionCode)
      } catch {
        // ignore
      }
      setActiveTab('description')
      setMobileTab('editor')
    }
  }

  // 6. Testcases & Console Tabs
  const [consoleTab, setConsoleTab] = useState<'testcases' | 'custom' | 'runresults' | 'submitresults'>('testcases')
  const [selectedCase, setSelectedCase] = useState<number>(1)
  const [customInputText, setCustomInputText] = useState<string>('')
  const [isConsoleCollapsed, setIsConsoleCollapsed] = useState<boolean>(false)

  const testCases = useMemo(
    () =>
      activeProblem.testCases && activeProblem.testCases.length > 0
        ? activeProblem.testCases
        : [{ id: 1, input: 'Sample input', expected: 'Sample output' }],
    [activeProblem]
  )
  const activeCaseData = useMemo(
    () => testCases.find((c) => c.id === selectedCase) || testCases[0],
    [testCases, selectedCase]
  )

  // 7. Execution Results State
  const [runResult, setRunResult] = useState<RunExecutionResult>({
    status: 'idle',
    verdict: 'Accepted',
    runtimeMs: 0,
    memoryMb: 0,
    caseResults: [],
  })

  const [submitResult, setSubmitResult] = useState<SubmitExecutionResult>({
    status: 'idle',
    verdict: 'Accepted',
    totalCases: 0,
    passedCases: 0,
    runtimeMs: 0,
    memoryMb: 0,
    beatsPercent: 0,
  })

  const [isRunning, setIsRunning] = useState<boolean>(false)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  // 8. Submission History Persistence
  const [submissions, setSubmissions] = useState<SubmissionRecord[]>(() => {
    try {
      const saved = localStorage.getItem(`javastudymate_subs_${activeProblem.id}`)
      if (saved) return JSON.parse(saved)
    } catch {
      // ignore
    }
    return [
      {
        id: 'sub-baseline',
        problemId: activeProblem.id,
        timestamp: '1 hour ago',
        verdict: 'Accepted',
        passedCases: (activeProblem.testCases?.length || 2) + 12,
        totalCases: (activeProblem.testCases?.length || 2) + 12,
        runtime: '1 ms',
        memory: '42.1 MB',
        language: 'Java 21',
        codeSnapshot: activeProblem.solutionCode || activeProblem.starterCode,
      },
    ]
  })

  // 9. Study Session Timer
  const [timerSeconds, setTimerSeconds] = useState<number>(0)
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(true)

  useEffect(() => {
    if (!isTimerRunning) return
    const interval = setInterval(() => setTimerSeconds((prev) => prev + 1), 1000)
    return () => clearInterval(interval)
  }, [isTimerRunning])

  const formattedTimer = useMemo(() => {
    const hours = Math.floor(timerSeconds / 3600)
    const minutes = Math.floor((timerSeconds % 3600) / 60)
    const seconds = timerSeconds % 60
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }, [timerSeconds])

  // 10. Editor Settings State
  const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false)
  const [fontSize, setFontSize] = useState<number>(13)
  const [tabSize, setTabSize] = useState<number>(4)
  const [minimap, setMinimap] = useState<boolean>(false)
  const [copiedState, setCopiedState] = useState<string | null>(null)

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopiedState(label)
    setTimeout(() => setCopiedState(null), 2000)
  }

  // 11. Run Code Simulation Logic (Testing Visible Sample Cases)
  const handleRun = () => {
    setIsRunning(true)
    setIsConsoleCollapsed(false)
    setConsoleTab('runresults')
    setMobileTab('console')

    setTimeout(() => {
      setIsRunning(false)
      const cleanCode = code.trim()

      // Basic structural check
      const hasClass = /class\s+\w+/.test(cleanCode) || /interface\s+\w+/.test(cleanCode)
      const openBraces = (cleanCode.match(/{/g) || []).length
      const closeBraces = (cleanCode.match(/}/g) || []).length

      if (!hasClass || openBraces !== closeBraces) {
        setRunResult({
          status: 'completed',
          verdict: 'Compilation Error',
          runtimeMs: 0,
          memoryMb: 0,
          compileError: !hasClass
            ? 'Solution.java:1: error: class, interface, or enum expected'
            : `Solution.java: syntax error: mismatched curly braces (${openBraces} opened, ${closeBraces} closed)`,
          caseResults: [],
          stdout: ['[javac] 1 error generated in Solution.java'],
        })
        return
      }

      // Check whether user still has placeholder untouched code
      const isPlaceholder =
        cleanCode === activeProblem.starterCode.trim() &&
        (cleanCode.includes('return false;') ||
          cleanCode.includes('return new int[]{};') ||
          cleanCode.includes('return 0;'))

      const sampleResults: CaseResult[] = testCases.map((tc) => {
        const passed = !isPlaceholder
        return {
          caseId: tc.id,
          passed,
          input: tc.input,
          expected: tc.expected,
          actual: passed ? tc.expected : 'null / 0 / false',
        }
      })

      const allPassed = sampleResults.every((r) => r.passed)
      const stdMatches = [...cleanCode.matchAll(/System\.out\.print(?:ln)?\s*\((.*?)\);/g)]
      const stdout = stdMatches.map((m) => `[stdout] ${m[1].replace(/["']/g, '')}`)

      setRunResult({
        status: 'completed',
        verdict: allPassed ? 'Accepted' : 'Wrong Answer',
        runtimeMs: Math.floor(Math.random() * 2) + 1,
        memoryMb: parseFloat((41.8 + Math.random() * 0.8).toFixed(1)),
        caseResults: sampleResults,
        stdout: stdout.length > 0 ? stdout : undefined,
      })
    }, 600)
  }

  // 12. Submit Solution Simulation Logic (Evaluating Visible + Hidden Test Cases)
  const handleSub = () => {
    setIsSubmitting(true)
    setIsConsoleCollapsed(false)
    setConsoleTab('submitresults')
    setMobileTab('console')

    setTimeout(() => {
      setIsSubmitting(false)
      const cleanCode = code.trim()

      const hasClass = /class\s+\w+/.test(cleanCode) || /interface\s+\w+/.test(cleanCode)
      const openBraces = (cleanCode.match(/{/g) || []).length
      const closeBraces = (cleanCode.match(/}/g) || []).length

      if (!hasClass || openBraces !== closeBraces) {
        setSubmitResult({
          status: 'completed',
          verdict: 'Compilation Error',
          totalCases: testCases.length + 15,
          passedCases: 0,
          runtimeMs: 0,
          memoryMb: 0,
          beatsPercent: 0,
          compileError: !hasClass
            ? 'Solution.java:1: error: class, interface, or enum expected'
            : `Solution.java: syntax error: mismatched curly braces (${openBraces} opened, ${closeBraces} closed)`,
        })
        return
      }

      const isPlaceholder =
        cleanCode === activeProblem.starterCode.trim() &&
        (cleanCode.includes('return false;') ||
          cleanCode.includes('return new int[]{};') ||
          cleanCode.includes('return 0;'))

      const totalHidden = 15
      const totalCount = testCases.length + totalHidden
      const passedCount = isPlaceholder ? 0 : totalCount
      const verdict = isPlaceholder ? 'Wrong Answer' : 'Accepted'
      const runtime = isPlaceholder ? 0 : 1
      const memory = isPlaceholder ? 0 : 42.3
      const beats = isPlaceholder ? 0 : 97.4

      setSubmitResult({
        status: 'completed',
        verdict,
        totalCases: totalCount,
        passedCases: passedCount,
        runtimeMs: runtime,
        memoryMb: memory,
        beatsPercent: beats,
      })

      // Record in Submissions History
      const newSub: SubmissionRecord = {
        id: `sub-${Date.now()}`,
        problemId: activeProblem.id,
        timestamp: 'Just now',
        verdict,
        passedCases: passedCount,
        totalCases: totalCount,
        runtime: `${runtime} ms`,
        memory: `${memory} MB`,
        language: 'Java 21',
        codeSnapshot: code,
      }

      setSubmissions((prev) => {
        const updated = [newSub, ...prev]
        try {
          localStorage.setItem(`javastudymate_subs_${activeProblem.id}`, JSON.stringify(updated))
        } catch {
          // ignore
        }
        return updated
      })

      // Update Solved indicator in localStorage
      if (verdict === 'Accepted') {
        try {
          const raw = localStorage.getItem('javastudymate_solved_ids')
          const current = raw ? new Set(JSON.parse(raw)) : new Set<string>()
          current.add(activeProblem.id)
          localStorage.setItem('javastudymate_solved_ids', JSON.stringify([...current]))
        } catch {
          // ignore
        }
      }
    }, 900)
  }

  // Previous & Next navigation
  const currentIndex = PROBLEMS_DATA.findIndex((p) => p.id === activeProblem.id)
  const prevProblem = currentIndex > 0 ? PROBLEMS_DATA[currentIndex - 1] : null
  const nextProblem = currentIndex < PROBLEMS_DATA.length - 1 ? PROBLEMS_DATA[currentIndex + 1] : null

  // Hints array derivation
  const problemHints: string[] = useMemo(() => {
    if (activeProblem.hints && activeProblem.hints.length > 0) return activeProblem.hints
    const generated: string[] = []
    if (activeProblem.editorial?.approach) {
      generated.push(`Key Insight: Focus on the ${activeProblem.editorial.approach} pattern.`)
    }
    generated.push(
      `Pay close attention to boundary constraints and edge cases (e.g., negative numbers, empty arrays, or zero values).`
    )
    if (activeProblem.editorial?.timeComplexity) {
      generated.push(`Aim for an optimal time complexity of ${activeProblem.editorial.timeComplexity}.`)
    }
    return generated
  }, [activeProblem])

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[var(--bg-base)] text-[var(--fg-primary)]">
      {/* 1. TOP WORKSPACE HEADER BAR */}
      <header className="h-13 border-b border-[var(--border-default)] bg-[var(--bg-surface)] px-3 sm:px-4 flex items-center justify-between gap-2 shrink-0 z-20">
        {/* Left: Navigation and Problem Title */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <Link
            to="/problems"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium text-slate-400 hover:text-white hover:bg-[var(--bg-elevated)] transition-colors shrink-0"
          >
            <ArrowLeft size={14} />
            <span className="hidden sm:inline">Problems</span>
          </Link>

          <div className="h-4 w-px bg-slate-800 shrink-0" />

          <div className="flex items-center gap-2 truncate">
            <h1 className="text-xs sm:text-sm font-semibold text-slate-200 truncate">
              {problemTitle}
            </h1>
            <Badge variant={problemDifficulty} className="text-[10px] shrink-0">
              {problemDifficulty.toUpperCase()}
            </Badge>
          </div>

          <div className="hidden md:flex items-center gap-0.5 text-slate-500 shrink-0">
            {prevProblem ? (
              <Link to={`/workspace/${prevProblem.id}`}>
                <Tooltip content={`Previous: #${prevProblem.numId} ${prevProblem.title}`} placement="bottom">
                  <button
                    type="button"
                    className="p-1 rounded hover:text-white hover:bg-[var(--bg-elevated)]"
                    aria-label="Previous problem"
                  >
                    <ChevronLeft size={16} />
                  </button>
                </Tooltip>
              </Link>
            ) : (
              <span className="p-1 text-slate-700 opacity-40">
                <ChevronLeft size={16} />
              </span>
            )}

            {nextProblem ? (
              <Link to={`/workspace/${nextProblem.id}`}>
                <Tooltip content={`Next: #${nextProblem.numId} ${nextProblem.title}`} placement="bottom">
                  <button
                    type="button"
                    className="p-1 rounded hover:text-white hover:bg-[var(--bg-elevated)]"
                    aria-label="Next problem"
                  >
                    <ChevronRight size={16} />
                  </button>
                </Tooltip>
              </Link>
            ) : (
              <span className="p-1 text-slate-700 opacity-40">
                <ChevronRight size={16} />
              </span>
            )}
          </div>
        </div>

        {/* Center: Run & Submit Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <Button
            variant="secondary"
            size="sm"
            onClick={handleRun}
            isLoading={isRunning}
            leftIcon={<Play size={13} className="text-emerald-400 fill-emerald-400" />}
          >
            <span className="hidden sm:inline">Run Code</span>
            <span className="sm:hidden">Run</span>
          </Button>

          <Button
            variant="primary"
            size="sm"
            onClick={handleSub}
            isLoading={isSubmitting}
            leftIcon={<CheckCircle size={13} />}
          >
            <span className="hidden sm:inline">Submit Solution</span>
            <span className="sm:hidden">Submit</span>
          </Button>
        </div>

        {/* Right: Workspace tools & Settings */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          {/* Study Timer with Pause/Play */}
          <div className="hidden xl:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-default)] text-xs text-slate-300 font-mono">
            <Timer size={13} className="text-blue-400" />
            <span>{formattedTimer}</span>
            <button
              type="button"
              onClick={() => setIsTimerRunning(!isTimerRunning)}
              className="text-slate-500 hover:text-slate-300 ml-1"
              title={isTimerRunning ? 'Pause timer' : 'Resume timer'}
            >
              {isTimerRunning ? <Pause size={10} /> : <Play size={10} />}
            </button>
          </div>

          <Tooltip content="Reset code to starter template" placement="bottom">
            <IconButton
              icon={<RotateCcw size={14} />}
              label="Reset starter code"
              variant="ghost"
              size="sm"
              onClick={handleResetCode}
            />
          </Tooltip>

          <Tooltip content="Editor settings" placement="bottom">
            <IconButton
              icon={<Settings2 size={14} />}
              label="Settings"
              variant="ghost"
              size="sm"
              onClick={() => setIsSettingsOpen(true)}
            />
          </Tooltip>

          <ThemeToggle size="sm" />

          <Tooltip content="Browse all problems" placement="bottom">
            <IconButton
              icon={<Maximize2 size={14} />}
              label="Browse problem library"
              variant="ghost"
              size="sm"
              className="hidden sm:inline-flex"
              onClick={() => navigate('/problems')}
            />
          </Tooltip>
        </div>
      </header>

      {/* 2. MOBILE RESPONSIVE PANEL SELECTOR */}
      <div className="lg:hidden flex items-center justify-around border-b border-[var(--border-default)] bg-[var(--bg-surface)] text-xs font-semibold py-1.5 px-2 shrink-0">
        <button
          type="button"
          onClick={() => setMobileTab('desc')}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-colors ${
            mobileTab === 'desc'
              ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <BookOpen size={13} />
          <span>Description</span>
        </button>
        <button
          type="button"
          onClick={() => setMobileTab('editor')}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-colors ${
            mobileTab === 'editor'
              ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Code2 size={13} />
          <span>Code Editor</span>
        </button>
        <button
          type="button"
          onClick={() => setMobileTab('console')}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-colors ${
            mobileTab === 'console'
              ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          <Terminal size={13} />
          <span>Test Console</span>
        </button>
      </div>

      {/* 3. MAIN WORKSPACE PANELS */}
      {children ? (
        <div className="flex-1 overflow-hidden">{children}</div>
      ) : (
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-2 p-2 overflow-hidden bg-[var(--bg-base)]">
          {/* ================= LEFT PANEL: Problem Description, Editorial, Solutions, Submissions ================= */}
          <section
            className={`flex flex-col rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] overflow-hidden ${
              mobileTab !== 'desc' ? 'hidden lg:flex' : 'flex'
            }`}
            aria-label="Problem Description and Details"
          >
            {/* Left Header Tabs */}
            <div className="h-10 px-4 border-b border-[var(--border-default)] bg-[var(--bg-surface)] flex items-center justify-between text-xs font-medium text-slate-300 shrink-0">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setActiveTab('description')}
                  className={`flex items-center gap-1.5 transition-colors ${
                    activeTab === 'description'
                      ? 'text-blue-400 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <BookOpen size={13} />
                  <span>Description</span>
                </button>
                <span className="text-slate-700">|</span>
                <button
                  type="button"
                  onClick={() => setActiveTab('editorial')}
                  className={`flex items-center gap-1.5 transition-colors ${
                    activeTab === 'editorial'
                      ? 'text-blue-400 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Sparkles size={13} />
                  <span>Editorial</span>
                </button>
                <span className="text-slate-700">|</span>
                <button
                  type="button"
                  onClick={() => setActiveTab('solutions')}
                  className={`flex items-center gap-1.5 transition-colors ${
                    activeTab === 'solutions'
                      ? 'text-blue-400 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Code2 size={13} />
                  <span>Solutions</span>
                </button>
                <span className="text-slate-700">|</span>
                <button
                  type="button"
                  onClick={() => setActiveTab('submissions')}
                  className={`flex items-center gap-1.5 transition-colors ${
                    activeTab === 'submissions'
                      ? 'text-blue-400 font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Clock size={13} />
                  <span>Submissions ({submissions.length})</span>
                </button>
              </div>
            </div>

            {/* Left Content Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 text-sm text-slate-300 space-y-5">
              {descriptionSlot ?? (
                <>
                  {/* TAB 1: DESCRIPTION */}
                  {activeTab === 'description' && (
                    <div className="space-y-5">
                      {/* Title & Metadata */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between flex-wrap gap-2">
                          <h2 className="text-lg font-bold text-slate-100">{problemTitle}</h2>
                          <div className="flex items-center gap-2">
                            <Badge variant={problemDifficulty}>{problemDifficulty.toUpperCase()}</Badge>
                            <span className="text-xs font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                              {activeProblem.topic}
                            </span>
                          </div>
                        </div>

                        {/* Curriculum Link */}
                        {activeProblem.courseLessonIds && activeProblem.courseLessonIds.length > 0 && (
                          <div className="flex items-center gap-2 p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-xs text-blue-300">
                            <Lightbulb size={13} className="shrink-0 text-blue-400" />
                            <span>
                              Syllabus Roadmap:{' '}
                              <strong className="text-white">
                                Month {activeProblem.month} • {activeProblem.courseLessonIds.join(', ')}
                              </strong>
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Problem Statement */}
                      <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5 font-mono">
                          Problem Statement
                        </h3>
                        <p className="text-slate-200 leading-relaxed text-sm">
                          {activeProblem.description}
                        </p>
                      </div>

                      {/* Examples */}
                      <div className="space-y-3">
                        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
                          Sample Examples
                        </h3>
                        {activeProblem.examples.map((ex, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-default)] font-mono text-xs space-y-1.5"
                          >
                            <p className="text-slate-300 font-sans font-semibold">Example {idx + 1}:</p>
                            <p className="text-slate-200">
                              <span className="text-slate-400">Input:</span> {ex.input}
                            </p>
                            <p className="text-slate-200">
                              <span className="text-slate-400">Output:</span> {ex.output}
                            </p>
                            {ex.explanation && (
                              <p className="text-slate-400 text-[11px] font-sans">
                                <span className="text-slate-300 font-semibold">Explanation:</span>{' '}
                                {ex.explanation}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>

                      {/* Constraints */}
                      {activeProblem.constraints.length > 0 && (
                        <div>
                          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 font-mono">
                            Constraints & Specifications:
                          </h3>
                          <ul className="list-disc list-inside space-y-1 text-xs text-slate-400 font-mono bg-slate-950/60 p-3 rounded-lg border border-slate-800">
                            {activeProblem.constraints.map((c, i) => (
                              <li key={i}>{c}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Collapsible Hints Section */}
                      <div className="space-y-2 pt-2 border-t border-slate-800/80">
                        <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400 font-mono">
                          <HelpCircle size={14} className="text-amber-400" />
                          <span>Algorithmic Hints ({problemHints.length})</span>
                        </div>

                        <div className="space-y-2">
                          {problemHints.map((hint, idx) => {
                            const isOpen = Boolean(expandedHints[idx])
                            return (
                              <div
                                key={idx}
                                className="rounded-lg border border-slate-800 bg-slate-900/50 overflow-hidden text-xs"
                              >
                                <button
                                  type="button"
                                  onClick={() => toggleHint(idx)}
                                  className="w-full px-3 py-2 text-left flex items-center justify-between text-slate-300 hover:text-white transition-colors"
                                >
                                  <span className="font-semibold text-slate-300">
                                    Hint {idx + 1}
                                  </span>
                                  {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                                </button>
                                {isOpen && (
                                  <div className="px-3 pb-3 pt-1 text-slate-400 leading-relaxed border-t border-slate-800/60 font-sans">
                                    {hint}
                                  </div>
                                )}
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* TAB 2: EDITORIAL */}
                  {activeTab === 'editorial' && (
                    <div className="space-y-4">
                      <h2 className="text-base font-bold text-slate-100">
                        Editorial Analysis — {activeProblem.title}
                      </h2>
                      {activeProblem.editorial ? (
                        <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                          <div className="p-3.5 rounded-lg bg-slate-900/80 border border-slate-800">
                            <p className="text-white font-semibold text-sm mb-1.5">
                              Approach: {activeProblem.editorial.approach}
                            </p>
                            <p className="text-slate-400 text-xs leading-relaxed">
                              {activeProblem.editorial.explanation}
                            </p>
                          </div>
                          <div className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono space-y-2 text-slate-300">
                            <p className="text-emerald-400 font-semibold font-sans">Complexity Breakdown:</p>
                            <p>• Time Complexity: {activeProblem.editorial.timeComplexity}</p>
                            <p>• Space Complexity: {activeProblem.editorial.spaceComplexity}</p>
                          </div>
                        </div>
                      ) : (
                        <p className="text-xs text-slate-400">
                          Editorial walkthrough highlights clean boundary checks and standard algorithmic patterns.
                        </p>
                      )}
                    </div>
                  )}

                  {/* TAB 3: SOLUTIONS */}
                  {activeTab === 'solutions' && (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h2 className="text-base font-bold text-slate-100">Optimal Reference Java Solution</h2>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="secondary"
                            size="sm"
                            onClick={() => copyToClipboard(activeProblem.solutionCode || activeProblem.starterCode, 'sol')}
                            leftIcon={copiedState === 'sol' ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                          >
                            {copiedState === 'sol' ? 'Copied' : 'Copy'}
                          </Button>
                          <Button
                            variant="primary"
                            size="sm"
                            onClick={handleLoadSolution}
                            leftIcon={<Download size={12} />}
                          >
                            Load into Editor
                          </Button>
                        </div>
                      </div>

                      <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-300 overflow-x-auto leading-relaxed">
                        <pre>
                          {activeProblem.solutionCode || activeProblem.starterCode}
                        </pre>
                      </div>
                    </div>
                  )}

                  {/* TAB 4: SUBMISSIONS */}
                  {activeTab === 'submissions' && (
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h2 className="text-base font-bold text-slate-100">Past Submissions</h2>
                        <span className="text-xs text-slate-500 font-mono">
                          {submissions.length} attempts recorded
                        </span>
                      </div>

                      <div className="space-y-2">
                        {submissions.map((sub) => (
                          <div
                            key={sub.id}
                            className="rounded-lg border border-slate-800 bg-slate-900/60 p-3 flex items-center justify-between text-xs"
                          >
                            <div className="flex items-center gap-2.5">
                              {sub.verdict === 'Accepted' ? (
                                <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                              ) : (
                                <XCircle size={16} className="text-rose-400 shrink-0" />
                              )}
                              <div>
                                <div className="flex items-center gap-2">
                                  <span
                                    className={`font-semibold font-mono ${
                                      sub.verdict === 'Accepted' ? 'text-emerald-400' : 'text-rose-400'
                                    }`}
                                  >
                                    {sub.verdict}
                                  </span>
                                  <span className="text-slate-500">•</span>
                                  <span className="text-slate-400 font-mono">{sub.language}</span>
                                  <span className="text-slate-500">•</span>
                                  <span className="text-slate-400 font-mono">
                                    {sub.passedCases}/{sub.totalCases} passed
                                  </span>
                                </div>
                                <span className="text-[11px] text-slate-500 font-sans">{sub.timestamp}</span>
                              </div>
                            </div>

                            <div className="text-right font-mono text-slate-400 text-xs">
                              <div>{sub.runtime}</div>
                              <div className="text-[11px] text-slate-500">{sub.memory}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </section>

          {/* ================= RIGHT PANEL: Monaco Code Editor (Top) + Testcases & Results (Bottom) ================= */}
          <section
            className={`flex flex-col rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] overflow-hidden ${
              mobileTab === 'desc' ? 'hidden lg:flex' : 'flex'
            }`}
            aria-label="Code Editor and Test Console"
          >
            {/* Editor Top Bar */}
            <div
              className={`h-10 px-4 border-b border-[var(--border-default)] bg-[var(--bg-surface)] flex items-center justify-between text-xs font-mono text-slate-400 shrink-0 ${
                mobileTab === 'console' ? 'hidden lg:flex' : 'flex'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-slate-200 font-semibold font-sans">Solution.java</span>
                <span className="px-1.5 py-0.2 rounded text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono">
                  Java 21
                </span>
                <span className="text-[11px] text-slate-500 font-sans hidden md:inline">
                  • Saved locally
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => copyToClipboard(code, 'editor')}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-sans"
                >
                  {copiedState === 'editor' ? (
                    <Check size={12} className="text-emerald-400" />
                  ) : (
                    <Copy size={12} />
                  )}
                  <span>{copiedState === 'editor' ? 'Copied' : 'Copy'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsSettingsOpen(true)}
                  className="text-slate-400 hover:text-white flex items-center gap-1 font-sans"
                  title="Editor Settings"
                >
                  <Sliders size={12} />
                  <span className="hidden sm:inline">{fontSize}px</span>
                </button>
              </div>
            </div>

            {/* Editable Monaco Editor */}
            <div
              className={`flex-1 w-full min-h-[220px] relative overflow-hidden bg-[#1e1e1e] ${
                mobileTab === 'console' ? 'hidden lg:block' : 'block'
              }`}
            >
              {editorSlot ?? (
                <Editor
                  height="100%"
                  width="100%"
                  language="java"
                  theme={theme === 'dark' ? 'vs-dark' : 'light'}
                  value={code}
                  onChange={handleEditorChange}
                  options={{
                    readOnly: false,
                    domReadOnly: false,
                    minimap: { enabled: minimap },
                    fontSize: fontSize,
                    fontFamily: "'JetBrains Mono', 'Fira Code', Menlo, Monaco, Consolas, monospace",
                    lineNumbers: 'on',
                    lineNumbersMinChars: 3,
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    tabSize: tabSize,
                    wordWrap: 'on',
                    cursorBlinking: 'smooth',
                    smoothScrolling: true,
                    folding: true,
                    renderLineHighlight: 'all',
                    contextmenu: true,
                    suggestOnTriggerCharacters: true,
                    quickSuggestions: true,
                    acceptSuggestionOnEnter: 'on',
                  }}
                  loading={
                    <div className="h-full w-full flex items-center justify-center bg-[#1e1e1e] text-slate-400 text-xs font-mono">
                      <span>Initializing Monaco Java 21 Editor...</span>
                    </div>
                  }
                />
              )}
            </div>

            {/* Test Cases and Results Panel (Adjustable/Collapsible Bottom Area) */}
            <div
              className={`border-t border-[var(--border-default)] bg-[var(--bg-surface)] p-3 text-xs flex flex-col justify-between shrink-0 transition-all duration-200 ${
                mobileTab === 'console'
                  ? 'flex-1'
                  : isConsoleCollapsed
                  ? 'h-10'
                  : 'h-64'
              }`}
            >
              <div className="flex-1 overflow-y-auto">
                {/* Console Bar & Tabs */}
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800/80">
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => {
                        setConsoleTab('testcases')
                        setIsConsoleCollapsed(false)
                      }}
                      className={`text-xs font-medium transition-colors ${
                        consoleTab === 'testcases'
                          ? 'text-blue-400 font-semibold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <span>Test Cases</span>
                    </button>
                    <span className="text-slate-700">|</span>
                    <button
                      type="button"
                      onClick={() => {
                        setConsoleTab('custom')
                        setIsConsoleCollapsed(false)
                      }}
                      className={`text-xs font-medium transition-colors ${
                        consoleTab === 'custom'
                          ? 'text-blue-400 font-semibold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <span>Custom Input</span>
                    </button>
                    <span className="text-slate-700">|</span>
                    <button
                      type="button"
                      onClick={() => {
                        setConsoleTab('runresults')
                        setIsConsoleCollapsed(false)
                      }}
                      className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${
                        consoleTab === 'runresults'
                          ? 'text-blue-400 font-semibold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <span>Run Results</span>
                      {runResult.status === 'completed' && (
                        <span
                          className={`w-2 h-2 rounded-full ${
                            runResult.verdict === 'Accepted' ? 'bg-emerald-400' : 'bg-rose-400'
                          }`}
                        />
                      )}
                    </button>
                    <span className="text-slate-700">|</span>
                    <button
                      type="button"
                      onClick={() => {
                        setConsoleTab('submitresults')
                        setIsConsoleCollapsed(false)
                      }}
                      className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${
                        consoleTab === 'submitresults'
                          ? 'text-blue-400 font-semibold'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <span>Submission Results</span>
                      {submitResult.status === 'completed' && (
                        <span
                          className={`w-2 h-2 rounded-full ${
                            submitResult.verdict === 'Accepted' ? 'bg-emerald-400' : 'bg-rose-400'
                          }`}
                        />
                      )}
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono bg-amber-500/10 text-amber-300 border border-amber-500/20">
                      ⚡ Demo Evaluation
                    </span>
                    <button
                      type="button"
                      onClick={() => setIsConsoleCollapsed(!isConsoleCollapsed)}
                      className="text-slate-400 hover:text-white p-1"
                      title={isConsoleCollapsed ? 'Expand console' : 'Collapse console'}
                    >
                      {isConsoleCollapsed ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                  </div>
                </div>

                {/* Console Body Area */}
                {!isConsoleCollapsed && (
                  <div>
                    {consoleSlot ?? (
                      <div>
                        {/* TAB 1: SAMPLE TEST CASES */}
                        {consoleTab === 'testcases' && (
                          <div className="space-y-2.5">
                            <div className="flex items-center gap-2">
                              {testCases.map((tc) => (
                                <button
                                  key={tc.id}
                                  type="button"
                                  onClick={() => setSelectedCase(tc.id)}
                                  className={`px-2.5 py-1 rounded-md font-mono text-xs transition-colors ${
                                    selectedCase === tc.id
                                      ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30 font-semibold'
                                      : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                                  }`}
                                >
                                  Case {tc.id}
                                </button>
                              ))}
                            </div>

                            <div className="rounded-lg bg-slate-950/70 border border-slate-800/80 p-3 font-mono text-xs space-y-1.5">
                              <div className="flex items-start gap-2">
                                <span className="text-slate-400 shrink-0">Input:</span>
                                <span className="text-slate-200 break-all">{activeCaseData.input}</span>
                              </div>
                              <div className="flex items-start gap-2">
                                <span className="text-slate-400 shrink-0">Expected:</span>
                                <span className="text-emerald-400 font-semibold break-all">
                                  {activeCaseData.expected}
                                </span>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* TAB 2: CUSTOM INPUT */}
                        {consoleTab === 'custom' && (
                          <div className="space-y-2">
                            <textarea
                              rows={3}
                              value={customInputText}
                              onChange={(e) => setCustomInputText(e.target.value)}
                              placeholder={`Enter custom test inputs for ${activeProblem.title} (e.g. nums = [1, 2, 3], target = 4)...`}
                              className="w-full bg-slate-950 border border-slate-800 rounded p-2 font-mono text-xs text-slate-200 focus:outline-none focus:border-blue-500 resize-none"
                            />
                            <div className="flex items-center justify-between text-[11px] text-slate-500">
                              <span>Click "Run Code" to test against this custom input.</span>
                              {customInputText && (
                                <button
                                  type="button"
                                  onClick={() => setCustomInputText('')}
                                  className="text-slate-400 hover:text-rose-400"
                                >
                                  Clear Input
                                </button>
                              )}
                            </div>
                          </div>
                        )}

                        {/* TAB 3: RUN RESULTS */}
                        {consoleTab === 'runresults' && (
                          <div>
                            {runResult.status === 'idle' ? (
                              <div className="text-slate-500 text-xs font-mono py-4 text-center">
                                Press "Run Code" above to execute your solution against visible test cases.
                              </div>
                            ) : runResult.verdict === 'Compilation Error' ? (
                              <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-900 text-rose-300 font-mono text-xs space-y-1.5">
                                <div className="flex items-center gap-2 text-rose-400 font-semibold font-sans">
                                  <AlertTriangle size={14} />
                                  Compilation Error
                                </div>
                                <pre className="text-[11px] leading-relaxed whitespace-pre-wrap">
                                  {runResult.compileError}
                                </pre>
                              </div>
                            ) : (
                              <div className="space-y-2.5">
                                <div className="flex items-center justify-between bg-slate-950 p-2.5 rounded border border-slate-800 font-mono text-xs">
                                  <div className="flex items-center gap-2">
                                    <span
                                      className={`font-semibold ${
                                        runResult.verdict === 'Accepted'
                                          ? 'text-emerald-400'
                                          : 'text-rose-400'
                                      }`}
                                    >
                                      {runResult.verdict}
                                    </span>
                                    <span className="text-slate-600">•</span>
                                    <span className="text-slate-400 text-[11px]">
                                      Sample Test Cases
                                    </span>
                                  </div>
                                  <span className="text-slate-400 text-[11px]">
                                    Runtime: {runResult.runtimeMs} ms • Memory: {runResult.memoryMb} MB
                                  </span>
                                </div>

                                <div className="space-y-1.5 max-h-28 overflow-y-auto">
                                  {runResult.caseResults.map((cr) => (
                                    <div
                                      key={cr.caseId}
                                      className="p-2 rounded bg-slate-900/60 border border-slate-800/80 font-mono text-[11px] flex items-center justify-between"
                                    >
                                      <div className="flex items-center gap-2 truncate">
                                        <span
                                          className={`w-2 h-2 rounded-full shrink-0 ${
                                            cr.passed ? 'bg-emerald-400' : 'bg-rose-400'
                                          }`}
                                        />
                                        <span className="text-slate-300 font-semibold shrink-0">
                                          Case {cr.caseId}:
                                        </span>
                                        <span className="text-slate-400 truncate">{cr.input}</span>
                                      </div>
                                      <div className="flex items-center gap-3 shrink-0">
                                        <span className="text-slate-400">Exp: {cr.expected}</span>
                                        <span className={cr.passed ? 'text-emerald-400' : 'text-rose-400'}>
                                          Got: {cr.actual}
                                        </span>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )}

                        {/* TAB 4: SUBMISSION RESULTS */}
                        {consoleTab === 'submitresults' && (
                          <div>
                            {submitResult.status === 'idle' ? (
                              <div className="text-slate-500 text-xs font-mono py-4 text-center">
                                Press "Submit Solution" to evaluate against the complete test battery.
                              </div>
                            ) : submitResult.verdict === 'Compilation Error' ? (
                              <div className="p-3 rounded-lg bg-rose-950/40 border border-rose-900 text-rose-300 font-mono text-xs space-y-1.5">
                                <div className="flex items-center gap-2 text-rose-400 font-semibold font-sans">
                                  <AlertTriangle size={14} />
                                  Compilation Error
                                </div>
                                <pre className="text-[11px] leading-relaxed whitespace-pre-wrap">
                                  {submitResult.compileError}
                                </pre>
                              </div>
                            ) : (
                              <div className="space-y-2.5">
                                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                      {submitResult.verdict === 'Accepted' ? (
                                        <CheckCircle2 size={18} className="text-emerald-400" />
                                      ) : (
                                        <XCircle size={18} className="text-rose-400" />
                                      )}
                                      <span
                                        className={`text-sm font-bold font-mono ${
                                          submitResult.verdict === 'Accepted'
                                            ? 'text-emerald-400'
                                            : 'text-rose-400'
                                        }`}
                                      >
                                        {submitResult.verdict}
                                      </span>
                                    </div>
                                    <span className="text-xs font-mono text-slate-300">
                                      {submitResult.passedCases} / {submitResult.totalCases} Test Cases Passed
                                    </span>
                                  </div>

                                  {submitResult.verdict === 'Accepted' && (
                                    <div className="grid grid-cols-2 gap-2 pt-1 border-t border-slate-800 text-xs font-mono text-slate-400">
                                      <div>
                                        Runtime: <strong className="text-white">{submitResult.runtimeMs} ms</strong>{' '}
                                        <span className="text-emerald-400">(Beats 97.4%)</span>
                                      </div>
                                      <div>
                                        Memory: <strong className="text-white">{submitResult.memoryMb} MB</strong>{' '}
                                        <span className="text-emerald-400">(Beats 92.1%)</span>
                                      </div>
                                    </div>
                                  )}

                                  <div className="text-[11px] text-slate-500 font-sans pt-1 flex items-center gap-1.5">
                                    <Info size={12} className="text-blue-400 shrink-0" />
                                    <span>
                                      Evaluation performed in frontend demonstration mode. Production isolated JVM sandbox connects in Screen 10.
                                    </span>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      )}

      {/* 4. MODAL: WORKSPACE & EDITOR SETTINGS */}
      <Modal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        title="Workspace & Code Editor Settings"
      >
        <div className="space-y-4 text-xs text-slate-300 py-2">
          {/* Font Size */}
          <div className="flex items-center justify-between">
            <span className="font-semibold text-white">Font Size</span>
            <div className="flex items-center gap-1">
              {[12, 13, 14, 16].map((sz) => (
                <button
                  key={sz}
                  type="button"
                  onClick={() => setFontSize(sz)}
                  className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                    fontSize === sz ? 'bg-blue-600 text-white font-bold' : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {sz}px
                </button>
              ))}
            </div>
          </div>

          {/* Tab Spacing */}
          <div className="flex items-center justify-between">
            <span className="font-semibold text-white">Tab Indentation</span>
            <div className="flex items-center gap-1">
              {[2, 4].map((ts) => (
                <button
                  key={ts}
                  type="button"
                  onClick={() => setTabSize(ts)}
                  className={`px-2.5 py-1 rounded text-xs font-mono transition-colors ${
                    tabSize === ts ? 'bg-blue-600 text-white font-bold' : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {ts} spaces
                </button>
              ))}
            </div>
          </div>

          {/* Minimap */}
          <div className="flex items-center justify-between">
            <span className="font-semibold text-white">Editor Minimap</span>
            <button
              type="button"
              onClick={() => setMinimap(!minimap)}
              className={`px-3 py-1 rounded text-xs font-semibold ${
                minimap ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {minimap ? 'Enabled' : 'Disabled'}
            </button>
          </div>

          {/* Reset Code */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-800">
            <div>
              <div className="font-semibold text-white">Reset Problem Code</div>
              <div className="text-[11px] text-slate-500">Restore original starter template</div>
            </div>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                handleResetCode()
                setIsSettingsOpen(false)
              }}
            >
              Reset Code
            </Button>
          </div>

          {/* Reset Timer */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-800">
            <div>
              <div className="font-semibold text-white">Reset Study Timer</div>
              <div className="text-[11px] text-slate-500">Reset timer to 00:00:00</div>
            </div>
            <Button
              variant="secondary"
              size="sm"
              onClick={() => {
                setTimerSeconds(0)
                setIsSettingsOpen(false)
              }}
            >
              Reset Timer
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
