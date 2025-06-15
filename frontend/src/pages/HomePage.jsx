// 📁 src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="p-6 text-center">
        <h1 className="text-3xl font-bold mb-4">Bienvenue sur IT App</h1>
        <div className="flex justify-center gap-4">
          <Link to="/login" className="btn btn-primary">Se connecter</Link>
          <Link to="/register" className="btn btn-outline">S'inscrire</Link>
        </div>
      </div>

      <nav className="btm-nav">
        <Link to="/" className="text-xs">Accueil</Link>
        <Link to="/activites" className="text-xs">Activités</Link>
        <Link to="/creer" className="text-xs">Créer</Link>
        <Link to="/compte" className="text-xs">Mon compte</Link>
      </nav>
    </div>
  );
}