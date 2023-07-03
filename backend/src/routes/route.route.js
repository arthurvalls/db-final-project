const express = require('express');
const router = express.Router();
const PokemonController = require('../controllers/pokemon.controller');
const PokemonTypeController = require('../controllers/pokemonType.controller');

// Pokemon
router.get('/pokemon', PokemonController.index);
router.get('/pokemon/:id', PokemonController.show);

// PokemonType
router.get('/pokemonType/:id', PokemonTypeController.showRelationsPokemonType);
router.get('/pokemonTypeAvg', PokemonTypeController.getAverageStats);

module.exports = router;
