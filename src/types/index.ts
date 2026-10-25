export interface NavItem {
  name: string
  href: string
  badge?: string
  isExternal?: boolean
}

export interface RouteMeta {
  title: string
  description: string
  path: string
}

export type DifficultyLevel = 'Easy' | 'Medium' | 'Hard'

export interface ProblemSummary {
  id: string
  title: string
  difficulty: DifficultyLevel
  topic: string
  isCompleted?: boolean
}

export interface CourseMonth {
  month: number
  title: string
  tagline: string
  weeksCount: number
  problemCount: number
}
