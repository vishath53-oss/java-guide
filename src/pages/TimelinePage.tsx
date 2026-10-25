import { CheckCircle2, Circle, Clock } from 'lucide-react'
import { Card, Badge, SectionHeading, ProgressBar } from '@/components/common'

const timelineData = [
  { month: 1, week: 1, title: 'Java Syntax & OOP Basics', status: 'done', problems: 8 },
  { month: 1, week: 2, title: 'Collections & Generics', status: 'done', problems: 10 },
  { month: 1, week: 3, title: 'Exception Handling & I/O', status: 'current', problems: 9 },
  { month: 1, week: 4, title: 'String Manipulation & Regex', status: 'upcoming', problems: 10 },
  { month: 2, week: 5, title: 'Arrays & Matrix Problems', status: 'upcoming', problems: 12 },
  { month: 2, week: 6, title: 'Linked Lists', status: 'upcoming', problems: 13 },
  { month: 2, week: 7, title: 'Stacks & Queues', status: 'upcoming', problems: 12 },
  { month: 2, week: 8, title: 'Hash Maps & Sets', status: 'upcoming', problems: 12 },
  { month: 3, week: 9, title: 'Binary Search', status: 'upcoming', problems: 12 },
  { month: 3, week: 10, title: 'Sorting Algorithms', status: 'upcoming', problems: 11 },
  { month: 3, week: 11, title: 'Recursion & Backtracking', status: 'upcoming', problems: 13 },
  { month: 3, week: 12, title: 'Greedy Algorithms', status: 'upcoming', problems: 12 },
]

const monthColors: Record<number, string> = {
  1: 'text-blue-400 border-blue-900/40',
  2: 'text-violet-400 border-violet-900/40',
  3: 'text-sky-400 border-sky-900/40',
}

export default function TimelinePage() {
  const completedWeeks = timelineData.filter((w) => w.status === 'done').length

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <SectionHeading
          as="h1"
          title="Study Timeline"
          badge={<Badge variant="blue">24-Week Schedule</Badge>}
          description="Your structured 24-week Java roadmap broken down week by week to keep your learning consistent and pacing optimal."
        />
      </div>

      {/* Progress overview */}
      <Card className="p-5 mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="flex-1 w-full">
            <ProgressBar
              value={completedWeeks}
              max={24}
              label="Overall Schedule Progress"
              variant="blue"
              size="md"
              showLabel
              showValue
            />
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

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[23px] top-0 bottom-0 w-px bg-slate-800 hidden sm:block" />

        <div className="flex flex-col gap-3">
          {timelineData.map((week, i) => {
            const isFirstOfMonth =
              i === 0 || timelineData[i - 1].month !== week.month

            return (
              <div key={week.week}>
                {/* Month divider */}
                {isFirstOfMonth && (
                  <div className={`mb-2 ${i > 0 ? 'mt-5' : ''}`}>
                    <Badge
                      variant="outline"
                      className={`font-mono text-xs ${monthColors[week.month] ?? 'text-slate-400'}`}
                    >
                      Month {week.month}
                    </Badge>
                  </div>
                )}

                {/* Week row */}
                <div className="flex items-start gap-4 sm:pl-2">
                  {/* Icon */}
                  <div className="relative z-10 shrink-0 mt-0.5 hidden sm:flex">
                    {week.status === 'done' ? (
                      <CheckCircle2 size={20} className="text-emerald-400" />
                    ) : week.status === 'current' ? (
                      <div className="w-5 h-5 rounded-full bg-blue-600 border-2 border-blue-300 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      </div>
                    ) : (
                      <Circle size={20} className="text-slate-700" />
                    )}
                  </div>

                  <Card
                    hover
                    className={`flex-1 p-4 ${
                      week.status === 'current'
                        ? 'border-blue-800/60 bg-blue-950/30'
                        : week.status === 'done'
                        ? 'opacity-80'
                        : ''
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-xs font-mono text-slate-500 shrink-0">
                          W{week.week}
                        </span>
                        <span className="text-sm font-medium text-slate-200 truncate">
                          {week.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <Badge variant="outline" className="text-[11px]">
                          {week.problems} problems
                        </Badge>
                        {week.status === 'done' && (
                          <Badge variant="easy" className="text-[10px]">
                            COMPLETED
                          </Badge>
                        )}
                        {week.status === 'current' && (
                          <Badge variant="blue" className="text-[10px]">
                            IN PROGRESS
                          </Badge>
                        )}
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
