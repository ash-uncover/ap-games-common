import React from 'react'
import { createRoot } from 'react-dom/client'

// Import components
import { App } from './components/App'

const containerRoot = document.getElementById('reactroot')!
const root = createRoot(containerRoot)

root.render(
  <App />
)


