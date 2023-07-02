import React, { useEffect, useState } from 'react';
import Pokemon from '../../components/Pokemon';
import axios from 'axios';
import PokemonServices, { pokemonData } from '../../services/PokemonServices';
import SearchBar from '../../components/SearchBar';
import { useSearchValue } from '../../contexts/search';

function PokemonList() {
  
    const[pokemons, setPokemons] = useState<pokemonData[]>();
    useEffect(() => {
        PokemonServices.fetchAllPokemons().then(response => {
        setPokemons(response?.data.pokemon.result);
        });
    }, []);

    const searchValue = useSearchValue();
    console.log(searchValue)

    return (
        <>
        <SearchBar/>
        {pokemons?.slice(0, 19).map((pokemon) => {
            if(pokemon.name.toLowerCase().includes(searchValue.toLowerCase())) {
                return (
                    <Pokemon
                        key={pokemon.id}
                        id={pokemon.id}
                        name={pokemon.name}
                        healthPoints={pokemon.healthPoints}
                        attack={pokemon.attack}
                        defense={pokemon.defense}
                        spAttack={pokemon.spAttack}
                        spDefense={pokemon.spDefense}
                        speed={pokemon.speed}
                        imagePath={pokemon.imagePath}/>
                )
            }
        })}
        </>
  );
};

export default PokemonList;
