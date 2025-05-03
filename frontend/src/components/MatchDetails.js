import React from 'react';
import './MatchDetails.css';

const MatchDetails = ({ match }) => {
  // Helper function to format date
  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('/');
    const date = new Date(year, month - 1, day);
    
    // Format: "2 de Maio, 2025"
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
  };
  
  // Helper function to get team logo
  const getTeamLogo = (teamName) => {
    // Replace with actual logic to get team logos
    const teamLogos = {
      'Classe FC': '/images/teams/classe-fc-logo.png',
      'S. Paulinho': '/images/teams/s-paulinho-logo.png',
      'Cometa': '/images/teams/cometa-logo.png',
      'Os Malas': '/images/teams/os-malas-logo.png',
      'Tricolor': '/images/teams/tricolor-logo.png',
      'União Ribeirão': '/images/teams/uniao-ribeirao-logo.png',
      'Unidos do CIC': '/images/teams/unidos-cic-logo.png'
    };
    
    return teamLogos[teamName] || '/images/teams/default-logo.png';
  };
  
  // Determine match result badge
  const getMatchResult = () => {
    if (match.status !== 'completed') return null;
    
    if (match.homeScore > match.awayScore) {
      return match.homeTeam === 'Classe FC' ? 'Vitória' : 'Derrota';
    } else if (match.homeScore < match.awayScore) {
      return match.awayTeam === 'Classe FC' ? 'Vitória' : 'Derrota';
    } else {
      return 'Empate';
    }
  };
  
  const matchResult = getMatchResult();

  // Helper function to determine logo path
  const getTeamLogoPath = (team) => {
    if (team === 'Classe FC') return '/images/match-logos/classefc.svg';
    if (team === 'S. Paulinho') return '/images/match-logos/spaulinho.png';
    return '/images/match-logos/generic.png';
  };

  // Helper function to get result text
  const getResultText = () => {
    if (matchResult === 'Vitória') return 'Vitória';
    if (matchResult === 'Derrota') return 'Derrota';
    return 'Empate';
  };

  return (
    <div className="match-details">
      <div className="match-details-header">
        <div className="tournament-info">
          <div className="tournament-name">{match.tournament}</div>
          {match.stage && <div className="tournament-stage">{match.stage}</div>}
        </div>
        
        {matchResult && (
          <div className={`match-result-badge ${matchResult.toLowerCase()}`}>
            {matchResult}
          </div>
        )}
      </div>
      
      <div className="match-info-bar">
        <div className="match-date-location">
          <div className="match-date-time">
            <i className="far fa-calendar-alt"></i> {formatDate(match.date)} • <i className="far fa-clock"></i> {match.time}
          </div>
          <div className="match-location"><i className="fas fa-map-marker-alt"></i> {match.location}</div>
        </div>
      </div>
      
      <div className="match-details-main">
        <div className="teams-score-container">
          <div className="teams-row">
            <span className="team-name home-team">{match.homeTeam}</span>
            <span className="versus">x</span>
            <span className="team-name away-team">{match.awayTeam}</span>
          </div>
          
          <div className="horizontal-match-container">
            <div className="team-horizontal">
              <img src={getTeamLogoPath(match.homeTeam)} alt={match.homeTeam} className="team-logo" />
              <div className="score">{match.homeScore}</div>
            </div>
            
            <div className="match-status-container">
              <div className="match-status">FINALIZADO</div>
            </div>
            
            <div className="team-horizontal away-team-horizontal">
              <div className="score away-score">{match.awayScore}</div>
              <img src={getTeamLogoPath(match.awayTeam)} alt={match.awayTeam} className="team-logo" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Goal Scorers Section */}
      <div className="match-scorers">
        <div className="scorers-container">
          <div className="team-scorers home-scorers">
            {match.highlights && match.highlights
              .filter(h => h.type === 'goal' && h.team.toLowerCase() === match.homeTeam.toLowerCase())
              .map((goal, index) => (
                <div key={`home-${index}`} className="scorer-item">
                  <span className="scorer-name">{goal.player}</span>
                  <i className="fas fa-futbol"></i>
                </div>
              ))
            }
          </div>
          
          <div className="team-scorers away-scorers">
            {match.highlights && match.highlights
              .filter(h => h.type === 'goal' && (
                h.team.toLowerCase() === match.awayTeam.toLowerCase() || 
                (match.awayTeam === 'Classe FC' && h.team.toLowerCase() === 'classe')
              ))
              .map((goal, index) => (
                <div key={`away-${index}`} className="scorer-item">
                  <i className="fas fa-futbol"></i>
                  <span className="scorer-name">{goal.player}</span>
                </div>
              ))
            }
            {/* Fallback for Lucio if no goals found */}
            {match.awayTeam === 'Classe FC' && (!match.highlights || 
              !match.highlights.some(h => 
                h.type === 'goal' && 
                (h.team.toLowerCase() === 'classe fc' || h.team.toLowerCase() === 'classe')
              )) && (
              <div className="scorer-item">
                <i className="fas fa-futbol"></i>
                <span className="scorer-name">Lucio</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {match.stats && match.showStats && (
        <div className="match-stats">
          <h4 className="stats-title">Estatísticas da Partida</h4>
          
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-value home">{match.stats.possession.home}%</div>
              <div className="stat-label">Posse de Bola</div>
              <div className="stat-value away">{match.stats.possession.away}%</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-value home">{match.stats.shots.home}</div>
              <div className="stat-label">Finalizações</div>
              <div className="stat-value away">{match.stats.shots.away}</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-value home">{match.stats.shotsOnTarget.home}</div>
              <div className="stat-label">Finalizações no Gol</div>
              <div className="stat-value away">{match.stats.shotsOnTarget.away}</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-value home">{match.stats.corners.home}</div>
              <div className="stat-label">Escanteios</div>
              <div className="stat-value away">{match.stats.corners.away}</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-value home">{match.stats.fouls.home}</div>
              <div className="stat-label">Faltas</div>
              <div className="stat-value away">{match.stats.fouls.away}</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-value home">{match.stats.yellowCards.home}</div>
              <div className="stat-label">Cartões Amarelos</div>
              <div className="stat-value away">{match.stats.yellowCards.away}</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-value home">{match.stats.redCards.home}</div>
              <div className="stat-label">Cartões Vermelhos</div>
              <div className="stat-value away">{match.stats.redCards.away}</div>
            </div>
          </div>
        </div>
      )}
      
      {match.videoUrl && (
        <div className="match-video">
          <a 
            href={match.videoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="video-link"
          >
            <i className="fas fa-play-circle"></i> Assistir Vídeo da Partida
          </a>
        </div>
      )}
    </div>
  );
};

export default MatchDetails;
