import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { config as faConfig, dom as faDom } from '@fortawesome/fontawesome-svg-core'
import App from './App'
import './index.css'

// Inject Font Awesome's CSS ourselves rather than letting it auto-add styles,
// which would otherwise cause a brief flash of oversized icons on first paint.
faConfig.autoAddCss = false
const faStyle = document.createElement('style')
faStyle.textContent = faDom.css()
document.head.appendChild(faStyle)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
