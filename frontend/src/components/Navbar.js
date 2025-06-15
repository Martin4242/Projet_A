// src/components/Navbar.jsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function Navbar() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          IT App
        </Typography>
        <Box>
          <Button color="inherit" href="/">Accueil</Button>
          <Button color="inherit" href="/activites">Activités</Button>
          <Button color="inherit" href="/creer">Créer</Button>
          <Button color="inherit" href="/mon-compte">Mon compte</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
