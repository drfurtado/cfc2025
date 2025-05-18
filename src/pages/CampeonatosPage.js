import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import './CampeonatosPage.css';
import { 
  getAllTournaments, 
  // getTournamentCalendar, // We will use the component directly
  getTournamentRules, 
  filterTournamentsByStatus, 
  getUpcomingMatches, 
  getRecentMatches,
  getTeamLogo,
  getStandings,
  getStandingsLastUpdated,
  getTopScorers,
  getTopScorersLastUpdated,
  getMatchesByTournament
} from '../data/tournamentDataLoader';
import TournamentRules from '../components/TournamentRules';
import StandingsTable from '../components/StandingsTable';
import TopScorersTable from '../components/TopScorersTable';
import MatchDetails from '../components/MatchDetails';
import TournamentCalendar from '../components/TournamentCalendar'; // Import TournamentCalendar
import { VideoContext } from '../App';

const CampeonatosPage = () => {
  const [activeTab, setActiveTab] = useState('active');
  const [showCalendar, setShowCalendar] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [showStandings, setShowStandings] = useState(false);
  const [showTopScorers, setShowTopScorers] = useState(false);
  const [showMatchDetails, setShowMatchDetails] = useState(false);
  const [selectedTournament, setSelectedTournament] = useState(null);
  const [selectedMatch, setSelectedMatch] = useState(null);
  // Local video overlay state for this page
  const [videoOverlayOpen, setVideoOverlayOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  
  // Get access to the video overlay context
  const { openVideoOverlay } = useContext(VideoContext);
  
  // Get location state (if navigated from HomePage)
  const location = useLocation();
  
  // Local function to handle videos
  const handleOpenVideo = (url) => {
    // Try the context first
    if (typeof openVideoOverlay === 'function') {
      openVideoOverlay(url);
    } else {
      // Fallback to local overlay implementation
      setVideoUrl(url);
      setVideoOverlayOpen(true);
    }
  };

  useEffect(() => {
    // Always show standings for Copa 50tinha
    const copa50tinha = getAllTournaments().find(t => t.id === 1);
    if (copa50tinha) {
      setSelectedTournament(copa50tinha);
    }
    
    // Check if we have a match to display from navigation state
    if (location.state && location.state.showMatchDetails && location.state.match) {
      setSelectedMatch(location.state.match);
      setShowMatchDetails(true);
      // Reset the other view states
      setShowCalendar(false);
      setShowRules(false);
      setShowStandings(false);
      setShowTopScorers(false);
      
      // Scroll to match details section after rendering
      setTimeout(() => {
        const matchDetailsSection = document.getElementById('match-details-section');
        if (matchDetailsSection) {
          matchDetailsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location.state]);

  // Get tournament data from the data loader
  const tournaments = getAllTournaments();
  
  // Get matches data from the data loader
  const upcomingMatches = getUpcomingMatches(3);
  const recentMatches = getRecentMatches(4); // MODIFIED: Fetch 4 recent matches

  // Filter tournaments based on active tab
  const filteredTournaments = filterTournamentsByStatus(activeTab);

  // Helper function to get position class
  const getPositionClass = (position) => {
    if (position === 'Campeão') return 'champion';
    if (position === 'Vice-campeão') return 'runner-up';
    if (position === '3º Lugar') return 'third-place';
    return '';
  };

  // Helper function to get status class and text
  const getStatusInfo = (status) => {
    if (status === 'active') return { class: 'active', text: 'Em andamento' };
    if (status === 'upcoming') return { class: 'upcoming', text: 'Em breve' };
    if (status === 'completed') return { class: 'completed', text: 'Finalizado' };
    return { class: '', text: '' };
  };

  // Handle showing tournament calendar
  const handleShowCalendar = (tournament) => {
    setSelectedTournament(tournament);
    setShowCalendar(true);
    setShowRules(false);
    setShowStandings(false);
    setShowTopScorers(false);
    setShowMatchDetails(false); // Close match details when showing calendar
    // Scroll to the calendar section
    setTimeout(() => {
      const calendarElement = document.getElementById('calendar-section');
      if (calendarElement) {
        calendarElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  // Handle showing tournament rules
  const handleShowRules = (tournament) => {
    setSelectedTournament(tournament);
    setShowRules(true);
    setShowCalendar(false);
    setShowStandings(false);
    setShowTopScorers(false);
    // Scroll to the rules section
    setTimeout(() => {
      document.getElementById('rules-section').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Handle showing standings
  const handleShowStandings = (tournament) => {
    // Do nothing for Copa 50tinha as standings are always shown
    if (tournament.id === 1) return;
    
    setSelectedTournament(tournament);
    setShowStandings(true);
    setShowCalendar(false);
    setShowRules(false);
    setShowTopScorers(false);
    setShowMatchDetails(false);
    // Scroll to the standings section
    setTimeout(() => {
      document.getElementById('standings-section').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Handle showing match details
  const handleShowMatchDetails = (match) => {
    setSelectedMatch(match);
    setShowMatchDetails(true);
    setShowCalendar(false);
    setShowRules(false);
    setShowStandings(false);
    setShowTopScorers(false);
    // Scroll to the match details section
    setTimeout(() => {
      document.getElementById('match-details-section').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Handle showing top scorers
  const handleShowTopScorers = (tournament) => {
    setSelectedTournament(tournament);
    setShowTopScorers(true);
    setShowCalendar(false);
    setShowRules(false);
    setShowStandings(false);
    // Scroll to the top scorers section
    setTimeout(() => {
      document.getElementById('top-scorers-section').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Handle closing tournament details
  const handleCloseDetails = () => {
    setShowCalendar(false);
    setShowRules(false);
    setShowStandings(false);
    setShowTopScorers(false);
    setSelectedTournament(null);
  };

  // Get rules data for the selected tournament
  const getRulesData = (tournamentId) => {
    return getTournamentRules(tournamentId);
  };

  // Get top scorers data for the selected tournament
  const getTopScorersData = (tournamentId) => {
    return getTopScorers(tournamentId);
  };

  // Local video overlay component for fallback
  const LocalVideoOverlay = () => {
    // Add keyboard event listener for Escape key - always call hooks at the top level
    useEffect(() => {
      // Only add listeners and change body style if the overlay is open
      if (videoOverlayOpen) {
        document.body.style.overflow = 'hidden'; // Prevent scrolling when overlay is open
        
        const handleEscape = (e) => {
          if (e.key === 'Escape') {
            setVideoOverlayOpen(false);
          }
        };
        
        document.addEventListener('keydown', handleEscape);
        return () => {
          document.removeEventListener('keydown', handleEscape);
          document.body.style.overflow = ''; // Restore scrolling
        };
      }
    }, [videoOverlayOpen]);
    
    // Early return after all hooks have been called
    if (!videoOverlayOpen) return null;
    
    // Convert YouTube URL formats to embed format
    const getEmbedUrl = (url) => {
      if (!url) return '';
      
      // Handle youtu.be format
      if (url.includes('youtu.be/')) {
        return url.replace('youtu.be/', 'youtube.com/embed/');
      }
      
      // Handle youtube.com/watch?v= format
      if (url.includes('youtube.com/watch?v=')) {
        const videoId = url.split('v=')[1];
        const ampersandPosition = videoId.indexOf('&');
        if (ampersandPosition !== -1) {
          return `https://www.youtube.com/embed/${videoId.substring(0, ampersandPosition)}`;
        }
        return `https://www.youtube.com/embed/${videoId}`;
      }
      
      // If already in embed format or other format, return as is
      return url;
    };
    
    return (
      <div className="global-video-overlay">
        <div className="video-overlay-content">
          <button className="video-overlay-close" onClick={() => setVideoOverlayOpen(false)}>
            <i className="fas fa-times"></i>
          </button>
          <div className="video-container">
            <iframe 
              src={getEmbedUrl(videoUrl)}
              title="YouTube Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="video-overlay-background" onClick={() => setVideoOverlayOpen(false)}></div>
      </div>
    );
  };

  return (
    <div className="campeonatos-page">
      {/* Local fallback video overlay */}
      {videoOverlayOpen && <LocalVideoOverlay />}
      
      <div className="container content-section">
        <div className="page-header text-center">
          <h1 className="page-title">Campeonatos</h1>
          <p className="page-subtitle">
            Acompanhe a trajetória da Classe FC em todos os campeonatos e torneios disputados ao longo de nossa história
          </p>
        </div>
        
        {/* Tabs Navigation */}
        <div className="campeonatos-tabs">
          <button 
            className={`campeonatos-tab ${activeTab === 'active' ? 'active' : ''}`}
            onClick={() => setActiveTab('active')}
          >
            Em Andamento
          </button>
          <button 
            className={`campeonatos-tab ${activeTab === 'completed' ? 'active' : ''}`}
            onClick={() => setActiveTab('completed')}
          >
            Anteriores
          </button>
          <button 
            className={`campeonatos-tab ${activeTab === 'todos' ? 'active' : ''}`}
            onClick={() => setActiveTab('todos')}
          >
            Todos
          </button>
        </div>

        {/* Tournament Rules Section */}
        {showRules && selectedTournament && (
          <div id="rules-section" className="rules-section">
            <div className="section-header">
              <h2 className="section-title">
                {selectedTournament.name} {selectedTournament.year} - Regulamento
              </h2>
              <button 
                onClick={handleCloseDetails} 
                className="btn btn-sm btn-outline-secondary"
              >
                <i className="fas fa-times"></i> Fechar
              </button>
            </div>
            
            {getRulesData(selectedTournament.id) ? (
              <TournamentRules rules={getRulesData(selectedTournament.id)} />
            ) : (
              <div className="no-rules-data">
                <p>Regulamento não disponível para este torneio.</p>
              </div>
            )}
          </div>
        )}

        {/* Tournament Calendar Section */}
        {showCalendar && selectedTournament && (
          <div id="calendar-section" className="calendar-section">
            {/* The header for the calendar section can be simplified or removed if TournamentCalendar has its own title */}
            <div className="section-header">
              <h2 className="section-title">
                {selectedTournament.name} {selectedTournament.year} - Calendário de Jogos
              </h2>
              <button 
                onClick={handleCloseDetails} 
                className="btn btn-sm btn-outline-secondary"
              >
                <i className="fas fa-times"></i> Fechar
              </button>
            </div>
            
            {/* Render the TournamentCalendar component directly */}
            {/* We might need to pass the selectedTournament.id if the calendar component needs to fetch specific data */}
            {/* However, based on the previous change, TournamentCalendar now imports its own data for Copa 50tinha */}
            <TournamentCalendar />
          </div>
        )}

        {/* Standings Section */}
        {showStandings && selectedTournament && (
          <div id="standings-section" className="standings-section">
            <div className="container">
              <div className="section-header">
                <h3>{selectedTournament.name} {selectedTournament.year} - Classificação</h3>
              </div>
              
              {selectedTournament.id === 1 ? (
                <StandingsTable 
                  standings={getStandings(1)} 
                  lastUpdated={getStandingsLastUpdated(1)} 
                />
              ) : (
                <div className="no-standings-data">
                  <p>Classificação não disponível para este torneio.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Top Scorers Section */}
        {showTopScorers && selectedTournament && (
          <div id="top-scorers-section" className="top-scorers-section">
            <div className="container">
              <div className="section-header">
                <h3>{selectedTournament.name} {selectedTournament.year} - Artilharia</h3>
              </div>
              
              {selectedTournament.id === 1 ? (
                <TopScorersTable 
                  scorers={getTopScorers(1)} 
                  lastUpdated={getTopScorersLastUpdated(1)} 
                />
              ) : (
                <div className="no-top-scorers-data">
                  <p>Dados de artilharia não disponíveis para este torneio.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Active Tournament and Standings Grid Layout */}
        {activeTab === 'active' && (
          <h2 className="section-title text-center mb-4">Classificação & Artilharia</h2>
        )}
        
        {/* Active Tournament and Standings Grid Layout */}
        {activeTab === 'active' && (
          <div className="tournament-grid-layout">
            <div className="tournament-info-card">
              {filteredTournaments
                .filter(tournament => tournament.id === 1)
                .map((tournament, index) => (
                  <div className="tournament-card" key={index}>
                    <div className="tournament-header">
                      <div className="tournament-year">{tournament.year}</div>
                      <h3 className="tournament-name">Campeonato Atual</h3>
                    </div>
                    
                    <div className="tournament-body">
                      <div className="tournament-info">
                        <div className="tournament-info-item">
                          <i className="fas fa-map-marker-alt"></i>
                          <span>{tournament.location}</span>
                        </div>
                        <div className="tournament-info-item">
                          <i className="far fa-calendar-alt"></i>
                          <span>{tournament.startDate} - {tournament.endDate}</span>
                        </div>
                        <div className="tournament-info-item">
                          <i className="fas fa-users"></i>
                          <span>{tournament.teams} equipes</span>
                        </div>
                        <div className="tournament-info-item">
                          <i className="fas fa-trophy"></i>
                          <span>{tournament.format}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="tournament-footer">
                      <div className="tournament-status active">
                        Em andamento
                      </div>
                      <div className="tournament-actions">
                        <button 
                          className="btn-action btn-calendar"
                          onClick={() => handleShowCalendar(tournament)}
                          title="Ver Calendário"
                        >
                          <i className="far fa-calendar-alt"></i>
                        </button>
                        
                        {getRulesData(tournament.id) && (
                          <button 
                            className="btn-action btn-rules"
                            onClick={() => handleShowRules(tournament)}
                            title="Ver Regulamento"
                          >
                            <i className="fas fa-gavel"></i>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
              ))}
            </div>
            
            <div className="tournament-stats-cards">
              {/* Standings Card */}
              <div className="standings-card">
                <StandingsTable 
                  standings={getStandings(1)} 
                  lastUpdated={getStandingsLastUpdated(1)} 
                />
              </div>
              
              {/* Top Scorers Card */}
              <div className="top-scorers-card">
                <TopScorersTable 
                  scorers={getTopScorers(1)} 
                  lastUpdated={getTopScorersLastUpdated(1)} 
                />
              </div>
            </div>
          </div>
        )}
        
        {/* Tournaments List */}
        <div className="tournament-list">
          {filteredTournaments
            .filter(tournament => activeTab === 'active' ? tournament.id !== 1 : true)
            .map((tournament, index) => (
            <div className="tournament-card" key={index}>
              <div className="tournament-header">
                <div className="tournament-year">{tournament.year}</div>
                <h3 className="tournament-name">{tournament.name}</h3>
              </div>
              
              <div className="tournament-body">
                <div className="tournament-info">
                  <div className="tournament-info-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{tournament.location}</span>
                  </div>
                  <div className="tournament-info-item">
                    <i className="far fa-calendar-alt"></i>
                    <span>{tournament.startDate} - {tournament.endDate}</span>
                  </div>
                  <div className="tournament-info-item">
                    <i className="fas fa-users"></i>
                    <span>{tournament.teams} equipes</span>
                  </div>
                  <div className="tournament-info-item">
                    <i className="fas fa-trophy"></i>
                    <span>{tournament.format}</span>
                  </div>
                </div>
              </div>
              
              <div className="tournament-footer">
                {tournament.id === 1 ? (
                  <div className="tournament-status">
                    Classificação
                  </div>
                ) : (
                  <div className={`tournament-status ${getStatusInfo(tournament.status).class}`}>
                    {getStatusInfo(tournament.status).text}
                  </div>
                )}
                <div className="tournament-actions">
                  <button 
                    className="btn-action btn-calendar"
                    onClick={() => handleShowCalendar(tournament)}
                    title="Ver Calendário"
                  >
                    <i className="far fa-calendar-alt"></i>
                  </button>
                  
                  {getRulesData(tournament.id) && (
                    <button 
                      className="btn-action btn-rules"
                      onClick={() => handleShowRules(tournament)}
                      title="Ver Regulamento"
                    >
                      <i className="fas fa-gavel"></i>
                    </button>
                  )}
                  {tournament.id !== 1 && (
                    <button 
                      className="btn-action btn-standings"
                      onClick={() => handleShowStandings(tournament)}
                      title="Ver Classificação"
                    >
                      <i className="fas fa-table"></i>
                    </button>
                  )}
                  {tournament.id !== 1 && (
                    <button 
                      className="btn-action btn-top-scorers"
                      onClick={() => handleShowTopScorers(tournament)}
                      title="Ver Artilharia"
                    >
                      <i className="fas fa-star"></i>
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Matches Section - MODIFIED STRUCTURE AND CLASSES */}
        {upcomingMatches.length > 0 && (
          <div className="matches-section">
            <h2 className="section-title">Próximas Partidas</h2>
            <div className="matches-list">
              {upcomingMatches.map(match => (
                <div className="match-item compact" key={match.id}>
                  <div className="match-row-1">
                    <span className="match-date-time-location">
                      {match.date} - {match.time} <span className="match-location-inline"><i className="fas fa-map-marker-alt"></i> {match.location}</span>
                    </span>
                    <span className="match-tournament-badge compact-badge">
                      {match.tournament} • {match.stage}
                    </span>
                  </div>
                  
                  <div className="match-row-2">
                    <div className="match-team home-team">
                      <img src={getTeamLogo(match.homeTeam)} alt={match.homeTeam} className="match-team-logo compact-logo" />
                      <span className="match-team-name compact-name">{match.homeTeam}</span>
                    </div>
                    
                    <div className="match-score-container compact-score upcoming-match-vs">
                      <span>VS</span>
                    </div>
                    
                    <div className="match-team away-team">
                      <img src={getTeamLogo(match.awayTeam)} alt={match.awayTeam} className="match-team-logo compact-logo" />
                      <span className="match-team-name compact-name">{match.awayTeam}</span>
                    </div>
                    
                    {/* Upcoming matches typically don't have action buttons like details/video,
                        but if they were needed, the structure would be similar to recent matches 
                        <div className="match-actions compact-actions"> ... </div> 
                    */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Recent Results Section */}
        {recentMatches.length > 0 && (
          <div className="matches-section">
            <h2 className="section-title">Resultados Recentes</h2>
            <div className="matches-list">
              {recentMatches.map(match => (
                <div className="match-item compact" key={match.id}> {/* ADDED compact class */}
                  <div className="match-row-1">
                    <span className="match-date-time-location">
                      {match.date} - {match.time} <span className="match-location-inline"><i className="fas fa-map-marker-alt"></i> {match.location}</span>
                    </span>
                    <span className="match-tournament-badge compact-badge">
                      {match.tournament} • {match.stage}
                    </span>
                  </div>
                  
                  <div className="match-row-2">
                    <div className="match-team home-team">
                      <img src={getTeamLogo(match.homeTeam)} alt={match.homeTeam} className="match-team-logo compact-logo" />
                      <span className="match-team-name compact-name">{match.homeTeam}</span>
                    </div>
                    
                    <div className="match-score-container compact-score">
                      <span className="match-score">{match.homeScore}</span>
                      <span className="score-separator">:</span>
                      <span className="match-score">{match.awayScore}</span>
                    </div>
                    
                    <div className="match-team away-team">
                      <img src={getTeamLogo(match.awayTeam)} alt={match.awayTeam} className="match-team-logo compact-logo" />
                      <span className="match-team-name compact-name">{match.awayTeam}</span>
                    </div>
                    
                    {match.tournamentId === 1 && match.status === 'completed' && (
                      <div className="match-actions compact-actions">
                        <button 
                          className="btn-match-details compact-button"
                          onClick={() => handleShowMatchDetails(match)}
                          title="Ver detalhes"
                        >
                          <i className="fas fa-info-circle"></i> <span className="button-text">Detalhes</span>
                        </button>
                        
                        {match.videoUrl && (
                          <button 
                            className="btn-match-video compact-button"
                            onClick={() => {
                              if (typeof handleOpenVideo === 'function') {
                                handleOpenVideo(match.videoUrl);
                              } else {
                                openVideoOverlay(match.videoUrl);
                              }
                            }}
                            title="Assistir Jogo"
                          >
                            <i className="fas fa-play"></i> <span className="button-text">Vídeo</span>
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Match Details Section */}
        {showMatchDetails && selectedMatch && (
          <div id="match-details-section" className="match-details-section">
            <div className="section-header">
              <h2 className="section-title">Detalhes da Partida</h2>
              <button 
                className="close-button" 
                onClick={() => setShowMatchDetails(false)}
              >
                <i className="fas fa-times"></i> Fechar
              </button>
            </div>
            
            <div className="match-details-wrapper">
              <MatchDetails match={selectedMatch} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CampeonatosPage;
