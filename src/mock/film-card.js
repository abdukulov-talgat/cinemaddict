import dayjs from 'dayjs';
import { getRandomFloat, getRandomInteger, getRandomItem, shuffle } from '../utils/mock-utils.js';

const MIN_COMMENTS = 0;
const MAX_COMMENTS = 5;
const DATE_YEAR_OFFSET = 7;

const TITLES = [
  'The Dance of Life',
  'Sagebrush Trail',
  'The Man with the Golden Arm',
  'Santa Claus Conquers the Martians',
  'Popeye the Sailor Meets Sindbad the Sailor',
];

const POSTERS = [
  'made-for-each-other.png',
  'popeye-meets-sinbad.png',
  'sagebrush-trail.jpg',
  'santa-claus-conquers-the-martians.jpg',
  'the-dance-of-life.jpg',
  'the-great-flamarion.jpg',
  'the-man-with-the-golden-arm.jpg',
];

const GENRES = [
  'Musical',
  'Western',
  'Drama',
  'Comedy',
  'Cartoon',
  'Action',
  'Adventure',
  'Fantasy',
  'Historical',
  'Horror',
  'Thriller',
];

const DESCRIPTION = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci
ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros
mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex
euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat
volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`;

function generateRandomDate() {
  return dayjs().add(getRandomInteger(-DATE_YEAR_OFFSET, DATE_YEAR_OFFSET), 'day').toDate();
}

function getRandomDescription(min = 1, max = 5) {
  return DESCRIPTION
    .split('.')
    .filter((it) => it)
    .map((it) => it + '.')
    .slice(min, max + 1)
    .join('');
}

function getRandomComments() {
  const arr = [];

  for (let i = 0; i < 10; i++) {
    arr[i] = i;
  }

  return shuffle(arr).slice(MIN_COMMENTS, getRandomInteger(0, MAX_COMMENTS));
}

function getRandomGenres() {
  return shuffle(GENRES.slice()).slice(1, getRandomInteger(1, 4));
}

let nextId = 0;
function generateFilmCard() {
  const card = {
    id: nextId++,
    title: getRandomItem(TITLES),
    poster: getRandomItem(POSTERS),
    rating: getRandomFloat(0, 10),
    debutYear: generateRandomDate(),
    duration: getRandomInteger(60, 120),
    genres: getRandomGenres(),
    description: getRandomDescription(),
    comments: getRandomComments(),
  };

  return card;
}


export { generateFilmCard };
