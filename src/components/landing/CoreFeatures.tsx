import { Link } from 'react-router-dom'
import { Terminal, BookOpen, CalendarDays, ChartNoAxesCombined, ArrowRight } from 'lucide-react'
import { Card, SectionHeading } from '@/components/common'

const features = [
  {
    title: 'Coding Challenges',
    description:
      'Practice Java programming with structured problems, examples, input/output formats, and test cases.',
    icon: <Terminal size={22} className="text-blue-400" />,
    to: '/problems',
    accent: 'hover:border-blue-500/40',
  },
  {
    title: 'Six-Month Java Course',
    description:
      'Follow a progressive roadmap from Java fundamentals to object-oriented programming, collections, DSA, SQL, and application development.',
    icon: <BookOpen size={22} className="text-violet-400" />,
    to: '/course',
    accent: 'hover:border-violet-500/40',
  },
  {
    title: 'Daily Study Plan',
    description:
      'Organize your learning with month-wise, week-wise, and day-wise lessons and practice activities.',
    icon: <CalendarDays size={22} className="text-sky-400" />,
    to: '/timeline',
    accent: 'hover:border-sky-500/40',
  },
  {
    title: 'Progress Tracking',
    description:
      'Review your learning progress, completed lessons, solved problems, and coding activity.',
    icon: <ChartNoAxesCombined size={22} className="text-emerald-400" />,
    to: '/dashboard',
    accent: 'hover:border-emerald-500/40',
  },
]

export default function CoreFeatures() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14" aria-label="Core Features">
      <SectionHeading
        title="Everything You Need to Learn Java"
        description="Learn the fundamentals, practice consistently, and develop real programming skills."
        align="center"
        className="mb-10"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {features.map((feature) => (
          <Link key={feature.title} to={feature.to} className="block group h-full">
            <Card
              hover
              glow
              className={`p-6 sm:p-7 h-full flex flex-col justify-between bg-slate-900/60 border-slate-800/80 transition-all duration-200 ${feature.accent}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/90 border border-slate-700/60 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                    {feature.icon}
                  </div>
                  <div className="flex items-center gap-1 text-xs font-medium text-slate-400 group-hover:text-blue-400 transition-colors">
                    <span>Explore</span>
                    <ArrowRight
                      size={15}
                      className="group-hover:translate-x-1 transition-transform duration-150"
                    />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-200 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}
