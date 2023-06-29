import api from "../api";

export type pokemonData = {
    id: number,
    name : string,
    healthPoints : number,
    attack : number,
    defense : number,
    spAtk : number,
    spDef : number,
    speed : number,
    imagePath : string,
};

export default {
    
    async fetchAllPokemons() {

    try {
        const response = api.get('/router/pokemon');
        return response;
    } catch (e) {
        console.log(e);
    };
    },
};