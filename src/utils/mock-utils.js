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

export { getRandomInteger, getRandomItem, getRandomFloat, shuffle, getRandomItems };
