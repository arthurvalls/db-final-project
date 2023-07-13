import React from "react";
import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js/auto'
import { chartData } from "../../utils";

function BarChart (chartData : chartData) {
    return (
        <Bar data={chartData}/>
    );
};

export default BarChart;