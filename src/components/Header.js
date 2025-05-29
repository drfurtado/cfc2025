import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faHome, faHistory, faUsers, faTrophy } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(true); // Set to true to always show on mobile

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Helper function to get the icon for each menu item
  const getNavIcon = (index) => {
    switch (index) {
      case 0: return faHome;
      case 1: return faHistory;
      case 2: return faUsers;
      case 3: return faTrophy;
      default: return faHome;
    }
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
          {[
            { path: "/", text: "Home", exact: true },
            { path: "/historia", text: "História" },
            { path: "/time", text: "Time" },
            { path: "/campeonatos", text: "Campeonatos" }
          ].map((item, index) => (
            <li key={item.path}>
              <NavLink 
                to={item.path} 
                end={item.exact} 
                onClick={() => setMenuOpen(true)}
                className={({isActive}) => isActive ? 'active' : ''}
              >
                <span className="nav-icon">
                  <FontAwesomeIcon icon={getNavIcon(index)} />
                </span>
                <span className="nav-text">{item.text}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
