const data = require('../data/zoo_data');

const getAnimalsAvailableOnDay = (day) =>
  data.species
    .filter((species) => species.availability.includes(day))
    .map((species) => species.name);

const getOfficeHoursOnDay = (day) => {
  const dayHours = data.hours[day];
  if (!dayHours) {
    return 'o zoológico está fechado';
  }
  const { open, close } = dayHours;
  return `Open from ${open}am until ${close}pm`;
};

const getScheduleForDay = (day) => ({
  [day]: {
    officeHour: getOfficeHoursOnDay(day),
    exhibition: getAnimalsAvailableOnDay(day),
  },
});

const createCompleteSchedule = () => {
  const schedule = {};
  Object.keys(data.hours).forEach((day) => {
    schedule[day] = {
      officeHour: getOfficeHoursOnDay(day),
      exhibition: getAnimalsAvailableOnDay(day),
    };
  });
  return schedule;
};

const getAnimalSchedule = (animal) => {
  const animalData = data.species.find((species) => species.name === animal);
  const availableDays = animalData ? animalData.availability : [];
  return availableDays;
};

const getDaySchedule = (day) => ({
  [day]: {
    officeHour: getOfficeHoursOnDay(day),
    exhibition: [],
  },
});

const getSchedule = (scheduleTarget) => {
  if (!scheduleTarget) {
    return createCompleteSchedule();
  }

  if (data.hours[scheduleTarget]) {
    return getScheduleForDay(scheduleTarget);
  }

  if (data.species.some((species) => species.name === scheduleTarget)) {
    return getAnimalSchedule(scheduleTarget);
  }

  return getDaySchedule(scheduleTarget);
};

module.exports = getSchedule;
