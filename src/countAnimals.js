const data = require('../data/zoo_data');

const countAnimals = (params) => {
  const { species, sex } = params || {};

  if (!species) {
    // Caso não receba nenhum parâmetro, retorna todas as espécies e a quantidade de residentes de cada uma
    const result = {};
    data.species.forEach((animalSpecies) => {
      const { name, residents } = animalSpecies;
      result[name] = residents.length;
    });
    return result;
  }

  // Caso receba como parâmetro um objeto com a chave species
  const foundSpecies = data.species.find((animalSpecies) => animalSpecies.name === species);

  if (foundSpecies) {
    if (sex) {
      // Caso receba como parâmetro um objeto com as chaves species e sex
      const residentsWithSex = foundSpecies.residents.filter((resident) => resident.sex === sex);
      return residentsWithSex.length;
    }

    // Caso receba como parâmetro um objeto com a chave species
    return foundSpecies.residents.length;
  }

  return 0; // Retorna 0 se a espécie não for encontrada
};

module.exports = countAnimals;
