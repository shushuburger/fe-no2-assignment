import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles';
import { PokemonProvider } from './context/Context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <PokemonProvider>
        <App />
      </PokemonProvider>
    </BrowserRouter>
  </React.StrictMode>
);
