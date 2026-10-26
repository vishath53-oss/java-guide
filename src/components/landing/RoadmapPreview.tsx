import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, BookOpen } from 'lucide-react'
import { Card, SectionHeading, Button } from '@/components/common'

const months = [
  {
    month: 'Month 01',
    stage: 'Stage 1 • Foundation',
    title: 'Java Fundamentals',
    topics: [
      'Java setup and first program',
      'Variables, data types & control flow',
      'Loops, methods, arrays & exercises',
    ],
  },
  {
    month: 'Month 02',
    stage: 'Stage 2 • Core Paradigm',
    title: 'Object-Oriented Programming',
    topics: [
      'Classes, objects and constructors',
      'Inheritance and polymorphism',
      'Abstraction and encapsulation',
    ],
  },
  {
    month: 'Month 03',
    stage: 'Stage 3 • Architecture',
    title: 'Collections & Modern Core Java',
    topics: [
      'Collections Framework: Lists, Sets, Maps',
      'Generics and custom data structures',
      'Robust exception handling',
    ],
  },
  {
    month: 'Month 04',
    stage: 'Stage 4 • Persistence',
    title: 'Advanced Core Java and JDBC',
    topics: [
      'Advanced I/O and file handling',
      'Database connectivity & JDBC basics',
      'Database-driven Java applications',
    ],
  },
  {
    month: 'Month 05',
    stage: 'Stage 5 • Problem Solving',
    title: 'Data Structures, Algorithms & SQL',
    topics: [
      'Searching, sorting and algorithms',
      'Time & space complexity analysis',
      'Practical SQL queries & problem-solving',
    ],
  },
  {
    month: 'Month 06',
    stage: 'Stage 6 • Production',
    title: 'Java Application Development',
    topics: [
      'Git, Maven build tool & JUnit testing',
      'Spring Boot, JPA & RESTful APIs',
      'End-to-end capstone application',
    ],
  },
]

export default function RoadmapPreview() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14" aria-label="Six-Month Learning Roadmap">
      <SectionHeading
        title="Your Java Journey, From Beginner to Developer"
        description="Follow a structured six-month plan designed to build your knowledge step by step."
        align="center"
        className="mb-10"
      />

      {/* 3-column grid for desktop, 2-column for tablet, 1-column for mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {months.map((m, index) => (
          <Card
            key={m.month}
            hover
            className="p-6 flex flex-col justify-between bg-slate-900/60 border-slate-800/80 group"
          >
            <div>
              {/* Card Header with Month pill and Decorative Stage */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs font-semibold">
                  {m.month}
                </span>
                <span className="text-[11px] font-mono text-slate-400 font-medium">
                  {m.stage}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                {m.title}
              </h3>

              {/* Topics Highlights */}
              <ul className="space-y-2 mb-6">
                {m.topics.map((topic, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400">
                    <CheckCircle2 size={15} className="text-slate-400 shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Decorative Progress Stage Bar (Indicates curriculum sequence, not completion) */}
            <div className="pt-4 border-t border-slate-800/60">
              <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5 font-mono">
                <span>Curriculum Milestone</span>
                <span>Part {index + 1} of 6</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500 opacity-60"
                  style={{ width: `${((index + 1) / 6) * 100}%` }}
                />
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* View Complete Roadmap CTA */}
      <div className="mt-10 text-center">
        <Link to="/course">
          <Button size="lg" leftIcon={<BookOpen size={18} />} rightIcon={<ArrowRight size={16} />}>
            View Complete Roadmap
          </Button>
        </Link>
      </div>
    </section>
  )
}
