import { humanizeDuration } from '../utils/utils.js';

const DESCRIPTION_MAX_LENGTH = 140;

function createFilmCardTemplate(card) {
  const {
    id,
    poster,
    title,
    // originTitle,
    rating,
    // director,
    // writers,
    // actors,
    releaseDate,
    duration,
    // country,
    genres,
    description = description.length > DESCRIPTION_MAX_LENGTH ? `${description.slice(0, DESCRIPTION_MAX_LENGTH)}...` : description,
    // ageRating,
    comments,
    userDetails,
  } = card;
  const { watchlist, favorite, watched } = userDetails;

  /* html */
  return `
    <article class="film-card" data-id="${id}">
      <h3 class="film-card__title">${title}</h3>
      <p class="film-card__rating">${rating}</p>
      <p class="film-card__info">
        <span class="film-card__year">${releaseDate.getFullYear()}</span>
        <span class="film-card__duration">${humanizeDuration(duration)}</span>
        <span class="film-card__genre">${genres[0]}</span>
      </p>
      <img src="./images/posters/${poster}" alt="${title}" class="film-card__poster">
      <p class="film-card__description">${description}</p>
      <a class="film-card__comments">${comments.length} comments</a>
      <div class="film-card__controls">
        <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist ${watchlist ? 'film-card__controls-item--active' : ''}"
          type="button">Add to watchlist</button>
        <button class="film-card__controls-item button film-card__controls-item--mark-as-watched ${watched ? 'film-card__controls-item--active' : ''}"
          type="button">Mark as watched</button>
        <button class="film-card__controls-item button film-card__controls-item--favorite ${favorite ? 'film-card__controls-item--active' : ''}"
          type="button">Mark as favorite</button>
      </div>
    </article>`;
}

export { createFilmCardTemplate };
