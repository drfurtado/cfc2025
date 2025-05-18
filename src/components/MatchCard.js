import React, { useContext } from 'react';
import './MatchCard.css';
import { VideoContext } from '../App';

const MatchCard = ({ match, onVideoClick, onDetailsClick }) => {
  // Get video context for direct access when onVideoClick is not provided
  const { openVideoOverlay } = useContext(VideoContext);
  // Format date to display as DD/MM/YYYY
  const formatShortDate = (dateString) => {
    if (!dateString) return '';
    return dateString.replace(/(\d+)\/(\d+)\/(\d+)/, '$1/$2/$3');
  };

  // Helper function to determine logo path
  const getTeamLogoPath = (team) => {
    if (team === 'Classe FC') return '/images/match-logos/classefc.svg';
    if (team === 'São Paulo') return '/images/match-logos/spaulinho.png';
    if (team === 'Os Malas') return '/images/match-logos/generic.png';
    if (team === 'União R.') return '/images/match-logos/generic.png';
    if (team === 'TRICOLOR') return '/images/match-logos/tricolor.png';
    if (team === 'GRÊMIO VR') return '/images/match-logos/gremiovr.png';
    if (team === 'COMETA') return '/images/match-logos/cometa.png';
    return '/images/match-logos/generic.png';
  };
  
  // Format goal time to be more readable
  const formatGoalTime = (goalTime) => {
    if (!goalTime) return '';
    return `${goalTime}'`;
  };
  
  // Group goals by player and create formatted display string
  const formatScorersCompact = (scorers) => {
    // Group goals by player name
    const playerGoals = {};
    
    scorers.forEach(scorer => {
      if (!playerGoals[scorer.player]) {
        playerGoals[scorer.player] = [];
      }
      playerGoals[scorer.player].push(scorer.time);
    });
    
    // Convert to array of player strings with their goal times
    const formattedScorers = Object.entries(playerGoals).map(([player, times]) => {
      const sortedTimes = [...times].sort((a, b) => a - b);
      const formattedTimes = sortedTimes.map(time => `${time}'`).join(', ');
      return {
        player,
        formattedString: `${player} (${formattedTimes})`
      };
    });

    // Return both the individual player objects and a combined single-line string
    return {
      scorerList: formattedScorers,
      combinedString: formattedScorers.map(s => s.formattedString).join('; ')
    };
  };

  // Get goal scorers
  const homeScorers = match.highlights ? match.highlights
      .filter(h => h.type === 'goal' && h.team.toLowerCase() === match.homeTeam.toLowerCase())
      .map(goal => ({ 
        player: goal.player, 
        time: goal.time
      })) : [];

  const awayScorers = match.highlights ? match.highlights
      .filter(h => h.type === 'goal' && (
        h.team.toLowerCase() === match.awayTeam.toLowerCase() ||
        (match.awayTeam === 'Classe FC' && h.team.toLowerCase() === 'classe')
      ))
      .map(goal => ({ 
        player: goal.player,
        time: goal.time
      })) : [];
      
  // Format scorers into compact strings
  const formattedHomeScorers = formatScorersCompact(homeScorers);
  const formattedAwayScorers = formatScorersCompact(awayScorers);

  return (
    <div className={`match-card-compact ${match.status === 'upcoming' ? 'upcoming' : ''}`}>
      {/* Tournament header with blue background */}
      <div className="match-header-compact">
        <div className="tournament-info-compact">
          <div className="tournament-name-compact">{match.tournament}</div>
          <div className="tournament-stage-compact">{match.stage}</div>
        </div>
        
        <div className="match-date-info">
          <div><i className="far fa-calendar-alt"></i> {formatShortDate(match.date)}</div>
          <div><i className="far fa-clock"></i> {match.time}</div>
          <div><i className="fas fa-map-marker-alt"></i> {match.location}</div>
        </div>
      </div>
      
      {/* Teams and score in the center - updated with team logos above team names */}
      <div className="calendar-match" style={{margin: '20px 0'}}>
        <div className="match-teams" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <div className="team" style={{flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px'}}>
              <img 
                src={getTeamLogoPath(match.homeTeam)} 
                alt={`${match.homeTeam} logo`} 
                style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'contain'}}
              />
            </div>
            <span style={{fontWeight: 600, fontSize: '0.9rem', color: '#212529', textAlign: 'center'}}>{match.homeTeam}</span>
          </div>
          <div className="vs" style={{margin: '0 18px', color: match.status === 'completed' ? '#212529' : '#0d6efd', fontWeight: 700, fontSize: '1.1rem', background: match.status === 'completed' ? 'transparent' : 'rgba(13,110,253,0.08)', borderRadius: 20, padding: '6px 18px'}}>
            {match.status === 'completed' ? `${match.homeScore} : ${match.awayScore}` : 'VS'}
          </div>
          <div className="team" style={{flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px'}}>
              <img 
                src={getTeamLogoPath(match.awayTeam)} 
                alt={`${match.awayTeam} logo`} 
                style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'contain'}}
              />
            </div>
            <span style={{fontWeight: 600, fontSize: '0.9rem', color: '#212529', textAlign: 'center'}}>{match.awayTeam}</span>
          </div>
        </div>
        <div className={`match-status-compact${match.status === 'upcoming' ? ' upcoming' : ''}`} style={{textAlign: 'center', marginTop: 16, color: match.status === 'upcoming' ? '#0d6efd' : '#6c757d', fontWeight: 600, fontSize: '0.9rem'}}>
          {match.status === 'completed' ? 'FINALIZADO' : 'EM BREVE'}
        </div>
      </div>
      
      {/* Goal scorers have been removed from compact cards and will only show in details view */}
      
      {/* Action buttons */}
      <div className="match-actions-compact">
        {match.status === 'completed' && match.videoUrl && (
          <button
            onClick={() => {
              if (onVideoClick) {
                onVideoClick(match.videoUrl);
              } else if (openVideoOverlay) {
                openVideoOverlay(match.videoUrl);
              } else {
                window.open(match.videoUrl, '_blank');
              }
            }} 
            className="action-button-compact video-button"
            aria-label="Assistir jogo"
          >
            <i className="fas fa-play"></i> Assistir Jogo
          </button>
        )}
        
        {match.status === 'upcoming' && (
          <a 
            href="https://www.youtube.com/@vinitvcwb/streams" 
            target="_blank" 
            rel="noopener noreferrer"
            className="action-button-compact video-button"
            aria-label="Assistir ao vivo"
          >
            <i className="fab fa-youtube"></i> Assistir ao Vivo
          </a>
        )}
        
        <button 
          className="action-button-compact stats-button"
          onClick={() => onDetailsClick && onDetailsClick(match)}
          aria-label="Ver detalhes do jogo"
        >
          <i className="fas fa-info-circle"></i> Detalhes
        </button>
      </div>
    </div>
  );
};

export default MatchCard;
