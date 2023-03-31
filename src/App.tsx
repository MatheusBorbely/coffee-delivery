import {ThemeProvider} from 'styled-components';
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';

import {CartContextProvider} from './contexts/CartContext'
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <Router/>
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
