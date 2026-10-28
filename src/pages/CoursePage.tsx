import { useState } from 'react'
import {
  BookOpen,
  CheckCircle2,
  Clock,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Code2,
  Target,
  Sparkles,
  Layers,
  HelpCircle,
  AlertTriangle,
} from 'lucide-react'
import { Card, Badge, SectionHeading, Button } from '@/components/common'
import { Link } from 'react-router-dom'
import { COURSE_CURRICULUM, type MonthCurriculum } from '@/data/courseData'
import { PROBLEMS_DATA } from '@/data/problemsData'
import GeneratedLessonViewer from '@/components/course/GeneratedLessonViewer'
import { getSavedLesson, requestAILesson } from '@/services/lessonService'
import type { GeneratedLesson } from '@/types/lesson'

export default function CoursePage() {
  const [selectedMonth, setSelectedMonth] = useState<number>(1)
  const [expandedWeek, setExpandedWeek] = useState<number | null>(1)
  const [expandedDay, setExpandedDay] = useState<number | null>(1)

  // AI Lesson Generation & Persistence State
  const [lessonsState, setLessonsState] = useState<Record<string, GeneratedLesson>>({})
  const [generatingDay, setGeneratingDay] = useState<number | null>(null)
  const [dayErrors, setDayErrors] = useState<Record<number, string>>({})
  const [expandedAILessons, setExpandedAILessons] = useState<Record<number, boolean>>({})

  const handleGenerateOrToggleAILesson = async (
    dayNumber: number,
    dayTitle: string,
    dayTopic: string,
    conceptExplanation: string,
    forceRegenerate: boolean = false
  ) => {
    const lessonId = `m${selectedMonth}-w${expandedWeek || 1}-d${dayNumber}`

    // If already open and not forcing regenerate, toggle collapse
    if (!forceRegenerate && expandedAILessons[dayNumber]) {
      setExpandedAILessons((prev) => ({ ...prev, [dayNumber]: false }))
      return
    }

    // Check if cached locally first
    const cached = getSavedLesson(lessonId)
    if (cached && !forceRegenerate) {
      setLessonsState((prev) => ({ ...prev, [lessonId]: cached }))
      setExpandedAILessons((prev) => ({ ...prev, [dayNumber]: true }))
      return
    }

    // Call backend API
    setGeneratingDay(dayNumber)
    setDayErrors((prev) => {
      const copy = { ...prev }
      delete copy[dayNumber]
      return copy
    })

    try {
      const result = await requestAILesson({
        monthNumber: selectedMonth,
        weekNumber: expandedWeek || 1,
        dayNumber: dayNumber,
        title: dayTitle,
        topic: dayTopic,
        existingDescription: conceptExplanation,
      })

      setLessonsState((prev) => ({ ...prev, [lessonId]: result.lesson }))
      setExpandedAILessons((prev) => ({ ...prev, [dayNumber]: true }))
    } catch (err: any) {
      setDayErrors((prev) => ({
        ...prev,
        [dayNumber]: err.message || 'Failed to generate AI lesson',
      }))
    } finally {
      setGeneratingDay(null)
    }
  }

  const currentMonth: MonthCurriculum =
    COURSE_CURRICULUM.find((m) => m.monthNumber === selectedMonth) || COURSE_CURRICULUM[0]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="mb-10">
        <SectionHeading
          as="h1"
          title="Six-Month Java Professional Roadmap"
          badge={<Badge variant="violet">Curriculum & Workbook</Badge>}
          description="A complete, 24-week, 168-day structured curriculum and 400-problem workbook covering Java fundamentals, OOP, collections, concurrency, JDBC, DSA, and Spring Boot."
          action={
            <div className="flex gap-2">
              <Link to="/timeline">
                <Button variant="secondary" size="sm" rightIcon={<ArrowRight size={14} />}>
                  Timeline View
                </Button>
              </Link>
              <Link to="/problems">
                <Button variant="primary" size="sm" rightIcon={<Code2 size={14} />}>
                  Practice Problems
                </Button>
              </Link>
            </div>
          }
        />
      </div>

      {/* Curriculum Summary Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Total Duration', value: '6 Months', icon: <Clock size={18} className="text-blue-400" /> },
          { label: 'Syllabus Depth', value: '24 Weeks / 168 Days', icon: <CheckCircle2 size={18} className="text-emerald-400" /> },
          { label: 'Practice Workbook', value: '400 Problems', icon: <BookOpen size={18} className="text-violet-400" /> },
          { label: 'Capstone Projects', value: '6 Real Systems', icon: <Layers size={18} className="text-amber-400" /> },
        ].map((s) => (
          <Card key={s.label} className="p-4 flex items-center gap-3.5">
            <div className="p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-default)]">
              {s.icon}
            </div>
            <div>
              <div className="text-base font-bold text-slate-100 font-mono">{s.value}</div>
              <div className="text-xs text-slate-400">{s.label}</div>
            </div>
          </Card>
        ))}
      </div>

      {/* Month Selection Tabs */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
            Select Training Month
          </h2>
          <span className="text-xs text-slate-500 font-mono">
            {COURSE_CURRICULUM.length} Modules · 65–70 problems/mo
          </span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {COURSE_CURRICULUM.map((m) => {
            const isSelected = m.monthNumber === selectedMonth
            return (
              <button
                key={m.monthNumber}
                onClick={() => {
                  setSelectedMonth(m.monthNumber)
                  setExpandedWeek(m.weeks[0]?.weekNumber || null)
                  setExpandedDay(m.weeks[0]?.days[0]?.dayNumber || null)
                }}
                className={`p-3 rounded-xl border text-left transition-all ${
                  isSelected
                    ? 'bg-blue-600/15 border-blue-500 text-white shadow-lg shadow-blue-950/40 ring-1 ring-blue-500/50'
                    : 'bg-[var(--bg-elevated)]/60 border-[var(--border-default)] hover:border-slate-700 text-slate-300 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className={`text-[11px] font-mono font-bold ${isSelected ? 'text-blue-400' : 'text-slate-400'}`}>
                    MONTH {m.monthNumber}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">{m.daysRange.split(' ')[1] || m.daysRange}</span>
                </div>
                <div className="font-semibold text-xs truncate">{m.title}</div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Current Month Overview Card */}
      <Card className="p-6 mb-8 border border-blue-900/40 bg-gradient-to-br from-slate-900 via-slate-900/90 to-blue-950/20">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="blue" className="font-mono">
                Month {currentMonth.monthNumber} ({currentMonth.daysRange})
              </Badge>
              <Badge variant="outline">{currentMonth.problemCountTarget}</Badge>
              <Badge variant="default">4 Weeks · 28 Daily Lessons</Badge>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">{currentMonth.title}</h2>
              <p className="text-sm text-slate-300 mt-1.5 leading-relaxed">{currentMonth.tagline}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                <div className="font-semibold text-emerald-400 flex items-center gap-1.5 mb-1">
                  <Target size={14} /> Expected Outcome
                </div>
                <p className="text-slate-300">{currentMonth.expectedOutcome}</p>
              </div>
              <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
                <div className="font-semibold text-amber-400 flex items-center gap-1.5 mb-1">
                  <Sparkles size={14} /> Month Milestone Deliverable
                </div>
                <p className="text-slate-300">{currentMonth.deliverable}</p>
              </div>
            </div>
          </div>

          <div className="shrink-0 flex flex-col gap-2.5 sm:w-56">
            <Link to="/problems" className="w-full">
              <Button variant="primary" size="md" className="w-full justify-center">
                Solve Month {currentMonth.monthNumber} Problems
              </Button>
            </Link>
            <Link to="/timeline" className="w-full">
              <Button variant="secondary" size="md" className="w-full justify-center">
                View in Schedule
              </Button>
            </Link>
          </div>
        </div>
      </Card>

      {/* Week by Week Curriculum Accordion */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Layers size={18} className="text-blue-400" />
            Weekly Breakdown & Daily Problem Sets
          </h3>
          <span className="text-xs text-slate-500">
            Click any week to inspect daily concepts & workbook questions
          </span>
        </div>

        {currentMonth.weeks.map((week) => {
          const isWeekOpen = expandedWeek === week.weekNumber

          return (
            <Card
              key={week.weekNumber}
              className={`overflow-hidden transition-all border ${
                isWeekOpen ? 'border-blue-700/60 shadow-lg shadow-blue-950/30' : 'border-slate-800/80 hover:border-slate-700'
              }`}
            >
              {/* Week Header Toggle */}
              <button
                onClick={() => setExpandedWeek(isWeekOpen ? null : week.weekNumber)}
                className="w-full p-4 sm:p-5 flex items-center justify-between text-left bg-[var(--bg-elevated)]/40 hover:bg-[var(--bg-elevated)] transition-colors"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-blue-950/60 border border-blue-800/50 flex flex-col items-center justify-center shrink-0">
                    <span className="text-[10px] text-blue-400 font-mono uppercase">Wk</span>
                    <span className="text-sm font-bold text-white font-mono leading-none">{week.weekNumber}</span>
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-bold text-slate-100">{week.title}</span>
                      <Badge variant="outline" className="text-[10px]">
                        {week.days.length} Days
                      </Badge>
                    </div>
                    <p className="text-xs text-slate-400 mt-0.5 truncate">{week.focus}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0 text-slate-400">
                  <span className="text-xs font-mono hidden sm:inline">
                    {isWeekOpen ? 'Collapse' : 'Expand'}
                  </span>
                  {isWeekOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                </div>
              </button>

              {/* Week Content: Days */}
              {isWeekOpen && (
                <div className="p-4 sm:p-5 border-t border-slate-800/80 space-y-3 bg-slate-950/50">
                  <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">
                    Daily Lessons & Practice Exercises
                  </div>

                  <div className="space-y-3">
                    {week.days.map((day) => {
                      const isDayOpen = expandedDay === day.dayNumber

                      return (
                        <div
                          key={day.dayNumber}
                          className="rounded-lg border border-slate-800 bg-[var(--bg-card)] overflow-hidden transition-all"
                        >
                          {/* Day Row Header */}
                          <button
                            onClick={() => setExpandedDay(isDayOpen ? null : day.dayNumber)}
                            className="w-full p-3.5 flex items-start sm:items-center justify-between text-left hover:bg-slate-800/30 transition-colors gap-3"
                          >
                            <div className="flex items-center gap-3 min-w-0">
                              <span className="text-xs font-mono font-bold text-blue-400 bg-blue-950/60 border border-blue-900/50 px-2 py-0.5 rounded">
                                Day {day.dayNumber}
                              </span>
                              <div className="min-w-0">
                                <div className="text-xs sm:text-sm font-semibold text-slate-200">
                                  {day.title}
                                </div>
                                <div className="text-[11px] text-slate-400 truncate mt-0.5">
                                  {day.topic}
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                              {getSavedLesson(`m${selectedMonth}-w${expandedWeek || 1}-d${day.dayNumber}`) ? (
                                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-medium text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded">
                                  <Sparkles size={11} />
                                  AI Lesson
                                </span>
                              ) : (
                                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-medium text-blue-400 bg-blue-950/40 border border-blue-900/40 px-2 py-0.5 rounded">
                                  <Sparkles size={11} />
                                  Gemma AI
                                </span>
                              )}
                              {day.practiceQuestions.length > 0 && (
                                <Badge variant="outline" className="text-[10px]">
                                  {day.practiceQuestions.length} Questions
                                </Badge>
                              )}
                              {isDayOpen ? (
                                <ChevronDown size={16} className="text-slate-400" />
                              ) : (
                                <ChevronRight size={16} className="text-slate-500" />
                              )}
                            </div>
                          </button>

                          {/* Day Expanded Details */}
                          {isDayOpen && (
                            <div className="p-4 border-t border-slate-800/70 space-y-4 bg-slate-950/80 text-xs">
                              {/* AI Content Generation Banner & Viewer (Top Priority) */}
                              <div className="rounded-xl border border-blue-500/30 bg-blue-950/20 p-4 space-y-3">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                                  <div>
                                    <div className="flex items-center gap-2 mb-1">
                                      <Sparkles size={14} className="text-blue-400" />
                                      <span className="font-semibold text-slate-100 text-xs">
                                        NVIDIA Gemma AI Topic Lesson Engine
                                      </span>
                                      <span className="px-1.5 py-0.2 rounded text-[10px] bg-blue-500/20 text-blue-300 font-mono">
                                        google/gemma-4-31b-it
                                      </span>
                                    </div>
                                    <p className="text-[11px] text-slate-400 leading-relaxed font-sans">
                                      Generate an exhaustive 9-part educational lesson for "{day.title}" with line-by-line code breakdowns, 5 practice problems, and interactive quizzes.
                                    </p>
                                  </div>

                                  <Button
                                    variant="primary"
                                    size="sm"
                                    isLoading={generatingDay === day.dayNumber}
                                    disabled={generatingDay !== null && generatingDay !== day.dayNumber}
                                    onClick={() =>
                                      handleGenerateOrToggleAILesson(
                                        day.dayNumber,
                                        day.title,
                                        day.topic,
                                        day.conceptExplanation
                                      )
                                    }
                                    leftIcon={<Sparkles size={13} className="text-white" />}
                                    className="shrink-0"
                                  >
                                    {expandedAILessons[day.dayNumber]
                                      ? 'Collapse AI Lesson'
                                      : getSavedLesson(`m${selectedMonth}-w${expandedWeek || 1}-d${day.dayNumber}`)
                                      ? 'View Generated Lesson'
                                      : 'Generate Content'}
                                  </Button>
                                </div>

                                {/* Error Notification & Retry */}
                                {dayErrors[day.dayNumber] && (
                                  <div className="p-3 rounded-lg bg-rose-950/30 border border-rose-900/60 text-rose-300 text-xs flex items-center justify-between gap-2">
                                    <div className="flex items-center gap-2">
                                      <AlertTriangle size={14} className="text-rose-400 shrink-0" />
                                      <span>{dayErrors[day.dayNumber]}</span>
                                    </div>
                                    <Button
                                      variant="secondary"
                                      size="sm"
                                      onClick={() =>
                                        handleGenerateOrToggleAILesson(
                                          day.dayNumber,
                                          day.title,
                                          day.topic,
                                          day.conceptExplanation,
                                          true
                                        )
                                      }
                                    >
                                      Retry
                                    </Button>
                                  </div>
                                )}

                                {/* Expanded AI Lesson Viewer */}
                                {expandedAILessons[day.dayNumber] &&
                                  (lessonsState[`m${selectedMonth}-w${expandedWeek || 1}-d${day.dayNumber}`] ||
                                    getSavedLesson(`m${selectedMonth}-w${expandedWeek || 1}-d${day.dayNumber}`)) && (
                                    <div className="pt-2">
                                      <GeneratedLessonViewer
                                        lesson={
                                          lessonsState[`m${selectedMonth}-w${expandedWeek || 1}-d${day.dayNumber}`] ||
                                          getSavedLesson(`m${selectedMonth}-w${expandedWeek || 1}-d${day.dayNumber}`)!
                                        }
                                        isRegenerating={generatingDay === day.dayNumber}
                                        onRegenerate={() =>
                                          handleGenerateOrToggleAILesson(
                                            day.dayNumber,
                                            day.title,
                                            day.topic,
                                            day.conceptExplanation,
                                            true
                                          )
                                        }
                                      />
                                    </div>
                                  )}
                              </div>

                              {/* Concept Explanation */}
                              <div>
                                <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
                                  <BookOpen size={13} className="text-blue-400" />
                                  Course Concept Overview
                                </div>
                                <p className="text-slate-300 leading-relaxed">
                                  {day.conceptExplanation}
                                </p>
                              </div>

                              {/* Java Code Example if present */}
                              {day.javaExample && (
                                <div>
                                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-1.5 flex items-center gap-1.5">
                                    <Code2 size={13} className="text-emerald-400" />
                                    Java Implementation Example
                                  </div>
                                  <div className="rounded-lg bg-black/70 border border-slate-800 p-3 font-mono text-[11px] text-emerald-300 overflow-x-auto leading-relaxed">
                                    <pre>{day.javaExample}</pre>
                                  </div>
                                </div>
                              )}

                              {/* Practice Questions from Workbook */}
                              {day.practiceQuestions.length > 0 && (
                                <div>
                                  <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                                    <HelpCircle size={13} className="text-violet-400" />
                                    Workbook Practice Exercises
                                  </div>
                                  <ul className="space-y-1.5 pl-1">
                                    {day.practiceQuestions.map((q, idx) => (
                                      <li
                                        key={idx}
                                        className="flex items-start gap-2 text-slate-300 bg-slate-900/60 p-2 rounded border border-slate-800/80"
                                      >
                                        <span className="text-violet-400 font-bold shrink-0">•</span>
                                        <span>{q}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {/* Action Footer */}
                              <div className="pt-2 flex items-center justify-between border-t border-slate-800/60">
                                <span className="text-[11px] text-slate-500 font-mono">
                                  Ready to write code?
                                </span>
                                {(() => {
                                  const matchingProb = PROBLEMS_DATA.find((p) =>
                                    p.courseLessonIds?.includes(`day-${day.dayNumber}`)
                                  )
                                  return (
                                    <Link
                                      to={
                                        matchingProb
                                          ? `/workspace/${matchingProb.id}`
                                          : `/problems?search=${encodeURIComponent(day.title)}`
                                      }
                                    >
                                      <Button variant="secondary" size="sm" rightIcon={<Code2 size={12} />}>
                                        {matchingProb ? `Practice #${matchingProb.numId}` : 'Browse Problems'}
                                      </Button>
                                    </Link>
                                  )
                                })()}
                              </div>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </Card>
          )
        })}
      </div>

      {/* Completion Guidelines */}
      <Card className="p-5 mt-10 border border-slate-800 bg-slate-900/40">
        <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-mono flex items-center gap-2">
          <CheckCircle2 size={14} className="text-emerald-400" />
          Workbook Completion Standard
        </h4>
        <p className="text-xs text-slate-400 leading-relaxed">
          A task or problem is considered complete when your code compiles, passes both standard and edge test cases, and you can clearly articulate the time/space complexity and design trade-offs without consulting reference solutions.
        </p>
      </Card>
    </div>
  )
}
