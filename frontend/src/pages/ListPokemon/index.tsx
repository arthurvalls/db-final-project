import React, { useEffect, useState } from 'react';
import Pokemon from '../../components/Pokemon';
import axios from 'axios';
import PokemonServices from '../../services/PokemonServices';
import SearchBar from '../../components/SearchBar';
import { useSearchValue } from '../../contexts/search';
import NavBar from '../../components/NavBar';
import './style.css'
import { pokemonData } from '../../utils';

function PokemonList() {
  
    const[pokemons, setPokemons] = useState<pokemonData[]>();
    const[page, setPage] = useState<number>(1);

    useEffect(() => {
        PokemonServices.fetchAllPokemons().then(response => {
        setPokemons(response?.data.pokemon.result);
        });
    }, []);
    
    function anterior () {setPage(page - 1)};
    function proxima () {setPage(page + 1)};

    const searchValue = useSearchValue();
    const searchedPokemons = pokemons?.filter((pokemon) => pokemon.name.toLowerCase().includes(searchValue.toLowerCase()));

    useEffect(() => {
        setPage(1)
    }, [searchedPokemons?.length]);

    async function size (searchedPokemons : pokemonData[] | undefined) {
        if (searchedPokemons?.length == undefined) {
        }
        else {
            return searchedPokemons?.length % 20
        }
    }
    console.log(size(searchedPokemons))

    return (
        <>
        <NavBar></NavBar>
        <SearchBar/>
        <div className='paginationButtons'>
        <button onClick={anterior} disabled={page == 1} className='paginationButton'>Anterior</button>
            <button onClick={proxima} disabled={page == 20} className='paginationButton'>Próximo</button>
        </div>
        {searchedPokemons?.slice(10*(page - 1), 10*(page - 1) + 10).map((pokemon) => {
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
        })}
        <div className='paginationButtons'>
            <button onClick={anterior} disabled={page == 1} className='paginationButton'>Anterior</button>
            <button onClick={proxima} disabled={page == 20} className='paginationButton'>Próximo</button>
        </div>
        </>
  );
};

export default PokemonList;