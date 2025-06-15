// 📁 src/pages/ActivitesPage.jsx
import React, { useState, useEffect } from 'react';
import Map from '../components/Map';
import ActiviteListe from '../components/ActiviteListe';

export default function ActivitesPage() {
  const [mode, setMode] = useState('carte');

  return (
    <div className="p-4">
      <div className="flex justify-center gap-4 mb-4">
        <button onClick={() => setMode('carte')} className="btn btn-sm">Carte</button>
        <button onClick={() => setMode('liste')} className="btn btn-sm">Liste</button>
      </div>
      {mode === 'carte' ? <Map /> : <ActiviteListe />}
    </div>
  );
}