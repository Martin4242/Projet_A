// src/pages/MonCompte.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MonCompte() {
  const [user, setUser] = useState(null);
  const [activites, setActivites] = useState({ faites: [], a_venir: [] });

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get('http://localhost:8000/api/user/', {
      headers: { Authorization: `Token ${token}` }
    }).then(res => setUser(res.data));

    axios.get('http://localhost:8000/api/user/activites/', {
      headers: { Authorization: `Token ${token}` }
    }).then(res => setActivites(res.data));
  }, []);

  return (
    <div className="p-4">
      {user && (
        <div>
          <h2>{user.first_name} {user.last_name}</h2>
          <p>Email: {user.email}</p>
        </div>
      )}

      <h3 className="mt-4 font-bold">Activités à venir</h3>
      <ul>
        {activites.a_venir.map((a, i) => <li key={i}>{a.titre} - {a.date}</li>)}
      </ul>

      <h3 className="mt-4 font-bold">Activités passées</h3>
      <ul>
        {activites.faites.map((a, i) => <li key={i}>{a.titre} - {a.date}</li>)}
      </ul>
    </div>
  );
}

export default MonCompte;