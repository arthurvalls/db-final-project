const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemon.controller');

// Pokemon
router.get('/pokemon', pokemonController.showAll);

module.exports = router;
