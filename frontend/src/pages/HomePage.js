import React from 'react';
import { Link } from 'react-router-dom'; 
import './HomePage.css'; 

function HomePage() {
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

      {/* Matches Section - Last & Next Match */}
      <section className="matches-section">
        <div className="container">
          <h2 className="section-title text-center">Partidas</h2>
          <div className="row justify-content-center">
            <div className="col-md-5">
              <div className="match-card last-match">
                <div className="match-label">Última Partida</div>
                <div className="match-date">15 Abril, 2025</div>
                <div className="match-teams">
                  <span className="team">Classe FC</span>
                  <span className="score">3 - 1</span>
                  <span className="team">Vila FC</span>
                </div>
                <div className="match-location">
                  <i className="fas fa-map-marker-alt"></i> Campo do Vila
                </div>
                <div className="match-result win">
                  <i className="fas fa-trophy"></i> Vitória
                </div>
              </div>
            </div>
            <div className="col-md-5">
              <div className="match-card next-match">
                <div className="match-label">Próxima Partida</div>
                <div className="match-date">28 Abril, 2025</div>
                <div className="match-teams">
                  <span className="team">Classe FC</span>
                  <span className="vs">vs</span>
                  <span className="team">Amigos FC</span>
                </div>
                <div className="match-location">
                  <i className="fas fa-map-marker-alt"></i> Campo do Classe
                </div>
                <div className="match-time">
                  <i className="far fa-clock"></i> 10:00
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <Link to="/campeonatos" className="btn btn-outline-primary">Ver Todos os Jogos</Link>
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
                <h2 className="section-title">Sobre o Classe FC</h2>
                <p className="section-description">
                  Fundado em 2015 por um grupo de amigos apaixonados por futebol, o Classe Futebol Clube nasceu com o objetivo de unir pessoas através do esporte, promovendo a amizade, o respeito e o espírito esportivo.
                </p>
                <p className="section-description">
                  Nosso time é formado por jogadores amadores que compartilham não apenas o amor pelo futebol, mas também valores como companheirismo, dedicação e fair play.
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
                <h3 className="trophy-title">Copa Vila 2024</h3>
                <p className="trophy-description">Campeão da Copa Vila 2024, vencendo a final por 3x1.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="trophy-card">
                <div className="trophy-icon">
                  <i className="fas fa-medal"></i>
                </div>
                <h3 className="trophy-title">Torneio Amizade 2023</h3>
                <p className="trophy-description">Vice-campeão do Torneio da Amizade 2023.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="trophy-card">
                <div className="trophy-icon">
                  <i className="fas fa-award"></i>
                </div>
                <h3 className="trophy-title">Liga Amadora 2022</h3>
                <p className="trophy-description">Terceiro lugar na Liga Amadora 2022.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Us / CTA Section */}
      <section className="join-section" style={{ backgroundImage: `url('/images/cfc-atual5.png')` }}>
        <div className="join-overlay"></div>
        <div className="container">
          <div className="join-content">
            <h2 className="section-title">Junte-se ao Classe FC</h2>
            <p className="section-description">
              Quer fazer parte do nosso time? Estamos sempre abertos a novos talentos e amigos que compartilham nossa paixão pelo futebol.
            </p>
            <a href="mailto:contato@classefc.com.br" className="btn btn-primary btn-lg join-button">Entre em Contato</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
