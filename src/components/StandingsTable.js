import React, { useState, useEffect } from 'react';
import './StandingsTable.css';

const StandingsTable = ({ standings, lastUpdated }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  // Responsive handler for window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="standings-container">
      <div className="standings-header">
        <h3 style={{ color: 'white' }}>Classificação</h3>
        <span className="last-updated">Atualizado em: {lastUpdated}</span>
      </div>
      
      <div className="standings-table-container">
        <table className="standings-table">
          <thead>
            <tr>
              <th className="pos-col">#</th>
              <th className="team-col">TIME</th>
              <th className="pts-col">P</th>
              <th className="stats-col">J</th>
              <th className="stats-col">V</th>
              <th className="stats-col">E</th>
              <th className="stats-col">D</th>
              <th className="stats-col">GP</th>
              <th className="stats-col">GC</th>
              <th className="stats-col">SG</th>
            </tr>
          </thead>
          <tbody>
            {standings.map((team, index) => (
              <tr key={index} className={index < 4 ? 'qualification-zone' : ''}>
                <td className="pos-col">{team.position}</td>
                <td className="team-col">{isMobile && team.name.length > 10 
                  ? team.name.substring(0, 9) + '.' 
                  : team.name}</td>
                <td className="pts-col">{team.points}</td>
                <td className="stats-col">{team.played}</td>
                <td className="stats-col">{team.wins}</td>
                <td className="stats-col">{team.draws}</td>
                <td className="stats-col">{team.losses}</td>
                <td className="stats-col">{team.goalsFor}</td>
                <td className="stats-col">{team.goalsAgainst}</td>
                <td className="stats-col">{team.goalsFor - team.goalsAgainst}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StandingsTable;
