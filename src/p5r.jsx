import { useState } from 'react'
import './p5r.css'
import LandingPage from './landingPage'

function P5R() {
  const [currentPage, setCurrentPage] = useState('landing')

  if (currentPage === 'LandingPage'){
    return (
      <div>
        <LandingPage />
      </div>
    )
}


  // Landing Page
  return (
    <div>
        <nav>
            <button onClick={() => setCurrentPage('LandingPage')}>
                <div className="logo-container mb-4">
                    <span className="logo-persona">PERSONA</span>
                    <span className="logo-tracker">TRACKER</span>
                </div>
            </button>
        </nav>
    </div>
  )
}

export default P5R