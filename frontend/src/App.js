import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ActivitesPage from './pages/ActivitesPage';
import CreerActivitePage from './pages/CreerActivitePage';
import ComptePage from './pages/ComptePage';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/activites" element={<ActivitesPage />} />
          <Route path="/creer" element={<CreerActivitePage />} />
          <Route path="/compte" element={<ComptePage />} />
        </Routes>
        <Navbar />
      </div>
    </Router>
  );
}


export default App;
