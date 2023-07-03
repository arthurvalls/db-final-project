import React, { useEffect } from "react";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { useState } from "react";
import "./style.css";
import NavBar from "../../components/NavBar";
import BarChart from "../../components/BarChart";
import PokemonServices from "../../services/PokemonServices";
import { pokemonAvgData } from "../../utils/index"

type chartData = {
    labels : string[],
    datasets : [
        {
            label : string,
            data : number[],
        }
    ]
};

function StatsPage () {

    const [pokemonsAvg, setPokemonsAvg] = useState<pokemonAvgData[]>();
    const [pokemonAvgData, setPokemonAvgData] = useState<chartData>();
    useEffect(() => {
        PokemonServices.fetchPokemonAverages().then(response => {
            setPokemonsAvg(response?.data.pokemon.result)
        });
    }, []);
    console.log(pokemonsAvg)

    useEffect(() => {
        if (pokemonsAvg != undefined) {
            setPokemonAvgData({
                labels : pokemonsAvg?.map((pokemon) => (pokemon.typeName)),
                datasets : [{
                    label: 'Ataque médio',
                    data: pokemonsAvg?.map((pokemon) => (pokemon.avgAttack)),
                }],
        })
        }
    }, [pokemonsAvg]);

      return (
        <div>
          <BarChart chartData={pokemonAvgData}/>
        </div>
    )
};

export default StatsPage;