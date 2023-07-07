import React, { useEffect, useState } from 'react';
import Chart from "chart.js/auto";
import {CategoryScale} from 'chart.js'; 
import { Bar } from 'react-chartjs-2';
import "./style.css";
import NavBar from "../../components/NavBar";
import BarChart from "../../components/BarChart";
import PokemonServices from "../../services/PokemonServices";
import { chartData, pokemonAvgData } from "../../utils/index"
import './style.css'



interface PokemonData {
    typeName: string;
    avgHealthPoints: string;
    avgAttack: string;
    avgDefense: string;
    avgSpAttack: string;
    avgSpDefense: string;
    avgSpeed: string;
  }

  const arrcolors = [
    'rgba(168, 184, 32, 1)',   
    '#000000',    
    'rgba(112, 56, 248, 1)',   
    'rgba(248, 208, 48, 1)',   
    'rgba(238, 153, 172, 1)',  
    'rgba(192, 48, 40, 1)',    
    'rgba(240, 128, 48, 1)',   
    'rgba(168, 144, 240, 1)',  
    'rgba(112, 88, 152, 1)',   
    'rgba(120, 200, 80, 1)',   
    'rgba(224, 192, 104, 1)', 
    'rgba(152, 216, 216, 1)', 
    'rgba(128, 96, 72, 1)',   
    'rgba(160, 64, 160, 1)',  
    'rgba(248, 88, 136, 1)',  
    'rgba(184, 160, 56, 1)',  
    'rgba(184, 184, 208, 1)', 
    'rgba(104, 144, 240, 1)'  
]
  
  const PokemonChart: React.FC = () => {
    const [pokemonData, setPokemonData] = useState<PokemonData[]>([]);
  
    useEffect(() => {
        PokemonServices.fetchPokemonAverages().then(response => {
            setPokemonData(response?.data.pokemon.result);
        });
    }, []);

    console.log(pokemonData)
    Chart.register(CategoryScale);

    return (
        <div>
            <NavBar></NavBar>
            <div className='barCharts'>
                <Bar className='barChart'
                    data={{
                    labels: pokemonData.map(pokemon => pokemon.typeName),
                    datasets: [
                        {
                        label: 'Average Health Points',
                        data: pokemonData.map(pokemon => parseFloat(pokemon.avgHealthPoints)),
                        backgroundColor: arrcolors,
                        },
                        // Add additional datasets for other attributes here
                    ],
                    }}/>
                    <Bar className='barChart'
                        data={{
                        labels: pokemonData.map(pokemon => pokemon.typeName),
                        datasets: [
                            {
                            label: 'Average Attack Points',
                            data: pokemonData.map(pokemon => parseFloat(pokemon.avgAttack)),
                            backgroundColor: arrcolors,
                            },
                            // Add additional datasets for other attributes here
                        ],
                    }}/>
                    <Bar className='barChart'
                        data={{
                        labels: pokemonData.map(pokemon => pokemon.typeName),
                        datasets: [
                            {
                            label: 'Average Defense',
                            data: pokemonData.map(pokemon => parseFloat(pokemon.avgDefense)),
                            backgroundColor: arrcolors,
                            },
                            // Add additional datasets for other attributes here
                        ],
                    }}/>
                    <Bar className='barChart'
                        data={{
                        labels: pokemonData.map(pokemon => pokemon.typeName),
                        datasets: [
                            {
                            label: 'Average sp. Attack',
                            data: pokemonData.map(pokemon => parseFloat(pokemon.avgSpAttack)),
                            backgroundColor: arrcolors,
                            },
                            // Add additional datasets for other attributes here
                        ],
                    }}/>
                    <Bar className='barChart'
                        data={{
                        labels: pokemonData.map(pokemon => pokemon.typeName),
                        datasets: [
                            {
                            label: 'Average sp. Defense',
                            data: pokemonData.map(pokemon => parseFloat(pokemon.avgSpDefense)),
                            backgroundColor: arrcolors,
                            },
                            // Add additional datasets for other attributes here
                        ],
                    }}/>
                    <Bar className='barChart'
                        data={{
                        labels: pokemonData.map(pokemon => pokemon.typeName),
                        datasets: [
                            {
                            label: 'Average Speed',
                            data: pokemonData.map(pokemon => parseFloat(pokemon.avgSpeed)),
                            backgroundColor: arrcolors,
                            },
                            // Add additional datasets for other attributes here
                        ],
                    }}/>
            </div>
      </div>
    );
  };
  
  export default PokemonChart;