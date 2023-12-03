const data = require('../data/zoo_data');

const getAnimalsOlderThan = (targetSpecies, age) => {
  const speciesInfo = data.species.find((species) => species.name === targetSpecies);

  if (!speciesInfo) {
    return false;
  }

  return speciesInfo.residents.every((animal) => animal.age >= age);
};

module.exports = getAnimalsOlderThan;
