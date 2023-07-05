import React, { useEffect, useState } from 'react'
import PokemonServices from '../../services/PokemonServices';
import { pokemonData, pokemonTypeData } from '../../utils';
import './style.css'

function Pokemon (Props : pokemonData) {

    const[types, setTypes] = useState<pokemonTypeData[]>();
    useEffect(() => {
        PokemonServices.fetchPokemonTypesByPk(Props.id).then(response => {
        setTypes(response?.data.type.result);
        });
    }, []);

    return (
        <div className='PokemonCard'>
            <div className='PokemonPhoto'>
                <img width='150' height='150' src={`/images/pokemonSprites/${Props.imagePath}`}></img>
            </div>
            <div className='PokemonInfo'>
                <div className='PokemonName'>
                    <div>{Props.name}</div>
                </div>
                {types?.map((type) => {return (<><img width='50' src={`/images/pokemonTypes/${type.logo}`}></img></>)})}
                <div className='PokemonStats'>
                    <div className='PokemonStats1'>
                        <b>HP  </b><div className='Stat'>{Props.healthPoints}</div>
                        <b>Atk </b><div className='Stat'>{Props.attack}</div>
                        <b>Def </b><div className='Stat'>{Props.defense}</div>
                    </div>
                    <div className='PokemonStats2'>
                        <b>Speed  </b><div className='Stat'>{Props.speed}</div>
                        <b>sp.Atk </b><div className='Stat'>{Props.spAttack}</div>
                        <b>sp.Def </b><div className='Stat'>{Props.spDefense}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pokemon;