import React from "react";
import { moveData } from "../../utils";
import './style.css'

function Move (Props : moveData) {
    return (
        <div className="move">
            <h2>{Props.name}</h2>
            <p className="category">Category: <span className="category-value">{Props.category}</span></p>
            <p>Type: <span className="type-value">{Props.typeName}</span></p>
            <p>Power Points: <span className="power-points">{Props.powerPoints}</span></p>
            <p>Power: <span className="power">{Props.power}</span></p>
            <p>Accuracy: <span className="accuracy">{Props.accuracy}</span></p>
        </div>
    )
};

export default Move;