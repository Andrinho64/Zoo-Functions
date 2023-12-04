/* const data = require('../data/zoo_data');

const findEmployee = (prop, value) =>
  (data.employees.find((emp) => emp[prop].toLowerCase() === value.toLowerCase()) || {}).id;

const getSpecies = (employeeId) => (data.employees.find((emp) => emp.id === employeeId)
 || { responsibleFor: [] }).responsibleFor
  .map((speciesId) => (data.species.find((sp) => sp.id === speciesId) || {}).name).filter(Boolean);

const getFullName = (employee) => `${employee.firstName} ${employee.lastName}`;

const getEmployeesCoverage = ({ name, id } = {}) => {
  const employeeId = id || findEmployee('firstName', name) || findEmployee('lastName', name);

  if (!employeeId) return data.employees.map((e) => ({ ...e, fullName: getFullName(e) }));

  const employee = data.employees.find((e) => e.id === employeeId) || {};
  if (!employee.id) throw new Error('Informações inválidas');

  const species = getSpecies(employeeId);
  const locations = employee.responsibleFor.map((s) =>
    (data.species.find((sp) => sp.id === s) || {}).location);

  return { id: employee.id, fullName: getFullName(employee), species, locations };
};

module.exports = getEmployeesCoverage;
 */
