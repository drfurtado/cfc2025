import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav>
        <Link to="/" className="logo">
          <img src="/images/logo.svg" alt="Classe FC Logo" />
          <span className="logo-text">Classe FC</span>
        </Link>
        
        <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>
        
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li>
            <NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/historia" onClick={() => setMenuOpen(false)}>História</NavLink>
          </li>
          <li>
            <NavLink to="/time" onClick={() => setMenuOpen(false)}>Time</NavLink>
          </li>
          <li>
            <NavLink to="/campeonatos" onClick={() => setMenuOpen(false)}>Campeonatos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
