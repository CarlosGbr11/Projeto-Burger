import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css"

function Navbar() {
  return (
    <div className="navbar">
      <div className="center">
        <div className="logo">
          <img src="imagens/logo.png" alt="Logo" />
        </div>
        <div className="menu">
          <Link to="/section">HOME</Link>
          <Link to="/cardapio">CARDÁPIO</Link>
          <Link to="/promocoes">PROMOÇÕES</Link>
          <Link to="/sobre">SOBRE</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

  