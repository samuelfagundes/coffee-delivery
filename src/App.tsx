import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { OrderContextProvider } from './context/OrderContext'

export function App() {
  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <OrderContextProvider>
            <Router />
          </OrderContextProvider>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  )
}
