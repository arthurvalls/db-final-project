const db = require('./db.service');

async function findAll () {
    
  const result = await db.query('SELECT * FROM Pokemon;');

  return {result};
};

async function findByPk (id) {
    
  const result = await db.query('SELECT * FROM Pokemon WHERE id = ?;', [id]);

  return {result};
};

async function findByAttributes (request) {
  
  const query = 'SELECT * FROM Pokemon NATURAL JOIN (SELECT pokemonId AS id, typeName FROM PokemonType) AS PokemonType WHERE typeName = \'?\''
  query = query + ';'
  const result = await db.query(query, [typeName]);

  return {result};
};

module.exports = {
  findAll,
  findByPk,
  findByAttributes
};

/* async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank 
    FROM programming_languages LIMIT ?,?`, 
    [offset, config.listPerPage]
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}

async function create(programmingLanguage){
  const result = await db.query(
    `INSERT INTO programming_languages 
    (name, released_year, githut_rank, pypl_rank, tiobe_rank) 
    VALUES 
    (?, ?, ?, ?, ?)`, 
    [
      programmingLanguage.name, programmingLanguage.released_year,
      programmingLanguage.githut_rank, programmingLanguage.pypl_rank,
      programmingLanguage.tiobe_rank
    ]
  );

  let message = 'Error in creating programming language';

  if (result.affectedRows) {
    message = 'Programming language created successfully';
  }

  return {message};
}

async function update(id, programmingLanguage){
  const result = await db.query(
    `UPDATE programming_languages 
    SET name=?, released_year=?, githut_rank=?, 
    pypl_rank=?, tiobe_rank=? 
    WHERE id=?`, 
    [
      programmingLanguage.name, programmingLanguage.released_year,
      programmingLanguage.githut_rank, programmingLanguage.pypl_rank,
      programmingLanguage.tiobe_rank, id
    ]
  );

  let message = 'Error in updating programming language';

  if (result.affectedRows) {
    message = 'Programming language updated successfully';
  }

  return {message};
}

async function remove(id){
  const result = await db.query(
    `DELETE FROM programming_languages WHERE id=?`, 
    [id]
  );

  let message = 'Error in deleting programming language';

  if (result.affectedRows) {
    message = 'Programming language deleted successfully';
  }

  return {message};
}
 */
/* module.exports = {
  getMultiple,
  create,
  update,
  remove
} */
