import { useState } from 'react'
import './landingPage.css'
import P5R from './p5r'

function LandingPage() {
  const [currentPage, setCurrentPage] = useState('landing')

  if (currentPage === 'p3r'){
    return (
      <div></div>
    )
  }
  if (currentPage === 'p4r'){
    return (
      <div></div>
    )
  }
  if (currentPage === 'p5r'){
    return (
      <div>
        <P5R />
      </div>
    )
  }


  // Landing Page
  return (
    <div className="landing-wrapper">
        <header className="hero-header">
          <div className="logo-container mb-4">
            <span className="logo-persona">PERSONA</span>
            <span className="logo-tracker">TRACKER</span>
          </div>
          <h3 className="hero-subtitle">
            Welcome to the Persona Tracker. Your all-in-one companion for navigating the Persona series.
          </h3>
        </header>

        <div className="game-grid">
        {/* Persona 3 Reload */}
        <button onClick={() => setCurrentPage('p3r')} className="game-card card-p3">
          <div>
            <span className="card-tag text-p3">Select Game</span>
          </div>
          <div className="card-footer">
            <span>Open Guide Hub</span>
            <span className="text-p3 font-bold text-base">→</span>
          </div>
        </button>

        {/* Persona 4 Golden */}
        <button onClick={() => setCurrentPage('p4r')} className="game-card card-p4">
          <div>
            <span className="card-tag text-p4">Select Game</span>
          </div>
          <div className="card-footer">
            <span>Open Guide Hub</span>
            <span className="text-p4 font-bold text-base">→</span>
          </div>
        </button>

        {/* Persona 5 Royal */}
        <button onClick={() => setCurrentPage('p5r')} className="game-card card-p5">
          <div>
            <span className="card-tag text-p5">Select Game</span>
          </div>
          <div className="card-footer">
            <span>Open Guide Hub</span>
            <span className="text-p5 font-bold text-base">→</span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default LandingPage