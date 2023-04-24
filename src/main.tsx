import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { OptionsProvider } from './context/optionsContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <OptionsProvider>
      <App />
    </OptionsProvider>
  </React.StrictMode>
);
