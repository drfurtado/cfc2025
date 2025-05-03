import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './HomePage.css'; 
import MatchDetails from '../components/MatchDetails';
import { getRecentMatches, getUpcomingMatches, getTeamLogo } from '../data/tournamentDataLoader';

function HomePage() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [showMatchDetails, setShowMatchDetails] = useState(false);
  const [selectedMatch, setSelectedMatch] = useState(null);

  // Get the most recent match and the next upcoming match
  const recentMatches = getRecentMatches(1);
  const upcomingMatches = getUpcomingMatches(1);
  
  const lastMatch = recentMatches.length > 0 ? recentMatches[0] : null;
  const nextMatch = upcomingMatches.length > 0 ? upcomingMatches[0] : null;

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
  const lastMatchData = {
    id: 4,
    tournament: 'Copa 50tinha 2025',
    date: '03/05/2025',
    time: '14:00',
    homeTeam: 'Cometa',
    awayTeam: 'Classe FC',
    homeScore: 1,
    awayScore: 1,
    location: 'Praça Central',
    status: 'completed',
    stage: 'Primeira Fase',
    videoUrl: 'https://www.youtube.com/embed/nM_xASzsn_s',
    // Show stats and highlights
    showStats: false,
    stats: {
      possession: { home: 48, away: 52 },
      shots: { home: 9, away: 11 },
      shotsOnTarget: { home: 4, away: 5 },
      corners: { home: 5, away: 6 },
      fouls: { home: 9, away: 7 },
      yellowCards: { home: 2, away: 1 },
      redCards: { home: 0, away: 0 }
    },
    showHighlights: true,
    highlights: [
      { time: 37, type: 'goal', team: 'Cometa', player: 'Marcelinho', description: 'Gol de falta' },
      { time: 76, type: 'goal', team: 'Classe FC', player: 'Lucio', description: 'Gol após jogada pela esquerda' }
    ],
    gallery: [
      { url: '/images/match-photos/cometa-classe-20250503/photo1.jpg', alt: 'Jogadores em campo' },
      { url: '/images/match-photos/cometa-classe-20250503/photo2.jpg', alt: 'Disputa de bola' },
      { url: '/images/match-photos/cometa-classe-20250503/photo3.jpg', alt: 'Comemoração do gol' }
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
          <h2 className="section-title text-center mb-4">Partidas</h2>
          
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
              <div className="col-md-6 mb-3">
                {/* Last Match Card - Optimized for Mobile */}
                <div style={{ 
                  backgroundColor: 'white', 
                  borderRadius: '8px',
                  boxShadow: '0 1px 6px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  maxWidth: '100%',
                  margin: '0 auto'
                }}>
                  <div style={{ display: 'flex' }}>
                    <div style={{ 
                      backgroundColor: '#f5f9ff', 
                      padding: '10px 15px',
                      borderLeft: '4px solid #0d6efd',
                      width: '50%'
                    }}>
                      <h3 style={{ 
                        color: '#0d6efd', 
                        fontSize: '18px',
                        fontWeight: 'bold',
                        margin: 0
                      }}>{lastMatch.tournament}</h3>
                      <p style={{ 
                        color: '#6c757d',
                        margin: '2px 0 0 0',
                        fontSize: '14px'
                      }}>{lastMatch.stage}</p>
                    </div>
                    <div style={{ 
                      padding: '10px 15px',
                      textAlign: 'right',
                      width: '50%',
                      fontSize: '14px'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '3px' }}>
                        <i className="far fa-calendar-alt" style={{ color: '#0d6efd', marginRight: '5px' }}></i>
                        <span>{lastMatch.date}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '3px' }}>
                        <i className="far fa-clock" style={{ color: '#0d6efd', marginRight: '5px' }}></i>
                        <span>{lastMatch.time}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <i className="fas fa-map-marker-alt" style={{ color: '#0d6efd', marginRight: '5px' }}></i>
                        <span>{lastMatch.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ padding: '15px 10px', textAlign: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                      <div style={{ textAlign: 'center' }}>
                        <img src={getTeamLogo(lastMatch.homeTeam)} alt={lastMatch.homeTeam} style={{ width: '50px', height: '50px', marginBottom: '5px' }} />
                        <h4 style={{ fontWeight: 'bold', margin: 0, fontSize: '14px' }}>{lastMatch.homeTeam}</h4>
                      </div>
                      
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ 
                          fontSize: '22px', 
                          fontWeight: 'bold',
                          margin: '0 10px'
                        }}>
                          <span>{lastMatch.homeScore}</span>
                          <span style={{ margin: '0 5px' }}>:</span>
                          <span>{lastMatch.awayScore}</span>
                        </div>
                        <div style={{ marginTop: '5px' }}>
                          <span style={{ 
                            backgroundColor: '#f8f9fa',
                            color: '#6c757d',
                            padding: '3px 10px',
                            borderRadius: '20px',
                            fontSize: '12px'
                          }}>FINALIZADO</span>
                        </div>
                      </div>
                      
                      <div style={{ textAlign: 'center' }}>
                        <img src={getTeamLogo(lastMatch.awayTeam)} alt={lastMatch.awayTeam} style={{ width: '50px', height: '50px', marginBottom: '5px' }} />
                        <h4 style={{ fontWeight: 'bold', margin: 0, fontSize: '14px' }}>{lastMatch.awayTeam}</h4>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', borderTop: '1px solid #eee' }}>
                    <button 
                      onClick={() => openVideoModal(lastMatchData.videoUrl)}
                      style={{ 
                        backgroundColor: '#dc3545',
                        color: 'white',
                        padding: '10px 0',
                        textAlign: 'center',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '14px'
                      }}
                    >
                      <i className="fas fa-play-circle" style={{ marginRight: '5px' }}></i>
                      Assistir Jogo
                    </button>
                    <button 
                      onClick={() => toggleMatchDetails(lastMatch)}
                      style={{ 
                        backgroundColor: '#0d6efd',
                        color: 'white',
                        padding: '10px 0',
                        textAlign: 'center',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '14px'
                      }}
                    >
                      <i className="fas fa-chart-bar" style={{ marginRight: '5px' }}></i>
                      Estatísticas
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="col-md-6 mb-3">
                {/* Next Match Card - Optimized for Mobile */}
                <div style={{ 
                  backgroundColor: 'white', 
                  borderRadius: '8px',
                  boxShadow: '0 1px 6px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  maxWidth: '100%',
                  margin: '0 auto'
                }}>
                  <div style={{ display: 'flex' }}>
                    <div style={{ 
                      backgroundColor: '#f5f9ff', 
                      padding: '10px 15px',
                      borderLeft: '4px solid #0d6efd',
                      width: '50%'
                    }}>
                      <h3 style={{ 
                        color: '#0d6efd', 
                        fontSize: '18px',
                        fontWeight: 'bold',
                        margin: 0
                      }}>{nextMatch.tournament}</h3>
                      <p style={{ 
                        color: '#6c757d',
                        margin: '2px 0 0 0',
                        fontSize: '14px'
                      }}>{nextMatch.stage}</p>
                    </div>
                    <div style={{ 
                      padding: '10px 15px',
                      textAlign: 'right',
                      width: '50%',
                      fontSize: '14px'
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '3px' }}>
                        <i className="far fa-calendar-alt" style={{ color: '#0d6efd', marginRight: '5px' }}></i>
                        <span>{nextMatch.date}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '3px' }}>
                        <i className="far fa-clock" style={{ color: '#0d6efd', marginRight: '5px' }}></i>
                        <span>{nextMatch.time}</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                        <i className="fas fa-map-marker-alt" style={{ color: '#0d6efd', marginRight: '5px' }}></i>
                        <span>{nextMatch.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ padding: '15px 10px', textAlign: 'center' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                      <div style={{ textAlign: 'center' }}>
                        <img src={getTeamLogo(nextMatch.homeTeam)} alt={nextMatch.homeTeam} style={{ width: '50px', height: '50px', marginBottom: '5px' }} />
                        <h4 style={{ fontWeight: 'bold', margin: 0, fontSize: '14px' }}>{nextMatch.homeTeam}</h4>
                      </div>
                      
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ 
                          fontSize: '22px', 
                          fontWeight: 'bold',
                          margin: '0 10px'
                        }}>
                          <span>VS</span>
                        </div>
                        <div style={{ marginTop: '5px' }}>
                          <span style={{ 
                            backgroundColor: '#f8f9fa',
                            color: '#6c757d',
                            padding: '3px 10px',
                            borderRadius: '20px',
                            fontSize: '12px'
                          }}>EM BREVE</span>
                        </div>
                      </div>
                      
                      <div style={{ textAlign: 'center' }}>
                        <img src={getTeamLogo(nextMatch.awayTeam)} alt={nextMatch.awayTeam} style={{ width: '50px', height: '50px', marginBottom: '5px' }} />
                        <h4 style={{ fontWeight: 'bold', margin: 0, fontSize: '14px' }}>{nextMatch.awayTeam}</h4>
                      </div>
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', borderTop: '1px solid #eee' }}>
                    <Link 
                      to="/campeonatos" 
                      style={{ 
                        backgroundColor: '#0d6efd',
                        color: 'white',
                        padding: '10px 0',
                        textAlign: 'center',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        flex: 1,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '14px'
                      }}
                    >
                      <i className="fas fa-trophy" style={{ marginRight: '5px' }}></i>
                      Ver Campeonato
                    </Link>
                    {nextMatch.videoUrl && (
                      <button 
                        onClick={() => openVideoModal(nextMatch.videoUrl)}
                        style={{ 
                          backgroundColor: '#dc3545',
                          color: 'white',
                          padding: '10px 0',
                          textAlign: 'center',
                          textDecoration: 'none',
                          fontWeight: 'bold',
                          flex: 1,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: 'none',
                          cursor: 'pointer',
                          fontSize: '14px'
                        }}
                      >
                        <i className="fas fa-play-circle" style={{ marginRight: '5px' }}></i>
                        Assistir ao Vivo
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Video Modal */}
          {videoModalOpen && (
            <div className="video-modal">
              <div className="video-modal-content">
                <button className="close-modal" onClick={closeVideoModal}>
                  <i className="fas fa-times"></i>
                </button>
                <div className="video-container">
                  <iframe 
                    src={videoUrl.includes('youtu.be') 
                      ? videoUrl.replace('youtu.be/', 'youtube.com/embed/') 
                      : videoUrl} 
                    title="Match Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              <div className="video-modal-overlay" onClick={closeVideoModal}></div>
            </div>
          )}

          {/* About Us Section */}
          <section className="about-section">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="about-image">
                    <img src="/images/team2025-1.jpg" alt="Classe FC Time" className="img-fluid rounded shadow" />
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
      </section>

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="video-modal">
          <div className="video-modal-content">
            <button className="close-modal" onClick={closeVideoModal}>
              <i className="fas fa-times"></i>
            </button>
            <div className="video-container">
              <iframe 
                src={videoUrl.includes('youtu.be') 
                  ? videoUrl.replace('youtu.be/', 'youtube.com/embed/') 
                  : videoUrl} 
                title="Match Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="video-modal-overlay" onClick={closeVideoModal}></div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
