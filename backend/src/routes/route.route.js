const express = require('express');
const router = express.Router();
const PokemonController = require('../controllers/pokemon.controller');
const PokemonTypeController = require('../controllers/pokemonType.controller');
const EvolutionController = require('../controllers/evolution.controller')
const PokemonMoveController = require('../controllers/pokemonMove.controller')

// Pokemon
router.get('/pokemon', PokemonController.index);
router.get('/pokemon/:id', PokemonController.show);

// PokemonType
router.get('/pokemonType', PokemonTypeController.indexRelationsPokemonType);
router.get('/pokemonType/:id', PokemonTypeController.showRelationsPokemonType);
router.get('/pokemonTypeAvg', PokemonTypeController.getAverageStats);

// Evolution
router.get('/evolution/:id', EvolutionController.showRelationsPokemonEvolution);

// PokemonMove
router.get('/pokemonMove/:id', PokemonMoveController.showRelationsPokemonMove);

module.exports = router;
