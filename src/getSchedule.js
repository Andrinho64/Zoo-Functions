const data = require('../data/zoo_data');

const daysAndHours = () => {
  const days = Object.keys(data.hours);
  const daysOfWeek = {};
  days.forEach((day) => {
    daysOfWeek[day] = {
      officeHour: day === 'Monday' ? 'CLOSED'
        : `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`,
      exhibition: day === 'Monday' ? 'The zoo will be closed!'
        : data.species.filter((specie) => specie.availability.includes(day))
          .map((specie) => specie.name),
    };
  });
  return daysOfWeek;
};

const getSchedule = (scheduleTarget) => {
  const daysOfWeek = daysAndHours();
  const animalsHours = data.species.find(({ name }) => (name === scheduleTarget));
  if (daysOfWeek[scheduleTarget]) {
    return { [scheduleTarget]: daysOfWeek[scheduleTarget] };
  }
  if (!scheduleTarget || animalsHours === undefined) {
    return daysOfWeek;
  }
  return animalsHours.availability;
};

console.log(getSchedule('Sunday'));

module.exports = getSchedule;
