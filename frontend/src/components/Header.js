import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/" className="logo">
          <img src="/images/logo.svg" alt="Classe FC Logo" />
          <span className="logo-text">Classe FC</span>
        </Link>
        
        <ul className="nav-links">
          <li>
            <NavLink to="/" end>Home</NavLink>
          </li>
          <li>
            <NavLink to="/historia">História</NavLink>
          </li>
          <li>
            <NavLink to="/time">Time</NavLink>
          </li>
          <li>
            <NavLink to="/campeonatos">Campeonatos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
