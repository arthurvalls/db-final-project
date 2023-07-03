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
                        <div className='Stat'>HP  : {Props.healthPoints}</div>
                        <div className='Stat'>Atk : {Props.attack}</div>
                        <div className='Stat'>Def : {Props.defense}</div>
                    </div>
                    <div className='PokemonStats2'>
                        <div className='Stat'>Speed : {Props.speed}</div>
                        <div className='Stat'>sp.Atk : {Props.spAttack}</div>
                        <div className='Stat'>sp.Def : {Props.spDefense}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

/* <div style={{ backgroundImage: `url('/articleImages/${imageName}')` }}></div> */
export default Pokemon;