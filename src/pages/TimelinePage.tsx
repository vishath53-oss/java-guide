import { useState } from 'react'
import { CheckCircle2, Circle, Clock, ArrowRight, BookOpen, Layers } from 'lucide-react'
import { Card, Badge, SectionHeading, ProgressBar, Button } from '@/components/common'
import { Link } from 'react-router-dom'
import { COURSE_CURRICULUM } from '@/data/courseData'

export default function TimelinePage() {
  // Derive all 24 weeks from COURSE_CURRICULUM
  const allWeeks = COURSE_CURRICULUM.flatMap((m) =>
    m.weeks.map((w) => ({
      monthNumber: m.monthNumber,
      monthTitle: m.title,
      monthColor: m.color,
      monthAccent: m.accent,
      weekNumber: w.weekNumber,
      title: w.title,
      focus: w.focus,
      dayCount: w.days.length,
      problemCount: Math.round(65 / 4), // ~16 problems per week
    }))
  )

  // Default completed weeks: 1 and 2 done, 3 current
  const [completedWeeks, setCompletedWeeks] = useState<number[]>([1, 2])
  const currentWeekNum = 3

  const toggleWeek = (weekNum: number) => {
    setCompletedWeeks((prev) =>
      prev.includes(weekNum) ? prev.filter((w) => w !== weekNum) : [...prev, weekNum]
    )
  }

  const progressPercent = Math.round((completedWeeks.length / 24) * 100)

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <SectionHeading
          as="h1"
          title="24-Week Study Schedule"
          badge={<Badge variant="blue">Full 6-Month Roadmap</Badge>}
          description="A chronological 24-week schedule directly mapped to your 6-month curriculum and 400-problem practice workbook."
          action={
            <Link to="/course">
              <Button variant="secondary" size="sm" rightIcon={<ArrowRight size={14} />}>
                Curriculum Details
              </Button>
            </Link>
          }
        />
      </div>

      {/* Progress overview */}
      <Card className="p-5 mb-8 border border-slate-800 bg-slate-900/60">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="flex-1 w-full">
            <ProgressBar
              value={completedWeeks.length}
              max={24}
              label="Overall Schedule Progress"
              variant="blue"
              size="md"
              showLabel
              showValue
            />
            <div className="mt-2 text-xs text-slate-400 flex items-center justify-between font-mono">
              <span>{completedWeeks.length} of 24 Weeks Finished ({progressPercent}%)</span>
              <span>168 Study Days Total</span>
            </div>
          </div>
          <div className="flex gap-4 text-xs text-slate-400 shrink-0">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={13} className="text-emerald-400" /> Done
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} className="text-blue-400" /> Current
            </span>
            <span className="flex items-center gap-1.5">
              <Circle size={13} className="text-slate-600" /> Upcoming
            </span>
          </div>
        </div>
      </Card>

      {/* Timeline List */}
      <div className="relative">
        {/* Continuous vertical spine */}
        <div className="absolute left-[23px] top-4 bottom-4 w-px bg-slate-800 hidden sm:block" />

        <div className="flex flex-col gap-3">
          {allWeeks.map((week, i) => {
            const isFirstOfMonth = i === 0 || allWeeks[i - 1].monthNumber !== week.monthNumber
            const isDone = completedWeeks.includes(week.weekNumber)
            const isCurrent = week.weekNumber === currentWeekNum && !isDone

            return (
              <div key={week.weekNumber}>
                {/* Month header divider */}
                {isFirstOfMonth && (
                  <div className={`mb-3 flex items-center gap-3 ${i > 0 ? 'mt-7 pt-4 border-t border-slate-800/80' : ''}`}>
                    <Badge variant="blue" className="font-mono text-xs font-semibold">
                      Month {week.monthNumber}: {week.monthTitle}
                    </Badge>
                    <span className="text-xs text-slate-500 font-mono hidden sm:inline">
                      4 Weeks · ~65 Problems
                    </span>
                  </div>
                )}

                {/* Week Row */}
                <div className="flex items-start gap-4 sm:pl-2">
                  {/* Status Indicator / Checkbox */}
                  <button
                    onClick={() => toggleWeek(week.weekNumber)}
                    title="Click to toggle completion status"
                    className="relative z-10 shrink-0 mt-2 hidden sm:flex cursor-pointer transition-transform hover:scale-110"
                  >
                    {isDone ? (
                      <CheckCircle2 size={22} className="text-emerald-400 fill-emerald-950/40" />
                    ) : isCurrent ? (
                      <div className="w-5 h-5 rounded-full bg-blue-600 border-2 border-blue-300 flex items-center justify-center animate-pulse">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      </div>
                    ) : (
                      <Circle size={22} className="text-slate-700 hover:text-slate-500" />
                    )}
                  </button>

                  {/* Week Card */}
                  <Card
                    hover
                    className={`flex-1 p-4.5 transition-all ${
                      isCurrent
                        ? 'border-blue-600/70 bg-blue-950/30 ring-1 ring-blue-500/30'
                        : isDone
                        ? 'border-slate-800/60 bg-slate-900/40 opacity-85'
                        : 'border-slate-800/80 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="text-xs font-mono font-bold text-blue-400 shrink-0 px-2 py-0.5 rounded bg-blue-950/60 border border-blue-900/50">
                          Week {week.weekNumber}
                        </span>
                        <h3 className="font-bold text-slate-100 text-sm truncate">
                          {week.title}
                        </h3>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <Badge
                          variant={isDone ? 'easy' : isCurrent ? 'blue' : 'outline'}
                          className="text-[11px]"
                        >
                          {isDone ? 'Completed' : isCurrent ? 'Current Focus' : 'Upcoming'}
                        </Badge>
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed mb-3">
                      {week.focus}
                    </p>

                    <div className="flex items-center justify-between pt-2.5 border-t border-slate-800/60 text-xs text-slate-500">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1 font-mono text-[11px]">
                          <Layers size={12} className="text-slate-400" /> {week.dayCount} Lessons
                        </span>
                        <span className="flex items-center gap-1 font-mono text-[11px]">
                          <BookOpen size={12} className="text-slate-400" /> ~{week.problemCount} Practice Exercises
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => toggleWeek(week.weekNumber)}
                          className="text-[11px] text-slate-400 hover:text-slate-200 underline font-mono cursor-pointer"
                        >
                          {isDone ? 'Mark Incomplete' : 'Mark Complete'}
                        </button>
                        <Link
                          to="/course"
                          className="text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 text-[11px]"
                        >
                          View Days &rarr;
                        </Link>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
