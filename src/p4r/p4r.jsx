import { useNavigate } from 'react-router-dom'
import './p4r.css'

function P4R() {
  const navigate = useNavigate()

  return (
    <div className="p4r-wrapper">
      <nav className="p4r-navbar">
        {/* Compact Home / Logo Button */}
        <button className="nav-logo-btn" onClick={() => navigate('/')} title="Back to Home">
          <div className="logo-stacked">
            <span className="logo-persona-sm">PERSONA</span>
            <span className="logo-tracker-sm">TRACKER</span>
          </div>
        </button>

        {/* You can add your P5R sub-page nav links here later (Confidants, Fusion, etc.) */}
      </nav>
    </div>
  )
}

export default P4R