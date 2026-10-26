import { Link } from 'react-router-dom'
import { BookOpen, Code2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/common'

export default function CtaSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16" aria-label="Call to Action">
      <div className="relative rounded-2xl border border-blue-500/30 bg-gradient-to-br from-slate-900/95 via-blue-950/40 to-violet-950/40 p-8 sm:p-14 text-center overflow-hidden shadow-2xl shadow-black/40">
        {/* Ambient subtle glow */}
        <div
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full bg-blue-500/10 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
            Your Java Journey Starts Here
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Build strong programming fundamentals through consistent learning and hands-on practice.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link to="/course" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto justify-center"
                leftIcon={<BookOpen size={18} />}
                rightIcon={<ArrowRight size={16} />}
              >
                Start Learning Java
              </Button>
            </Link>

            <Link to="/problems" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto justify-center"
                leftIcon={<Code2 size={18} />}
              >
                Explore Problems
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
