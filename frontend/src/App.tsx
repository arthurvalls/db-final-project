import React from 'react';
/* import Router from './Router'; */
import './App.css';
import { SearchProvider } from './contexts/search';
import PokemonList from './pages/ListPokemon';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StatsPage from './pages/Stats';

function App() {
  return (
  <SearchProvider>
    <BrowserRouter>
      <Routes>
          <Route path ='/' element={<PokemonList/>}/>
          <Route path ='stats' element={<StatsPage/>}/>
      </Routes>
    </BrowserRouter>
  </SearchProvider>    
  );
};

export default App;
