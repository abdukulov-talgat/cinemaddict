const FILTERS = [
  {
    id: 'all',
    text: 'All movies',
    count: (cards) => cards.length,
  },
  {
    id: 'watchlist',
    text: 'Watchlist',
    count: (cards) => cards.filter((it) => it.userDetails.watchlist).length,
  },
  {
    id: 'favorite',
    text: 'Favorites',
    count: (cards) => cards.filter((it) => it.userDetails.favorite).length,
  },
  {
    id: 'watched',
    text: 'History',
    count: (cards) => cards.filter((it) => it.userDetails.watched).length,
  },
];


function getFilter(cards) {
  return FILTERS.map(({id, text, count}) => ({
    id,
    text,
    count: count(cards),
  }));
}

export { getFilter };
