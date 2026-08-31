import { useNavigate } from 'react-router-dom'

function P5Rnav() {
    const navigate = useNavigate()
    return (
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
    )
}

export default P5Rnav