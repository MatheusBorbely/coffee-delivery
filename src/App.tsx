import {ThemeProvider} from 'styled-components';
import { Router } from './Router';
import { BrowserRouter } from 'react-router-dom';

import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
  )
}
