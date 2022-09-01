import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { theme } from './constants/theme';
import { GlobalStyle } from './components/GlobalStyle';
import { ToastContainer } from 'react-toastify';
import { App } from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <GlobalStyle />
      <ToastContainer autoClose={2000} />
    </ThemeProvider>
  </React.StrictMode>
);
