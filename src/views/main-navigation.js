function createFilterItemTemplate(filter) {
  const { id, text, count } = filter;
  /* html */
  return `
  <a href="#${id}" class="main-navigation__item main-navigation__item--active">${text} <span class="main-navigation__item-count">${count}</span></a>
  `;
}

function createMainNavigationTemplate(filters) {
  /* html */
  return `
    <nav class="main-navigation">
      <div class="main-navigation__items">
        <a href="#${filters[0].id}" class="main-navigation__item main-navigation__item--active">${filters[0].text}</a>
        ${filters.slice(1).map((it) => createFilterItemTemplate(it)).join('')}
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>`;
}

export { createMainNavigationTemplate };
