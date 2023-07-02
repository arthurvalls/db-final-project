const PokemonType = require('../services/pokemonType.service');

const showRelationsPokemonType = async (req, res) => {
    const {id} = req.params;
    try{
      const type = await PokemonType.findPokemonTypeByPk(id);
      return res.status(200).json({type});
    } catch(err){
        console.log(err)
        res.status(500).json({error: err});
    }
};

module.exports = {
    showRelationsPokemonType,
};