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

    async fetchPokemonByPk(id : number) {
        try {
            const response = api.get(`/router/pokemon/${id}`);
            return response;
        } catch (e) {
            console.log(e);
        };
    },

    async fetchAllPokemonTypes () {
        try {
            const response = api.get(`/router/pokemonType/`);
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

    async fetchPokemonEvolutionByPk (id : number) {
        try {
            const response = api.get(`/router/evolution/${id}`);
            return response;
        } catch (e) {
            console.log(e);
        };
    },

    async fetchAllPokemonMovesByPk (id : number) {
        try {
            const response = api.get(`/router/pokemonMove/${id}`);
            return response;
        } catch (e) {
            console.log(e);
        };
    },
};