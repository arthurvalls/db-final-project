const PokemonMove = require('../services/pokemonMove.service');

const showRelationsPokemonMove = async (req, res) => {
    const {id} = req.params;
    try{
      const move = await PokemonMove.findPokemonMovesByPk(id);
      return res.status(200).json({move});
    } catch(err){
        console.log(err)
        res.status(500).json({error: err});
    }
};

module.exports = {
    showRelationsPokemonMove,
};