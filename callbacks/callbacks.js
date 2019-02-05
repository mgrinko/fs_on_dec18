import people from './people.js';


const createWasBornAfterFilter = (year) => {
  return (user) => user.born > year;
};

const createWasBornBetweenFilter = (startYear, endYear) => {
  return (user) => {
    return startYear < user.born && user.born < endYear;
  };
};
//
const wasBornBetween1700and1800 = createWasBornBetweenFilter(1700, 1800);
//
people.filter(wasBornBetween1700and1800)

const wasBornAfter1800 = createWasBornAfterFilter(1800);

const wasBornAfter1700 = (user) => user.born > 1700;


// const sortByName = (a, b) => {
//   return a.name > b.name ? 1 : -1
// };

const createByFieldSorter = (fieldName) => {
  return (a, b) => {
    if (typeof a[fieldName] === 'string') {
      return a[fieldName].localeCompare(b[fieldName])
    }

    if (a[fieldName] > b[fieldName]) return 1;
    if (a[fieldName] < b[fieldName]) return -1;

    return 0;
  };
};

const sortByName = createByFieldSorter('name');
const sortByBorn = createByFieldSorter('born');



console.log(
  people
    .sort(sortByName)
    .map(person => person.born + ' ' + person.name)
);
