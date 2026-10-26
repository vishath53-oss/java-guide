import { BookOpen, Code2, TrendingUp } from 'lucide-react'
import { Card, SectionHeading } from '@/components/common'

const steps = [
  {
    step: '01',
    name: 'Learn',
    description: 'Understand Java concepts through structured daily lessons and examples.',
    icon: <BookOpen size={22} className="text-blue-400" />,
  },
  {
    step: '02',
    name: 'Practice',
    description: 'Solve coding problems and test your solutions against test cases.',
    icon: <Code2 size={22} className="text-violet-400" />,
  },
  {
    step: '03',
    name: 'Improve',
    description: 'Review your progress, identify gaps, and continue learning.',
    icon: <TrendingUp size={22} className="text-emerald-400" />,
  },
]

export default function HowItWorks() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14" aria-label="How It Works">
      <SectionHeading
        title="A Simple Path to Better Coding"
        description="A proven methodology designed to turn concepts into practical coding ability."
        align="center"
        className="mb-12"
      />

      <div className="relative">
        {/* Connecting line on desktop */}
        <div
          className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 -translate-y-6 bg-gradient-to-r from-blue-500/20 via-violet-500/30 to-emerald-500/20 border-t border-dashed border-slate-700 pointer-events-none"
          aria-hidden="true"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {steps.map((item) => (
            <Card
              key={item.step}
              hover
              className="p-6 sm:p-7 flex flex-col items-center text-center bg-slate-900/70 border-slate-800/80"
            >
              {/* Number pill & icon */}
              <div className="relative mb-5">
                <div className="w-14 h-14 rounded-2xl bg-slate-800/90 border border-slate-700 flex items-center justify-center shadow-lg shadow-black/30">
                  {item.icon}
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-600 text-white font-mono text-xs font-bold flex items-center justify-center shadow-md">
                  {item.step}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-white mb-2 font-mono">
                Step {item.step} — {item.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
