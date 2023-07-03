import api from "../api";

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

    async fetchPokemonAverages () {
        try {
            const response = api.get('/router/pokemonTypeAvg');
            return response;
        } catch (e) {
            console.log(e);
        };
    },
};