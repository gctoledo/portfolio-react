import { ThemeProvider } from 'styled-components'

import About from './containers/About'
import Projects from './containers/Projects'
import Sidebar from './containers/Sidebar'
import EstiloGlobal, { Container } from './styles'
import Light from './themes/light'
import Dark from './themes/dark'
import { useState } from 'react'

function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  function toggleTheme() {
    setDarkTheme(!darkTheme)
  }

  return (
    <ThemeProvider theme={darkTheme ? Dark : Light}>
      <EstiloGlobal />
      <Container>
        <Sidebar toggleTheme={toggleTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
