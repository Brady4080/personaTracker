import './p5r.css'
import P5Rnav from '../personaAll/personaCompents'
import DailyGuide from './dailyGuide'
import {
  useP5R,
  STAT_MAX,
  CONFIDANT_MAX,
  ROYAL_REQUIREMENTS,
} from './p5rcontext'

function P5R() {
  const { stats, royal, updateStat, updateRoyal } = useP5R()

  return (
    <div className="p5r-wrapper">
      <P5Rnav />

      <div className="p5r-dashboard-summary">
        <div className="p5r-socialstats-card">
          <h3 className="widget-title">Social Stats</h3>
          <div className="stats-grid">
            {Object.entries(stats).map(([stat, level]) => (
              <div key={stat} className={`stat-row stat-${stat}`}>
                <span className="stat-name">{stat}</span>
                <div className="stat-controls">
                  <button className="p5r-btn" onClick={() => updateStat(stat, -1)} disabled={level <= 1}> - </button>
                  <span className="stat-level">Lvl. {level}</span>
                  <button className="p5r-btn" onClick={() => updateStat(stat, 1)} disabled={level >= STAT_MAX}> + </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p5r-royalcheck-card">
          <div className="widget-header">
            <h3 className="widget-title">Royal Ready Check</h3>
          </div>

          <div className="royal-requirements">
            {Object.entries(royal).map(([key, rank]) => {
              const { req, deadline } = ROYAL_REQUIREMENTS[key]
              const isReqMet = rank >= req

              return (
                <div key={key} className="req-row">
                  <div className="req-info">
                    <span className="req-name">{key} </span>
                    <span className={`req-target-badge ${isReqMet ? 'met' : 'pending'}`}>
                      (Need Rank {req} by {deadline})
                    </span>
                  </div>

                  <div className="req-controls">
                    <button className="p5r-btn" onClick={() => updateRoyal(key, -1)} disabled={rank <= 1}> - </button>
                    <span className="req-progress">
                      {rank} / {CONFIDANT_MAX}
                    </span>
                    <button className="p5r-btn" onClick={() => updateRoyal(key, 1)} disabled={rank >= CONFIDANT_MAX}> + </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      
      <DailyGuide />





    </div>
  )
}

export default P5R