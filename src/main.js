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

for(const card of cards){
  render(allFilmsElement, createFilmCardTemplate(card));
}

const topRatedElement = document.querySelector('#top-rated');
for (let i = 0; i < TOP_RATED_COUNT; i++) {
  render(topRatedElement, createFilmCardTemplate(cards[i])); //WIP
}
const mostCommentElement = document.querySelector('#most-comment');
for (let i = 0; i < MOST_COMMENT_COUNT; i++) {
  render(mostCommentElement, createFilmCardTemplate(cards[i]));
}

// render(document.body, createFilmDetailsTemplate());
// document.body.classList.add('hide-overflow');


function render(container, template, place = 'beforeend') {
  container.insertAdjacentHTML(place, template);
}

