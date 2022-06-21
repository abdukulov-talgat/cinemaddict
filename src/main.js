import { createMainNavigationTemplate } from './views/main-navigation.js';
import { createProfileTemplate } from './views/profile.js';
import { createSortTemplate } from './views/sort.js';
import { createFilmsTemplate } from './views/films.js';
import { createFilmCardTemplate } from './views/film-card.js';
import { createMoreButtonTemplate } from './views/more-button.js';
import { createFilmDetailsTemplate } from './views/film-details.js';
import { generateFilmCard } from './mock/film-card.js';
import { getFilter } from './mock/filter.js';


const ALL_FILMS_START_COUNT = 5;
const BUTTON_MORE_STEP = 5;
const TOP_RATED_COUNT = 2;
const MOST_COMMENT_COUNT = 2;
const cards = new Array(20).fill().map(() => generateFilmCard());
const filters = getFilter(cards);


const headerElement = document.querySelector('.header');
render(headerElement, createProfileTemplate());

const mainElement = document.querySelector('.main');
render(mainElement, createMainNavigationTemplate(filters));
render(mainElement, createSortTemplate());

render(mainElement, createFilmsTemplate());
const allFilmsElement = mainElement.querySelector('#all-films');
render(allFilmsElement, createMoreButtonTemplate(), 'afterend');

let count = Math.min(ALL_FILMS_START_COUNT, cards.length);
for (let i = 0; i < count; i++) {
  render(allFilmsElement, createFilmCardTemplate(cards[i]));
}

const btnMoreElement = document.querySelector('.films-list__show-more');
btnMoreElement.addEventListener('click', (evt) => {
  allFilmsElement.innerHTML = '';
  count += BUTTON_MORE_STEP;
  count = Math.min(cards.length, count);
  for (let i = 0; i < count; i++) {
    render(allFilmsElement, createFilmCardTemplate(cards[i]));
  }
  if(count === cards.length) {
    evt.target.remove();
  }
});


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

