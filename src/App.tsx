import React from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from './theme/GlobalStyles'

import Routes from "./routes"
import theme from './theme'


const App: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  )
}
export default App
