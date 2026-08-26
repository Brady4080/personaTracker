import { useNavigate } from 'react-router-dom'
import './landingPage.css'

function LandingPage() {
  const navigate = useNavigate()

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
        <button onClick={() => navigate('/p3r')} className="game-card card-p3">
          <div>
            <span className="card-tag text-p3">Select Game</span>
          </div>
          <div className="card-footer">
            <span>Open Guide Hub</span>
            <span className="text-p3 font-bold text-base">→</span>
          </div>
        </button>

        {/* Persona 4 Golden */}
        <button onClick={() => navigate('/p4r')} className="game-card card-p4">
          <div>
            <span className="card-tag text-p4">Select Game</span>
          </div>
          <div className="card-footer">
            <span>Open Guide Hub</span>
            <span className="text-p4 font-bold text-base">→</span>
          </div>
        </button>

        {/* Persona 5 Royal */}
        <button onClick={() => navigate('/p5r')} className="game-card card-p5">
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