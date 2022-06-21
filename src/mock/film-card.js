import { getRandomFloat, getRandomInteger, getRandomItem, getRandomItems, getRandomDescription, generateRandomDate, NAMES } from '../utils/mock-utils.js';

const MIN_COMMENTS = 0;
const MAX_COMMENTS = 5;

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

const COUNTRIES = [
  'Finland',
  'England',
  'USA',
  'Turkey',
  'Germany',
  'India',
];

function getRandomComments() {
  const arr = [];

  for (let i = 0; i < 10; i++) {
    arr[i] = i;
  }

  return getRandomItems(arr, MIN_COMMENTS, MAX_COMMENTS);
}

let nextId = 0;
function generateFilmCard() {
  const card = {
    id: nextId++,
    poster: getRandomItem(POSTERS),
    title: getRandomItem(TITLES),
    originTitle: getRandomItem(TITLES),
    rating: getRandomFloat(0, 10),
    director: getRandomItem(NAMES),
    writers: getRandomItems(NAMES, 1, 3),
    actors: getRandomItems(NAMES),
    releaseDate: generateRandomDate(),
    duration: getRandomInteger(60, 120),
    country: getRandomItem(COUNTRIES),
    genres: getRandomItems(GENRES, 1, 4),
    description: getRandomDescription(),
    ageRating: getRandomInteger(0, 18),
    comments: getRandomComments(),
    userDetails: {
      watchlist: Boolean(getRandomInteger(0, 1)),
      favorite: Boolean(getRandomInteger(0, 1)),
      watched: Boolean(getRandomInteger(0, 1)),
    },

  };

  return card;
}


export { generateFilmCard };
