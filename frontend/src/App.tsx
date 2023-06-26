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
          key={pokemon.ID}
          ID={pokemon.ID}
          Name={pokemon.Name}
          Type1={pokemon.Type1}
          Type2={pokemon.Type2}
          Total={pokemon.Total}
          HP={pokemon.HP}
          Attack={pokemon.Attack}
          Defense={pokemon.Defense}
          SpAtk={pokemon.SpAtk}
          SpDef={pokemon.SpDef}
          Speed={pokemon.Speed}
          Generation={pokemon.Generation}
          Legendary={pokemon.Legendary}/>
      ))}
    </div>
  );
};

export default App;
