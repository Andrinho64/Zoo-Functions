const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (ids.length === 0) {
    return [];
  }

  return data.species.filter((species) => ids.includes(species.id));
};

module.exports = getSpeciesByIds;
