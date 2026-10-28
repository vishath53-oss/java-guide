import type { GeneratedLesson } from '@/types/lesson'

const LESSON_STORAGE_PREFIX = 'javastudymate_ai_lesson_'

export function getSavedLesson(lessonId: string): GeneratedLesson | null {
  try {
    const raw = localStorage.getItem(`${LESSON_STORAGE_PREFIX}${lessonId}`)
    if (raw) {
      return JSON.parse(raw) as GeneratedLesson
    }
  } catch (e) {
    console.warn('Failed to parse cached lesson from localStorage:', e)
  }
  return null
}

export function saveLessonLocally(lesson: GeneratedLesson): void {
  try {
    localStorage.setItem(
      `${LESSON_STORAGE_PREFIX}${lesson.lessonId}`,
      JSON.stringify(lesson)
    )
  } catch (e) {
    console.warn('Failed to cache lesson in localStorage:', e)
  }
}

export interface GenerateLessonPayload {
  monthNumber: number
  weekNumber: number
  dayNumber: number
  topic: string
  title: string
  existingDescription?: string
}

export async function requestAILesson(payload: GenerateLessonPayload): Promise<{
  lesson: GeneratedLesson
  source: string
  warning?: string
}> {
  const response = await fetch('/api/generate-lesson', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}))
    throw new Error(
      errorData.error || `Server responded with HTTP ${response.status}: ${response.statusText}`
    )
  }

  const data = await response.json()
  if (!data.success || !data.lesson) {
    throw new Error('Server returned invalid lesson generation payload.')
  }

  // Automatically save to local storage
  saveLessonLocally(data.lesson)

  return {
    lesson: data.lesson,
    source: data.source || 'nvidia-gemma',
    warning: data.warning,
  }
}

