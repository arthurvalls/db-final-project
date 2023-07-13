const Pokemon = require('../services/pokemon.service');

const index = async (req, res) => {
  try{
    const pokemon = await Pokemon.findAll();
    return res.status(200).json({pokemon});
  } catch(err){
    console.log(err)
    res.status(500).json({error: err});
  }
};

const show = async (req, res) => {
  const {id} = req.params;
  try{
    const pokemon = await Pokemon.findByPk(id);
    return res.status(200).json({pokemon});
  } catch(err){
    res.status(500).json({error: err});
  }
};

module.exports = {
  index,
  show,
};
