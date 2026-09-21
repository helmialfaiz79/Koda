import { BrowserRouter } from 'react-router-dom'
import { MotionConfig } from 'motion/react'
import { AppRoutes } from './app/routes'
import { ThemeProvider } from './app/theme'

function App() {
  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user" transition={{ duration: 0.2, ease: 'easeOut' }}>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </MotionConfig>
    </ThemeProvider>
  )
}

export default App
