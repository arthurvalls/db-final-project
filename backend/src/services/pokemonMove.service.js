const db = require('./db.service');

async function findPokemonMovesByPk (id) {
    
    const result = await db.query('SELECT id, name, category, typeName, powerPoints, power, accuracy FROM Move RIGHT JOIN (SELECT * FROM PokemonMove WHERE pokemonId = ?) AS PokemonMove ON id = moveId;', [id]);
    
    return {result};
};

module.exports = {
    findPokemonMovesByPk,
};