import api from "../api";

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

export type pokemonType = {
    logo : string,
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

    async fetchPokemonTypesByPk (id : number) {
        try {
            const response = api.get(`/router/pokemonType/${id}`);
            return response;
        } catch (e) {
            console.log(e);
        };
    },
};