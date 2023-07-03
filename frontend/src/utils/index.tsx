import React from "react";

export type pokemonData = {
    id: number,
    name : string,
    healthPoints : number,
    attack : number,
    defense : number,
    spAttack : number,
    spDefense : number,
    speed : number,
    imagePath : string,
};

export type pokemonTypeData = {
    logo : string,
};

export type pokemonAvgData = {
    typeName : string,
    avgHealthPoints : number,
    avgAttack : number,
    avgDefense : number,
    avgSpAttack : number,
    avgspDefense : number,
    avgSpeed : number,
};