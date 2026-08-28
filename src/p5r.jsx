import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './p5r.css'

function P5R() {
  const navigate = useNavigate()

  // Social Stats start at Rank 1 in P5R
  const [stats, setStats] = useState({
    knowledge: 1,
    guts: 1,
    proficiency: 1,
    kindness: 1,
    charm: 1,
  })

  // Royal Trio Confidants
  const [royal, setRoyal] = useState({
    maruki: 1, // Max Rank 9 needed by Nov 17
    akechi: 1, // Max Rank 8 needed by Nov 17
    kasumi: 1, // Max Rank 5 needed by Dec 18
  })

  return (
    <div className="p5r-wrapper">
      <nav className="p5r-navbar">
        <button className="nav-btn" onClick={() => navigate('/')} title="Back to Home">
          <div className="logo-stacked">
            <span className="logo-persona-sm">PERSONA</span>
            <span className="logo-tracker-sm">TRACKER</span>
          </div>
        </button>

        <div className='nav-links'>
          <button className="nav-btn" onClick={() => navigate('/p5r')} title="P5R Home">
            <span className="nav-buttons">Home</span>
          </button>
          <button className="nav-btn" onClick={() => navigate('/p5r')} title="P5R Home">
            <span className="nav-buttons">Confidants</span>
          </button> 
          <button className="nav-btn" onClick={() => navigate('/p5r')} title="P5R Home">
            <span className="nav-buttons">Gear Guide</span>
          </button>
          <button className="nav-btn" onClick={() => navigate('/p5rfusion')} title="P5R Home">
            <span className="nav-buttons">Fusion Calculator</span>
          </button>
        </div>
      </nav>

      <div className="p5r-dashboard-summary">
        {/* Social Stats Tracker Card */}
        <div className="p5r-socialstats-card">
          <h3 className="widget-title">Social Stats</h3>
          <div className="stats-grid">
            {Object.entries(stats).map(([stat, level]) => (
              <div key={stat} className={`stat-row stat-${stat}`}>
                <span className="stat-name">{stat}</span>
                <span className="stat-level">Lvl. {level}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Royal Prerequisites Checklist */}
        <div className="p5r-royalcheck-card">
          <div className="widget-header">
            <h3 className="widget-title">Royal Checklist</h3>
            <span className="deadline-badge">Deadline: Nov 17</span>
          </div>
          
          <div className="royal-requirements">
            <div className="req-row">
              <span className="req-name">Maruki (Counselor)</span>
              <span className="req-progress">{royal.maruki} / 9</span>
            </div>
            <div className="req-row">
              <span className="req-name">Akechi (Justice)</span>
              <span className="req-progress">{royal.akechi} / 8</span>
            </div>
            <div className="req-row">
              <span className="req-name">Kasumi (Faith)</span>
              <span className="req-progress">{royal.kasumi} / 5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default P5R