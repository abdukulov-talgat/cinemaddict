import { getRandomDescription, getRandomItem, NAMES, generateRandomDate } from '../utils/mock-utils';


const EMOJIES = [
  'angry',
  'puke',
  'sleeping',
  'smile',
];

function generateComments(commentsIDs) {
  const comments = commentsIDs.slice();

  return comments.map((it) => {
    return {
      id: it,
      name: getRandomItem(NAMES),
      pic: getRandomItem(EMOJIES),
      text: getRandomDescription(1, 3),
      commentDate: generateRandomDate(),
    };
  });
}

function getComments(commentsIDs) {
  return generateComments(commentsIDs);
}

export { getComments };
