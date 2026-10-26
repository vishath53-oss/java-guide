import { BookOpen, Layers, CalendarDays, Target } from 'lucide-react'
import { Card } from '@/components/common'

const stats = [
  {
    value: '6 Months',
    label: 'Structured learning roadmap',
    icon: <BookOpen size={20} className="text-blue-400" />,
  },
  {
    value: '24 Weeks',
    label: 'Progressive learning plan',
    icon: <Layers size={20} className="text-violet-400" />,
  },
  {
    value: '168 Days',
    label: 'Daily learning schedule',
    icon: <CalendarDays size={20} className="text-sky-400" />,
  },
  {
    value: '3 Levels',
    label: 'Easy, Medium, and Hard',
    icon: <Target size={20} className="text-emerald-400" />,
  },
]

export default function PlatformStats() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8" aria-label="Platform Statistics">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {stats.map((item) => (
          <Card
            key={item.value}
            hover
            className="p-4 sm:p-5 flex flex-col justify-between gap-3 bg-slate-900/60 border-slate-800/70"
          >
            <div className="flex items-center justify-between">
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
                {item.value}
              </span>
              <div className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700/50 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-snug font-medium">
              {item.label}
            </p>
          </Card>
        ))}
      </div>
    </section>
  )
}
