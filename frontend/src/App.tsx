import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Projects } from '@/pages/Projects';
import { Experience } from '@/pages/Experience';
import { Contact } from '@/pages/Contact';
import { initGA, logPageView } from './utils/analytics';
import { useEffect } from 'react';

export function App() {
  useEffect(() => {
    initGA(import.meta.env.VITE_GA4_MEASUREMENT_ID);
    logPageView();
  }, []);
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;