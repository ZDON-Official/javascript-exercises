const findTheOldest = function (people) {
  var oldest = 0;

  return people.reduce((oldest_person, person) => {
    // console.log(person);

    if ("yearOfDeath" in person) {
      new_old = person.yearOfDeath - person.yearOfBirth;
    } else {
      const curYear = new Date().getFullYear();
      new_old = curYear - person.yearOfBirth;
    }

    if (new_old > oldest) {
      oldest_person = person;
      oldest = new_old;
    }

    return oldest_person;
  }, 0);
};

// Do not edit below this line
module.exports = findTheOldest;

const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

console.log(findTheOldest(people));
