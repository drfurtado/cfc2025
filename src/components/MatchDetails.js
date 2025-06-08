import React, { useContext } from 'react';
import './MatchDetails.css';
import { VideoContext } from '../App';

const MatchDetails = ({ match }) => {
  // Get video context for handling YouTube videos
  const { openVideoOverlay } = useContext(VideoContext);
  
  // Helper function to format date
  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split('/');
    const date = new Date(year, month - 1, day);
    
    // Format: "10 de maio de 2025"
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
  };
  
  // Helper function to determine logo path
  const getTeamLogoPath = (team) => {
    if (team === 'Classe FC') return '/images/match-logos/classefc.svg';
    if (team === 'São Paulo') return '/images/match-logos/spaulinho.png';
    if (team === 'Os Malas') return '/images/match-logos/generic.png';
    if (team === 'União R.') return '/images/match-logos/uniao-r.png';
    if (team === 'Tricolor') return '/images/match-logos/tricolor-new.png';
    if (team === 'Grêmio VR') return '/images/match-logos/generic.png';
    if (team === 'Cometa') return '/images/match-logos/cometa-new.png';
    return '/images/match-logos/generic.png';
  };
  
  // Helper function to get match image path
  const getMatchImagePath = (dateString) => {
    // Convert DD/MM/YYYY to YYYYMMDD format
    const parts = dateString.split('/');
    if (parts.length !== 3) return '/images/team2025-1.jpg';
    
    const year = parts[2];
    const month = parts[1];
    const day = parts[0];
    
    return `/images/matches/${year}${month}${day}.jpeg`;
  };

  // Default gallery link if none is provided
  const galleryLink = match.galleryLink || "https://photos.app.goo.gl/eEtN7P4URQBxEXir6";
  
  // Video watching with overlay
  const handleWatchVideo = (e) => {
    e.preventDefault();
    
    if (!match.videoUrl) {
      alert('Vídeo não disponível para esta partida.');
    } else {
      // Try using the context first, fall back to direct open if context not available
      if (typeof openVideoOverlay === 'function') {
        openVideoOverlay(match.videoUrl);
      } else {
        // Direct approach as fallback
        const videoUrl = match.videoUrl.includes('youtu.be/') 
          ? match.videoUrl.replace('youtu.be/', 'youtube.com/embed/') 
          : match.videoUrl;
        window.open(videoUrl, '_blank');
      }
    }
  };

  // Group goals by home and away teams
  const homeScorers = match.highlights ? match.highlights
    .filter(h => h.type === 'goal' && h.team.toLowerCase() === match.homeTeam.toLowerCase())
    .map((goal, index) => (
      <div key={`home-${index}`} className="scorer-item">
        <i className="fas fa-futbol"></i>
        <span className="scorer-time">{goal.player} (aos {goal.time}')</span>
      </div>
    )) : [];

  const awayScorers = match.highlights ? match.highlights
    .filter(h => h.type === 'goal' && (
      h.team.toLowerCase() === match.awayTeam.toLowerCase() ||
      (match.awayTeam === 'Classe FC' && h.team.toLowerCase() === 'classe')
    ))
    .map((goal, index) => (
      <div key={`away-${index}`} className="scorer-item">
        <i className="fas fa-futbol"></i>
        <span className="scorer-time">{goal.player} (aos {goal.time}')</span>
      </div>
    )) : [];

  return (
    <div className="match-details">
      {/* Header with tournament name and stage + date/time/location info */}
      <div className="match-header-blue">
        <h3 className="header-title">{match.tournament}</h3>
        <p className="header-stage">{match.stage}</p>
        
        <div className="date-time-info">
          <div className="date-info">
            <i className="far fa-calendar-alt"></i> {formatDate(match.date)}
          </div>
          <div className="time-info">
            <i className="far fa-clock"></i> {match.time}
          </div>
          <div className="location-info">
            <i className="fas fa-map-marker-alt"></i> {match.location}
          </div>
        </div>
      </div>
      
      {/* Teams and score */}
      <div className="match-teams-score">
        <div className="match-team-wrapper">
          <div className="team-home">
            <div className="team-logo-container">
              <img src={getTeamLogoPath(match.homeTeam)} alt={match.homeTeam} className="team-logo" />
            </div>
            <h4 className="team-name">{match.homeTeam}</h4>
          </div>
          
          <div className="match-score-display">
            <div>
              <div className="score-number">{match.homeScore}</div>
              <div className="score-separator">:</div>
              <div className="score-number">{match.awayScore}</div>
            </div>
            <div className="match-status-text">FINALIZADO</div>
          </div>
          
          <div className="team-away">
            <div className="team-logo-container">
              <img src={getTeamLogoPath(match.awayTeam)} alt={match.awayTeam} className="team-logo" />
            </div>
            <h4 className="team-name">{match.awayTeam}</h4>
          </div>
        </div>
      </div>
      
      {/* Goal Scorers Section */}
      <div className="match-scorers-section">
        <div className="home-team-scorers">
          {homeScorers.length > 0 ? homeScorers : <div className="no-goals">-</div>}
        </div>
        
        <div className="away-team-scorers">
          {awayScorers.length > 0 ? awayScorers : <div className="no-goals">-</div>}
        </div>
      </div>
      
      {/* Team Photo Section */}
      <div className="team-photo-section">
        <img 
          src={getMatchImagePath(match.date)} 
          alt={`Partida ${match.homeTeam} x ${match.awayTeam} - ${match.date}`} 
          className="team-photo"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/images/team2025-1.jpg";
          }}
        />
        {match.videoUrl && (
          <div className="photo-video-overlay">
            <a 
              href="#" 
              className="play-button"
              onClick={handleWatchVideo}
            >
              <i className="fas fa-play"></i>
            </a>
          </div>
        )}
      </div>
      
      {/* Action Buttons */}
      <div className="match-action-buttons">
        {match.videoUrl && (
          <a 
            href="#"
            onClick={handleWatchVideo}
            className="action-button watch-video"
          >
            <i className="fas fa-play"></i> Assistir Partida
          </a>
        )}
        
        <a 
          href={galleryLink} 
          target="_blank"
          rel="noopener noreferrer"
          className="action-button view-photos"
        >
          <i className="fas fa-images"></i> Ver Fotos
        </a>
      </div>
    </div>
  );
};

export default MatchDetails;
