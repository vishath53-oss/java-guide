import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'
import { handleGenerateLessonRequest } from './server/apiMiddleware'

function nvidiaLessonApiPlugin(): Plugin {
  return {
    name: 'nvidia-lesson-api',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/api/generate-lesson' || req.url?.startsWith('/api/generate-lesson')) {
          handleGenerateLessonRequest(req, res)
          return
        }
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    nvidiaLessonApiPlugin(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
