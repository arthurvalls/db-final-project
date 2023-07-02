const db = require('./db.service');

async function findPokemonTypeByPk (id) {
    
    /* const result = await db.query('SELECT logo FROM Type RIGHT JOIN PokemonType ON name = typeName LEFT JOIN Pokemon ON id = pokemonId WHERE id = ?;', [id]); */
    const result = await db.query('SELECT logo FROM Type JOIN (SELECT * FROM PokemonType JOIN (SELECT id FROM Pokemon WHERE id = ?) as Pokemon ON id = pokemonId) as PokemonType WHERE typeName = Type.name;', [id]);
  
    return {result};
};

module.exports = {
    findPokemonTypeByPk,
};