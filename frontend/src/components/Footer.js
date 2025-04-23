import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <img src="/images/logo.png" alt="Classe FC Logo" className="footer-logo" />
            <h3>Classe Futebol Clube</h3>
            <p>Fundado em 2015, o Classe FC é um clube de futebol amador que valoriza a amizade, o respeito e a paixão pelo esporte.</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4>Links Rápidos</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/historia">História</Link></li>
              <li><Link to="/time">Time</Link></li>
              <li><Link to="/campeonatos">Campeonatos</Link></li>
              <li><Link to="/midia">Mídia</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">© {new Date().getFullYear()} Classe Futebol Clube. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
