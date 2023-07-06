const db = require('./db.service');

async function findAllPokemonTypes () {
    
    const result = await db.query('SELECT id, logo FROM Type JOIN (SELECT id, typeName FROM Pokemon JOIN PokemonType ON id = PokemonId) AS Pokemon ON typeName = Type.name ORDER BY id;');
    
    return {result};
};

async function findPokemonTypeByPk (id) {
    
    /* const result = await db.query('SELECT logo FROM Type RIGHT JOIN PokemonType ON name = typeName LEFT JOIN Pokemon ON id = pokemonId WHERE id = ?;', [id]); */
    const result = await db.query('SELECT logo FROM Type JOIN (SELECT * FROM PokemonType JOIN (SELECT id FROM Pokemon WHERE id = ?) as Pokemon ON id = pokemonId) as PokemonType WHERE typeName = Type.name;', [id]);
    
    return {result};
};

async function fetchStatsAverages () {
    const result = await db.query('SELECT typeName, AVG(healthPoints) AS avgHealthPoints, AVG(attack) AS avgAttack, AVG(defense) AS avgDefense, AVG(spAttack) AS avgSpAttack, AVG(spDefense) AS avgSpDefense, AVG(speed) AS avgSpeed FROM (SELECT * FROM Pokemon LEFT JOIN PokemonType ON id = PokemonId) Pokemon GROUP BY Typename;');
    
    return {result};
};

module.exports = {
    findAllPokemonTypes,
    findPokemonTypeByPk,
    fetchStatsAverages
};