import React from 'react';
import './MatchDetails.css';

const MatchDetails = ({ match }) => {
  // Helper function to determine result class
  const getResultClass = () => {
    if (match.homeTeam === 'Classe FC') {
      if (match.homeScore > match.awayScore) return 'win';
      if (match.homeScore < match.awayScore) return 'loss';
      return 'draw';
    } else {
      if (match.homeScore < match.awayScore) return 'win';
      if (match.homeScore > match.awayScore) return 'loss';
      return 'draw';
    }
  };

  // Helper function to get result text
  const getResultText = () => {
    const resultClass = getResultClass();
    if (resultClass === 'win') return 'Vitória';
    if (resultClass === 'loss') return 'Derrota';
    return 'Empate';
  };

  // Helper to determine logo path
  const getTeamLogo = (team) => {
    if (team === 'Classe FC') return '/images/match-logos/classefc.svg';
    if (team === 'S. Paulinho') return '/images/match-logos/spaulinho.png';
    return '/images/match-logos/generic.png';
  };

  // Format date for display
  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('/');
    const date = new Date(`${year}-${month}-${day}`);
    
    // Format to display like "26 de Abril, 2025"
    const months = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 
      'Maio', 'Junho', 'Julho', 'Agosto', 
      'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];
    
    return `${date.getDate()} de ${months[date.getMonth()]}, ${date.getFullYear()}`;
  };

  return (
    <div className="match-details">
      <div className="match-details-header">
        <div className="match-tournament">
          <div className="tournament-badge">
            <span className="tournament-name">{match.tournament}</span>
            <span className="tournament-stage">{match.stage}</span>
          </div>
        </div>
        
        <div className={`match-result-badge ${getResultClass()}`}>
          {getResultText()}
        </div>
      </div>
      
      <div className="match-details-main">
        <div className="match-teams-container">
          <div className="team-column">
            <img src={getTeamLogo(match.homeTeam)} alt={match.homeTeam} className="team-logo-large" />
            <h3 className="team-name">{match.homeTeam}</h3>
            <div className="score">{match.homeScore}</div>
          </div>
          
          <div className="match-info-column">
            <div className="match-date-formatted">{formatDate(match.date)}</div>
            <div className="match-time">{match.time}</div>
            <div className="match-location">
              <i className="fas fa-map-marker-alt"></i> {match.location}
            </div>
            <div className="match-status">FINALIZADO</div>
          </div>
          
          <div className="team-column">
            <img src={getTeamLogo(match.awayTeam)} alt={match.awayTeam} className="team-logo-large" />
            <h3 className="team-name">{match.awayTeam}</h3>
            <div className="score">{match.awayScore}</div>
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
          
          <div className="stats-note">
            <p><i className="fas fa-info-circle"></i> Estatísticas baseadas na transcrição do vídeo da partida. Valores podem apresentar pequenas variações.</p>
          </div>
        </div>
      )}
      
      {match.highlights && match.showHighlights && (
        <div className="match-highlights">
          <h4 className="highlights-title">Momentos Importantes</h4>
          <div className="timeline">
            {match.highlights.map((highlight, index) => (
              <div key={index} className={`timeline-item ${highlight.team.toLowerCase()}`}>
                <div className="timeline-time">{highlight.time}'</div>
                <div className="timeline-icon">
                  {highlight.type === 'goal' && <i className="fas fa-futbol"></i>}
                  {highlight.type === 'yellow-card' && <div className="card yellow"></div>}
                  {highlight.type === 'red-card' && <div className="card red"></div>}
                  {highlight.type === 'substitution' && <i className="fas fa-exchange-alt"></i>}
                </div>
                <div className="timeline-content">
                  <div className="timeline-player">{highlight.player}</div>
                  <div className="timeline-description">{highlight.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {match.gallery && match.gallery.length > 0 && (
        <div className="match-gallery">
          <h4 className="gallery-title">Galeria de Fotos</h4>
          <div className="gallery-grid">
            {match.gallery.map((image, index) => (
              <div key={index} className="gallery-item">
                <img src={image.url} alt={image.alt || `Imagem ${index + 1}`} />
              </div>
            ))}
          </div>
          {match.galleryLink && (
            <div className="gallery-more-link">
              <a href={match.galleryLink} target="_blank" rel="noopener noreferrer" className="btn-gallery-more">
                <i className="fas fa-images"></i> Ver mais fotos
              </a>
            </div>
          )}
        </div>
      )}
      
      {match.videoUrl && (
        <div className="match-video">
          <h4 className="video-title">Vídeo da Partida</h4>
          <div className="video-container">
            <iframe 
              src={match.videoUrl} 
              title="Match Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default MatchDetails;
