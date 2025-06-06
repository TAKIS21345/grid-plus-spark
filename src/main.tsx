import { inject } from "@vercel/analytics";
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

inject();

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
