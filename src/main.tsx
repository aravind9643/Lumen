import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { config as faConfig, dom as faDom } from '@fortawesome/fontawesome-svg-core'
import App from './App'
import './index.css'

// Inject Font Awesome's CSS ourselves rather than letting it auto-add styles,
// which would otherwise cause a brief flash of oversized icons on first paint.
faConfig.autoAddCss = false
const faStyle = document.createElement('style')
faStyle.textContent = faDom.css()
document.head.appendChild(faStyle)

const container = document.getElementById('root')!
const tree = (
  <StrictMode>
    <App />
  </StrictMode>
)

// Prerendered pages arrive with markup already in #root, so attach to it
// rather than throwing it away. `npm run dev` serves an empty root and takes
// the createRoot path.
if (container.hasChildNodes()) {
  hydrateRoot(container, tree)
} else {
  createRoot(container).render(tree)
}
