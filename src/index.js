import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyles, theme } from './styles/index';
import { Global, ThemeProvider } from '@emotion/react';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
      <Global styles={GlobalStyles} />
    </Provider>
  </ThemeProvider>
);
