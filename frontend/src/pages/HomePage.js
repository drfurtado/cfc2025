import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './HomePage.css'; 
import MatchDetails from '../components/MatchDetails';

function HomePage() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [showMatchDetails, setShowMatchDetails] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState(null);

  const openVideoModal = (url) => {
    setVideoUrl(url);
    setVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setVideoModalOpen(false);
    setVideoUrl('');
  };

  const toggleMatchDetails = (match) => {
    setSelectedMatch(match);
    setShowMatchDetails(!showMatchDetails);
  };

  // Enhanced match data with statistics and highlights
  const lastMatch = {
    id: 1,
    tournament: 'Copa 50tinha 2025',
    date: '26/04/2025',
    time: '14:00',
    homeTeam: 'Classe FC',
    awayTeam: 'S. Paulinho',
    homeScore: 2,
    awayScore: 1,
    location: 'Praça Central',
    status: 'completed',
    stage: 'Primeira Fase',
    videoUrl: 'https://www.youtube.com/embed/HqelNrsrIEo',
    // Temporarily hiding stats and highlights - will be updated later
    showStats: false,
    stats: {
      possession: { home: 55, away: 45 },
      shots: { home: 12, away: 8 },
      shotsOnTarget: { home: 5, away: 3 },
      corners: { home: 6, away: 4 },
      fouls: { home: 7, away: 10 },
      yellowCards: { home: 1, away: 2 },
      redCards: { home: 0, away: 0 }
    },
    showHighlights: false,
    highlights: [
      { time: 23, type: 'goal', team: 'Classe', player: 'Marcos Silva', description: 'Gol após cruzamento da direita' },
      { time: 37, type: 'yellow-card', team: 'S.Paulinho', player: 'João Carlos', description: 'Falta dura no meio-campo' },
      { time: 55, type: 'goal', team: 'S.Paulinho', player: 'Roberto Alves', description: 'Gol de pênalti' },
      { time: 67, type: 'yellow-card', team: 'Classe', player: 'Pedro Santos', description: 'Falta tática' },
      { time: 78, type: 'yellow-card', team: 'S.Paulinho', player: 'Lucas Mendes', description: 'Reclamação com o árbitro' },
      { time: 89, type: 'goal', team: 'Classe', player: 'Carlos Eduardo', description: 'Gol de cabeça após escanteio' }
    ],
    gallery: [
      { url: '/images/match-photos/cfc-spailinho-20250426/match1.jpg', alt: 'Comemoração do primeiro gol' },
      { url: '/images/match-photos/cfc-spailinho-20250426/match2.jpg', alt: 'Jogada pela lateral' },
      { url: '/images/match-photos/cfc-spailinho-20250426/match3.jpg', alt: 'Defesa importante do goleiro' },
      { url: '/images/match-photos/cfc-spailinho-20250426/match4.jpg', alt: 'Comemoração da vitória' }
    ],
    galleryLink: 'https://photos.app.goo.gl/mYaFNEsMrKZT2JcWA'
  };

  const previousMatch = {
    id: 2,
    tournament: 'Copa Lillico 2024',
    date: '02/11/2024',
    time: '15:00',
    homeTeam: 'Classe FC',
    awayTeam: 'Unidos do CIC',
    homeScore: 2,
    awayScore: 0,
    location: 'Campo do Lillico',
    status: 'completed',
    stage: 'Final',
    videoUrl: 'https://www.youtube.com/embed/90K7SJIFMoc',
    // Temporarily hiding stats and highlights - will be updated later
    showStats: false,
    stats: {
      possession: { home: 60, away: 40 },
      shots: { home: 14, away: 6 },
      shotsOnTarget: { home: 7, away: 2 },
      corners: { home: 8, away: 3 },
      fouls: { home: 6, away: 9 },
      yellowCards: { home: 1, away: 3 },
      redCards: { home: 0, away: 0 }
    },
    showHighlights: false,
    highlights: [
      { time: 34, type: 'goal', team: 'Classe', player: 'Rafael Costa', description: 'Gol após jogada individual' },
      { time: 42, type: 'yellow-card', team: 'Unidos', player: 'Antônio Ferreira', description: 'Falta por trás' },
      { time: 56, type: 'yellow-card', team: 'Unidos', player: 'José Oliveira', description: 'Carrinho perigoso' },
      { time: 65, type: 'yellow-card', team: 'Classe', player: 'Marcos Silva', description: 'Reclamação' },
      { time: 71, type: 'yellow-card', team: 'Unidos', player: 'Paulo Roberto', description: 'Falta tática' },
      { time: 85, type: 'goal', team: 'Classe', player: 'Lucas Pereira', description: 'Gol de contra-ataque' }
    ],
    gallery: [
      { url: '/images/match-photos/cfc-unidos-20241102/photo1.jpg', alt: 'Jogadores comemorando' },
      { url: '/images/match-photos/cfc-unidos-20241102/photo2.jpg', alt: 'Disputa de bola' },
      { url: '/images/match-photos/cfc-unidos-20241102/photo3.jpg', alt: 'Jogada pela lateral' },
      { url: '/images/match-photos/cfc-unidos-20241102/photo4.jpg', alt: 'Equipe com o troféu' }
    ],
    galleryLink: 'https://photos.app.goo.gl/mYaFNEsMrKZT2JcWA'
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section 
        className="hero-section" 
        style={{ backgroundImage: `url('/images/cfc-atual1.png')` }} 
      >
        <div className="hero-overlay"></div> 
        <div className="hero-content container">
          <h1 className="hero-title">Classe Futebol Clube</h1>
          <p className="hero-tagline">
            Paixão pelo futebol, unida pela amizade e pelo espírito de companheirismo.
          </p>
          <Link to="/time" className="btn btn-primary hero-cta-button">
            Conheça Nosso Time
          </Link>
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
          </div>
          <div className="text-center mt-4">
            <a href="mailto:classefc84@gmail.com" className="btn btn-outline-primary">Torne-se um Patrocinador</a>
          </div>
        </div>
      </section>

      {/* Matches Section - Last & Next Match */}
      <section className="matches-section">
        <div className="container">
          <h2 className="section-title text-center">Partidas</h2>
          
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
            <div className="row justify-content-center">
              <div className="col-lg-5 col-md-6">
                <div className="match-card last-match">
                  <div className="match-card-header">
                    <div className="match-label">Última Partida</div>
                  </div>
                  
                  <div className="match-card-body">
                    <div className="match-info-row">
                      <div className="match-tournament">
                        <div className="tournament-badge" style={{ backgroundColor: '#f0f5ff', borderLeft: '4px solid var(--primary-blue)' }}>
                          <span className="tournament-name" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary-blue)' }}>{lastMatch.tournament}</span>
                          <span className="tournament-stage">{lastMatch.stage}</span>
                        </div>
                      </div>
                      
                      <div className="match-info">
                        <div className="match-date">
                          <i className="far fa-calendar-alt"></i> {lastMatch.date.split('/').slice(0, 2).join('/')}
                        </div>
                        <div className="match-time">
                          <i className="far fa-clock"></i> {lastMatch.time}
                        </div>
                        <div className="match-location">
                          <i className="fas fa-map-marker-alt"></i> {lastMatch.location}
                        </div>
                      </div>
                    </div>
                    
                    <div className="match-teams-container">
                      <div className="team-logo home-team">
                        <img src="/images/match-logos/classefc.svg" alt="Classe FC" />
                        <span className="team">{lastMatch.homeTeam}</span>
                      </div>
                      
                      <div className="match-score">
                        <div className="score-box">
                          <span>{lastMatch.homeScore}</span>
                          <span className="score-divider">:</span>
                          <span>{lastMatch.awayScore}</span>
                        </div>
                        <div className="match-status">FINALIZADO</div>
                      </div>
                      
                      <div className="team-logo away-team">
                        <img src="/images/match-logos/spaulinho.png" alt="S. Paulinho" />
                        <span className="team">{lastMatch.awayTeam}</span>
                      </div>
                    </div>
                    
                    <div className="match-stats-preview">
                      <div className="stat-preview-item">
                        <span>Posse de Bola</span>
                        <div className="stat-bar">
                          <div className="stat-fill home" style={{ width: `${lastMatch.stats.possession.home}%` }}></div>
                          <div className="stat-fill away" style={{ width: `${lastMatch.stats.possession.away}%` }}></div>
                        </div>
                        <div className="stat-values">
                          <span>{lastMatch.stats.possession.home}%</span>
                          <span>{lastMatch.stats.possession.away}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="match-card-actions">
                    <button 
                      onClick={() => openVideoModal(lastMatch.videoUrl)} 
                      className="btn-match-action btn-video"
                    >
                      <i className="fab fa-youtube"></i> Ver Jogo
                    </button>
                    <button 
                      onClick={() => toggleMatchDetails(lastMatch)} 
                      className="btn-match-action btn-details"
                    >
                      <i className="fas fa-chart-bar"></i> Estatísticas
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="col-lg-5 col-md-6">
                <div className="match-card next-match">
                  <div className="match-card-header">
                    <div className="match-label">Partida Anterior</div>
                  </div>
                  
                  <div className="match-card-body">
                    <div className="match-info-row">
                      <div className="match-tournament">
                        <div className="tournament-badge" style={{ backgroundColor: '#f0f5ff', borderLeft: '4px solid var(--primary-blue)' }}>
                          <span className="tournament-name" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary-blue)' }}>{previousMatch.tournament}</span>
                          <span className="tournament-stage">{previousMatch.stage}</span>
                        </div>
                      </div>
                      
                      <div className="match-info">
                        <div className="match-date">
                          <i className="far fa-calendar-alt"></i> {previousMatch.date.split('/').slice(0, 2).join('/')}
                        </div>
                        <div className="match-time">
                          <i className="far fa-clock"></i> {previousMatch.time}
                        </div>
                        <div className="match-location">
                          <i className="fas fa-map-marker-alt"></i> {previousMatch.location}
                        </div>
                      </div>
                    </div>
                    
                    <div className="match-teams-container">
                      <div className="team-logo home-team">
                        <img src="/images/match-logos/classefc.svg" alt="Classe FC" />
                        <span className="team">{previousMatch.homeTeam}</span>
                      </div>
                      
                      <div className="match-score">
                        <div className="score-box">
                          <span>{previousMatch.homeScore}</span>
                          <span className="score-divider">:</span>
                          <span>{previousMatch.awayScore}</span>
                        </div>
                        <div className="match-status">FINALIZADO</div>
                      </div>
                      
                      <div className="team-logo away-team">
                        <img src="/images/match-logos/generic.png" alt="Unidos do CIC" />
                        <span className="team">{previousMatch.awayTeam}</span>
                      </div>
                    </div>
                    
                    <div className="match-stats-preview">
                      <div className="stat-preview-item">
                        <span>Posse de Bola</span>
                        <div className="stat-bar">
                          <div className="stat-fill home" style={{ width: `${previousMatch.stats.possession.home}%` }}></div>
                          <div className="stat-fill away" style={{ width: `${previousMatch.stats.possession.away}%` }}></div>
                        </div>
                        <div className="stat-values">
                          <span>{previousMatch.stats.possession.home}%</span>
                          <span>{previousMatch.stats.possession.away}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="match-card-actions">
                    <button 
                      onClick={() => openVideoModal(previousMatch.videoUrl)} 
                      className="btn-match-action btn-video"
                    >
                      <i className="fab fa-youtube"></i> Ver Jogo
                    </button>
                    <button 
                      onClick={() => toggleMatchDetails(previousMatch)} 
                      className="btn-match-action btn-details"
                    >
                      <i className="fas fa-chart-bar"></i> Estatísticas
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="text-center mt-4">
            <Link to="/campeonatos" className="btn btn-outline-primary">
              <i className="fas fa-calendar-week"></i> Ver Calendário Completo
            </Link>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="video-modal">
          <div className="video-modal-overlay" onClick={closeVideoModal}></div>
          <div className="video-modal-content">
            <button className="video-modal-close" onClick={closeVideoModal}>
              <i className="fas fa-times"></i>
            </button>
            <div className="video-container">
              <iframe 
                src={videoUrl} 
                title="Match Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* About Us Section */}
      <section className="about-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="about-image">
                <img src="/images/cfc-atual2.png" alt="Classe FC Time" className="img-fluid rounded shadow" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <h2 className="section-title">Sobre a Classe FC</h2>
                <p className="section-description">
                  Fundada em 1984 por um pequeno grupo de jovens jogadores entre 10 e 14 anos de idade, a Classe Futebol Clube nasceu na praça ao lado do Colégio Dirce Celestino do Amaral, entre a Vila N. Sra. da Luz e Conjunto Osvaldo Cruz I, no CIC, em Curitiba.
                </p>
                <p className="section-description">
                  O nome e as cores do time surgiram quando Marcos Dudda pediu um jogo de camisa ao seu pai, que trabalhava na Classe Industrial de Móveis. Com camisas azuis, calções pretos e meias brancas, nascia mais um time tricolor no Brasil. O escudo foi criado por Marcelo Duda, inspirado no Grêmio de Porto Alegre e na banda Engenheiros do Hawaii.
                </p>
                <Link to="/historia" className="btn btn-outline-primary">Nossa História</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements/Trophies Section */}
      <section className="achievements-section">
        <div className="container">
          <h2 className="section-title text-center">Nossas Conquistas</h2>
          <div className="row justify-content-center">
            <div className="col-md-4 col-sm-6">
              <div className="trophy-card">
                <div className="trophy-icon">
                  <i className="fas fa-trophy"></i>
                </div>
                <h3 className="trophy-title">Copa da Vila 2024</h3>
                <p className="trophy-description">Campeão da Copa da Vila 2024, nossa conquista mais recente.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="trophy-card">
                <div className="trophy-icon">
                  <i className="fas fa-trophy"></i>
                </div>
                <h3 className="trophy-title">Copa Banestado 1990</h3>
                <p className="trophy-description">Título histórico conquistado de forma invicta, amplamente divulgado pela Tribuna do Paraná.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="trophy-card">
                <div className="trophy-icon">
                  <i className="fas fa-trophy"></i>
                </div>
                <h3 className="trophy-title">Torneio Jaime Lerner 1985</h3>
                <p className="trophy-description">Nosso primeiro título, conquistado apenas um ano após a fundação do clube, vencendo o Expressinho nos pênaltis.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
