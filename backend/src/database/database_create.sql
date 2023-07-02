CREATE TABLE Pokemon (
    id INT AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL UNIQUE,
    healthPoints INT NOT NULL,
    attack INT NOT NULL,
    defense INT NOT NULL,
    spAttack INT NOT NULL,
    spDefense INT NOT NULL,
    speed INT NOT NULL,
    imagePath VARCHAR(255) UNIQUE,
    PRIMARY KEY (id)
); ALTER TABLE Pokemon AUTO_INCREMENT=1;

CREATE TABLE Type (
    name VARCHAR(255),
    logo VARCHAR(255) NOT NULL,
    PRIMARY KEY (name)
);

CREATE TABLE PokemonType (
    pokemonId INT,
    typeName VARCHAR(255),
    PRIMARY KEY (pokemonId, typeName),
    FOREIGN KEY (pokemonId) REFERENCES Pokemon(id),
    FOREIGN KEY (typeName) REFERENCES Type(name)
);

CREATE TABLE Evolution (
    evolvingId INT,
    evolvedId INT,
    evolutionCondition VARCHAR(255),
    PRIMARY KEY (evolvingId, evolvedId, evolutionCondition),
    FOREIGN KEY (evolvingId) REFERENCES Pokemon(id),
    FOREIGN KEY (evolvedId) REFERENCES Pokemon(id)
);

CREATE TABLE Move (
    id INT,
    name VARCHAR(255),
    typeName VARCHAR(255),
    category VARCHAR(255),
    powerPoints INT,
    power INT,
    accuracy INT,
    PRIMARY KEY(id),
    FOREIGN KEY (typeName) REFERENCES Type(name)
);

CREATE TABLE PokemonMove (
    pokemonId INT,
    moveId INT,
    PRIMARY KEY (pokemonId, moveId),
    FOREIGN KEY(pokemonId) REFERENCES Pokemon(id),
    FOREIGN KEY(moveId) REFERENCES Move(id)
);

CREATE TABLE Ability (
    name VARCHAR(255),
    description TEXT(2000),
    PRIMARY KEY (name)
);

CREATE TABLE PokemonAbility (
    pokemonId INT,
    abilityName VARCHAR(255),
    PRIMARY KEY (pokemonId, abilityName),
    FOREIGN KEY (pokemonId) REFERENCES Pokemon(id),
    FOREIGN KEY (abilityName) REFERENCES Ability(name)
);

/* CREATE TABLE Game (
    name VARCHAR(255),
    releaseDate DATE,
    generation TINYINT,
    region VARCHAR(255),
    PRIMARY KEY (name)
);

CREATE TABLE PokemonGame (
    pokemonId INT,
    gameName INT,
    PRIMARY KEY (pokemonId, gameName),
    FOREIGN KEY (pokemonId) REFERENCES Pokemon(id),
    FOREIGN KEY (gameName) REFERENCES Game(name)
);

CREATE TABLE GymLeader (
    id INT AUTO_INCREMENT,
    name VARCHAR(255),
    gymName VARCHAR(255),

); ALTER TABLE GymLeaders AUTO_INCREMENT = 1;

CREATE TABLE PokemonGymLeader (
    pokemonId INT,
    gymLeaderId INT,
    PRIMARY KEY (pokemonId, gymLeaderId),
    FOREIGN KEY (pokemonId) REFERENCES Pokemon(id),
    FOREIGN KEY (gymLeaderId) REFERENCES GymLeader(id)
);

 */
 