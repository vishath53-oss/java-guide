import fs from 'fs'
import path from 'path'
import type { GeneratedLesson } from '../src/types/lesson'

// Read API key and model from environment or .env
function getEnvConfig() {
  let apiKey = process.env.NVIDIA_API_KEY || ''
  let model = process.env.NVIDIA_MODEL || 'google/gemma-4-31b-it'

  if (!apiKey) {
    try {
      const envPath = path.resolve(process.cwd(), '.env')
      if (fs.existsSync(envPath)) {
        const envContent = fs.readFileSync(envPath, 'utf8')
        const keyMatch = envContent.match(/NVIDIA_API_KEY=(.*)/)
        if (keyMatch && keyMatch[1]) apiKey = keyMatch[1].trim()
        const modelMatch = envContent.match(/NVIDIA_MODEL=(.*)/)
        if (modelMatch && modelMatch[1]) model = modelMatch[1].trim()
      }
    } catch {
      // ignore
    }
  }

  return { apiKey, model }
}

export interface LessonRequestParams {
  monthNumber: number
  weekNumber: number
  dayNumber: number
  topic: string
  title: string
  existingDescription?: string
}

export async function generateLessonWithNvidiaGemma(
  params: LessonRequestParams
): Promise<GeneratedLesson> {
  const { apiKey, model } = getEnvConfig()

  if (!apiKey) {
    throw new Error('NVIDIA_API_KEY is not configured on the server. Please set it in .env.')
  }

  const lessonId = `m${params.monthNumber}-w${params.weekNumber}-d${params.dayNumber}`

  const systemPrompt = `You are a world-class senior Java educator and curriculum architect for JavaStudyMate.
Your goal is to generate a comprehensive, highly thorough, beginner-friendly Java educational lesson.
This is for students learning Java from scratch.

Output MUST be strictly valid JSON matching this schema with NO outside conversational text or extra explanations:
{
  "title": "${params.title}",
  "learningObjectives": ["string - clear bulleted learning outcome", "..."],
  "conceptExplanation": [
    {
      "heading": "string - conceptual section title",
      "content": "string - detailed, beginner-friendly explanation using simple English, practical real-world analogies, and technical clarity"
    }
  ],
  "syntax": [
    {
      "rule": "string - syntax rule name",
      "code": "string - valid Java syntax pattern",
      "explanation": "string - explanation of keywords and structure"
    }
  ],
  "codeExamples": [
    {
      "title": "string - descriptive title",
      "problem": "string - what problem or concept this demonstrates",
      "code": "string - complete, runnable, compiling Java class with main method",
      "lineByLineExplanation": ["string - explanation of key lines", "..."],
      "expectedOutput": "string - exact console output produced by this program"
    }
  ],
  "practiceProblems": [
    {
      "title": "string - problem title",
      "description": "string - clear problem prompt",
      "difficulty": "Easy",
      "inputFormat": "string - description of inputs",
      "outputFormat": "string - description of output",
      "constraints": "string - constraints",
      "examples": [{ "input": "...", "output": "...", "explanation": "..." }],
      "testCases": [{ "input": "...", "expected": "..." }, { "input": "...", "expected": "..." }],
      "solution": "string - complete working Java code solution",
      "explanation": "string - algorithmic approach breakdown",
      "timeComplexity": "O(...)",
      "spaceComplexity": "O(...)"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "string - mistake name",
      "why": "string - why beginners make this mistake",
      "incorrectCode": "string - faulty Java snippet",
      "correctedCode": "string - fixed Java snippet"
    }
  ],
  "summary": ["string - key takeaway 1", "..."],
  "revisionQuestions": ["string - question 1", "string - question 2", "..."],
  "quiz": [
    {
      "question": "string - multiple choice question",
      "options": ["A. ...", "B. ...", "C. ...", "D. ..."],
      "correctAnswerIndex": 0,
      "explanation": "string - why option A is correct"
    }
  ]
}

Ensure:
- At least 3 complete runnable codeExamples with lineByLineExplanation and expectedOutput.
- At least 5 topic-relevant practiceProblems with solutions, test cases, and time/space complexity.
- At least 3 common beginner mistakes with incorrect vs corrected code.
- At least 5 quiz questions with 4 options each and clear explanations.`

  const userPrompt = `Generate a complete, structured Java lesson for:
- Course Month: Month ${params.monthNumber}
- Week: Week ${params.weekNumber}
- Day: Day ${params.dayNumber}
- Lesson Title: "${params.title}"
- Topic Focus: "${params.topic}"
${params.existingDescription ? `- Curriculum Context: "${params.existingDescription}"` : ''}

Provide exhaustive, high-quality, professional educational content in the specified JSON structure.`

  const invokeUrl = 'https://integrate.api.nvidia.com/v1/chat/completions'

  const response = await fetch(invokeUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      model: model,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: userPrompt },
      ],
      temperature: 0.3,
      top_p: 0.95,
      max_tokens: 4096,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`NVIDIA API returned HTTP ${response.status}: ${errorText}`)
  }

  const data = (await response.json()) as any
  const rawContent = data.choices?.[0]?.message?.content

  if (!rawContent) {
    throw new Error('NVIDIA Gemma returned empty content.')
  }

  // Extract JSON from possible markdown wrappers (e.g. ```json ... ```)
  let cleanJson = rawContent.trim()
  if (cleanJson.startsWith('```')) {
    cleanJson = cleanJson.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '').trim()
  }

  // Find start and end brackets
  const firstBrace = cleanJson.indexOf('{')
  const lastBrace = cleanJson.lastIndexOf('}')
  if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
    cleanJson = cleanJson.substring(firstBrace, lastBrace + 1)
  }

  let parsed: any
  try {
    parsed = JSON.parse(cleanJson)
  } catch (parseError: any) {
    console.error('JSON parsing failed. Raw response snippet:', cleanJson.slice(0, 300))
    throw new Error(`Failed to parse AI structured response as JSON: ${parseError.message}`)
  }

  // Validate essential fields
  if (!parsed.title || !Array.isArray(parsed.conceptExplanation)) {
    throw new Error('Generated lesson is missing mandatory structured sections.')
  }

  const finalLesson: GeneratedLesson = {
    lessonId,
    monthNumber: params.monthNumber,
    weekNumber: params.weekNumber,
    dayNumber: params.dayNumber,
    topic: params.topic,
    title: parsed.title || params.title,
    generatedAt: new Date().toISOString(),
    model: model,
    learningObjectives: Array.isArray(parsed.learningObjectives) ? parsed.learningObjectives : [],
    conceptExplanation: Array.isArray(parsed.conceptExplanation) ? parsed.conceptExplanation : [],
    syntax: Array.isArray(parsed.syntax) ? parsed.syntax : [],
    codeExamples: Array.isArray(parsed.codeExamples) ? parsed.codeExamples : [],
    practiceProblems: Array.isArray(parsed.practiceProblems) ? parsed.practiceProblems : [],
    commonMistakes: Array.isArray(parsed.commonMistakes) ? parsed.commonMistakes : [],
    summary: Array.isArray(parsed.summary) ? parsed.summary : [],
    revisionQuestions: Array.isArray(parsed.revisionQuestions) ? parsed.revisionQuestions : [],
    quiz: Array.isArray(parsed.quiz) ? parsed.quiz : [],
  }

  return finalLesson
}
