const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (!employeeName) {
    return {};
  }

  return data.employees.find(({ firstName, lastName }) => {
    const fullName = `${firstName} ${lastName}`;
    return firstName === employeeName || lastName === employeeName || fullName === employeeName;
  }) || {};
};

module.exports = getEmployeeByName;
