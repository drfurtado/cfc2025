import React from 'react';
import './TopScorersTable.css';

const TopScorersTable = ({ scorers, lastUpdated }) => {
  return (
    <div className="scorers-container">
      <div className="scorers-header">
        <h3 style={{ color: 'white' }}>Artilheiros Classe FC</h3>
        <span className="last-updated">Atualizado em: {lastUpdated}</span>
      </div>
      
      <div className="scorers-table-container">
        <table className="scorers-table">
          <thead>
            <tr>
              <th className="pos-col">#</th>
              <th className="player-col">Jogador</th>
              <th className="team-col">Time</th>
              <th className="goals-col">Gols</th>
            </tr>
          </thead>
          <tbody>
            {scorers.map((scorer, index) => (
              <tr key={index} className={index < 3 ? 'top-scorer' : ''}>
                <td className="pos-col">{scorer.position || index + 1}</td>
                <td className="player-col">{scorer.name}</td>
                <td className="team-col">{scorer.team}</td>
                <td className="goals-col">{scorer.goals}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopScorersTable;
