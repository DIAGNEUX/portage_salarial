import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import logo from './Assets/sentechs logo.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar${sticky ? ' sticky' : ''}`}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="link">
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/p_salarial">Portage salarial</Link></li>
          <li><Link to="/pour_qui">Pour Qui ?</Link></li>
          <li><Link to="/avantage">Avantages</Link></li>
          <li><Link to="/offre">Offre</Link></li>
          <li><Link to="/ressources">Ressources</Link></li>
          <li><Link to="/outil">Outils de simulation</Link></li>
        </ul>
      </div>
      <div className="connexion_part">
        <div className="connexion">
          <button>Se connecter</button>
        </div>
        <div className="inscription">
          <button>S'Inscrire</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
