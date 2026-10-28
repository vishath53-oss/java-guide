import type { IncomingMessage, ServerResponse } from 'node:http'
import { generateLessonWithNvidiaGemma, type LessonRequestParams } from './nvidiaLessonService'
import { generateResilientFallbackLesson } from './lessonFallbackData'

export function handleGenerateLessonRequest(req: IncomingMessage, res: ServerResponse) {
  if (req.method !== 'POST') {
    res.statusCode = 405
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ error: 'Method Not Allowed' }))
    return
  }

  let body = ''
  req.on('data', (chunk) => {
    body += chunk
  })

  req.on('end', async () => {
    try {
      const params = JSON.parse(body) as LessonRequestParams

      if (!params || !params.title || !params.topic) {
        res.statusCode = 400
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ error: 'Missing required lesson parameters: title and topic are mandatory.' }))
        return
      }

      try {
        // Attempt live call to NVIDIA Gemma
        const lesson = await generateLessonWithNvidiaGemma(params)
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ success: true, lesson, source: 'nvidia-gemma' }))
      } catch (nvidiaError: any) {
        console.warn(
          `[NVIDIA Gemma Service] API unavailable or failed (${nvidiaError.message}). Activating curriculum resilience fallback for topic: ${params.title}`
        )
        const fallbackLesson = generateResilientFallbackLesson(params)
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(
          JSON.stringify({
            success: true,
            lesson: fallbackLesson,
            source: 'resilience-engine',
            warning: `NVIDIA API notification: ${nvidiaError.message}. Served via Curriculum Resilience Engine.`,
          })
        )
      }
    } catch (parseError: any) {
      res.statusCode = 400
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({ error: `Malformed JSON payload: ${parseError.message}` }))
    }
  })
}

