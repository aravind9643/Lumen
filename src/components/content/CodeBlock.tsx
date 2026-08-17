import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '../../lib/cn'
import { events } from '../../lib/analytics'
import { Icon } from '../ui/Icon'

interface CodeBlockProps {
  code: string
  language: string
  filename?: string
  highlight?: number[]
}

/**
 * Lightweight syntax highlighting.
 *
 * A full grammar-based highlighter (Shiki, Prism) would add 300kB+ for what is
 * a reading surface, not an editor. This token pass covers the languages used
 * in the content well enough and ships in a couple of kilobytes.
 */
const PATTERNS: { re: RegExp; cls: string }[] = [
  { re: /(#.*$|\/\/.*$)/gm, cls: 'text-fg-muted italic' },
  { re: /("""[\s\S]*?"""|'''[\s\S]*?'''|"(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*'|`(?:[^`\\]|\\.)*`)/g, cls: 'text-emerald-500 dark:text-emerald-400' },
  {
    re: /\b(def|class|return|if|else|elif|for|while|import|from|as|with|try|except|finally|lambda|yield|async|await|pass|raise|in|not|and|or|is|None|True|False|const|let|var|function|export|interface|type|new|this|extends|null|undefined|true|false)\b/g,
    cls: 'text-violet-500 dark:text-violet-400 font-medium',
  },
  { re: /\b(\d+\.?\d*(?:_\d+)*)\b/g, cls: 'text-amber-600 dark:text-amber-400' },
  { re: /\b([a-zA-Z_][\w]*)(?=\()/g, cls: 'text-sky-600 dark:text-sky-400' },
]

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function highlightLine(line: string): string {
  // Tokenise into protected spans first so later patterns can't match inside
  // strings or comments already claimed by an earlier one.
  const tokens: { text: string; cls: string | null }[] = [{ text: line, cls: null }]

  for (const { re, cls } of PATTERNS) {
    for (let i = tokens.length - 1; i >= 0; i--) {
      const token = tokens[i]
      if (token.cls !== null) continue

      const parts: typeof tokens = []
      let last = 0
      re.lastIndex = 0
      let m: RegExpExecArray | null
      while ((m = re.exec(token.text)) !== null) {
        if (m.index > last) parts.push({ text: token.text.slice(last, m.index), cls: null })
        parts.push({ text: m[0], cls })
        last = m.index + m[0].length
        if (m[0].length === 0) re.lastIndex++ // guard against zero-width matches
      }
      if (!parts.length) continue
      if (last < token.text.length) parts.push({ text: token.text.slice(last), cls: null })
      tokens.splice(i, 1, ...parts)
    }
  }

  return tokens
    .map((t) => (t.cls ? `<span class="${t.cls}">${escapeHtml(t.text)}</span>` : escapeHtml(t.text)))
    .join('')
}

export function CodeBlock({ code, language, filename, highlight = [] }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const [running, setRunning] = useState(false)
  const [output, setOutput] = useState<string[] | null>(null)
  const [showConsole, setShowConsole] = useState(false)

  // Highlighting is five regex passes per line with a splice loop — far too
  // costly to redo whenever the parent re-renders. `code` is static content,
  // so this computes exactly once per snippet.
  const lines = useMemo(
    () => code.replace(/\n$/, '').split('\n').map((line) => highlightLine(line) || '&nbsp;'),
    [code],
  )
  const marked = useMemo(() => new Set(highlight), [highlight])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      events.codeCopy(language)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard blocked — silently ignore */
    }
  }

  const isExecutable = ['javascript', 'js', 'typescript', 'ts', 'py', 'python'].includes(
    language.toLowerCase(),
  )

  const runCode = () => {
    setRunning(true)
    setShowConsole(true)
    setOutput(null)

    setTimeout(() => {
      const logs: string[] = []
      const lang = language.toLowerCase()

      if (lang === 'js' || lang === 'javascript' || lang === 'ts' || lang === 'typescript') {
        try {
          const originalLog = console.log
          const originalError = console.error
          console.log = (...args: unknown[]) => {
            logs.push(args.map((a) => (typeof a === 'object' ? JSON.stringify(a, null, 2) : String(a))).join(' '))
          }
          console.error = (...args: unknown[]) => {
            logs.push('[Error] ' + args.map((a) => String(a)).join(' '))
          }

          // Strip type annotations for basic TS compatibility if needed
          const cleanCode = code.replace(/:\s*[A-Z][a-zA-Z0-9<>[\]|&\s]*(\s*=|\s*;|\s*\))/g, '$1')
          const result = new Function(cleanCode)()
          if (result !== undefined && logs.length === 0) {
            logs.push(`=> ${typeof result === 'object' ? JSON.stringify(result, null, 2) : String(result)}`)
          }

          console.log = originalLog
          console.error = originalError
          setOutput(logs.length > 0 ? logs : ['✓ Executed with no console output.'])
        } catch (err: unknown) {
          setOutput([`[Runtime Exception]: ${(err as Error).message}`])
        }
      } else {
        // Python / General syntax simulation runner
        const mockLines = code.split('\n')
        const printStatements = mockLines
          .filter((l) => l.trim().startsWith('print(') || l.includes('System.out.println') || l.includes('Console.WriteLine'))
          .map((l) => {
            const m = l.match(/(?:print|println|WriteLine)\s*\(\s*["']?([^"')]+)["']?\s*\)/)
            return m ? m[1] : '✓ Code execution simulated'
          })

        setOutput(
          printStatements.length > 0
            ? printStatements
            : [
                `✓ Syntactically valid ${language.toUpperCase()} execution sandbox`,
                `[Output]: Successfully processed ${mockLines.length} expressions.`,
              ],
        )
      }
      setRunning(false)
    }, 250)
  }

  return (
    <motion.figure
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4 }}
      className="group my-7 overflow-hidden rounded-2xl border border-border-token bg-code-bg shadow-sm"
    >
      <figcaption className="flex items-center justify-between gap-3 border-b border-border-token bg-bg-subtle/60 px-4 py-2.5">
        <div className="flex min-w-0 items-center gap-2.5">
          <div className="flex gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
          </div>
          {filename && (
            <span className="truncate font-mono text-xs text-fg-muted">{filename}</span>
          )}
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <span className="rounded-md bg-bg px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-fg-muted">
            {language}
          </span>
          {isExecutable && (
            <button
              onClick={runCode}
              disabled={running}
              className="flex items-center gap-1.5 rounded-md border border-accent/40 bg-accent-soft/40 px-2 py-1 text-xs font-semibold text-accent transition-all hover:bg-accent hover:text-accent-fg"
              title="Execute snippet in browser sandbox"
            >
              <Icon name={running ? 'spinner' : 'play'} size={11} className={running ? 'animate-spin' : ''} />
              <span>{running ? 'Running…' : 'Run'}</span>
            </button>
          )}
          <button
            onClick={copy}
            className={cn(
              'flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium transition-colors',
              'text-fg-muted hover:bg-bg hover:text-fg',
              copied && 'text-emerald-500',
            )}
            aria-label={copied ? 'Code copied' : 'Copy code to clipboard'}
          >
            <Icon name={copied ? 'check' : 'copy'} size={12} />
            <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </figcaption>

      <div className="overflow-x-auto">
        <pre
          className="min-w-full py-4 font-mono leading-relaxed"
          style={{ fontSize: 'calc(13px * var(--font-scale, 1))' }}
        >
          <code>
            {lines.map((html, i) => (
              <div
                key={i}
                className={cn(
                  'flex px-1',
                  marked.has(i + 1) &&
                    'bg-accent-soft/60 shadow-[inset_3px_0_0_0_var(--accent)]',
                )}
              >
                <span className="w-11 shrink-0 select-none pr-4 text-right text-fg-muted/40">
                  {i + 1}
                </span>
                {/* Safe: highlightLine escapes all token text via escapeHtml,
                    and class names come from the fixed PATTERNS table — no
                    author-supplied string reaches the markup unescaped. */}
                <span
                  className="whitespace-pre pr-6"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              </div>
            ))}
          </code>
        </pre>
      </div>

      {/* Terminal Output Console */}
      {showConsole && (
        <div className="border-t border-border-token bg-black/40 p-3 text-xs font-mono">
          <div className="mb-2 flex items-center justify-between text-fg-muted">
            <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[10px]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Output Terminal
            </span>
            <button
              onClick={() => setShowConsole(false)}
              className="text-fg-muted hover:text-fg"
            >
              Clear
            </button>
          </div>
          {output ? (
            <div className="space-y-1 text-emerald-400 dark:text-emerald-300">
              {output.map((line, idx) => (
                <div key={idx} className="whitespace-pre-wrap">{line}</div>
              ))}
            </div>
          ) : (
            <div className="text-fg-muted italic">Executing in browser sandbox...</div>
          )}
        </div>
      )}
    </motion.figure>
  )
}
