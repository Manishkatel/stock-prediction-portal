import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './assets/css/style.css'; // ✅ THIS IS IMPORTANT

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);


