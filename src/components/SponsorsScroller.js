import React from 'react';
import './SponsorsScroller.css';

const SponsorsScroller = ({ sponsors }) => {
  // Default sponsors if none provided
  const defaultSponsors = [
    {
      name: 'AurigaLabs',
      image: '/images/sponsors/patrocinio-auriga.png',
      url: 'https://aurigalabs.netlify.app'
    },
    {
      name: 'Coture',
      image: '/images/sponsors/patrocinio-coture.png',
      url: 'https://www.instagram.com/despachante_coture/'
    },
    {
      name: 'Estilo Raro',
      image: '/images/sponsors/patrocinio-estilo.png',
      url: 'https://www.instagram.com/estiloraropremiumcwb/'
    },
    {
      name: 'GRP Turismo',
      image: '/images/sponsors/patrocinio-grp.png',
      url: 'tel:+5541996385718'
    }
  ];

  const sponsorsList = sponsors || defaultSponsors;

  return (
    <div className="sponsors-scroller-container">
      <div className="sponsors-title">Nossos Patrocinadores</div>
      <div className="sponsors-track">
        <div className="sponsors-inner">
          {sponsorsList.map((sponsor, index) => (
            <a 
              key={index} 
              href={sponsor.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="sponsor-card"
            >
              <img 
                src={sponsor.image} 
                alt={sponsor.name} 
                className="sponsor-image" 
              />
            </a>
          ))}
        </div>
      </div>
      <div className="sponsor-cta-container">
        <a href="mailto:classefc84@gmail.com" className="sponsor-cta">
          Torne-se um Patrocinador
        </a>
      </div>
    </div>
  );
};

export default SponsorsScroller;
