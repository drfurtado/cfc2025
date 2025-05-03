import React, { useState, useEffect } from 'react';
import './CampeonatosPage.css';
import { 
  getAllTournaments, 
  getTournamentCalendar,
  getTournamentRules, 
  filterTournamentsByStatus, 
  getUpcomingMatches, 
  getRecentMatches,
  getTeamLogo,
  getStandings,
  getStandingsLastUpdated
} from '../data/tournamentDataLoader';
import TournamentRules from '../components/TournamentRules';
import StandingsTable from '../components/StandingsTable';

const CampeonatosPage = () => {
  const [activeTab, setActiveTab] = useState('todos');
  const [showCalendar, setShowCalendar] = useState(false);
  const [showRules, setShowRules] = useState(false);
  const [showStandings, setShowStandings] = useState(false);
  const [selectedTournament, setSelectedTournament] = useState(null);

  useEffect(() => {
    // Always show standings for Copa 50tinha
    const copa50tinha = getAllTournaments().find(t => t.id === 1);
    if (copa50tinha) {
      setSelectedTournament(copa50tinha);
    }
  }, []);

  // Get tournament data from the data loader
  const tournaments = getAllTournaments();
  
  // Get matches data from the data loader
  const upcomingMatches = getUpcomingMatches(3);
  const recentMatches = getRecentMatches(3);

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
    // Scroll to the calendar section
    setTimeout(() => {
      document.getElementById('calendar-section').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Handle showing tournament rules
  const handleShowRules = (tournament) => {
    setSelectedTournament(tournament);
    setShowRules(true);
    setShowCalendar(false);
    setShowStandings(false);
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
    // Scroll to the standings section
    setTimeout(() => {
      document.getElementById('standings-section').scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Handle closing tournament details
  const handleCloseDetails = () => {
    setShowCalendar(false);
    setShowRules(false);
    setShowStandings(false);
    setSelectedTournament(null);
  };

  // Get calendar data for the selected tournament
  const getCalendarData = (tournamentId) => {
    return getTournamentCalendar(tournamentId);
  };

  // Get rules data for the selected tournament
  const getRulesData = (tournamentId) => {
    return getTournamentRules(tournamentId);
  };

  return (
    <div className="campeonatos-page">
      <div className="container py-5">
        <h1 className="page-title text-center mb-5">Campeonatos</h1>
        
        {/* Hero Section */}
        <div className="campeonatos-hero">
          <div className="campeonatos-hero-bg" style={{ backgroundImage: "url('/images/cfc-atual4.png')" }}></div>
          <div className="campeonatos-hero-content">
            <div className="container">
              <h1 className="campeonatos-title">Campeonatos</h1>
              <p className="campeonatos-subtitle">
                Acompanhe a trajetória da Classe FC em todos os campeonatos e torneios disputados ao longo de nossa história
              </p>
            </div>
          </div>
        </div>

        {/* Tabs Navigation */}
        <div className="campeonatos-tabs">
          <button 
            className={`campeonatos-tab ${activeTab === 'todos' ? 'active' : ''}`}
            onClick={() => setActiveTab('todos')}
          >
            Todos
          </button>
          <button 
            className={`campeonatos-tab ${activeTab === 'active' ? 'active' : ''}`}
            onClick={() => setActiveTab('active')}
          >
            Em Andamento
          </button>
          <button 
            className={`campeonatos-tab ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            Próximos
          </button>
          <button 
            className={`campeonatos-tab ${activeTab === 'completed' ? 'active' : ''}`}
            onClick={() => setActiveTab('completed')}
          >
            Anteriores
          </button>
        </div>

        {/* Standings display for Copa 50tinha */}
        {selectedTournament && selectedTournament.id === 1 && (
          <div className="standings-container">
            <div className="standings-header">
              <h3>Copa 50tinha 2025 - Classificação</h3>
            </div>
            <StandingsTable 
              standings={getStandings(1)} 
              lastUpdated={getStandingsLastUpdated(1)} 
            />
          </div>
        )}

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
            
            {selectedTournament.id && (
              <div className="tournament-calendar">
                <div className="calendar-info">
                  <p>Confira abaixo o calendário completo do {selectedTournament.name} {selectedTournament.year}.</p>
                  <p>Os jogos acontecem aos sábados em {selectedTournament.location}.</p>
                </div>
                
                {getCalendarData(selectedTournament.id) ? (
                  <div className="calendar-rounds">
                    {getCalendarData(selectedTournament.id).map((round, index) => (
                      <div className="calendar-round" key={index}>
                        <div className="round-header">
                          <span className="round-number">{round.round} Rodada</span>
                          <span className="round-date">{round.date}</span>
                        </div>
                        
                        <div className="round-matches">
                          {round.matches.map((match, matchIndex) => (
                            <div className={`calendar-match ${match.completed ? 'completed-match' : ''}`} key={matchIndex}>
                              <div className="match-header">
                                <div className="match-time">{match.time}</div>
                                <div className="match-number">Jogo {match.game}</div>
                              </div>
                              <div className="match-teams">
                                <div className={`team ${match.team1 === 'CLASSE' ? 'classe-team' : ''}`}>
                                  {match.team1}
                                </div>
                                {match.completed ? (
                                  <div className="match-score">{match.score}</div>
                                ) : (
                                  <div className="vs">x</div>
                                )}
                                <div className={`team ${match.team2 === 'CLASSE' ? 'classe-team' : ''}`}>
                                  {match.team2}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="no-calendar-data">
                    <p>Calendário não disponível para este torneio.</p>
                  </div>
                )}
              </div>
            )}
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

        {/* Tournaments List */}
        <div className="tournament-list">
          {filteredTournaments.map((tournament, index) => (
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
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Matches Section */}
        {upcomingMatches.length > 0 && (
          <div className="matches-section">
            <h2 className="section-title">Próximas Partidas</h2>
            <div className="matches-list">
              {upcomingMatches.map(match => (
                <div className="match-item" key={match.id}>
                  <div className="match-tournament-badge">
                    {match.tournament} • {match.stage}
                  </div>
                  
                  <div className="match-date-time">
                    <div className="match-date">{match.date}</div>
                    <div className="match-time">{match.time}</div>
                  </div>
                  
                  <div className="match-teams">
                    <div className="match-team">
                      <img src={getTeamLogo(match.homeTeam)} alt={match.homeTeam} className="match-team-logo" />
                      <div className="match-team-name">{match.homeTeam}</div>
                    </div>
                    
                    <div className="match-score-container">
                      <div className="match-vs">VS</div>
                    </div>
                    
                    <div className="match-team">
                      <img src={getTeamLogo(match.awayTeam)} alt={match.awayTeam} className="match-team-logo" />
                      <div className="match-team-name">{match.awayTeam}</div>
                    </div>
                  </div>
                  
                  <div className="match-location">
                    <i className="fas fa-map-marker-alt"></i> {match.location}
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
                <div className="match-item" key={match.id}>
                  <div className="match-tournament-badge">
                    {match.tournament} • {match.stage}
                  </div>
                  
                  <div className="match-date-time">
                    <div className="match-date">{match.date}</div>
                    <div className="match-time">{match.time}</div>
                  </div>
                  
                  <div className="match-teams">
                    <div className="match-team">
                      <img src={getTeamLogo(match.homeTeam)} alt={match.homeTeam} className="match-team-logo" />
                      <div className="match-team-name">{match.homeTeam}</div>
                    </div>
                    
                    <div className="match-score-container">
                      <div className="match-score">{match.homeScore}</div>
                      <div>:</div>
                      <div className="match-score">{match.awayScore}</div>
                    </div>
                    
                    <div className="match-team">
                      <img src={getTeamLogo(match.awayTeam)} alt={match.awayTeam} className="match-team-logo" />
                      <div className="match-team-name">{match.awayTeam}</div>
                    </div>
                  </div>
                  
                  <div className="match-location">
                    <i className="fas fa-map-marker-alt"></i> {match.location}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CampeonatosPage;
