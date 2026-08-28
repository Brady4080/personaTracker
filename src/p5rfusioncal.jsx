import { useNavigate } from 'react-router-dom'
import { useState, useMemo } from 'react';
import './p5rfusioncal.css'

import { rarePersonaeRoyal, rareCombosRoyal, arcana2CombosRoyal, specialCombosRoyal, dlcPersonaRoyal, inheritanceChartRoyal } from '../data/p5r/Data5Royal'
import { itemMapRoyal } from '../data/p5r/ItemDataRoyal'
import { personaMapRoyal } from '../data/p5r/PersonaDataRoyal'
import { skillMapRoyal } from '../data/p5r/SkillDataRoyal'


function P5RFusion() {
    const navigate = useNavigate()
    const [sortConfig, setSortConfig] = useState({ key: 'level', direction: 'asc' });

    // Convert map object into a flat array for easier sorting & mapping
    const personaList = useMemo(() => {
        return Object.entries(personaMapRoyal).map(([name, data]) => ({
        name,
        ...data,
        }));
    }, []);

    // Handle sorting logic when user clicks a header
    const sortedPersonas = useMemo(() => {
        const sorted = [...personaList];
        sorted.sort((a, b) => {
        let aValue = a[sortConfig.key];
        let bValue = b[sortConfig.key];

        // Handle null/undefined values gracefully
        if (aValue === undefined || aValue === null) aValue = '';
        if (bValue === undefined || bValue === null) bValue = '';

        if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
        });
        return sorted;
    }, [personaList, sortConfig]);

    const requestSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
        direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const getSortIndicator = (key) => {
        if (sortConfig.key !== key) return '';
        return sortConfig.direction === 'asc' ? ' ▲' : ' ▼';
    };

    return (
        <div>
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

            <div className="table-container">
      <table className="p5rFusionTable">
        <thead>
          <tr>
            <th onClick={() => requestSort('level')}>Level{getSortIndicator('level')}</th>
            <th onClick={() => requestSort('name')}>Name{getSortIndicator('name')}</th>
            <th onClick={() => requestSort('arcana')}>Arcana{getSortIndicator('arcana')}</th>
            <th onClick={() => requestSort('inherits')}>Inherits{getSortIndicator('inherits')}</th>
            <th>St</th>
            <th>Ma</th>
            <th>En</th>
            <th>Ag</th>
            <th>Lu</th>
            <th onClick={() => requestSort('area')}>Location{getSortIndicator('area')}</th>
          </tr>
        </thead>
        <tbody>
          {sortedPersonas.map((persona) => (
            <tr key={persona.name}>
              <td className="center-text">{persona.level}</td>
              <td className="persona-name">{persona.name}</td>
              <td>{persona.arcana}</td>
              <td>{persona.inherits}</td>
              <td className="center-text">{persona.stats?.[0] ?? '-'}</td>
              <td className="center-text">{persona.stats?.[1] ?? '-'}</td>
              <td className="center-text">{persona.stats?.[2] ?? '-'}</td>
              <td className="center-text">{persona.stats?.[3] ?? '-'}</td>
              <td className="center-text">{persona.stats?.[4] ?? '-'}</td>
              <td>{persona.area || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
        </div>
    )
}

export default P5RFusion