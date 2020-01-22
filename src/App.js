import React from 'react';
import './App.css';
import Container from './components/Container';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <ThemeContextProvider>
      <Container/> 
    </ThemeContextProvider>
  );
}

export default App;
