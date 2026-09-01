import { useState } from 'react'
import './p5r.css'
import P5Rnav from '../personaAll/personaCompents'
import { useLocalStorage } from '../hooks/useLocalStorage'

function P5R() {
  const ROYAL_REQUIREMENTS = {
    maruki: { req: 9, deadline: 'Nov 17' },
    akechi: { req: 8, deadline: 'Nov 17' },
    kasumi: { req: 5, deadline: 'Dec 18' },
  }

  // Social Stats start at Rank 1 in P5R
  const STAT_MAX = 5
  const [stats, setStats] = useLocalStorage('p5r_social_stats', {
    knowledge: 1,
    guts: 1,
    proficiency: 1,
    kindness: 1,
    charm: 1,
  })

  // Royal Trio Confidants
  const CONFIDANT_MAX = 10
  const [royal, setRoyal] = useLocalStorage('p5r_royal_confidants', {
    maruki: 1,
    akechi: 1,
    kasumi: 1,
  })

  const updateStat = (key, delta) => {
    setStats((prev) => ({
      ...prev,
      [key]: Math.min(STAT_MAX, Math.max(1, prev[key] + delta)),
    }))
  }

  // Helper to safely update confidant rank within [1, maxRank]
  const updateRoyal = (key, delta) => {
    setRoyal((prev) => ({
      ...prev,
      [key]: Math.min(CONFIDANT_MAX, Math.max(1, prev[key] + delta)),
    }))
  }

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
                  <button
                    className="p5r-btn"
                    onClick={() => updateStat(stat, -1)}
                    disabled={level <= 1}
                  >
                    -
                  </button>
                  <span className="stat-level">Lvl. {level}</span>
                  <button
                    className="p5r-btn"
                    onClick={() => updateStat(stat, 1)}
                    disabled={level >= STAT_MAX}
                  >
                    +
                  </button>
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
                    <span className="req-name">{key}</span>
                    <span
                      className={`req-target-badge ${
                        isReqMet ? 'met' : 'pending'
                      }`}
                    >
                      (Need Rank {req} by {deadline})
                    </span>
                  </div>

                  <div className="req-controls">
                    <button
                      className="p5r-btn"
                      onClick={() => updateRoyal(key, -1)}
                      disabled={rank <= 1}
                    >
                      -
                    </button>
                    <span className="req-progress">
                      {rank} / {CONFIDANT_MAX}
                    </span>
                    <button
                      className="p5r-btn"
                      onClick={() => updateRoyal(key, 1)}
                      disabled={rank >= CONFIDANT_MAX}
                    >
                      +
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default P5R