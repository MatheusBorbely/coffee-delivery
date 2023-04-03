import {ThemeProvider} from 'styled-components';
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';

import {CartContextProvider} from './contexts/CartContext'
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { UserContextProvider } from './contexts/UserContext';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <UserContextProvider>
            <Router/>
          </UserContextProvider>
        </CartContextProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
