/**
 * Removes `dist/server/` after prerendering.
 *
 * Those bundles exist only so the prerender script can call `render(url)`.
 * Shipping them would put the entire content registry in the deployed output
 * a second time, for no reason.
 */
import { rmSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
rmSync(join(root, 'dist/server'), { recursive: true, force: true })
console.log('[prerender] removed dist/server (build-time only)')
