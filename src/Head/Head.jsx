import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Head.scss';

function Head() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo"></div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Ana səhifə</Link>
        <Link to="/about" onClick={toggleMenu}>Haqqımızda</Link>
        <Link to="/activities" onClick={toggleMenu}>Fəaliyyətlər</Link>
        <Link to="/gallery" onClick={toggleMenu}>Qalereya</Link>
        <Link to="/blog" onClick={toggleMenu}>Bloq</Link>
        <Link to="/contact" onClick={toggleMenu}>Əlaqə</Link>
      </nav>
      <button className="login-button">Daxil olun</button>
      <div className="menu-toggle" onClick={toggleMenu}>
        <span className="burger"></span>
        <span className="burger"></span>
        <span className="burger"></span>
      </div>
    </header>
  );
}

export default Head;
