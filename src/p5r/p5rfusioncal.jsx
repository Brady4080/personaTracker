import { Link } from 'react-router-dom'
import { useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import './p5rfusioncal.css'
import P5Rnav from '../personaAll/personaCompents';
import { personaMapRoyal } from '../../data/p5r/PersonaDataRoyal'


function P5RFusion() {
    const [sortConfig, setSortConfig] = useState({ key: 'level', direction: 'asc' });
    const [searchTerm, setSearchTerm] = useState('');
    
    const personaList = useMemo(() => {
    return Object.entries(personaMapRoyal).map(([name, data]) => ({
        name,
        ...data,
    }));
    }, []);

    // Search function
    const fuse = useMemo(() => {
    return new Fuse(personaList, {
        keys: ['name', 'arcana', 'inherits', 'area'],
        threshold: 0.3, // Lower = stricter exact match, Higher = looser fuzzy match
    });
    }, [personaList]);

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

    // The rest of the search functions
    const filteredPersonas = useMemo(() => {
    if (!searchTerm.trim()) return sortedPersonas;
        return fuse.search(searchTerm).map(result => result.item);
    }, [searchTerm, sortedPersonas, fuse]);

    const sortedAndFilteredPersonas = useMemo(() => {
        const sorted = [...filteredPersonas];
        sorted.sort((a, b) => {
            let aValue = a[sortConfig.key] ?? '';
            let bValue = b[sortConfig.key] ?? '';

            if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
            if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
            return 0;
        });
        return sorted;
    }, [filteredPersonas, sortConfig]);

    return (
        <div>
            <P5Rnav />

            <div className="table-container">
                <div className='searchBox'>
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search persona, arcana, location..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
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
                    {sortedAndFilteredPersonas.map((persona) => (
                        <tr key={persona.name}>
                        <td className="center-text">{persona.level}</td>
                        <td className="persona-name"><Link to={`/persona/${encodeURIComponent(persona.name)}`}>{persona.name}</Link></td>
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