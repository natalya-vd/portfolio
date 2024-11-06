import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './reset.css'
import './index.css'

import { ThemeContextProvider } from '@contexts/theme/provider'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </StrictMode>,
)
