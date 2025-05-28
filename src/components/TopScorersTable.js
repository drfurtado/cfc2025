import React from 'react';
import './TopScorersTable.css';

// Helper function to create safe filenames from names (matching the TimePage.js function)
const createSafeFilename = (name) => {
  if (!name) return '';
  return name
    .toLowerCase()
    .replace(/\s+/g, '_') // Replace spaces with underscores
    .replace(/[^a-z0-9_.-]/g, '') // Remove other special characters except underscore, dot, hyphen
    .replace(/\.+/g, '.') // Avoid multiple dots
    + '.png'; // Assume PNG format
};

// Function to generate player image path that specifically maps to headshots
const getPlayerImagePath = (playerName) => {
  // Map player names to their exact headshot file locations
  const headshots = {
    'Batata': '/images/team/headshots/batata_headshot.png',
    'Neno': '/images/team/headshots/neno_headshot.png',
    'Eleandro': '/images/team/headshots/eleandro_headshot.png',
    'Lucio': '/images/team/headshots/lucio_headshot.png',
    'Mineiro': '/images/team/headshots/mineiro_headshot.png',
    'Rildo': '/images/team/headshots/rildo_headshot.png',
    'Zé Eduardo': '/images/team/headshots/ze_eduardo_headshot.png'
  };
  
  // Return the dedicated headshot if available, otherwise fallback to the regular player image
  return headshots[playerName] || `/images/team/players/${createSafeFilename(playerName)}`;
};

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
                <td className="player-col">
                  <div className="player-info">
                    <div className="player-headshot">
                      <img 
                        src={getPlayerImagePath(scorer.name)} 
                        alt={scorer.name}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/images/player-silhouette.svg';
                        }}
                      />
                    </div>
                    <span>{scorer.name}</span>
                  </div>
                </td>
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
