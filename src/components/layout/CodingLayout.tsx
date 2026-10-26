import { type ReactNode, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import Editor from '@monaco-editor/react'
import {
  ArrowLeft,
  Play,
  CheckCircle,
  Timer,
  RotateCcw,
  Settings2,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  BookOpen,
  Code2,
  Clock,
  Sparkles,
} from 'lucide-react'
import Badge from '@/components/common/Badge'
import Button from '@/components/common/Button'
import IconButton from '@/components/common/IconButton'
import Tooltip from '@/components/common/Tooltip'
import ThemeToggle from '@/components/common/ThemeToggle'

export interface CodingLayoutProps {
  problemTitle?: string
  problemDifficulty?: 'easy' | 'medium' | 'hard'
  descriptionSlot?: ReactNode
  editorSlot?: ReactNode
  consoleSlot?: ReactNode
  children?: ReactNode
}

const JAVA_STARTER_CODE = `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your Java solution here...
        return new int[]{};
    }
}`

export default function CodingLayout({
  problemTitle = '1. Two Sum in Java',
  problemDifficulty = 'easy',
  descriptionSlot,
  editorSlot,
  consoleSlot,
  children,
}: CodingLayoutProps) {
  const [isRunning, setIsRunning] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [runResult, setRunResult] = useState<{ status: 'idle' | 'accepted' | 'submitted'; message?: string }>({ status: 'idle' })

  // Left pane tabs
  const [activeTab, setActiveTab] = useState<'description' | 'editorial' | 'solutions' | 'submissions'>('description')

  // Code editor state
  const [code, setCode] = useState<string>(JAVA_STARTER_CODE)

  // Testcase selection
  const [selectedCase, setSelectedCase] = useState<number>(1)

  const handleEditorChange = useCallback((value: string | undefined) => {
    if (value !== undefined) {
      setCode(value)
    }
  }, [])

  const handleResetCode = () => {
    setCode(JAVA_STARTER_CODE)
  }

  const handleRun = () => {
    setIsRunning(true)
    setRunResult({ status: 'idle' })
    setTimeout(() => {
      setIsRunning(false)
      setRunResult({
        status: 'accepted',
        message: 'Runtime: 0 ms • Memory: 42.1 MB (Testcases passed: 3/3)',
      })
    }, 600)
  }

  const handleSub = () => {
    setIsSubmitting(true)
    setRunResult({ status: 'idle' })
    setTimeout(() => {
      setIsSubmitting(false)
      setRunResult({
        status: 'submitted',
        message: 'Accepted • Runtime: 1 ms (Beats 98.4%) • Memory: 42.3 MB',
      })
    }, 900)
  }

  const testCases = [
    { id: 1, nums: '[2, 7, 11, 15]', target: '9', expected: '[0, 1]' },
    { id: 2, nums: '[3, 2, 4]', target: '6', expected: '[1, 2]' },
    { id: 3, nums: '[3, 3]', target: '6', expected: '[0, 1]' },
  ]

  const activeCaseData = testCases.find((c) => c.id === selectedCase) || testCases[0]

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[var(--bg-base)] text-[var(--fg-primary)]">
      {/* Top Workspace Bar */}
      <header className="h-13 border-b border-[var(--border-default)] bg-[var(--bg-surface)] px-3 sm:px-4 flex items-center justify-between gap-2 shrink-0 z-20">
        {/* Left: Navigation and Problem metadata */}
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
            <Tooltip content="Previous problem" placement="bottom">
              <button
                type="button"
                className="p-1 rounded hover:text-white hover:bg-[var(--bg-elevated)]"
                aria-label="Previous problem"
              >
                <ChevronLeft size={16} />
              </button>
            </Tooltip>
            <Tooltip content="Next problem" placement="bottom">
              <button
                type="button"
                className="p-1 rounded hover:text-white hover:bg-[var(--bg-elevated)]"
                aria-label="Next problem"
              >
                <ChevronRight size={16} />
              </button>
            </Tooltip>
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
            <span className="hidden sm:inline">Run</span>
          </Button>

          <Button
            variant="primary"
            size="sm"
            onClick={handleSub}
            isLoading={isSubmitting}
            leftIcon={<CheckCircle size={13} />}
          >
            Submit
          </Button>
        </div>

        {/* Right: Workspace tools & Theme */}
        <div className="flex items-center gap-1 sm:gap-2 shrink-0">
          <div className="hidden xl:flex items-center gap-1 px-2 py-0.5 rounded bg-[var(--bg-elevated)] border border-[var(--border-default)] text-xs text-slate-400 font-mono">
            <Timer size={13} className="text-blue-400" />
            <span>00:14:32</span>
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
            />
          </Tooltip>

          <ThemeToggle size="sm" />

          <Tooltip content="Full screen" placement="bottom">
            <IconButton
              icon={<Maximize2 size={14} />}
              label="Toggle fullscreen"
              variant="ghost"
              size="sm"
              className="hidden sm:inline-flex"
            />
          </Tooltip>
        </div>
      </header>

      {/* Main Dual-Pane Platform Layout */}
      {children ? (
        <div className="flex-1 overflow-hidden">{children}</div>
      ) : (
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-2 p-2 overflow-hidden bg-[var(--bg-base)]">
          {/* Left Pane: Problem Description and Tabs */}
          <section
            className="flex flex-col rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] overflow-hidden"
            aria-label="Problem Description"
          >
            {/* Tab Header */}
            <div className="h-10 px-4 border-b border-[var(--border-default)] bg-[var(--bg-surface)] flex items-center justify-between text-xs font-medium text-slate-300">
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
                  <span>Submissions</span>
                </button>
              </div>
            </div>

            {/* Tab Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 text-sm text-slate-300">
              {descriptionSlot ?? (
                <>
                  {activeTab === 'description' && (
                    <div className="space-y-4">
                      <h2 className="text-lg font-bold text-slate-100">{problemTitle}</h2>
                      <p className="text-slate-300 leading-relaxed text-sm">
                        Given an array of integers{' '}
                        <code className="px-1.5 py-0.5 rounded bg-slate-800 text-blue-300 font-mono text-xs">
                          nums
                        </code>{' '}
                        and an integer{' '}
                        <code className="px-1.5 py-0.5 rounded bg-slate-800 text-blue-300 font-mono text-xs">
                          target
                        </code>
                        , return indices of the two numbers such that they add up to{' '}
                        <code className="px-1.5 py-0.5 rounded bg-slate-800 text-blue-300 font-mono text-xs">
                          target
                        </code>
                        .
                      </p>
                      <p className="text-slate-400 text-xs leading-relaxed">
                        You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the same element twice. You can return the answer in any order.
                      </p>

                      <div className="p-3.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-default)] font-mono text-xs space-y-1.5">
                        <p className="text-slate-300 font-sans font-semibold">Example 1:</p>
                        <p className="text-slate-200">
                          <span className="text-slate-400">Input:</span> nums = [2,7,11,15], target = 9
                        </p>
                        <p className="text-slate-200">
                          <span className="text-slate-400">Output:</span> [0,1]
                        </p>
                        <p className="text-slate-400 text-[11px] font-sans">
                          Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
                        </p>
                      </div>

                      <div className="p-3.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-default)] font-mono text-xs space-y-1.5">
                        <p className="text-slate-300 font-sans font-semibold">Example 2:</p>
                        <p className="text-slate-200">
                          <span className="text-slate-400">Input:</span> nums = [3,2,4], target = 6
                        </p>
                        <p className="text-slate-200">
                          <span className="text-slate-400">Output:</span> [1,2]
                        </p>
                      </div>

                      <div className="pt-2">
                        <h3 className="text-xs font-semibold text-slate-200 uppercase tracking-wider mb-2 font-mono">
                          Constraints:
                        </h3>
                        <ul className="list-disc list-inside space-y-1 text-xs text-slate-400 font-mono">
                          <li>2 &lt;= nums.length &lt;= 10<sup>4</sup></li>
                          <li>-10<sup>9</sup> &lt;= nums[i] &lt;= 10<sup>9</sup></li>
                          <li>-10<sup>9</sup> &lt;= target &lt;= 10<sup>9</sup></li>
                          <li>Only one valid answer exists.</li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {activeTab === 'editorial' && (
                    <div className="space-y-4">
                      <h2 className="text-base font-bold text-slate-100">Editorial — Two Sum (Java)</h2>
                      <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <p>
                          <strong className="text-white">Approach 1: Hash Map (One-Pass)</strong>
                        </p>
                        <p className="text-slate-400 text-xs">
                          While iterating through the array, we check if the complement (<code>target - nums[i]</code>) exists in our hash map. If it exists, we have found a solution and return the pair of indices. Otherwise, we insert the current element and its index into the map.
                        </p>
                        <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono space-y-1 text-slate-300">
                          <p className="text-emerald-400 font-semibold">Complexity Analysis:</p>
                          <p>• Time Complexity: O(n) — single traversal through array.</p>
                          <p>• Space Complexity: O(n) — stored in Java HashMap.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'solutions' && (
                    <div className="space-y-4">
                      <h2 className="text-base font-bold text-slate-100">Optimal Java Solution</h2>
                      <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
                        <pre className="text-xs leading-relaxed">
{`import java.util.HashMap;
import java.util.Map;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            map.put(nums[i], i);
        }
        return new int[] {};
    }
}`}
                        </pre>
                      </div>
                    </div>
                  )}

                  {activeTab === 'submissions' && (
                    <div className="space-y-3">
                      <h2 className="text-base font-bold text-slate-100">Recent Submissions</h2>
                      <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-3 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-emerald-400 font-semibold font-mono">Accepted</span>
                          <span className="text-slate-500">•</span>
                          <span className="text-slate-400 font-mono">Java 21</span>
                        </div>
                        <span className="text-slate-400 font-mono">1 ms • 42.4 MB</span>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </section>

          {/* Right Pane: Code Editor & Console Workspace */}
          <section
            className="flex flex-col rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] overflow-hidden"
            aria-label="Code Editor and Test Cases"
          >
            {/* Editor File Bar */}
            <div className="h-10 px-4 border-b border-[var(--border-default)] bg-[var(--bg-surface)] flex items-center justify-between text-xs font-mono text-slate-400 shrink-0">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-slate-200 font-semibold font-sans">Solution.java</span>
                <span className="px-1.5 py-0.2 rounded text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono">
                  Java 21
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-sans hidden sm:inline">
                Monaco Editor • Editable
              </span>
            </div>

            {/* Editable Monaco Code Editor Area */}
            <div className="flex-1 w-full min-h-[260px] relative overflow-hidden bg-[#1e1e1e]">
              {editorSlot ?? (
                <Editor
                  height="100%"
                  width="100%"
                  language="java"
                  theme="vs-dark"
                  value={code}
                  onChange={handleEditorChange}
                  options={{
                    readOnly: false,
                    domReadOnly: false,
                    minimap: { enabled: false },
                    fontSize: 13,
                    fontFamily: "'JetBrains Mono', 'Fira Code', Menlo, Monaco, Consolas, monospace",
                    lineNumbers: 'on',
                    lineNumbersMinChars: 3,
                    scrollBeyondLastLine: false,
                    automaticLayout: true,
                    tabSize: 4,
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
                      <span>Initializing Java Editor...</span>
                    </div>
                  }
                />
              )}
            </div>

            {/* Bottom Testcase & Execution Console */}
            <div className="h-44 border-t border-[var(--border-default)] bg-[var(--bg-surface)] p-3 text-xs flex flex-col justify-between shrink-0">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-300 font-semibold font-sans">Testcase Console</span>
                  {runResult.status !== 'idle' && (
                    <span className="text-xs font-mono font-medium text-emerald-400">
                      ✓ {runResult.message}
                    </span>
                  )}
                </div>

                {consoleSlot ?? (
                  <div>
                    {/* Case selector pills */}
                    <div className="flex items-center gap-2 mb-2">
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

                    {/* Active case parameters */}
                    <div className="rounded-lg bg-slate-950/70 border border-slate-800/80 p-2.5 font-mono text-xs space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400">nums =</span>
                        <span className="text-slate-200">{activeCaseData.nums}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400">target =</span>
                        <span className="text-slate-200">{activeCaseData.target}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  )
}
