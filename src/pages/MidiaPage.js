import React from 'react';
import PageBanner from '../components/PageBanner';
import './MidiaPage.css';

const MidiaPage = () => {
  return (
    <div className="midia-page">
      <PageBanner
        backgroundImage="/images/cfc-atual5.jpeg"
        title="Mídia"
        subtitle="Fotos, vídeos e conteúdo da Classe FC"
      />
      
      <div className="container">
        <div className="midia-content">
          <p>Página em construção</p>
        </div>
      </div>
    </div>
  );
};

export default MidiaPage;
