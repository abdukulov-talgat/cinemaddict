import { createMainNavigationTemplate } from './views/main-navigation.js';
import { createProfileTemplate } from './views/profile.js';
import { createSortTemplate } from './views/sort.js';
import { createFilmsTemplate } from './views/films.js';
import { createFilmCardTemplate } from './views/film-card.js';
import { createMoreButtonTemplate } from './views/more-button.js';
import { createFilmDetailsTemplate } from './views/film-details.js';
import { generateFilmCard } from './mock/film-card.js';


// const ALL_FILMS_START_COUNT = 5;
const TOP_RATED_COUNT = 2;
const MOST_COMMENT_COUNT = 2;
const cards = new Array(20).fill().map(() => generateFilmCard());


const headerElement = document.querySelector('.header');
render(headerElement, createProfileTemplate());

const mainElement = document.querySelector('.main');
render(mainElement, createMainNavigationTemplate());
render(mainElement, createSortTemplate());

render(mainElement, createFilmsTemplate());
const allFilmsElement = mainElement.querySelector('#all-films');
render(allFilmsElement, createMoreButtonTemplate(), 'afterend');

for (const card of cards) {
  render(allFilmsElement, createFilmCardTemplate(card));
}

const topRatedElement = document.querySelector('#top-rated');
const topRatedCards = cards.slice().sort((a, b) => b.rating - a.rating).slice(0, TOP_RATED_COUNT);
for (const card of topRatedCards) {
  render(topRatedElement, createFilmCardTemplate(card));
}
const mostCommentElement = document.querySelector('#most-comment');
const mostCommentCards = cards.slice().sort((a, b) => b.comments.length - a.comments.length).slice(0, MOST_COMMENT_COUNT);
for (const card of mostCommentCards) {
  render(mostCommentElement, createFilmCardTemplate(card));
}

// render(document.body, createFilmDetailsTemplate(cards[0]));
// document.body.classList.add('hide-overflow');


function render(container, template, place = 'beforeend') {
  container.insertAdjacentHTML(place, template);
}

