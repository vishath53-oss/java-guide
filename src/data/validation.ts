import { PROBLEMS_DATA, type ProblemItem } from './problemsData'
import { COURSE_CURRICULUM, type MonthCurriculum } from './courseData'

export interface ValidationError {
  type:
    | 'duplicate-id'
    | 'duplicate-title'
    | 'missing-description'
    | 'invalid-difficulty'
    | 'missing-starter'
    | 'missing-testcases'
    | 'invalid-course-reference'
    | 'missing-course-structure'
  message: string
  identifier: string
}

export interface ValidationReport {
  isValid: boolean
  totalProblems: number
  totalMonths: number
  totalWeeks: number
  totalDays: number
  errors: ValidationError[]
  warnings: string[]
}

export function validateDataIntegrity(
  problems: ProblemItem[] = PROBLEMS_DATA,
  course: MonthCurriculum[] = COURSE_CURRICULUM
): ValidationReport {
  const errors: ValidationError[] = []
  const warnings: string[] = []

  // Collect valid day IDs from course curriculum
  const validLessonIds = new Set<string>()
  for (const month of course) {
    for (const week of month.weeks) {
      for (const day of week.days) {
        validLessonIds.add(`day-${day.dayNumber}`)
      }
    }
  }

  // 1. Check Problem IDs & Titles
  const seenIds = new Set<string>()
  const seenTitles = new Map<string, string>() // normalized title -> id

  for (const prob of problems) {
    // Unique ID
    if (!prob.id || typeof prob.id !== 'string' || prob.id.trim().length === 0) {
      errors.push({
        type: 'duplicate-id',
        message: 'Problem missing valid ID string',
        identifier: prob.title || 'unknown',
      })
    } else if (seenIds.has(prob.id)) {
      errors.push({
        type: 'duplicate-id',
        message: `Duplicate problem ID detected: ${prob.id}`,
        identifier: prob.id,
      })
    } else {
      seenIds.add(prob.id)
    }

    // Normalized title duplication
    const normalizedTitle = prob.title.toLowerCase().replace(/[^a-z0-9]/g, '')
    if (seenTitles.has(normalizedTitle)) {
      errors.push({
        type: 'duplicate-title',
        message: `Duplicate problem title after normalization: "${prob.title}" matches existing problem "${seenTitles.get(normalizedTitle)}"`,
        identifier: prob.id,
      })
    } else {
      seenTitles.set(normalizedTitle, prob.title)
    }

    // Missing statement / description
    if (!prob.description || prob.description.trim().length < 10) {
      errors.push({
        type: 'missing-description',
        message: `Problem "${prob.title}" is missing a valid problem description.`,
        identifier: prob.id,
      })
    }

    // Difficulty check
    if (!['Easy', 'Medium', 'Hard'].includes(prob.difficulty)) {
      errors.push({
        type: 'invalid-difficulty',
        message: `Problem "${prob.title}" has invalid difficulty: "${prob.difficulty}". Must be Easy, Medium, or Hard.`,
        identifier: prob.id,
      })
    }

    // Starter code check
    if (!prob.starterCode || prob.starterCode.trim().length === 0) {
      errors.push({
        type: 'missing-starter',
        message: `Problem "${prob.title}" is missing starter Java code.`,
        identifier: prob.id,
      })
    }

    // Test cases check
    if (!prob.testCases || prob.testCases.length === 0) {
      errors.push({
        type: 'missing-testcases',
        message: `Problem "${prob.title}" has no test cases.`,
        identifier: prob.id,
      })
    }

    // Check course lesson references
    if (prob.courseLessonIds && prob.courseLessonIds.length > 0) {
      for (const lessonId of prob.courseLessonIds) {
        if (!validLessonIds.has(lessonId)) {
          errors.push({
            type: 'invalid-course-reference',
            message: `Problem "${prob.title}" references non-existent course lesson: "${lessonId}".`,
            identifier: prob.id,
          })
        }
      }
    }
  }

  // 2. Check Course Hierarchy (Month -> Week -> Day)
  let totalWeeks = 0
  let totalDays = 0

  const expectedMonths = [1, 2, 3, 4, 5, 6]
  const foundMonths = new Set(course.map((m) => m.monthNumber))

  for (const exp of expectedMonths) {
    if (!foundMonths.has(exp)) {
      errors.push({
        type: 'missing-course-structure',
        message: `Course is missing Month ${exp}.`,
        identifier: `Month-${exp}`,
      })
    }
  }

  const seenDays = new Set<number>()

  for (const m of course) {
    if (!m.weeks || m.weeks.length !== 4) {
      warnings.push(`Month ${m.monthNumber} has ${m.weeks?.length || 0} weeks (expected 4).`)
    }

    for (const w of m.weeks) {
      totalWeeks++
      if (!w.days || w.days.length !== 7) {
        warnings.push(`Week ${w.weekNumber} has ${w.days?.length || 0} days (expected 7).`)
      }

      for (const d of w.days) {
        totalDays++
        if (seenDays.has(d.dayNumber)) {
          errors.push({
            type: 'missing-course-structure',
            message: `Duplicate day number found: Day ${d.dayNumber}`,
            identifier: `Day-${d.dayNumber}`,
          })
        } else {
          seenDays.add(d.dayNumber)
        }

        if (!d.topic || !d.title) {
          errors.push({
            type: 'missing-course-structure',
            message: `Day ${d.dayNumber} missing title or topic.`,
            identifier: `Day-${d.dayNumber}`,
          })
        }
      }
    }
  }

  return {
    isValid: errors.length === 0,
    totalProblems: problems.length,
    totalMonths: course.length,
    totalWeeks,
    totalDays,
    errors,
    warnings,
  }
}
