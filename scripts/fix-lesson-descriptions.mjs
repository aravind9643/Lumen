import { readFileSync, writeFileSync, readdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const tutorialsDir = join(root, 'src/content/tutorials')

const files = readdirSync(tutorialsDir).filter((f) => f.endsWith('.ts'))

let totalFixed = 0

for (const file of files) {
  const filePath = join(tutorialsDir, file)
  const code = readFileSync(filePath, 'utf-8')

  const match = code.match(/export const (\w+): Tutorial = ([\s\S]+)/)
  if (!match) continue

  const varName = match[1]
  let tutorial
  try {
    tutorial = JSON.parse(match[2].trim())
  } catch (err) {
    console.error(`Failed to parse ${file}:`, err.message)
    continue
  }

  let modified = false

  for (const chapter of tutorial.chapters) {
    for (const lesson of chapter.lessons) {
      if (lesson.description && (lesson.description.includes('**Level**') || lesson.description.includes('**Time**') || lesson.description.startsWith('**'))) {
        // Derive clean, informative description from title or first paragraph/keypoints
        let cleanDesc = ''
        const firstPara = lesson.blocks?.find((b) => b.type === 'paragraph')?.text
        const firstDef = lesson.blocks?.find((b) => b.type === 'definition')

        if (firstDef) {
          cleanDesc = `Learn ${firstDef.term}: ${firstDef.plain}`
        } else if (firstPara && firstPara.length > 20 && firstPara.length < 200) {
          cleanDesc = firstPara.replace(/\*\*/g, '').replace(/`/g, '')
        } else {
          cleanDesc = `Master ${lesson.title.replace(/^Module \d+:\s*/, '')} with practical examples, architectural deep dives, and core concepts.`
        }

        // Clean out any leftover markdown markers
        cleanDesc = cleanDesc.replace(/\*\*/g, '').replace(/`/g, '')
        lesson.description = cleanDesc
        modified = true
        totalFixed++
      }

      // Also clean callout text if it starts with **Level** to use clean flat text
      if (lesson.blocks) {
        for (const block of lesson.blocks) {
          if (block.type === 'callout' && block.text && block.text.includes('**Level**')) {
            block.text = block.text.replace(/\*\*/g, '')
            modified = true
          }
        }
      }
    }
  }

  if (modified) {
    const newCode = `import type { Tutorial } from '../types'\n\nexport const ${varName}: Tutorial = ${JSON.stringify(tutorial, null, 2)}\n`
    writeFileSync(filePath, newCode, 'utf-8')
    console.log(`✓ Cleaned descriptions in ${file}`)
  }
}

console.log(`\nDone! Cleaned ${totalFixed} lesson descriptions.`)
