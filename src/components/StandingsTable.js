import React from 'react';
import './StandingsTable.css';

const StandingsTable = ({ standings, lastUpdated }) => {
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
              <th className="team-col">Time</th>
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
                <td className="team-col">{team.name}</td>
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
      
      {/* Legend removed to prevent it looking like part of the table */}
    </div>
  );
};

export default StandingsTable;
