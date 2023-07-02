import React from 'react';
/* import Router from './Router'; */
import './App.css';
import { SearchProvider } from './contexts/search';
import PokemonList from './pages/ListPokemon';

function App() {
  return (
    <>
    <SearchProvider>
      <PokemonList></PokemonList>
    </SearchProvider>    
    </>
  );
};

export default App;
