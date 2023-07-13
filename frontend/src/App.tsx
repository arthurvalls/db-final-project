import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SearchProvider } from './contexts/search';
import PokemonList from './pages/ListPokemon';
import AdvancedSearch from './pages/AdvancedSearch';
import StatsPage from './pages/Stats';
import PokemonInfo from './pages/PokemonInfo';

function App() {
  return (
  <SearchProvider>
    <BrowserRouter>
      <Routes>
          <Route path ='/' element={<PokemonList/>}/>
          <Route path ='advanced' element={<AdvancedSearch/>}/>
          <Route path ='stats' element={<StatsPage/>}/>
          <Route path='pokemon/:id' element={<PokemonInfo/>}/>
      </Routes>
    </BrowserRouter>
  </SearchProvider>    
  );
};

export default App;
