// src/contexts/ActivitesContext.js

import React, { createContext, useState, useEffect } from 'react';

export const ActivitesContext = createContext();

export function ActivitesProvider({ children }) {
  const [activites, setActivites] = useState([]);

  // Charger les activités depuis l'API au montage du provider
  useEffect(() => {
    fetch('http://localhost:8000/api/activites/')
      .then(res => res.json())
      .then(data => setActivites(data));
  }, []);

  // Fonction pour ajouter une activité (via POST à l'API)
  const ajouterActivite = (nouvelleActivite) => {
    fetch('http://localhost:8000/api/activites/', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(nouvelleActivite)
    })
    .then(res => res.json())
    .then(data => {
      setActivites([data, ...activites]);
    });
  };

  return (
    <ActivitesContext.Provider value={{ activites, ajouterActivite }}>
      {children}
    </ActivitesContext.Provider>
  );
}
