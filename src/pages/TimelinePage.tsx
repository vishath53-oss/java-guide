import { CalendarDays, CheckCircle2, Circle, Clock } from 'lucide-react'
import Card from '@/components/common/Card'
import Badge from '@/components/common/Badge'

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
        <div className="flex items-center gap-2 mb-1">
          <CalendarDays size={20} className="text-sky-400" />
          <h1 className="text-2xl font-bold text-white">Study Timeline</h1>
        </div>
        <p className="text-slate-500 text-sm">
          Your 24-week Java learning journey, broken down week by week. Full interactivity in a later screen.
        </p>
      </div>

      {/* Progress overview */}
      <Card className="p-5 mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-slate-400 font-medium">Overall Progress</span>
              <span className="text-xs font-mono text-slate-400">{completedWeeks}/24 weeks</span>
            </div>
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full transition-all"
                style={{ width: `${(completedWeeks / 24) * 100}%` }}
              />
            </div>
          </div>
          <div className="flex gap-4 text-xs text-slate-500 shrink-0">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={12} className="text-green-500" /> Done
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={12} className="text-blue-400" /> Current
            </span>
            <span className="flex items-center gap-1.5">
              <Circle size={12} className="text-slate-600" /> Upcoming
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
                      <CheckCircle2 size={20} className="text-green-500" />
                    ) : week.status === 'current' ? (
                      <div className="w-5 h-5 rounded-full bg-blue-600 border-2 border-blue-300 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      </div>
                    ) : (
                      <Circle size={20} className="text-slate-700" />
                    )}
                  </div>

                  <Card
                    className={`flex-1 p-4 ${
                      week.status === 'current'
                        ? 'border-blue-800/60 bg-blue-950/30'
                        : week.status === 'done'
                        ? 'opacity-70'
                        : ''
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-xs font-mono text-slate-600 shrink-0">
                          W{week.week}
                        </span>
                        <span
                          className={`text-sm font-medium truncate ${
                            week.status === 'done'
                              ? 'text-slate-500 line-through'
                              : week.status === 'current'
                              ? 'text-blue-300'
                              : 'text-slate-300'
                          }`}
                        >
                          {week.title}
                        </span>
                        {week.status === 'current' && (
                          <Badge variant="blue" className="shrink-0">Active</Badge>
                        )}
                      </div>
                      <span className="text-xs text-slate-600 shrink-0">
                        {week.problems} problems
                      </span>
                    </div>
                  </Card>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <p className="text-center text-slate-600 text-xs mt-10 font-mono">
        Showing months 1–3 (12 weeks) · Full 24-week timeline and interactivity coming in a later screen.
      </p>
    </div>
  )
}
