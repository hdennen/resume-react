import { BrowserRouter } from 'react-router-dom';
import { initGA } from './utils/analytics';
import { useEffect } from 'react';
import { AppRoutes } from './AppRoutes';

export function App() {
  useEffect(() => {
    initGA(import.meta.env.VITE_GA4_MEASUREMENT_ID);
  }, []);

  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;