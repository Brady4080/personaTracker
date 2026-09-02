import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import LandingPage from './landingPage.jsx'
import P5R from './p5r/p5r.jsx'
import P4R from './p4r/p4r.jsx'
import P3R from './p3r/p3r.jsx'
import P5RFusion from './p5r/p5rfusioncal.jsx'
import P5RPersonaDetailPage from './p5r/p5rPersonaDetailPage.jsx'
import { P5RProvider } from './p5r/p5rcontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 2. Wrap everything inside P5RProvider */}
    <P5RProvider>
      <BrowserRouter basename="/personaTracker">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/p3r" element={<P3R />} />
          <Route path="/p4r" element={<P4R />} />
          <Route path="/p5r" element={<P5R />} />
          <Route path="/p5rfusion" element={<P5RFusion />} />
          <Route path="/persona/:personaName" element={<P5RPersonaDetailPage />} />
        </Routes>
      </BrowserRouter>
    </P5RProvider>
  </StrictMode>,
)