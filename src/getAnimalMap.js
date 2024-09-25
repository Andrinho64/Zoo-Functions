const data = require('../data/zoo_data');

const mapResidents = (residents, sex, sorted) => {
  const filteredResidents = residents.filter((resident) => (!sex || resident.sex === sex));
  const names = filteredResidents.map((resident) => resident.name);
  return sorted ? names.sort() : names;
};

const processSpecies = (acc, species, includeNames, sorted, sex) => {
  const { location, name, residents } = species;

  if (!acc[location]) {
    acc[location] = [];
  }

  if (includeNames) { // Se existir, faz a linha 17  se não, faz a 19
    acc[location].push({ [name]: mapResidents(residents, sex, sorted) });
  } else {
    acc[location].push(name);
  }

  return acc;
};

const getAnimalMap = (options = {}) => {
  const { includeNames, sorted, sex } = options; // desestruturação

  return data.species.reduce((acc, species) =>
    processSpecies(acc, species, includeNames, sorted, sex), {});
};

module.exports = getAnimalMap;
