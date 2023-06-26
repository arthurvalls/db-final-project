import React from 'react'
import { pokemonData } from '../../services/PokemonServices';

const Pokemon = (Props : pokemonData) => {

    return (
        <div>{Props.Name}</div>
    );
};

export default Pokemon;