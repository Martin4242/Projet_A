// 📁 src/pages/ComptePage.jsx
import React, { useEffect, useState } from 'react';

export default function ComptePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('/api/user/').then(res => res.json()).then(data => setUser(data));
  }, []);

  if (!user) return <p>Chargement...</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Mon compte</h2>
      <p><strong>Nom:</strong> {user.nom}</p>
      <p><strong>Prénom:</strong> {user.prenom}</p>
      <p><strong>Thème préféré:</strong> {user.theme_prefere}</p>
      <p><strong>Activités à venir:</strong> {user.activites_a_venir.length}</p>
      <p><strong>Activités faites:</strong> {user.activites_faites.length}</p>
    </div>
  );
}