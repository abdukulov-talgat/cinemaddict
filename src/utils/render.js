/**
 * @enum {string}
 */
const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend',
};

const createElement = (template) => {
  const newElement = document.createElement('div');
  newElement.innerHTML = template;

  return newElement.firstElementChild;
};

/**
 * Вставляют компонент в контейнер в указаном месте
 * @param {Component} component
 * @param {HTMLElement} container
 * @param {RenderPosition} place
 */
const render = (component, container, place = RenderPosition.BEFOREEND) => {
  const element = component.getElement();

  switch (place) {
    case RenderPosition.BEFOREBEGIN:
      container.before(element);
      break;
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
    case RenderPosition.AFTEREND:
      container.after(element);
      break;
  }
};

export {RenderPosition, createElement, render};
