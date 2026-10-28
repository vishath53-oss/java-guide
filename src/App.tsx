import ThemeProvider from '@/components/common/ThemeProvider'
import { AuthProvider } from '@/contexts/AuthContext'
import AppRouter from '@/routes/routes'

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </ThemeProvider>
  )
}
