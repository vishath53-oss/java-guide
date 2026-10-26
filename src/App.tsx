import ThemeProvider from '@/components/common/ThemeProvider'
import AppRouter from '@/routes/routes'

export default function App() {
  return (
    <ThemeProvider>
      <AppRouter />
    </ThemeProvider>
  )
}
