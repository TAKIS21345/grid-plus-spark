import { useEffect } from 'react';
import { useLocation, BrowserRouter } from 'react-router-dom';
import App from './App';
import { inject } from "@vercel/analytics";
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

inject();

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* ScrollToTop component to reset scroll position on route change */}
      <ScrollToTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
