import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import LandingPage from './landingPage.jsx'
import P5R from './p5r.jsx'
import P4R from './p4r.jsx'
import P3R from './p3r.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/personaTracker">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/p3r" element={<P3R />} />
        <Route path="/p4r" element={<P4R />} />
        <Route path="/p5r" element={<P5R />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
