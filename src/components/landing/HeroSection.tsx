import { Link } from 'react-router-dom'
import { Terminal, BookOpen, ArrowRight } from 'lucide-react'
import { Button } from '@/components/common'
import CodeEditorPreview from './CodeEditorPreview'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 sm:pt-14 pb-12 sm:pb-16" aria-label="Hero">
      {/* Background radial gradient glow */}
      <div
        className="pointer-events-none absolute inset-0 flex items-start justify-center"
        aria-hidden="true"
      >
        <div className="w-[600px] h-[350px] rounded-full bg-blue-600/15 blur-[120px] -mt-10" />
        <div className="w-[450px] h-[250px] rounded-full bg-violet-600/15 blur-[100px] mt-10 -ml-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Hero Column */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              <span>Self-Learning Java Coding Platform</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              Master Java.{' '}
              <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">
                One Problem at a Time.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
              Build your Java programming skills with hands-on coding challenges and a structured six-month learning roadmap. Learn concepts, solve problems, and track your progress in one place.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link to="/problems" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto justify-center"
                  leftIcon={<Terminal size={18} />}
                  rightIcon={<ArrowRight size={16} />}
                >
                  Start Coding
                </Button>
              </Link>

              <Link to="/course" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto justify-center"
                  leftIcon={<BookOpen size={18} />}
                >
                  Explore the 6-Month Course
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Hero Column — Visual Code Editor */}
          <div className="lg:col-span-5 w-full">
            <CodeEditorPreview />
          </div>
        </div>
      </div>
    </section>
  )
}
