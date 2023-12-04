const data = require('../data/zoo_data');

const findTargetEmployee = (employeeId) => data.employees.find((emp) => emp.id === employeeId);
const findSpeciesById = (speciesId) => data.species.find((s) => s.id === speciesId);
const findOldestResident = (residents) => residents.reduce((oldest, current) => (
  current.age > oldest.age ? current : oldest
));

const getOldestFromFirstSpecies = (employeeId) => {
  const targetEmployee = findTargetEmployee(employeeId);

  if (!targetEmployee || !targetEmployee.responsibleFor.length) {
    return [];
  }

  const speciesId = targetEmployee.responsibleFor[0];
  const species = findSpeciesById(speciesId);

  if (!species || !species.residents.length) {
    return [];
  }

  const oldestAnimal = findOldestResident(species.residents);

  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
};

module.exports = getOldestFromFirstSpecies;
