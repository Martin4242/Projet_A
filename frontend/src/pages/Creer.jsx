// src/pages/Creer.jsx
import React, { useState } from 'react';
import axios from 'axios';

function Creer() {
  const [formData, setFormData] = useState({ titre: '', description: '', date: '', theme: '' });

  const handleSubmit = async () => {
    const token = localStorage.getItem('token');
    try {
      await axios.post('http://localhost:8000/api/activites/creer/', formData, {
        headers: { Authorization: `Token ${token}` }
      });
      alert("Activité créée avec succès.");
    } catch {
      alert("Erreur lors de la création.");
    }
  };

  return (
    <div className="p-4 space-y-4">
      <input placeholder="Titre" className="border p-2" onChange={e => setFormData({...formData, titre: e.target.value})} />
      <input type="date" className="border p-2" onChange={e => setFormData({...formData, date: e.target.value})} />
      <input placeholder="Thème" className="border p-2" onChange={e => setFormData({...formData, theme: e.target.value})} />
      <textarea placeholder="Description" className="border p-2 w-full" onChange={e => setFormData({...formData, description: e.target.value})} />
      <button onClick={handleSubmit} className="bg-blue-500 text-white p-2">Créer</button>
    </div>
  );
}

export default Creer;