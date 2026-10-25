import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import RootLayout from '@/components/layout/RootLayout'
import DashboardLayout from '@/components/layout/DashboardLayout'
import CodingLayout from '@/components/layout/CodingLayout'
import LoadingPage from '@/pages/LoadingPage'
import NotFoundPage from '@/pages/NotFoundPage'

// Lazy-loaded page components
const HomePage = lazy(() => import('@/pages/HomePage'))
const ProblemsPage = lazy(() => import('@/pages/ProblemsPage'))
const CoursePage = lazy(() => import('@/pages/CoursePage'))
const TimelinePage = lazy(() => import('@/pages/TimelinePage'))
const DashboardPage = lazy(() => import('@/pages/DashboardPage'))
const LoginPage = lazy(() => import('@/pages/LoginPage'))
const RegisterPage = lazy(() => import('@/pages/RegisterPage'))

const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<LoadingPage />}>{children}</Suspense>
)

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <SuspenseWrapper><HomePage /></SuspenseWrapper>,
      },
      {
        path: 'problems',
        element: <SuspenseWrapper><ProblemsPage /></SuspenseWrapper>,
      },
      {
        path: 'course',
        element: <SuspenseWrapper><CoursePage /></SuspenseWrapper>,
      },
      {
        path: 'timeline',
        element: <SuspenseWrapper><TimelinePage /></SuspenseWrapper>,
      },
      {
        path: 'login',
        element: <SuspenseWrapper><LoginPage /></SuspenseWrapper>,
      },
      {
        path: 'register',
        element: <SuspenseWrapper><RegisterPage /></SuspenseWrapper>,
      },
    ],
  },
  {
    path: '/dashboard',
    element: (
      <DashboardLayout>
        <SuspenseWrapper>
          <DashboardPage />
        </SuspenseWrapper>
      </DashboardLayout>
    ),
  },
  {
    path: '/workspace',
    element: <CodingLayout />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

export default function AppRouter() {
  return <RouterProvider router={router} />
}
