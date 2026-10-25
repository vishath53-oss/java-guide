import { Link } from 'react-router-dom'
import {
  Code2,
  BookOpen,
  CalendarDays,
  ListChecks,
  ArrowRight,
  Cpu,
  Flame,
  Target,
} from 'lucide-react'
import Card from '@/components/common/Card'
import Button from '@/components/common/Button'
import Badge from '@/components/common/Badge'

const stats = [
  { label: 'Curated Problems', value: '300+', icon: <ListChecks size={18} className="text-blue-400" /> },
  { label: 'Course Months', value: '6', icon: <CalendarDays size={18} className="text-violet-400" /> },
  { label: 'DSA Topics', value: '40+', icon: <Cpu size={18} className="text-sky-400" /> },
  { label: 'Streak Tracking', value: 'Daily', icon: <Flame size={18} className="text-orange-400" /> },
]

const features = [
  {
    icon: <ListChecks size={22} className="text-blue-400" />,
    title: 'Structured Problem Set',
    desc: 'Carefully curated Java DSA problems organised by topic and difficulty — from arrays to dynamic programming.',
    to: '/problems',
    badge: '300+ Problems',
    badgeVariant: 'blue' as const,
  },
  {
    icon: <BookOpen size={22} className="text-violet-400" />,
    title: '6-Month Java Course',
    desc: 'A battle-tested roadmap that takes you from core Java fundamentals to advanced system design concepts.',
    to: '/course',
    badge: '6 Months',
    badgeVariant: 'violet' as const,
  },
  {
    icon: <CalendarDays size={22} className="text-sky-400" />,
    title: 'Interactive Study Timeline',
    desc: 'Visualize your entire 6-month journey week by week and never lose track of where you stand.',
    to: '/timeline',
    badge: 'Week by Week',
    badgeVariant: 'outline' as const,
  },
  {
    icon: <Target size={22} className="text-green-400" />,
    title: 'Progress Dashboard',
    desc: 'Track your solved problems, daily streaks, and overall course completion at a glance.',
    to: '/dashboard',
    badge: 'Coming Soon',
    badgeVariant: 'outline' as const,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen platform-grid">
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background radial glow */}
        <div className="pointer-events-none absolute inset-0 flex items-start justify-center">
          <div className="w-[600px] h-[300px] rounded-full bg-blue-600/10 blur-[100px] mt-10" />
          <div className="w-[400px] h-[200px] rounded-full bg-violet-600/10 blur-[80px] mt-20 -ml-40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 text-center">
          <Badge variant="blue" className="mb-6 px-3 py-1 text-xs font-mono tracking-wider">
            🚀 Screen 1 Foundation — More coming soon
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-5 leading-[1.1]">
            Master Java with a{' '}
            <span className="bg-gradient-to-r from-blue-400 via-sky-400 to-violet-400 bg-clip-text text-transparent">
              Structured Roadmap
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg leading-relaxed mb-10">
            Java Study Mate is a LeetCode-style platform with a complete{' '}
            <strong className="text-slate-300">6-month curriculum</strong>, curated DSA problems,
            and an interactive timeline — built so you never wonder what to study next.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/course">
              <Button size="lg">
                <BookOpen size={18} />
                Start 6-Month Course
              </Button>
            </Link>
            <Link to="/problems">
              <Button size="lg" variant="secondary">
                <Code2 size={18} />
                Browse Problems
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats row */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <Card key={s.label} className="p-5 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                {s.icon}
                <span className="text-xs text-slate-500 font-medium">{s.label}</span>
              </div>
              <span className="text-2xl font-bold text-white font-mono">{s.value}</span>
            </Card>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Everything you need to go from zero to hired
          </h2>
          <p className="text-slate-500 max-w-lg mx-auto text-sm">
            All platform features designed around the 6-month Java learning roadmap.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {features.map((f) => (
            <Link key={f.title} to={f.to} className="block group">
              <Card hover glow className="p-6 h-full">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-200">
                    {f.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-slate-100 text-sm">{f.title}</h3>
                      <Badge variant={f.badgeVariant}>{f.badge}</Badge>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                  <ArrowRight size={16} className="text-slate-600 group-hover:text-slate-400 group-hover:translate-x-0.5 transition-all duration-200 shrink-0 mt-1" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="rounded-2xl border border-blue-900/40 bg-gradient-to-br from-blue-950/60 to-violet-950/60 p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to start your Java journey?
          </h2>
          <p className="text-slate-400 mb-7 max-w-md mx-auto text-sm">
            Join the roadmap, solve problems daily, and track your progress to interview-readiness.
          </p>
          <Link to="/register">
            <Button size="lg">
              Create Free Account
              <ArrowRight size={18} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
