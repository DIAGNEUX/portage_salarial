import React from 'react';
import { Link } from 'react-router-dom';
import './App.css'
import logo from './Assets/sentechs logo.png'

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="link">
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/portage_salarial">Portage salarial</Link></li>
            <li><Link to="/pour_qui">Pour Qui ?</Link></li>
            <li><Link to="/avantage">Avantages</Link></li>
            <li><Link to="/offre">Offre</Link></li>
            <li><Link to="/ressources">Ressources</Link></li>
            <li><Link to="/outil">Outils de simulation</Link></li>
          </ul>
        </div>
        <div className='connexion_part'>
        <div className='connexion'>
            <button>Se connecter</button>
          </div>
          <div className='inscription'>
            <button>S'Inscrire</button>
          </div>
          
        </div>
      </div>
    </div>
  );
}