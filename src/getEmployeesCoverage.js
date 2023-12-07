const data = require('../data/zoo_data');

const createEmployee = (employee) => ({
  id: employee.id,
  fullName: `${employee.firstName} ${employee.lastName}`,
  species: data.species.filter((specie) => employee.responsibleFor.includes(specie.id))
    .map((specie) => specie.name),
  locations: data.species.filter((specie) => employee.responsibleFor.includes(specie.id))
    .map((specie) => specie.location),
});
const getEmployeesCoverage = (callEmployee) => {
  if (!callEmployee) {
    return data.employees.map((employee) => createEmployee(employee));
  }
  const findEmployee = data.employees.find((employee) => employee.firstName === callEmployee.name
  || employee.lastName === callEmployee.name || callEmployee.id === employee.id);
  if (findEmployee === undefined) throw new Error('Informações inválidas');

  return createEmployee(findEmployee);
};
/* console.log(getEmployeesCoverage({id: 'Xablau'})); */
module.exports = getEmployeesCoverage;

/* const findEmployeeByName = (name) =>
  data.employees.find(
    (employee) =>
      employee.firstName.toLowerCase() === name.toLowerCase()
      || employee.lastName.toLowerCase() === name.toLowerCase(),
  );

const findEmployeeById = (id) => data.employees.find((employee) => employee.id === id);

const getSpeciesAndLocations = (employee) => {
  if (!employee) return null;

  const species = employee.responsibleFor.map((speciesId) => {
    const spec = data.species.find((s) => s.id === speciesId);
    return spec ? spec.name : null;
  });

  const locations = employee.responsibleFor.map((speciesId) => {
    const spec = data.species.find((s) => s.id === speciesId);
    return spec ? spec.location : null;
  });

  return { species, locations };
};

const formatEmployeeInfo = (employee) => {
  const { species, locations } = getSpeciesAndLocations(employee);
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species,
    locations,
  };
};

const getEmployeesCoverage = (options) => {
  if (!options) {
    return data.employees.map(formatEmployeeInfo);
  }

  let employee = null;

  if (options.name) {
    employee = findEmployeeByName(options.name);
  } else if (options.id) {
    employee = findEmployeeById(options.id);
  }

  if (employee) return formatEmployeeInfo(employee);

  throw new Error('Informações inválidas');
};

module.exports = getEmployeesCoverage;
 */
