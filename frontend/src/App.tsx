import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SearchProvider } from './contexts/search';
import PokemonList from './pages/ListPokemon';
import AdvancedSearch from './pages/AdvancedSearch';
import StatsPage from './pages/Stats';

function App() {
  return (
  <SearchProvider>
    <BrowserRouter>
      <Routes>
          <Route path ='/' element={<PokemonList/>}/>
          <Route path ='advanced' element={<AdvancedSearch/>}/>
          <Route path ='stats' element={<StatsPage/>}/>
      </Routes>
    </BrowserRouter>
  </SearchProvider>    
  );
};

export default App;
