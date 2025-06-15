// src/pages/Activites.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Activites() {
  const [mode, setMode] = useState('liste');
  const [activites, setActivites] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/activites/')
      .then(res => setActivites(res.data))
      .catch(() => alert("Erreur de chargement des activités."));
  }, []);

  return (
    <div className="p-4">
      <div className="flex space-x-4 mb-4">
        <button onClick={() => setMode('liste')} className="bg-gray-200 p-2">Liste</button>
        <button onClick={() => setMode('carte')} className="bg-gray-200 p-2">Carte</button>
      </div>

      {mode === 'liste' ? (
        <ul>
          {activites.map((a, index) => (
            <li key={index} className="border p-2 mb-2">
              <strong>{a.titre}</strong><br />
              {a.description}<br />
              {a.date}<br />
              Thème: {a.theme}
            </li>
          ))}
        </ul>
      ) : (
        <p>Ici une carte avec les activités géolocalisées (non implémentée ici).</p>
      )}
    </div>
  );
}

export default Activites;