import { useState } from 'react'
import type { GeneratedLesson } from '@/types/lesson'
import {
  CheckCircle2,
  BookOpen,
  Code2,
  HelpCircle,
  AlertTriangle,
  Lightbulb,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  Sparkles,
  Trophy,
  CheckCircle,
  XCircle,
} from 'lucide-react'
import Badge from '@/components/common/Badge'
import Button from '@/components/common/Button'

interface GeneratedLessonViewerProps {
  lesson: GeneratedLesson
  onRegenerate: () => void
  isRegenerating?: boolean
}

export default function GeneratedLessonViewer({
  lesson,
  onRegenerate,
  isRegenerating = false,
}: GeneratedLessonViewerProps) {
  // Solutions reveal state
  const [revealedSolutions, setRevealedSolutions] = useState<Record<number, boolean>>({})

  // Quiz interactive state: questionIndex -> selectedOptionIndex
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({})

  // Copied code snippet state: snippetKey -> boolean
  const [copiedKey, setCopiedKey] = useState<string | null>(null)

  const copyCode = (text: string, key: string) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2000)
  }

  const toggleSolution = (idx: number) => {
    setRevealedSolutions((prev) => ({ ...prev, [idx]: !prev[idx] }))
  }

  const handleSelectQuizOption = (qIdx: number, optIdx: number) => {
    if (quizAnswers[qIdx] !== undefined) return // already answered
    setQuizAnswers((prev) => ({ ...prev, [qIdx]: optIdx }))
  }

  // Quiz score computation
  const answeredCount = Object.keys(quizAnswers).length
  const correctCount = Object.entries(quizAnswers).filter(([qIdx, optIdx]) => {
    const q = lesson.quiz[Number(qIdx)]
    return q && q.correctAnswerIndex === optIdx
  }).length

  return (
    <div className="space-y-8 bg-slate-950/70 p-4 sm:p-6 rounded-xl border border-blue-500/30 shadow-2xl">
      {/* 1. LESSON HEADER BANNER */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-gradient-to-r from-blue-600/30 to-violet-600/30 text-blue-300 border border-blue-500/40 font-mono flex items-center gap-1.5">
              <Sparkles size={12} className="text-blue-400" />
              NVIDIA Gemma AI Lesson Engine
            </span>
            <Badge variant="blue" className="text-[10px]">
              Month {lesson.monthNumber} • Day {lesson.dayNumber}
            </Badge>
          </div>
          <h2 className="text-lg sm:text-xl font-bold text-slate-100">{lesson.title}</h2>
          <p className="text-xs text-slate-400 mt-1 font-mono">
            Topic Focus: <span className="text-slate-300 font-semibold">{lesson.topic}</span> • Generated:{' '}
            {new Date(lesson.generatedAt).toLocaleDateString()}
          </p>
        </div>

        <Button
          variant="secondary"
          size="sm"
          onClick={onRegenerate}
          isLoading={isRegenerating}
          leftIcon={<RotateCcw size={13} />}
          className="shrink-0"
        >
          Regenerate Lesson
        </Button>
      </div>

      {/* 2. SECTION A: LEARNING OBJECTIVES */}
      {lesson.learningObjectives.length > 0 && (
        <section className="space-y-2.5">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono">
            <CheckCircle2 size={15} className="text-emerald-400" />
            <h3>A. Learning Objectives</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {lesson.learningObjectives.map((obj, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-900/70 border border-slate-800/80 text-xs text-slate-300"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                <span className="leading-relaxed">{obj}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 3. SECTION B: DETAILED CONCEPT EXPLANATION */}
      {lesson.conceptExplanation.length > 0 && (
        <section className="space-y-3 pt-4 border-t border-slate-800/80">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono">
            <BookOpen size={15} className="text-blue-400" />
            <h3>B. Comprehensive Concept Explanation</h3>
          </div>
          <div className="space-y-4">
            {lesson.conceptExplanation.map((sec, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2"
              >
                <h4 className="text-sm font-bold text-slate-100 flex items-center gap-2">
                  <span className="text-blue-400 font-mono text-xs">§{idx + 1}</span>
                  {sec.heading}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line font-sans">
                  {sec.content}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 4. SECTION C: SYNTAX & KEYWORDS */}
      {lesson.syntax && lesson.syntax.length > 0 && (
        <section className="space-y-3 pt-4 border-t border-slate-800/80">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono">
            <Code2 size={15} className="text-violet-400" />
            <h3>C. Java Syntax & Language Rules</h3>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {lesson.syntax.map((syn, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg bg-slate-900 border border-slate-800 space-y-2 text-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-200">{syn.rule}</span>
                  <button
                    type="button"
                    onClick={() => copyCode(syn.code, `syn-${idx}`)}
                    className="text-slate-400 hover:text-white flex items-center gap-1 font-mono text-[11px]"
                  >
                    {copiedKey === `syn-${idx}` ? (
                      <Check size={12} className="text-emerald-400" />
                    ) : (
                      <Copy size={12} />
                    )}
                    <span>{copiedKey === `syn-${idx}` ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <div className="p-2.5 rounded bg-black/80 font-mono text-emerald-300 text-[11px] overflow-x-auto">
                  <pre>{syn.code}</pre>
                </div>
                <p className="text-slate-400 leading-relaxed">{syn.explanation}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 5. SECTION D: JAVA CODE EXAMPLES */}
      {lesson.codeExamples.length > 0 && (
        <section className="space-y-4 pt-4 border-t border-slate-800/80">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono">
              <Code2 size={15} className="text-emerald-400" />
              <h3>D. Runnable Java Code Examples ({lesson.codeExamples.length})</h3>
            </div>
            <span className="text-[11px] text-slate-500 font-mono">Complete & Compiling</span>
          </div>

          <div className="space-y-4">
            {lesson.codeExamples.map((ex, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-800 bg-slate-900/80 overflow-hidden"
              >
                {/* Example Title Bar */}
                <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 flex items-center justify-between text-xs">
                  <div>
                    <h4 className="font-bold text-slate-200">{ex.title}</h4>
                    <p className="text-[11px] text-slate-400 mt-0.5">{ex.problem}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyCode(ex.code, `ex-${idx}`)}
                    className="px-2.5 py-1 rounded bg-slate-800 text-slate-300 hover:text-white flex items-center gap-1.5 font-mono text-[11px] transition-colors"
                  >
                    {copiedKey === `ex-${idx}` ? (
                      <Check size={12} className="text-emerald-400" />
                    ) : (
                      <Copy size={12} />
                    )}
                    <span>{copiedKey === `ex-${idx}` ? 'Copied' : 'Copy Code'}</span>
                  </button>
                </div>

                {/* Code Block */}
                <div className="p-4 bg-black/90 font-mono text-xs text-emerald-300 overflow-x-auto leading-relaxed border-b border-slate-800">
                  <pre>{ex.code}</pre>
                </div>

                {/* Line by line explanation & output */}
                <div className="p-4 bg-slate-950/60 grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs">
                  {/* Explanations */}
                  <div className="space-y-1.5">
                    <span className="font-semibold text-slate-300 font-mono text-[11px] uppercase tracking-wider">
                      Line-By-Line Walkthrough:
                    </span>
                    <ul className="space-y-1 text-slate-400 font-sans leading-relaxed">
                      {ex.lineByLineExplanation.map((line, lIdx) => (
                        <li key={lIdx} className="flex items-start gap-1.5">
                          <span className="text-blue-400 font-bold">•</span>
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expected Console Output */}
                  <div className="space-y-1.5">
                    <span className="font-semibold text-slate-300 font-mono text-[11px] uppercase tracking-wider">
                      Expected Console Output:
                    </span>
                    <div className="p-2.5 rounded bg-black border border-slate-800 font-mono text-[11px] text-slate-200 whitespace-pre-wrap">
                      {ex.expectedOutput}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 6. SECTION E & F: PRACTICE PROBLEMS & TEST CASES */}
      {lesson.practiceProblems.length > 0 && (
        <section className="space-y-4 pt-4 border-t border-slate-800/80">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono">
              <HelpCircle size={15} className="text-amber-400" />
              <h3>E & F. Topic Practice Problems ({lesson.practiceProblems.length})</h3>
            </div>
            <span className="text-[11px] text-slate-500 font-mono">With Hidden Solutions</span>
          </div>

          <div className="space-y-4">
            {lesson.practiceProblems.map((prob, pIdx) => {
              const isSolutionOpen = Boolean(revealedSolutions[pIdx])

              return (
                <div
                  key={pIdx}
                  className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden text-xs space-y-3 p-4"
                >
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h4 className="font-bold text-sm text-slate-200">
                      Problem {pIdx + 1}: {prob.title}
                    </h4>
                    <Badge variant={prob.difficulty.toLowerCase() as 'easy' | 'medium' | 'hard'}>
                      {prob.difficulty}
                    </Badge>
                  </div>

                  <p className="text-slate-300 leading-relaxed font-sans">{prob.description}</p>

                  {/* Formats & Constraints */}
                  {(prob.inputFormat || prob.outputFormat || prob.constraints) && (
                    <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-[11px] space-y-1 text-slate-400">
                      {prob.inputFormat && (
                        <div>
                          <strong className="text-slate-300 font-sans">Input Format:</strong>{' '}
                          {prob.inputFormat}
                        </div>
                      )}
                      {prob.outputFormat && (
                        <div>
                          <strong className="text-slate-300 font-sans">Output Format:</strong>{' '}
                          {prob.outputFormat}
                        </div>
                      )}
                      {prob.constraints && (
                        <div>
                          <strong className="text-slate-300 font-sans">Constraints:</strong>{' '}
                          {prob.constraints}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Examples */}
                  {prob.examples && prob.examples.length > 0 && (
                    <div className="space-y-1.5">
                      <span className="font-semibold text-slate-300 font-mono text-[11px]">
                        Sample Test Cases:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {prob.examples.map((ex, exIdx) => (
                          <div
                            key={exIdx}
                            className="p-2.5 rounded bg-black/60 border border-slate-800 font-mono text-[11px] space-y-1"
                          >
                            <div>
                              <span className="text-slate-500">Input:</span>{' '}
                              <span className="text-slate-200">{ex.input}</span>
                            </div>
                            <div>
                              <span className="text-slate-500">Output:</span>{' '}
                              <span className="text-emerald-400">{ex.output}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Solution Reveal Toggle */}
                  <div className="pt-2 border-t border-slate-800/80">
                    <button
                      type="button"
                      onClick={() => toggleSolution(pIdx)}
                      className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center gap-2 font-mono text-xs transition-colors"
                    >
                      <Lightbulb size={13} className="text-amber-400" />
                      <span>{isSolutionOpen ? 'Hide Solution' : 'Reveal Solution & Analysis'}</span>
                      {isSolutionOpen ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                    </button>

                    {isSolutionOpen && (
                      <div className="mt-3 p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
                        {prob.explanation && (
                          <div>
                            <span className="font-semibold text-slate-300 font-sans block mb-1">
                              Algorithmic Approach:
                            </span>
                            <p className="text-slate-400 leading-relaxed font-sans">
                              {prob.explanation}
                            </p>
                          </div>
                        )}

                        {(prob.timeComplexity || prob.spaceComplexity) && (
                          <div className="flex gap-4 font-mono text-[11px] text-slate-400">
                            {prob.timeComplexity && (
                              <span>
                                Time: <strong className="text-white">{prob.timeComplexity}</strong>
                              </span>
                            )}
                            {prob.spaceComplexity && (
                              <span>
                                Space: <strong className="text-white">{prob.spaceComplexity}</strong>
                              </span>
                            )}
                          </div>
                        )}

                        <div className="p-3 rounded bg-black font-mono text-emerald-300 text-[11px] overflow-x-auto leading-relaxed border border-slate-800">
                          <pre>{prob.solution}</pre>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      )}

      {/* 7. SECTION G: COMMON MISTAKES */}
      {lesson.commonMistakes && lesson.commonMistakes.length > 0 && (
        <section className="space-y-3 pt-4 border-t border-slate-800/80">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono">
            <AlertTriangle size={15} className="text-rose-400" />
            <h3>G. Common Beginner Mistakes & Correct Syntax</h3>
          </div>
          <div className="space-y-3">
            {lesson.commonMistakes.map((mis, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 text-xs"
              >
                <h4 className="font-bold text-slate-100 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  {mis.mistake}
                </h4>
                <p className="text-slate-400 font-sans leading-relaxed">{mis.why}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                  {/* Incorrect */}
                  <div className="p-3 rounded-lg bg-rose-950/20 border border-rose-900/50 font-mono text-[11px] space-y-1">
                    <span className="text-rose-400 font-sans font-semibold text-xs block">
                      ✗ Incorrect Syntax:
                    </span>
                    <pre className="text-rose-200 overflow-x-auto">{mis.incorrectCode}</pre>
                  </div>

                  {/* Corrected */}
                  <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-900/50 font-mono text-[11px] space-y-1">
                    <span className="text-emerald-400 font-sans font-semibold text-xs block">
                      ✓ Corrected Version:
                    </span>
                    <pre className="text-emerald-200 overflow-x-auto">{mis.correctedCode}</pre>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* 8. SECTION H: SUMMARY & REVISION */}
      <section className="space-y-4 pt-4 border-t border-slate-800/80">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono">
          <Lightbulb size={15} className="text-blue-400" />
          <h3>H. Summary Takeaways & Self-Revision</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {/* Key Takeaways */}
          {lesson.summary.length > 0 && (
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h4 className="font-bold text-slate-200 font-mono">Key Takeaways Checklist</h4>
              <ul className="space-y-1.5 text-slate-400 font-sans leading-relaxed">
                {lesson.summary.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check size={14} className="text-blue-400 mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Revision Questions */}
          {lesson.revisionQuestions.length > 0 && (
            <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
              <h4 className="font-bold text-slate-200 font-mono">5 Self-Check Revision Questions</h4>
              <ul className="space-y-1.5 text-slate-400 font-sans leading-relaxed">
                {lesson.revisionQuestions.map((q, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-400 font-mono font-bold shrink-0">{idx + 1}.</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* 9. SECTION I: INTERACTIVE QUIZ */}
      {lesson.quiz && lesson.quiz.length > 0 && (
        <section className="space-y-4 pt-4 border-t border-slate-800/80">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300 font-mono">
              <Trophy size={15} className="text-amber-400" />
              <h3>I. Interactive Knowledge Check Quiz ({lesson.quiz.length} Questions)</h3>
            </div>
            {answeredCount > 0 && (
              <span className="text-xs font-mono font-semibold text-emerald-400 bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-900">
                Score: {correctCount} / {answeredCount} Answered
              </span>
            )}
          </div>

          <div className="space-y-4">
            {lesson.quiz.map((q, qIdx) => {
              const selectedOpt = quizAnswers[qIdx]
              const hasAnswered = selectedOpt !== undefined
              const isCorrect = selectedOpt === q.correctAnswerIndex

              return (
                <div
                  key={qIdx}
                  className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 text-xs space-y-3"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h4 className="font-bold text-slate-100 text-sm leading-relaxed">
                      <span className="text-blue-400 font-mono mr-2">Q{qIdx + 1}.</span>
                      {q.question}
                    </h4>
                    {hasAnswered && (
                      <span className="shrink-0">
                        {isCorrect ? (
                          <CheckCircle size={18} className="text-emerald-400" />
                        ) : (
                          <XCircle size={18} className="text-rose-400" />
                        )}
                      </span>
                    )}
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {q.options.map((opt, optIdx) => {
                      let btnStyle = 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'

                      if (hasAnswered) {
                        if (optIdx === q.correctAnswerIndex) {
                          btnStyle = 'bg-emerald-950/50 border-emerald-600 text-emerald-200 font-semibold'
                        } else if (optIdx === selectedOpt) {
                          btnStyle = 'bg-rose-950/50 border-rose-600 text-rose-200'
                        } else {
                          btnStyle = 'bg-slate-950/50 border-slate-800 text-slate-500 opacity-60'
                        }
                      }

                      return (
                        <button
                          key={optIdx}
                          type="button"
                          disabled={hasAnswered}
                          onClick={() => handleSelectQuizOption(qIdx, optIdx)}
                          className={`p-3 rounded-lg border text-left font-sans text-xs transition-all ${btnStyle}`}
                        >
                          {opt}
                        </button>
                      )
                    })}
                  </div>

                  {/* Explanation feedback */}
                  {hasAnswered && (
                    <div
                      className={`p-3 rounded-lg text-xs leading-relaxed font-sans ${
                        isCorrect
                          ? 'bg-emerald-950/20 border border-emerald-900/40 text-emerald-300'
                          : 'bg-rose-950/20 border border-rose-900/40 text-rose-300'
                      }`}
                    >
                      <strong className="block mb-0.5">
                        {isCorrect ? '✓ Correct Answer!' : '✗ Explanation:'}
                      </strong>
                      {q.explanation}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </section>
      )}
    </div>
  )
}
