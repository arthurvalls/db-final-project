const Evolution = require('../services/evolution.service');

const showRelationsPokemonEvolution = async (req, res) => {
    const {id} = req.params;
    try{
      const pokemon = await Evolution.findEvolutionByPk(id);
      return res.status(200).json({pokemon});
    } catch(err){
        console.log(err)
        res.status(500).json({error: err});
    }
};

module.exports = {
    showRelationsPokemonEvolution,
};