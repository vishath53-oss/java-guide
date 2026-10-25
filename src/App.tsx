import { ThemeProvider } from '@/hooks/useTheme'
import AppRouter from '@/routes/routes'

export default function App() {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  )
}
