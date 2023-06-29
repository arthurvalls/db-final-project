import React from 'react'
import { pokemonData } from '../../services/PokemonServices';

const Pokemon = (Props : pokemonData) => {

    return (
        <>
        {/* <div style={{ backgroundImage: `url('/articleImages/${imageName}')` }}></div> */}
        <img src={`/pokemonSprites/${Props.imagePath}`}></img>
        <div>{Props.name}</div>
        </>
    );
};

export default Pokemon;