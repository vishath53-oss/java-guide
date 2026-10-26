import { Terminal, CheckCircle2, FileCode2 } from 'lucide-react'

export default function CodeEditorPreview() {
  const codeLines = [
    {
      num: 1,
      tokens: [
        { text: 'public ', color: 'text-violet-400' },
        { text: 'class ', color: 'text-violet-400' },
        { text: 'Main ', color: 'text-sky-300' },
        { text: '{', color: 'text-slate-400' },
      ],
    },
    {
      num: 2,
      tokens: [
        { text: '    public ', color: 'text-violet-400' },
        { text: 'static ', color: 'text-violet-400' },
        { text: 'void ', color: 'text-violet-400' },
        { text: 'main', color: 'text-amber-300' },
        { text: '(', color: 'text-slate-400' },
        { text: 'String', color: 'text-sky-300' },
        { text: '[] ', color: 'text-slate-400' },
        { text: 'args', color: 'text-slate-200' },
        { text: ') {', color: 'text-slate-400' },
      ],
    },
    {
      num: 3,
      tokens: [
        { text: '        System', color: 'text-sky-300' },
        { text: '.', color: 'text-slate-400' },
        { text: 'out', color: 'text-slate-200' },
        { text: '.', color: 'text-slate-400' },
        { text: 'println', color: 'text-amber-300' },
        { text: '(', color: 'text-slate-400' },
        { text: '"Hello, Java!"', color: 'text-emerald-400' },
        { text: ');', color: 'text-slate-400' },
      ],
    },
    {
      num: 4,
      tokens: [{ text: '    }', color: 'text-slate-400' }],
    },
    {
      num: 5,
      tokens: [{ text: '}', color: 'text-slate-400' }],
    },
  ]

  return (
    <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
      {/* Soft ambient back-glow */}
      <div
        className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600/20 via-violet-600/20 to-sky-600/20 blur-xl opacity-70 pointer-events-none"
        aria-hidden="true"
      />

      {/* Editor Frame */}
      <div className="relative rounded-xl border border-slate-800/90 bg-slate-950/95 shadow-2xl shadow-black/60 overflow-hidden font-mono text-xs sm:text-sm">
        {/* Editor Title Bar */}
        <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-900/90 border-b border-slate-800/80 select-none">
          {/* macOS / Window controls */}
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>

          {/* Active File Tab */}
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-950/80 border border-slate-800 text-slate-300 text-xs font-sans font-medium">
            <FileCode2 size={13} className="text-amber-400" />
            <span>Main.java</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 ml-1" title="Saved" />
          </div>

          {/* Language tag */}
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-semibold px-2 py-0.5 rounded bg-slate-800/60">
            Java 21
          </span>
        </div>

        {/* Code Content Area */}
        <div className="p-4 sm:p-5 overflow-x-auto text-left leading-relaxed">
          <div className="space-y-1">
            {codeLines.map((line) => (
              <div key={line.num} className="flex items-center group">
                <span
                  className="w-7 sm:w-8 select-none text-right pr-3 text-slate-400 font-mono text-xs shrink-0"
                  aria-hidden="true"
                >
                  {line.num}
                </span>
                <span className="whitespace-pre font-mono">
                  {line.tokens.map((token, idx) => (
                    <span key={idx} className={token.color}>
                      {token.text}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal / Output Area */}
        <div className="border-t border-slate-800/80 bg-slate-900/70 p-3 sm:p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 text-slate-400 text-xs font-sans font-medium">
              <Terminal size={14} className="text-blue-400" />
              <span>Output Console</span>
            </div>

            {/* Decorative Accepted badge */}
            <div
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/70 text-emerald-400 border border-emerald-800/60 text-xs font-sans font-medium shadow-sm"
              title="Decorative test status"
            >
              <CheckCircle2 size={13} className="text-emerald-400" />
              <span>Accepted</span>
              <span className="text-[10px] text-emerald-500 font-mono">(0 ms)</span>
            </div>
          </div>

          {/* Terminal output content */}
          <div className="rounded-lg bg-slate-950/90 border border-slate-800/70 px-3 py-2 font-mono text-xs text-slate-200">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="text-emerald-400 font-bold">$</span>
              <span>java Main</span>
            </div>
            <div className="text-emerald-300 font-semibold mt-1">
              Hello, Java!
            </div>
            <div className="text-[11px] text-slate-400 mt-1 font-sans">
              Test passed: 1/1 test cases matched
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
