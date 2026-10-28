export interface ConceptSection {
  heading: string
  content: string
}

export interface SyntaxRule {
  rule: string
  code: string
  explanation: string
}

export interface CodeExample {
  title: string
  problem: string
  code: string
  lineByLineExplanation: string[]
  expectedOutput: string
}

export interface PracticeProblemExample {
  input: string
  output: string
  explanation?: string
}

export interface PracticeProblemTestCase {
  input: string
  expected: string
}

export interface GeneratedPracticeProblem {
  title: string
  description: string
  difficulty: 'Easy' | 'Medium' | 'Hard'
  inputFormat?: string
  outputFormat?: string
  constraints?: string
  examples: PracticeProblemExample[]
  testCases: PracticeProblemTestCase[]
  solution: string
  explanation: string
  timeComplexity?: string
  spaceComplexity?: string
}

export interface CommonMistake {
  mistake: string
  why: string
  incorrectCode: string
  correctedCode: string
}

export interface QuizQuestion {
  question: string
  options: string[]
  correctAnswerIndex: number
  explanation: string
}

export interface GeneratedLesson {
  lessonId: string // e.g. "m1-w1-d1"
  monthNumber: number
  weekNumber: number
  dayNumber: number
  topic: string
  title: string
  generatedAt: string
  model: string
  learningObjectives: string[]
  conceptExplanation: ConceptSection[]
  syntax: SyntaxRule[]
  codeExamples: CodeExample[]
  practiceProblems: GeneratedPracticeProblem[]
  commonMistakes: CommonMistake[]
  summary: string[]
  revisionQuestions: string[]
  quiz: QuizQuestion[]
}

