const db = require('./db.service');

async function findEvolutionByPk (id) {
    
  /* const result = await db.query('SELECT * FROM Pokemon WHERE id = (SELECT evolvedId FROM Evolution RIGHT OUTER JOIN (SELECT * FROM Pokemon WHERE id = ?) AS Pokemon ON id = evolvingId);', [id]); */
  /* const result = await db.query('SELECT p1.name AS pokemonName, e.evolutionCondition, p2.name AS evolvedName FROM Pokemon p1 LEFT JOIN Evolution e ON p1.id = e.evolvingId JOIN Pokemon p2 ON e.evolvedId = p2.id where p1.id = ?;', [id]); */
  const result = await db.query('select id, name, healthPoints, attack, defense, spAttack, spDefense, speed, imagePath from (SELECT p1.name AS pokemonName, e.evolutionCondition, p2.name AS evolvedName FROM Pokemon p1 LEFT JOIN Evolution e ON p1.id = e.evolvingId JOIN Pokemon p2 ON e.evolvedId = p2.id where p1.id = ?) as Evolved left Join Pokemon ON evolvedName = name;', [id]);
/* SELECT p1.name AS pokemon_name, e.evolutionCondition, p2.name AS evolved_form_name FROM Pokemon p1 LEFT JOIN Evolution e ON p1.id = e.evolvingId JOIN Pokemon p2 ON e.evolvedId = p2.id; */
  return {result};
};

module.exports = {
    findEvolutionByPk
};

/* Deverão ser especificadas e executadas pelo menos 5 consultas em SQL, sendo: 
(i) pelo menos 3 das consultas devem contemplar operação(ões) de junção(ações), devendo ter pelo menos uma junção externa (em alguma consulta) e deve-se utilizar mais de uma junção em pelo menos duas das consultas;
    - Listar tipos
    - Listar moves
    - Listar habilidades
    - Listar médias
(ii) pelo menos 2 das consultas devem fazer uso de uma ou mais funções de agregação, sendo que pelo menos uma delas também deve realizar agrupamento;
    - Listar médias (utiliza agrupamento)
(iii) pelo menos 2 das consultas devem fazer uso de subconsultas aninhadas.
    - Praticamente todas tem subconsultas
*/