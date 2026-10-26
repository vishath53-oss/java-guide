import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Zap, Flame } from 'lucide-react'
import { Card, SectionHeading, Badge, Button } from '@/components/common'

const difficulties = [
  {
    level: 'Easy',
    badgeVariant: 'easy' as const,
    icon: <Sparkles size={20} className="text-emerald-400" />,
    borderColor: 'border-emerald-500/20 hover:border-emerald-500/40',
    description: 'Start with programming fundamentals.',
    details: 'Practice basic logic, control flow, loops, and beginner problem-solving routines.',
  },
  {
    level: 'Medium',
    badgeVariant: 'medium' as const,
    icon: <Zap size={20} className="text-amber-400" />,
    borderColor: 'border-amber-500/20 hover:border-amber-500/40',
    description: 'Strengthen problem-solving skills.',
    details: 'Work with arrays, strings, collections, recursion, and core algorithmic patterns.',
  },
  {
    level: 'Hard',
    badgeVariant: 'hard' as const,
    icon: <Flame size={20} className="text-rose-400" />,
    borderColor: 'border-rose-500/20 hover:border-rose-500/40',
    description: 'Tackle advanced algorithms and complex problems.',
    details: 'Improve analytical thinking with complex data structures, dynamic programming, and optimization.',
  },
]

export default function DifficultySection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14" aria-label="Coding Difficulty Levels">
      <SectionHeading
        title="Challenge Yourself at Every Level"
        description="Structured practice tailored to where you are in your programming journey."
        align="center"
        className="mb-10"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {difficulties.map((d) => (
          <Card
            key={d.level}
            hover
            className={`p-6 sm:p-7 flex flex-col justify-between bg-slate-900/60 transition-all duration-200 border ${d.borderColor}`}
          >
            <div>
              {/* Header with badge and icon */}
              <div className="flex items-center justify-between mb-5">
                <Badge variant={d.badgeVariant} className="px-3 py-1 font-mono text-xs uppercase tracking-wider font-semibold">
                  {d.level}
                </Badge>
                <div className="w-9 h-9 rounded-lg bg-slate-800/80 border border-slate-700/50 flex items-center justify-center shrink-0">
                  {d.icon}
                </div>
              </div>

              {/* Main point */}
              <h3 className="text-base font-bold text-white mb-2">
                {d.description}
              </h3>

              {/* Details */}
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                {d.details}
              </p>
            </div>

            {/* Practice Problems Button */}
            <div className="pt-4 border-t border-slate-800/60">
              <Link to="/problems" className="block w-full">
                <Button variant="secondary" className="w-full justify-center" rightIcon={<ArrowRight size={15} />}>
                  Practice Problems
                </Button>
              </Link>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
