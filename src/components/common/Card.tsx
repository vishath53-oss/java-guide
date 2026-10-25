interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glow?: boolean
}

export default function Card({ children, className = '', hover = false, glow = false }: CardProps) {
  return (
    <div
      className={[
        'rounded-xl border border-slate-800/60 bg-slate-900/60',
        hover && 'hover:border-slate-700 hover:bg-slate-900 transition-all duration-200 cursor-pointer',
        glow && 'hover:shadow-lg hover:shadow-blue-500/5',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  )
}
