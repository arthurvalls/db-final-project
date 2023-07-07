import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PokemonServices from '../../services/PokemonServices';
import { pokemonData, pokemonTypeData } from '../../utils';
import './style.css'

function Pokemon (Props : pokemonData) {

    let navigate = useNavigate(); 
    const routeChange = (id : number) =>{ 
        let path = `/pokemon/${id}`; 
        navigate(path);
        window.location.reload();
    };
    
    return (
        <div className="pokemon-card" onClick={() => routeChange(Props.id)}>
            <div className="pokemon-image">
                <img src={`/images/pokemonSprites/${Props.imagePath}`} alt={Props.name} />
            </div>
            <h2 className="pokemon-name">{Props.name}</h2>
            <div className="pokemon-types">
                {Props.logo?.map((logo) => {return (<img key={logo['logo']} width='50' src={`/images/pokemonTypes/${logo['logo']}`}></img>)})}
            </div>
            <div className="pokemon-stats">
                <div className="pokemon-stat">
                    <span className="stat-label">HP:</span> {Props.healthPoints}
                </div>
                <div className="pokemon-stat">
                    <span className="stat-label">Attack:</span> {Props.attack}
                </div>
                <div className="pokemon-stat">
                    <span className="stat-label">Defense:</span> {Props.defense}
                </div>
                <div className="pokemon-stat">
                    <span className="stat-label">Sp. Attack:</span> {Props.spAttack}
                </div>
                <div className="pokemon-stat">
                    <span className="stat-label">Sp. Defense:</span> {Props.spDefense}
                </div>
                <div className="pokemon-stat">
                    <span className="stat-label">Speed:</span> {Props.speed}
                </div>
            </div>
        </div>
    );
};

export default Pokemon;