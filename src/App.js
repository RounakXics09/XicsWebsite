import React from 'react'
import './App.css';
import MainLayout from './pages/MainLayout';
import { Box } from '@mui/material';

function App() {
  return (
    <Box sx={{ px: 8 }}>
      <MainLayout />
    </Box>
  );
}

export default App;
