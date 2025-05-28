// filepath: /Users/ovandef/Documents/GitHub/classe-fc-new/src/pages/HomePage.js
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './HomePage.css'; 
import MatchDetails from '../components/MatchDetails';
import MatchCard from '../components/MatchCard';
import StandingsTable from '../components/StandingsTable';
import TopScorersTable from '../components/TopScorersTable';
import TournamentCalendar from '../components/TournamentCalendar';
import { VideoContext } from '../App';
import { 
  getRecentMatches, 
  getUpcomingMatches, 
  getTeamLogo, 
  getStandings, 
  getStandingsLastUpdated,
  getTopScorers,
  getTopScorersLastUpdated
} from '../data/tournamentDataLoader';

function HomePage() {
  const [showMatchDetails, setShowMatchDetails] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState(null);
  const navigate = useNavigate();
  const { openVideoOverlay } = useContext(VideoContext);

  // Get the most recent match and the next upcoming match
  const recentMatches = getRecentMatches(1);
  const upcomingMatches = getUpcomingMatches(1);
  
  // Get standings for the current tournament (Copa 50tinha 2025)
  const currentTournamentId = 1; // Copa 50tinha 2025
  // Standings data is directly used in StandingsTable component

  // Top scorers data is directly used in TopScorersTable component

  const lastMatch = recentMatches.length > 0 ? recentMatches[0] : null;
  const nextMatch = upcomingMatches.length > 0 ? upcomingMatches[0] : null;
  
  // Next match data with tournament info
  const nextMatchData = nextMatch ? {
    ...nextMatch,
    tournament: 'Copa 50tinha 2025',
    stage: 'Primeira Fase',
  } : null;

  // Function to handle video clicks using our global context
  const handleVideoClick = (url) => {
    openVideoOverlay(url);
  };

  const toggleMatchDetails = (match) => {
    // Navigate to CampeonatosPage with state for the selected match
    navigate('/campeonatos', { state: { showMatchDetails: true, match } });
  };

  // Use the actual most recent match from the data source
  const lastMatchData = lastMatch || {
    id: 11,
    tournament: 'Copa 50tinha 2025',
    date: '17/05/2025',
    time: '15:00',
    homeTeam: 'Classe FC',
    awayTeam: 'União R.',
    homeScore: 3,
    awayScore: 2,
    location: 'Praça Central',
    status: 'completed',
    stage: 'Primeira Fase',
    round: '4ª',
    gameNumber: 11,
    // Don't show stats or highlights on the home card
    showStats: false,
    showHighlights: false,
    galleryLink: 'https://photos.app.goo.gl/mYaFNEsMrKZT2JcWA'
  };

  // Historical match data - currently not used but kept for future implementation
  // of match history feature

  return (
    <div className="home-page">
      {/* About Classe FC Section */}
      <section className="about-section" style={{ marginTop: '-100px' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <img src="/images/cfc-atual1.png" alt="Classe FC Team" className="img-fluid rounded" />
            </div>
            <div className="col-lg-7">
              <h2 className="section-title">Sobre a Classe FC</h2>
              <p>
                Fundada em 1984 por um pequeno grupo de jovens jogadores entre 10 e 14 anos de idade, 
                a Classe Futebol Clube nasceu na praça ao lado do Colégio Dirce Celestino do Amaral, 
                entre a Vila N. Sra. da Luz e Conjunto Osvaldo Cruz I, no CIC, em Curitiba.
              </p>
              <p>
                O nome e as cores do time surgiram quando Marcos Dudda pediu um jogo de camisa ao seu pai, 
                que trabalhava na Classe Industrial de Móveis. Com camisas azuis, calções pretos e meias brancas, 
                nascia mais um time tricolor no Brasil. O escudo foi criado por Marcelo Duda, 
                inspirado no Grêmio de Porto Alegre e na banda Engenheiros do Hawaii.
              </p>
              <div className="mt-4">
                <Link to="/historia" className="btn btn-outline-primary">
                  Nossa História
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="sponsors-section">
        <div className="container">
          <h2 className="section-title text-center">Nossos Patrocinadores</h2>
          <div className="sponsors-container">
            <div className="sponsor-item">
              <a href="https://aurigalabs.netlify.app" target="_blank" rel="noopener noreferrer">
                <img src="/images/sponsors/patrocinio-auriga.png" alt="AurigaLabs" className="sponsor-logo" />
              </a>
            </div>
            <div className="sponsor-item">
              <a href="https://www.instagram.com/despachante_coture/" target="_blank" rel="noopener noreferrer">
                <img src="/images/sponsors/patrocinio-coture.png" alt="Coture" className="sponsor-logo" />
              </a>
            </div>
            <div className="sponsor-item">
              <a href="https://www.instagram.com/estiloraropremiumcwb/" target="_blank" rel="noopener noreferrer">
                <img src="/images/sponsors/patrocinio-estilo.png" alt="Estilo" className="sponsor-logo" />
              </a>
            </div>
            <div className="sponsor-item">
              <a href="tel:+5541996385718" target="_blank" rel="noopener noreferrer">
                <img src="/images/sponsors/patrocinio-grp.png" alt="GRP Turismo" className="sponsor-logo" />
              </a>
            </div>
          </div>
          <div className="text-center mt-4">
            <a href="mailto:classefc84@gmail.com" className="btn btn-outline-primary">Torne-se um Patrocinador</a>
          </div>
        </div>
      </section>

      {/* Matches Section - Last & Next Match */}
      <section className="matches-section">
        <div className="container">
          <h3 className="tournament-name text-center mb-4" style={{ color: '#0d6efd', fontSize: '1.5rem', fontWeight: 700 }}>COPA 50TINHA 2025</h3>
          
          {showMatchDetails && selectedMatch && (
            <div className="row justify-content-center mb-4">
              <div className="col-lg-10">
                <button 
                  onClick={() => setShowMatchDetails(false)} 
                  className="btn btn-sm btn-outline-secondary mb-3"
                >
                  <i className="fas fa-arrow-left"></i> Voltar para Partidas
                </button>
                <MatchDetails match={selectedMatch} />
              </div>
            </div>
          )}
          
          {!showMatchDetails && (
            <div className="row">
              <div className="col-md-6 mb-4">
                <h4 className="text-center mb-3" style={{ fontSize: '1.1rem', color: '#444' }}>Última Partida</h4>
                {/* Compact Last Match Card */}
                <MatchCard 
                  match={lastMatchData} 
                  onVideoClick={handleVideoClick} 
                  onDetailsClick={toggleMatchDetails} 
                />
              </div>
              
              <div className="col-md-6 mb-4">
                <h4 className="text-center mb-3" style={{ fontSize: '1.1rem', color: '#444' }}>Próxima Partida</h4>
                {/* Compact Next Match Card */}
                {nextMatchData && (
                  <MatchCard 
                    match={nextMatchData} 
                    onDetailsClick={toggleMatchDetails} 
                  />
                )}
              </div>
            </div>
          )}
          
          {/* Resultados Recentes Section */}
          <div className="recent-results-section mb-4">
            <div className="section-header text-center mb-3">
              <h2 className="section-title" style={{ fontSize: '1.4rem', fontWeight: 700 }}>Resultados Recentes</h2>
            </div>
            
            {/* Standings and Top Scorers */}
            <div className="stats-cards-container">
              {/* Standings Card */}
              <div className="stats-card">
                <div className="standings-wrapper">
                  <StandingsTable 
                    standings={getStandings(currentTournamentId)} 
                    lastUpdated={getStandingsLastUpdated(currentTournamentId)} 
                  />
                </div>
              </div>
              
              {/* Top Scorers Card */}
              <div className="stats-card">
                <div className="scorers-wrapper">
                  <TopScorersTable 
                    scorers={getTopScorers(currentTournamentId)}
                    lastUpdated={getTopScorersLastUpdated(currentTournamentId)}
                  />
                </div>
              </div>
            </div>
            
            <div className="text-center mt-3 mb-4">
              <Link to="/campeonatos" className="btn btn-outline-primary btn-sm">
                Ver detalhes do campeonato
              </Link>
            </div>
          </div>
          
          {/* Tournament Calendar Section */}
          <div className="tournament-calendar-section mt-5">
            <div className="section-header text-center mb-3">
              <h2 className="section-title" style={{ fontSize: '1.4rem', fontWeight: 700 }}>Calendário do Torneio</h2>
            </div>
            <TournamentCalendar />
          </div>
          
        </div>
      </section>
    </div>
  );
}

export default HomePage;
