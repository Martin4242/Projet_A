// 📁 src/pages/CreerActivitePage.jsx
import React, { useState } from 'react';

export default function CreerActivitePage() {
  const [formData, setFormData] = useState({ titre: '', date: '', theme: '', description: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/activites/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
  };

  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <input className="input" placeholder="Titre" onChange={(e) => setFormData({ ...formData, titre: e.target.value })} />
      <input className="input" type="date" onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
      <input className="input" placeholder="Thème" onChange={(e) => setFormData({ ...formData, theme: e.target.value })} />
      <textarea className="textarea" placeholder="Description" onChange={(e) => setFormData({ ...formData, description: e.target.value })}></textarea>
      <button className="btn btn-primary mt-4" type="submit">Créer</button>
    </form>
  );
}