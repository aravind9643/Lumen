/**
 * Cleans raw markdown, code syntax, symbols, and formatting
 * so that Web Speech API Text-To-Speech voices sound completely natural
 * and never say "asterisk asterisk", "backtick", or raw code symbols aloud.
 */
export function cleanTextForSpeech(raw: string): string {
  if (!raw) return ''
  let text = raw

  // 1. Remove HTML tags and comments
  text = text.replace(/<!--[\s\S]*?-->/g, '')
  text = text.replace(/<[^>]+>/g, ' ')

  // 2. Clean markdown links: [Label](url) -> Label
  text = text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')

  // 3. Clean bold and italic markdown markers: **bold**, *italic*, __bold__, _italic_
  text = text.replace(/\*\*([^*]+)\*\*/g, '$1')
  text = text.replace(/__([^_]+)__/g, '$1')
  text = text.replace(/\*([^*]+)\*/g, '$1')
  text = text.replace(/(^|\s)_([^_]+)_(\s|$)/g, '$1$2$3')

  // 4. Clean inline code backticks: `code` -> code
  text = text.replace(/`([^`]+)`/g, '$1')

  // 5. Replace arrows and technical operators with natural spoken English
  text = text.replace(/===/g, ' strictly equals ')
  text = text.replace(/!==/g, ' is not equal to ')
  text = text.replace(/==/g, ' equals ')
  text = text.replace(/!=/g, ' is not equal to ')
  text = text.replace(/=>|->|→/g, ' leads to ')
  text = text.replace(/<=/g, ' less than or equal to ')
  text = text.replace(/>=/g, ' greater than or equal to ')
  text = text.replace(/&&/g, ' and ')
  text = text.replace(/\|\|/g, ' or ')
  text = text.replace(/\|/g, ' or ')
  text = text.replace(/~/g, ' approximately ')

  // 6. Expand common technical abbreviations and acronyms for natural pronunciation
  text = text.replace(/\bUI\b/g, 'user interface')
  text = text.replace(/\bUX\b/g, 'user experience')
  text = text.replace(/\bAPI\b/g, 'A P I')
  text = text.replace(/\bDOM\b/g, 'D O M')
  text = text.replace(/\bCSS\b/g, 'C S S')
  text = text.replace(/\bHTML\b/g, 'H T M L')
  text = text.replace(/\bJS\b/g, 'JavaScript')
  text = text.replace(/\bTS\b/g, 'TypeScript')
  text = text.replace(/\bSEO\b/g, 'S E O')
  text = text.replace(/\bSSR\b/g, 'Server Side Rendering')
  text = text.replace(/\bCSR\b/g, 'Client Side Rendering')
  text = text.replace(/\bRSC\b/g, 'React Server Components')
  text = text.replace(/\bURL\b/g, 'U R L')
  text = text.replace(/\bHTTP\b/g, 'H T T P')
  text = text.replace(/\bHTTPS\b/g, 'H T T P S')
  text = text.replace(/\bJSON\b/g, 'Jason')

  // 7. Clean up remaining raw symbols (asterisks, brackets, braces, hashes, quotes)
  text = text.replace(/[*#~^_{}[\]\\<>]/g, ' ')
  text = text.replace(/&amp;/g, ' and ')
  text = text.replace(/&lt;/g, ' less than ')
  text = text.replace(/&gt;/g, ' greater than ')
  text = text.replace(/&quot;/g, ' ')
  text = text.replace(/&#39;/g, "'")

  // 8. Collapse whitespace and trim
  text = text.replace(/\s+/g, ' ').trim()

  return text
}

/**
 * Finds the highest quality natural/neural English voice available on the platform.
 */
export function findBestVoice(voices: SpeechSynthesisVoice[], selectedURI: string | null): SpeechSynthesisVoice | undefined {
  if (selectedURI) {
    const found = voices.find((v) => v.voiceURI === selectedURI)
    if (found) return found
  }
  if (!voices.length) return undefined

  // 1. Prioritize modern Neural / Natural / Premium English voices
  const naturalEn = voices.find(
    (v) =>
      v.lang.startsWith('en') &&
      (v.name.includes('Natural') ||
        v.name.includes('Online') ||
        v.name.includes('Neural') ||
        v.name.includes('Enhanced') ||
        v.name.includes('Premium') ||
        v.name.includes('Google') ||
        v.name.includes('Jenny') ||
        v.name.includes('Aria') ||
        v.name.includes('Guy') ||
        v.name.includes('Samantha')),
  )
  if (naturalEn) return naturalEn

  // 2. Default English voice
  const defaultEn = voices.find((v) => v.lang.startsWith('en') && v.default)
  if (defaultEn) return defaultEn

  const anyEn = voices.find((v) => v.lang.startsWith('en'))
  if (anyEn) return anyEn

  return voices.find((v) => v.default) || voices[0]
}
