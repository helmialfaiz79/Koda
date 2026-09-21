import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './app/routes'
import { ThemeProvider } from './app/theme'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
