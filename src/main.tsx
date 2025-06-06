import { useEffect } from 'react';
import { useLocation, BrowserRouter } from 'react-router-dom';
import App from './App';
import { Analytics } from "@vercel/analytics/next"
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);
  return null;
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
