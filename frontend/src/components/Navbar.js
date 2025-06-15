import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/activites">Activités</Link></li>
        <li><Link to="/creer">Créer</Link></li>
        <li><Link to="/compte">Compte</Link></li>
      </ul>
    </nav>
  );
}
