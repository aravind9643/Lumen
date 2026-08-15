/**
 * Serves `dist/` the way Vercel and Netlify do: exact file, then
 * `<path>/index.html`, then the SPA fallback.
 *
 * `vite preview` cannot be used for these tests — it applies the SPA fallback
 * before checking for nested index.html files, so every prerendered route
 * serves the root shell and the pages look broken when they are not.
 */
import { createServer } from 'node:http'
import { readFileSync, statSync } from 'node:fs'
import { extname, join } from 'node:path'

const dist = join(process.cwd(), 'dist')
const port = Number(process.argv[2] ?? 4180)

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
  '.json': 'application/json',
  '.woff2': 'font/woff2',
}

const tryFile = (p) => {
  try {
    return statSync(p).isFile() ? p : null
  } catch {
    return null
  }
}

createServer((req, res) => {
  const url = decodeURIComponent((req.url ?? '/').split('?')[0])
  const target =
    tryFile(join(dist, url)) ??
    tryFile(join(dist, url, 'index.html')) ??
    join(dist, 'index.html')

  res.writeHead(200, { 'Content-Type': types[extname(target)] ?? 'application/octet-stream' })
  res.end(readFileSync(target))
}).listen(port, () => console.log(`static server on http://localhost:${port}`))
