import dayjs from 'dayjs';

const NAMES = [
  'Gus Van Sant',
  'David Fincher',
  'Takashi Miike',
  'Lars von Trier',
  'Samira Makhmalbaf',
  'David O Russell',
  'Pawel Pawlikowski',
  'Gaspar Noé',
];

const DESCRIPTION = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci
ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros
mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex
euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat
volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

const DATE_YEAR_OFFSET = 7;

function getRandomDescription(min = 1, max = 5) {
  return DESCRIPTION
    .split('.')
    .filter((it) => it)
    .map((it) => it + '.')
    .slice(min, max + 1)
    .join('');
}

function generateRandomDate() {
  return dayjs().add(getRandomInteger(-DATE_YEAR_OFFSET, DATE_YEAR_OFFSET), 'day').toDate();
}

function getRandomInteger(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFloat(min, max) {
  return Math.min(+(Math.random() * (max - min + 1) + min).toFixed(1), max);
}

function getRandomItem(array) {
  return array[getRandomInteger(0, array.length - 1)];
}

function getRandomItems(array, min = 1, max = 3) {
  return shuffle(array.slice()).slice(0, getRandomInteger(min, max));
}

// source: https://javascript.info/task/shuffle
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    // swap elements array[i] and array[j]
    // we use "destructuring assignment" syntax to achieve that
    // you'll find more details about that syntax in later chapters
    // same can be written as:
    // let t = array[i]; array[i] = array[j]; array[j] = t
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export { getRandomInteger, getRandomItem, getRandomFloat, shuffle, getRandomItems, getRandomDescription, generateRandomDate,  NAMES };
