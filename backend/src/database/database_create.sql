CREATE TABLE Pokemon (
    pokemonId INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL UNIQUE,
    healthPoints INT NOT NULL,
    attack INT NOT NULL,
    defense INT NOT NULL,
    spAttack INT NOT NULL,
    spDefense INT NOT NULL,
    speed INT NOT NULL,
    imagePath VARCHAR(255) UNIQUE,
    PRIMARY KEY (pokemonId)
); ALTER TABLE Pokemon AUTO_INCREMENT=1;