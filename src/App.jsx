import { ThemeProvider } from 'styled-components'
import './App.css'
import RouterProvider from './routes/Router'

import theme from './style/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider />
    </ThemeProvider>
  )
}

export default App
