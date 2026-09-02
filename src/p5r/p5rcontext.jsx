import { createContext, useContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const P5RContext = createContext()

export const STAT_MAX = 5
export const CONFIDANT_MAX = 10

export const ROYAL_REQUIREMENTS = {
  maruki: { req: 9, deadline: 'Nov 17' },
  akechi: { req: 8, deadline: 'Nov 17' },
  kasumi: { req: 5, deadline: 'Dec 18' },
}

export function P5RProvider({ children }) {
  const [stats, setStats] = useLocalStorage('p5r_social_stats', {
    knowledge: 1,
    guts: 1,
    proficiency: 1,
    kindness: 1,
    charm: 1,
  })

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

  const updateRoyal = (key, delta) => {
    setRoyal((prev) => ({
      ...prev,
      [key]: Math.min(CONFIDANT_MAX, Math.max(1, prev[key] + delta)),
    }))
  }

  return (
    <P5RContext.Provider
      value={{
        stats,
        setStats,
        royal,
        setRoyal,
        updateStat,
        updateRoyal,
      }}
    >
      {children}
    </P5RContext.Provider>
  )
}

// Custom hook to use across any file
export const useP5R = () => useContext(P5RContext)