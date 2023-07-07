import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import {Route, Link, Routes, useParams, useNavigate} from 'react-router-dom';
import Pokemon from "../../components/Pokemon";
import { moveData, pokemonData, pokemonTypeData } from "../../utils";
import PokemonServices from "../../services/PokemonServices";
import { idText } from "typescript";
import './style.css';
import Move from "../../components/Move";

function PokemonInfo() {
    
    const[pokemon, setPokemon] = useState<pokemonData>();
    const[types, setTypes] = useState<pokemonTypeData[]>();
    const[pokemonsEvolved, setPokemonsEvolved] = useState<pokemonData[]>();
    const[allTypes, setAllTypes] = useState<pokemonTypeData[]>();
    const[moves, setMoves] = useState<moveData[]>();
    const params = useParams();

    useEffect(() => {
        if (params.id != undefined) {
            const id = parseInt(params.id);
            PokemonServices.fetchPokemonByPk(id).then(response => {
                setPokemon(response?.data.pokemon.result[0]);
            });
            PokemonServices.fetchPokemonTypesByPk(id).then(response => {
                setTypes(response?.data.type.result);
            });
            PokemonServices.fetchPokemonEvolutionByPk(id).then(response => {
                setPokemonsEvolved(response?.data.pokemon.result);
            });
            PokemonServices.fetchAllPokemonTypes().then(response => {
                setAllTypes(response?.data.type.result);
            });
            PokemonServices.fetchAllPokemonMovesByPk(id).then(response => {
                setMoves(response?.data.move.result);
            });
        }
    }, []);

    if (pokemon && types && allTypes) {
        return (
            <>
                <NavBar></NavBar>
                <div className='pokemonContainer'>
                    <div className='pokemon'>
                        <Pokemon
                            id={pokemon.id}
                            name={pokemon.name}
                            healthPoints={pokemon.healthPoints}
                            attack={pokemon.attack}
                            defense={pokemon.defense}
                            spAttack={pokemon.spAttack}
                            spDefense={pokemon.spDefense}
                            speed={pokemon.speed}
                            imagePath={pokemon.imagePath}
                            logo={types}/>
                    </div>
                </div>
                <div className='title'><h1>Evoluções : </h1></div>
                <div className='pokemonContainer'>
                    {pokemonsEvolved?.map((pokemonEvolved) => {

                        return (
                            <div key={pokemon.id} className='pokemon'>
                                <Pokemon
                                    id={pokemonEvolved.id}
                                    name={pokemonEvolved.name}
                                    healthPoints={pokemonEvolved.healthPoints}
                                    attack={pokemonEvolved.attack}
                                    defense={pokemonEvolved.defense}
                                    spAttack={pokemonEvolved.spAttack}
                                    spDefense={pokemonEvolved.spDefense}
                                    speed={pokemonEvolved.speed}
                                    imagePath={pokemonEvolved.imagePath}
                                    logo={allTypes?.filter(type => type.id == pokemonEvolved.id)}/>
                            </div>
                    )})}
                </div>
                <div className='title'><h1>Ataques : </h1></div>
                <div className='moveContainer'>
                    {moves?.map((move) => {

                        return (
                            <div key={move.id} className='center'>
                                <Move
                                    id={move.id}
                                    name={move.name}
                                    category={move.category}
                                    typeName={move.typeName}
                                    powerPoints={move.powerPoints}
                                    power={move.power}
                                    accuracy={move.accuracy}/>
                            </div>
                    )})}
                </div>
            </>
        )          
    } else {
        return (<>Carregando</>)
    }
};

export default PokemonInfo;