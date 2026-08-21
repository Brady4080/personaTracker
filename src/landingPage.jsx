import { useState } from 'react'
import App from './App.jsx'
import './landingPage.css'

function LandingPage() {
  const [currentPage, setCurrentPage] = useState('landing')

  // Currently a temp page for testing flipping back and forth on pages
  if (currentPage === 'temp') {
    return (
      <div>
        <button onClick={() => setCurrentPage('landing')}>← Back Home</button>
        <App />
      </div>
    )
  }
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
      <div></div>
    )
  }


  // Landing Page
  return (
    <>
      <section id="center">
        <h1>Persona Tracker</h1>
        <h3>Persona Tracker is your all in one companion that makes planning and understanding the Persona games easy</h3>
        <button onClick={() => setCurrentPage('landing')} className="hover:text-red-500">Home</button>
        <button onClick={() => setCurrentPage('temp')} className="hover:text-red-500">Temp</button>

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
      </section>
      <section id="spacer"></section>
    </>
  )
}

export default LandingPage