import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Activites from './pages/Activites';
import Creer from './pages/Creer';
import MonCompte from './pages/MonCompte';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/activites" element={<Activites />} />
          <Route path="/creer" element={<Creer />} />
          <Route path="/mon-compte" element={<MonCompte />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
