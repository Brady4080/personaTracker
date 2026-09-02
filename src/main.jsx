import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import LandingPage from './landingPage.jsx'
import P5R from './p5r/p5r.jsx'
import P4R from './p4r/p4r.jsx'
import P3R from './p3r/p3r.jsx'
import P5RFusion from './p5r/p5rfusioncal.jsx'
import P5RPersonaDetailPage from './p5r/p5rPersonaDetailPage.jsx'
import { P5RProvider } from './p5r/p5rcontext.jsx'

// Check if running on GitHub Pages subpath vs root
const basename = import.meta.env.DEV ? '/' : '/personaTracker/';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. Wrap everything inside P5RProvider */}
    <P5RProvider>
      <BrowserRouter basename={basename}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/p3r" element={<P3R />} />
          <Route path="/p4r" element={<P4R />} />
          <Route path="/p5r" element={<P5R />} />
          <Route path="/p5rfusion" element={<P5RFusion />} />
          <Route path="/persona/:personaName" element={<P5RPersonaDetailPage />} />
        
          {/* 1. Explicit fallback if someone hits /personaTracker directly */}
          <Route path="/personaTracker" element={<Navigate to="/" replace />} />

          {/* 2. Catch-all fallback (*): Redirects any unknown/unmatched route back to LandingPage */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </P5RProvider>
  </StrictMode>,
)