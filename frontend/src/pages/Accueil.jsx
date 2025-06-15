// src/pages/Accueil.jsx
import React, { useState } from 'react';
import axios from 'axios';

function Accueil() {
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [registerData, setRegisterData] = useState({ username: '', password: '', email: '', first_name: '', last_name: '' });

  const handleLogin = async () => {
    try {
      const res = await axios.post('http://localhost:8000/api/login/', loginData);
      localStorage.setItem('token', res.data.access);
      alert("Connexion réussie !");
    } catch (err) {
      alert("Erreur de connexion.");
    }
  };

  const handleRegister = async () => {
    try {
      const res = await axios.post('http://localhost:8000/api/register/', registerData);
      localStorage.setItem('token', res.data.access);  // stocke access token
      alert("Inscription réussie !");
    } catch (err) {
      alert("Erreur d'inscription.");
    }
  };
  

  return (
    <div className="p-4 space-y-6">
      <h2 className="text-xl font-bold">Connexion</h2>
      <input placeholder="Nom d'utilisateur" className="border p-2" onChange={e => setLoginData({...loginData, username: e.target.value})} />
      <input type="password" placeholder="Mot de passe" className="border p-2" onChange={e => setLoginData({...loginData, password: e.target.value})} />
      <button onClick={handleLogin} className="bg-blue-500 text-white p-2">Se connecter</button>

      <h2 className="text-xl font-bold mt-8">Inscription</h2>
      <input placeholder="Nom d'utilisateur" className="border p-2" onChange={e => setRegisterData({...registerData, username: e.target.value})} />
      <input type="password" placeholder="Mot de passe" className="border p-2" onChange={e => setRegisterData({...registerData, password: e.target.value})} />
      <input placeholder="Email" className="border p-2" onChange={e => setRegisterData({...registerData, email: e.target.value})} />
      <input placeholder="Prénom" className="border p-2" onChange={e => setRegisterData({...registerData, first_name: e.target.value})} />
      <input placeholder="Nom" className="border p-2" onChange={e => setRegisterData({...registerData, last_name: e.target.value})} />
      <button onClick={handleRegister} className="bg-green-500 text-white p-2">S'inscrire</button>
    </div>
  );
}

export default Accueil;