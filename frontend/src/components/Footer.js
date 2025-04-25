import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-top-wave"></div>
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-brand">
              <div className="footer-logo-container">
                <img src="/images/logo.png" alt="Classe FC Logo" className="footer-logo" />
              </div>
              <h3>Classe Futebol Clube</h3>
              <p className="footer-tagline">Mais de 40 anos de paixão pelo futebol</p>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-navigation">
              <div className="footer-links">
                <h4>Navegação</h4>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/historia">História</Link></li>
                  <li><Link to="/time">Time</Link></li>
                </ul>
              </div>
              <div className="footer-links">
                <h4>Contato</h4>
                <ul>
                  <li><a href="mailto:classefc84@gmail.com">classefc84@gmail.com</a></li>
                </ul>
              </div>
              <div className="footer-links">
                <h4>Sobre</h4>
                <p className="footer-about">Fundada em 1984, a Classe FC é um clube de futebol amador que valoriza a amizade, o respeito e a paixão pelo esporte.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="https://wa.me/5541999999999" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </div>
          <p className="copyright">&copy; {new Date().getFullYear()} Classe Futebol Clube. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
