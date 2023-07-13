const PokemonType = require('../services/pokemonType.service');

const indexRelationsPokemonType = async (req, res) => {
    try{
      const type = await PokemonType.findAllPokemonTypes();
      return res.status(200).json({type});
    } catch(err){
        console.log(err)
        res.status(500).json({error: err});
    }
};

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

const getAverageStats = async (req, res) => {
    try{
      const pokemon = await PokemonType.fetchStatsAverages();
      
      return res.status(200).json({pokemon});
    } catch(err){
        console.log(err)
        res.status(500).json({error: err});
    }
};

module.exports = {
    indexRelationsPokemonType,
    showRelationsPokemonType,
    getAverageStats,
};