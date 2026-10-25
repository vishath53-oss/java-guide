import { type ReactNode, useState } from 'react'
import { Link } from 'react-router-dom'
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

  const handleRun = () => {
    setIsRunning(true)
    setTimeout(() => setIsRunning(false), 800)
  }

  const handleSub = () => {
    setIsSubmitting(true)
    setTimeout(() => setIsSubmitting(false), 1200)
  }

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-[var(--bg-base)] text-[var(--fg-primary)] select-none">
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
          {/* Left Pane: Problem Description */}
          <section
            className="flex flex-col rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] overflow-hidden"
            aria-label="Problem Description"
          >
            <div className="h-10 px-4 border-b border-[var(--border-default)] bg-[var(--bg-surface)] flex items-center justify-between text-xs font-medium text-slate-300">
              <div className="flex items-center gap-2">
                <span className="text-blue-400 font-semibold">Description</span>
                <span className="text-slate-600">|</span>
                <span className="text-slate-500 hover:text-slate-300 cursor-pointer">Editorial</span>
                <span className="text-slate-600">|</span>
                <span className="text-slate-500 hover:text-slate-300 cursor-pointer">Solutions</span>
                <span className="text-slate-600">|</span>
                <span className="text-slate-500 hover:text-slate-300 cursor-pointer">Submissions</span>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 text-sm text-slate-300">
              {descriptionSlot ?? (
                <div className="space-y-4">
                  <h2 className="text-lg font-bold text-slate-100">{problemTitle}</h2>
                  <p className="text-slate-300 leading-relaxed">
                    Given an array of integers <code className="px-1.5 py-0.5 rounded bg-slate-800 text-blue-300 font-mono text-xs">nums</code> and an integer <code className="px-1.5 py-0.5 rounded bg-slate-800 text-blue-300 font-mono text-xs">target</code>, return indices of the two numbers such that they add up to <code className="px-1.5 py-0.5 rounded bg-slate-800 text-blue-300 font-mono text-xs">target</code>.
                  </p>
                  <div className="p-3.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-default)] font-mono text-xs space-y-1">
                    <p className="text-slate-400 font-sans font-semibold">Example 1:</p>
                    <p className="text-slate-200"><span className="text-slate-500">Input:</span> nums = [2,7,11,15], target = 9</p>
                    <p className="text-slate-200"><span className="text-slate-500">Output:</span> [0,1]</p>
                    <p className="text-slate-400 text-[11px] font-sans">Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].</p>
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* Right Pane: Code Editor & Console Workspace */}
          <section
            className="flex flex-col rounded-xl border border-[var(--border-default)] bg-[var(--bg-surface)] overflow-hidden"
            aria-label="Code Editor and Test Cases"
          >
            <div className="h-10 px-4 border-b border-[var(--border-default)] bg-[var(--bg-surface)] flex items-center justify-between text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-slate-200 font-semibold font-sans">Solution.java</span>
                <span className="px-1.5 py-0.2 rounded text-[10px] bg-blue-500/10 text-blue-400 border border-blue-500/20 font-mono">
                  Java 21
                </span>
              </div>
            </div>

            <div className="flex-1 p-4 font-mono text-xs bg-[#0b0e1a] text-slate-300 overflow-y-auto">
              {editorSlot ?? (
                <div className="space-y-1 leading-relaxed text-slate-400">
                  <span className="text-purple-400">class</span> <span className="text-yellow-300">Solution</span> {'{'}
                  <div className="pl-4">
                    <span className="text-purple-400">public int</span>[] <span className="text-blue-400">twoSum</span>(<span className="text-purple-400">int</span>[] nums, <span className="text-purple-400">int</span> target) {'{'}
                    <div className="pl-4 text-slate-500 italic">
                      // Write your Java solution here...
                    </div>
                    <div className="pl-4 text-purple-400">
                      return new int[]&#123;&#125;;
                    </div>
                    {'}'}
                  </div>
                  {'}'}
                </div>
              )}
            </div>

            {/* Bottom Testcase Panel */}
            <div className="h-32 border-t border-[var(--border-default)] bg-[var(--bg-surface)] p-3 text-xs">
              <div className="text-slate-400 font-semibold mb-2">Testcase Console</div>
              {consoleSlot ?? (
                <div className="flex items-center gap-2 text-slate-500">
                  <span className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300">Case 1</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-500">Case 2</span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-500">Case 3</span>
                </div>
              )}
            </div>
          </section>
        </div>
      )}
    </div>
  )
}
