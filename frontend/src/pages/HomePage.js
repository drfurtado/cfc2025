import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './HomePage.css'; 

function HomePage() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const openVideoModal = (url) => {
    setVideoUrl(url);
    setVideoModalOpen(true);
  };

  const closeVideoModal = () => {
    setVideoModalOpen(false);
    setVideoUrl('');
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
            <div className="sponsor-item">
              <a href="https://www.autoprotegecuritiba.com.br/" target="_blank" rel="noopener noreferrer">
                <img src="/images/sponsors/patrocinio-protege.png" alt="Protege" className="sponsor-logo" />
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
                        <span className="tournament-name" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary-blue)' }}>Copa Lillico 2024</span>
                        <span className="tournament-stage">Final</span>
                      </div>
                    </div>
                    
                    <div className="match-info">
                      <div className="match-date">
                        <i className="far fa-calendar-alt"></i> 2 Novembro, 2024
                      </div>
                      <div className="match-time">
                        <i className="far fa-clock"></i> 15:00
                      </div>
                      <div className="match-location">
                        <i className="fas fa-map-marker-alt"></i> Campo do Lillico
                      </div>
                    </div>
                  </div>
                  
                  <div className="match-teams-container">
                    <div className="team-logo home-team">
                      <img src="/images/match-logos/classefc.svg" alt="Classe FC" />
                      <span className="team">Classe FC</span>
                    </div>
                    
                    <div className="match-score">
                      <div className="score-box">
                        <span>2</span>
                        <span className="score-divider">:</span>
                        <span>0</span>
                      </div>
                      <div className="match-status">FINALIZADO</div>
                    </div>
                    
                    <div className="team-logo away-team">
                      <img src="/images/match-logos/generic.png" alt="Unidos do CIC" />
                      <span className="team">Unidos do CIC</span>
                    </div>
                  </div>
                </div>
                
                <button 
                  onClick={() => openVideoModal('https://www.youtube.com/embed/90K7SJIFMoc')} 
                  className="btn-match-video"
                  style={{ backgroundColor: '#f0f1f4', color: '#dc3545', border: 'none', borderRadius: '4px', padding: '8px 16px', margin: '10px auto', display: 'block' }}
                >
                  <i className="fab fa-youtube"></i> Ver Jogo
                </button>
              </div>
            </div>
            
            <div className="col-lg-5 col-md-6">
              <div className="match-card next-match">
                <div className="match-card-header">
                  <div className="match-label">Próxima Partida</div>
                </div>
                
                <div className="match-card-body">
                  <div className="match-info-row">
                    <div className="match-tournament">
                      <div className="tournament-badge" style={{ backgroundColor: '#f0f5ff', borderLeft: '4px solid var(--primary-blue)' }}>
                        <span className="tournament-name" style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--primary-blue)' }}>Copa da Vila 2025</span>
                        <span className="tournament-stage">Primeira Fase</span>
                      </div>
                    </div>
                    
                    <div className="match-info">
                      <div className="match-date">
                        <i className="far fa-calendar-alt"></i> 26 Abril, 2025
                      </div>
                      <div className="match-time">
                        <i className="far fa-clock"></i> 14:00
                      </div>
                      <div className="match-location">
                        <i className="fas fa-map-marker-alt"></i> Praça Central
                      </div>
                    </div>
                  </div>
                  
                  <div className="match-teams-container">
                    <div className="team-logo home-team">
                      <img src="/images/match-logos/classefc.svg" alt="Classe FC" />
                      <span className="team">Classe FC</span>
                    </div>
                    
                    <div className="match-score upcoming">
                      <div className="vs-badge">VS</div>
                      <div className="match-status">EM BREVE</div>
                    </div>
                    
                    <div className="team-logo away-team">
                      <img src="/images/match-logos/spaulinho.png" alt="S. Paulinho" />
                      <span className="team">S. Paulinho</span>
                    </div>
                  </div>
                </div>
                
                <button 
                  className="btn-match-video"
                  style={{ backgroundColor: '#f0f1f4', color: '#0d6efd', border: 'none', borderRadius: '4px', padding: '8px 16px', margin: '10px auto', display: 'block' }}
                  disabled
                >
                  <i className="fas fa-bell"></i> Lembrar
                </button>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link to="/campeonatos" className="btn btn-outline-primary">
              <i className="fas fa-calendar-week"></i> Ver Calendário Completo
            </Link>
          </div>
        </div>
      </section>

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

      {/* Video Modal */}
      {videoModalOpen && (
        <div className="video-modal-overlay" onClick={closeVideoModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={closeVideoModal}>
              <i className="fas fa-times"></i>
            </button>
            <div className="video-container">
              <iframe
                src={videoUrl}
                title="Video Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
