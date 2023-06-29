import React, { useEffect, useState } from 'react';
import './App.css';
import Pokemon from './components/Pokemon';
import axios from 'axios';
import PokemonServices, { pokemonData } from './services/PokemonServices';

function App() {
  
  const[pokemons, setPokemons] = useState<pokemonData[]>();


  useEffect(() => {
    PokemonServices.fetchAllPokemons().then(response => {
      setPokemons(response?.data.result);
    });
  }, []);
  console.log(pokemons)

  /* useEffect(() => {
    const fetchAllPokemons = async () => {
      try {
        const res = await axios.get('http://localhost:3333/router/pokemon');
        setPokemons(res?.data.result);
      } catch (error) {
        console.log(error);
      };
    };
    fetchAllPokemons();
  }, []); */
  
  return (
    <div>
      {pokemons?.map(pokemon => (
        <Pokemon
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          healthPoints={pokemon.healthPoints}
          attack={pokemon.attack}
          defense={pokemon.defense}
          spAtk={pokemon.spAtk}
          spDef={pokemon.spDef}
          speed={pokemon.speed}
          imagePath={pokemon.imagePath}/>
      ))}
    </div>
  );
};

export default App;
