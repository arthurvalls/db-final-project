import api from "../api";

export type pokemonData = {
    ID: number,
    Name : string,
    Type1 : string,
    Type2 : string,
    Total : number,
    HP : number,
    Attack : number,
    Defense : number,
    SpAtk : number,
    SpDef : number,
    Speed : number,
    Generation : number,
    Legendary : string
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