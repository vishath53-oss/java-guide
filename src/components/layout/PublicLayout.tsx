import { type ReactNode } from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export interface PublicLayoutProps {
  children?: ReactNode
}

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-base)] text-[var(--fg-primary)]">
      <Navbar />
      <main id="main-content" className="flex-1 pt-16" role="main">
        {children ?? <Outlet />}
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}
