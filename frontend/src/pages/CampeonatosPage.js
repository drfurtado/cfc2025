import React, { useState } from 'react';
import './CampeonatosPage.css';

const CampeonatosPage = () => {
  const [activeTab, setActiveTab] = useState('todos');

  // Tournament data
  const tournaments = [
    {
      id: 2,
      name: 'Copa Lillico',
      year: 2024,
      organizer: 'Liga Amadora do CIC',
      status: 'completed',
      position: 'Campeão',
      location: 'Campo do Lillico, CIC',
      startDate: '10/04/2024',
      endDate: '2/11/2024',
      teams: 8,
      format: 'Eliminatórias'
    },
    {
      id: 1,
      name: 'Copa 50tinha',
      year: 2025,
      organizer: 'Associação Vila N. Sra. da Luz',
      status: 'active',
      position: 'Em andamento',
      location: 'Praça Central, Vila N. Sra. da Luz',
      startDate: '26/04/2025',
      endDate: '30/08/2025',
      teams: 7,
      format: 'Grupos + Eliminatórias'
    }
  ];

  // Match data
  const matches = [
    {
      id: 3,
      tournament: 'Copa Lillico 2024',
      tournamentId: 2,
      date: '02/11/2024',
      time: '15:00',
      homeTeam: 'Classe FC',
      awayTeam: 'Unidos do CIC',
      homeScore: 2,
      awayScore: 0,
      location: 'Campo do Lillico',
      status: 'completed',
      stage: 'Final'
    },
    {
      id: 1,
      tournament: 'Copa 50tinha 2025',
      tournamentId: 1,
      date: '26/04/2025',
      time: '14:00',
      homeTeam: 'Classe FC',
      awayTeam: 'S. Paulinho',
      homeScore: 2,
      awayScore: 1,
      location: 'Praça Central',
      status: 'completed',
      stage: 'Primeira Fase'
    }
  ];

  // Filter tournaments based on active tab
  const filteredTournaments = tournaments.filter(tournament => {
    if (activeTab === 'todos') return true;
    if (activeTab === 'ativos') return tournament.status === 'active';
    if (activeTab === 'proximos') return tournament.status === 'upcoming';
    if (activeTab === 'passados') return tournament.status === 'completed';
    return true;
  });

  // Filter matches to show only upcoming and recent
  const upcomingMatches = matches.filter(match => match.status === 'upcoming');
  const recentMatches = matches.filter(match => match.status === 'completed').slice(0, 3);
  
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

  return (
    <div className="campeonatos-page">
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

      <div className="container">
        {/* Tabs Navigation */}
        <div className="campeonatos-tabs">
          <button 
            className={`campeonatos-tab ${activeTab === 'todos' ? 'active' : ''}`}
            onClick={() => setActiveTab('todos')}
          >
            Todos
          </button>
          <button 
            className={`campeonatos-tab ${activeTab === 'ativos' ? 'active' : ''}`}
            onClick={() => setActiveTab('ativos')}
          >
            Em Andamento
          </button>
          <button 
            className={`campeonatos-tab ${activeTab === 'proximos' ? 'active' : ''}`}
            onClick={() => setActiveTab('proximos')}
          >
            Próximos
          </button>
          <button 
            className={`campeonatos-tab ${activeTab === 'passados' ? 'active' : ''}`}
            onClick={() => setActiveTab('passados')}
          >
            Anteriores
          </button>
        </div>

        {/* Tournament Cards */}
        <div className="tournament-list">
          {filteredTournaments.map(tournament => (
            <div className="tournament-card" key={tournament.id}>
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
                
                <div className={`tournament-status ${getStatusInfo(tournament.status).class}`}>
                  {getStatusInfo(tournament.status).text}
                </div>
              </div>
              
              <div className="tournament-footer">
                <div className={`tournament-position ${getPositionClass(tournament.position)}`}>
                  {tournament.position}
                </div>
                <button className="tournament-details-btn">Ver Detalhes</button>
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
                      <img src="/images/match-logos/classefc.svg" alt={match.homeTeam} className="match-team-logo" />
                      <div className="match-team-name">{match.homeTeam}</div>
                    </div>
                    
                    <div className="match-score-container">
                      <div className="match-vs">VS</div>
                    </div>
                    
                    <div className="match-team">
                      <img src="/images/match-logos/spaulinho.png" alt={match.awayTeam} className="match-team-logo" />
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
                      <img src="/images/match-logos/classefc.svg" alt={match.homeTeam} className="match-team-logo" />
                      <div className="match-team-name">{match.homeTeam}</div>
                    </div>
                    
                    <div className="match-score-container">
                      <div className="match-score">{match.homeScore}</div>
                      <div>:</div>
                      <div className="match-score">{match.awayScore}</div>
                    </div>
                    
                    <div className="match-team">
                      <img src="/images/match-logos/generic.png" alt={match.awayTeam} className="match-team-logo" />
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
